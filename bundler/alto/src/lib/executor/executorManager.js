"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutorManager = void 0;
const types_1 = require("../types/index.js");
const utils_1 = require("../utils/index.js");
const viem_1 = require("viem");
function getTransactionsFromUserOperationEntries(entries) {
    return Array.from(new Set(entries.map((entry) => {
        return entry.transactionInfo;
    })));
}
const MIN_INTERVAL = 100; // 0.1 seconds (100ms)
const MAX_INTERVAL = 1000; // Capped at 1 second (1000ms)
const SCALE_FACTOR = 10; // Interval increases by 5ms per task per minute
const RPM_WINDOW = 60000; // 1 minute window in ms
class ExecutorManager {
    config;
    executor;
    mempool;
    monitor;
    logger;
    metrics;
    reputationManager;
    unWatch;
    currentlyHandlingBlock = false;
    gasPriceManager;
    eventManager;
    opsCount = [];
    bundlingMode;
    constructor({ config, executor, mempool, monitor, reputationManager, metrics, gasPriceManager, eventManager }) {
        this.config = config;
        this.reputationManager = reputationManager;
        this.executor = executor;
        this.mempool = mempool;
        this.monitor = monitor;
        this.logger = config.getLogger({ module: "executor_manager" }, {
            level: config.executorLogLevel || config.logLevel
        });
        this.metrics = metrics;
        this.gasPriceManager = gasPriceManager;
        this.eventManager = eventManager;
        this.bundlingMode = this.config.bundleMode;
        if (this.bundlingMode === "auto") {
            this.autoScalingBundling();
        }
    }
    async setBundlingMode(bundleMode) {
        this.bundlingMode = bundleMode;
        if (bundleMode === "manual") {
            await new Promise((resolve) => setTimeout(resolve, 2 * MAX_INTERVAL));
        }
        if (bundleMode === "auto") {
            this.autoScalingBundling();
        }
    }
    async autoScalingBundling() {
        const now = Date.now();
        this.opsCount = this.opsCount.filter((timestamp) => now - timestamp < RPM_WINDOW);
        const opsToBundle = await this.getOpsToBundle();
        if (opsToBundle.length > 0) {
            const opsCount = opsToBundle.length;
            const timestamp = Date.now();
            this.opsCount.push(...Array(opsCount).fill(timestamp)); // Add timestamps for each task
            await this.bundle(opsToBundle);
        }
        const rpm = this.opsCount.length;
        // Calculate next interval with linear scaling
        const nextInterval = Math.min(MIN_INTERVAL + rpm * SCALE_FACTOR, // Linear scaling
        MAX_INTERVAL // Cap at 1000ms
        );
        if (this.bundlingMode === "auto") {
            setTimeout(this.autoScalingBundling.bind(this), nextInterval);
        }
    }
    async getOpsToBundle() {
        const opsToBundle = [];
        while (true) {
            const ops = await this.mempool.process(this.config.maxGasPerBundle, 1);
            if (ops?.length > 0) {
                opsToBundle.push(ops);
            }
            else {
                break;
            }
        }
        if (opsToBundle.length === 0) {
            return [];
        }
        return opsToBundle;
    }
    async bundleNow() {
        const ops = await this.mempool.process(this.config.maxGasPerBundle, 1);
        if (ops.length === 0) {
            throw new Error("no ops to bundle");
        }
        const opEntryPointMap = new Map();
        for (const op of ops) {
            if (!opEntryPointMap.has(op.entryPoint)) {
                opEntryPointMap.set(op.entryPoint, []);
            }
            opEntryPointMap.get(op.entryPoint)?.push(op.mempoolUserOperation);
        }
        const txHashes = [];
        await Promise.all(this.config.entrypoints.map(async (entryPoint) => {
            const ops = opEntryPointMap.get(entryPoint);
            if (ops) {
                const txHash = await this.sendToExecutor(entryPoint, ops);
                if (!txHash) {
                    throw new Error("no tx hash");
                }
                txHashes.push(txHash);
            }
            else {
                this.logger.warn({ entryPoint }, "no user operations for entry point");
            }
        }));
        return txHashes;
    }
    async sendToExecutor(entryPoint, mempoolOps) {
        const ops = mempoolOps.map((op) => op);
        const bundles = [];
        if (ops.length > 0) {
            bundles.push(await this.executor.bundle(entryPoint, ops));
        }
        for (const bundle of bundles) {
            const isBundleSuccess = bundle.every((result) => result.status === "success");
            const isBundleResubmit = bundle.every((result) => result.status === "resubmit");
            const isBundleFailed = bundle.every((result) => result.status === "failure");
            if (isBundleSuccess) {
                this.metrics.bundlesSubmitted
                    .labels({ status: "success" })
                    .inc();
            }
            if (isBundleResubmit) {
                this.metrics.bundlesSubmitted
                    .labels({ status: "resubmit" })
                    .inc();
            }
            if (isBundleFailed) {
                this.metrics.bundlesSubmitted.labels({ status: "failed" }).inc();
            }
        }
        const results = bundles.flat();
        const filteredOutOps = mempoolOps.length - results.length;
        if (filteredOutOps > 0) {
            this.logger.debug({ filteredOutOps }, "user operations filtered out");
            this.metrics.userOperationsSubmitted
                .labels({ status: "filtered" })
                .inc(filteredOutOps);
        }
        let txHash = undefined;
        for (const result of results) {
            if (result.status === "success") {
                const res = result.value;
                this.mempool.markSubmitted(res.userOperation.userOperationHash, res.transactionInfo);
                this.monitor.setUserOperationStatus(res.userOperation.userOperationHash, {
                    status: "submitted",
                    transactionHash: res.transactionInfo.transactionHash
                });
                txHash = res.transactionInfo.transactionHash;
                this.startWatchingBlocks(this.handleBlock.bind(this));
                this.metrics.userOperationsSubmitted
                    .labels({ status: "success" })
                    .inc();
            }
            if (result.status === "failure") {
                const { userOpHash, reason } = result.error;
                this.mempool.removeProcessing(userOpHash);
                this.eventManager.emitDropped(userOpHash, reason, (0, utils_1.getAAError)(reason));
                this.monitor.setUserOperationStatus(userOpHash, {
                    status: "rejected",
                    transactionHash: null
                });
                this.logger.warn({
                    userOperation: JSON.stringify(result.error.userOperation, (_k, v) => typeof v === "bigint" ? v.toString() : v),
                    userOpHash,
                    reason
                }, "user operation rejected");
                this.metrics.userOperationsSubmitted
                    .labels({ status: "failed" })
                    .inc();
            }
            if (result.status === "resubmit") {
                this.logger.info({
                    userOpHash: result.info.userOpHash,
                    reason: result.info.reason
                }, "resubmitting user operation");
                this.mempool.removeProcessing(result.info.userOpHash);
                this.mempool.add(result.info.userOperation, result.info.entryPoint);
                this.metrics.userOperationsResubmitted.inc();
            }
        }
        return txHash;
    }
    async bundle(opsToBundle = []) {
        await Promise.all(opsToBundle.map(async (ops) => {
            const opEntryPointMap = new Map();
            for (const op of ops) {
                if (!opEntryPointMap.has(op.entryPoint)) {
                    opEntryPointMap.set(op.entryPoint, []);
                }
                opEntryPointMap
                    .get(op.entryPoint)
                    ?.push(op.mempoolUserOperation);
            }
            await Promise.all(this.config.entrypoints.map(async (entryPoint) => {
                const userOperations = opEntryPointMap.get(entryPoint);
                if (userOperations) {
                    await this.sendToExecutor(entryPoint, userOperations);
                }
                else {
                    this.logger.warn({ entryPoint }, "no user operations for entry point");
                }
            }));
        }));
    }
    startWatchingBlocks(handleBlock) {
        if (this.unWatch) {
            return;
        }
        this.unWatch = this.config.publicClient.watchBlocks({
            onBlock: handleBlock,
            // onBlock: async (block) => {
            //     // Use an arrow function to ensure correct binding of `this`
            //     this.checkAndReplaceTransactions(block)
            //         .then(() => {
            //             this.logger.trace("block handled")
            //             // Handle the resolution of the promise here, if needed
            //         })
            //         .catch((error) => {
            //             // Handle any errors that occur during the execution of the promise
            //             this.logger.error({ error }, "error while handling block")
            //         })
            // },
            onError: (error) => {
                this.logger.error({ error }, "error while watching blocks");
            },
            emitMissed: false,
            includeTransactions: false,
            pollingInterval: this.config.pollingInterval
        });
        this.logger.debug("started watching blocks");
    }
    stopWatchingBlocks() {
        if (this.unWatch) {
            this.logger.debug("stopped watching blocks");
            this.unWatch();
            this.unWatch = undefined;
        }
    }
    // update the current status of the bundling transaction/s
    async refreshTransactionStatus(entryPoint, transactionInfo) {
        const { transactionHash: currentTransactionHash, userOperationInfos: opInfos, previousTransactionHashes, isVersion06 } = transactionInfo;
        const txHashesToCheck = [
            currentTransactionHash,
            ...previousTransactionHashes
        ];
        const transactionDetails = await Promise.all(txHashesToCheck.map(async (transactionHash) => ({
            transactionHash,
            ...(await (0, utils_1.getBundleStatus)(isVersion06, transactionHash, this.config.publicClient, this.logger, entryPoint))
        })));
        // first check if bundling txs returns status "mined", if not, check for reverted
        const mined = transactionDetails.find(({ bundlingStatus }) => bundlingStatus.status === "included");
        const reverted = transactionDetails.find(({ bundlingStatus }) => bundlingStatus.status === "reverted");
        const finalizedTransaction = mined ?? reverted;
        if (!finalizedTransaction) {
            for (const { userOperationHash } of opInfos) {
                this.logger.trace({
                    userOperationHash,
                    currentTransactionHash
                }, "user op still pending");
            }
            return;
        }
        const { bundlingStatus, transactionHash, blockNumber } = finalizedTransaction;
        if (bundlingStatus.status === "included") {
            this.metrics.userOperationsOnChain
                .labels({ status: bundlingStatus.status })
                .inc(opInfos.length);
            const { userOperationDetails } = bundlingStatus;
            opInfos.map((opInfo) => {
                const { mempoolUserOperation: mUserOperation, userOperationHash: userOpHash, entryPoint, firstSubmitted } = opInfo;
                const opDetails = userOperationDetails[userOpHash];
                this.metrics.userOperationInclusionDuration.observe((Date.now() - firstSubmitted) / 1000);
                this.mempool.removeSubmitted(userOpHash);
                this.reputationManager.updateUserOperationIncludedStatus((0, types_1.deriveUserOperation)(mUserOperation), entryPoint, opDetails.accountDeployed);
                if (opDetails.status === "succesful") {
                    this.eventManager.emitIncludedOnChain(userOpHash, transactionHash, blockNumber);
                }
                else {
                    this.eventManager.emitExecutionRevertedOnChain(userOpHash, transactionHash, opDetails.revertReason || "0x", blockNumber);
                }
                this.monitor.setUserOperationStatus(userOpHash, {
                    status: "included",
                    transactionHash
                });
                this.logger.info({
                    userOpHash,
                    transactionHash
                }, "user op included");
            });
            this.executor.markWalletProcessed(transactionInfo.executor);
        }
        else if (bundlingStatus.status === "reverted" &&
            bundlingStatus.isAA95) {
            // resubmit with more gas when bundler encounters AA95
            transactionInfo.transactionRequest.gas = (0, utils_1.scaleBigIntByPercent)(transactionInfo.transactionRequest.gas, this.config.aa95GasMultiplier);
            transactionInfo.transactionRequest.nonce += 1;
            await this.replaceTransaction(transactionInfo, "AA95");
        }
        else {
            await Promise.all(opInfos.map(({ userOperationHash }) => {
                this.checkFrontrun({
                    userOperationHash,
                    transactionHash,
                    blockNumber
                });
            }));
            opInfos.map(({ userOperationHash }) => {
                this.mempool.removeSubmitted(userOperationHash);
            });
            this.executor.markWalletProcessed(transactionInfo.executor);
        }
    }
    checkFrontrun({ userOperationHash, transactionHash, blockNumber }) {
        const unwatch = this.config.publicClient.watchBlockNumber({
            onBlockNumber: async (currentBlockNumber) => {
                if (currentBlockNumber > blockNumber + 1n) {
                    const userOperationReceipt = await this.getUserOperationReceipt(userOperationHash);
                    if (userOperationReceipt) {
                        const transactionHash = userOperationReceipt.receipt.transactionHash;
                        const blockNumber = userOperationReceipt.receipt.blockNumber;
                        this.monitor.setUserOperationStatus(userOperationHash, {
                            status: "included",
                            transactionHash
                        });
                        this.eventManager.emitFrontranOnChain(userOperationHash, transactionHash, blockNumber);
                        this.logger.info({
                            userOpHash: userOperationHash,
                            transactionHash
                        }, "user op frontrun onchain");
                        this.metrics.userOperationsOnChain
                            .labels({ status: "frontran" })
                            .inc(1);
                    }
                    else {
                        this.monitor.setUserOperationStatus(userOperationHash, {
                            status: "rejected",
                            transactionHash
                        });
                        this.eventManager.emitFailedOnChain(userOperationHash, transactionHash, blockNumber);
                        this.logger.info({
                            userOpHash: userOperationHash,
                            transactionHash
                        }, "user op failed onchain");
                        this.metrics.userOperationsOnChain
                            .labels({ status: "reverted" })
                            .inc(1);
                    }
                    unwatch();
                }
            }
        });
    }
    async getUserOperationReceipt(userOperationHash) {
        const userOperationEventAbiItem = (0, viem_1.getAbiItem)({
            abi: types_1.EntryPointV06Abi,
            name: "UserOperationEvent"
        });
        let fromBlock = undefined;
        let toBlock = undefined;
        if (this.config.maxBlockRange !== undefined) {
            const latestBlock = await this.config.publicClient.getBlockNumber();
            fromBlock = latestBlock - BigInt(this.config.maxBlockRange);
            if (fromBlock < 0n) {
                fromBlock = 0n;
            }
            toBlock = "latest";
        }
        const filterResult = await this.config.publicClient.getLogs({
            address: this.config.entrypoints,
            event: userOperationEventAbiItem,
            fromBlock,
            toBlock,
            args: {
                userOpHash: userOperationHash
            }
        });
        this.logger.debug({
            filterResult: filterResult.length,
            userOperationEvent: filterResult.length === 0
                ? undefined
                : filterResult[0].transactionHash
        }, "filter result length");
        if (filterResult.length === 0) {
            return null;
        }
        const userOperationEvent = filterResult[0];
        // throw if any of the members of userOperationEvent are undefined
        if (userOperationEvent.args.actualGasCost === undefined ||
            userOperationEvent.args.sender === undefined ||
            userOperationEvent.args.nonce === undefined ||
            userOperationEvent.args.userOpHash === undefined ||
            userOperationEvent.args.success === undefined ||
            userOperationEvent.args.paymaster === undefined ||
            userOperationEvent.args.actualGasUsed === undefined) {
            throw new Error("userOperationEvent has undefined members");
        }
        const txHash = userOperationEvent.transactionHash;
        if (txHash === null) {
            // transaction pending
            return null;
        }
        const getTransactionReceipt = async (txHash) => {
            while (true) {
                try {
                    const transactionReceipt = await this.config.publicClient.getTransactionReceipt({
                        hash: txHash
                    });
                    let effectiveGasPrice = transactionReceipt.effectiveGasPrice ??
                        transactionReceipt.gasPrice ??
                        undefined;
                    if (effectiveGasPrice === undefined) {
                        const tx = await this.config.publicClient.getTransaction({
                            hash: txHash
                        });
                        effectiveGasPrice = tx.gasPrice ?? undefined;
                    }
                    if (effectiveGasPrice) {
                        transactionReceipt.effectiveGasPrice = effectiveGasPrice;
                    }
                    return transactionReceipt;
                }
                catch (e) {
                    if (e instanceof viem_1.TransactionReceiptNotFoundError) {
                        continue;
                    }
                    throw e;
                }
            }
        };
        const receipt = await getTransactionReceipt(txHash);
        const logs = receipt.logs;
        if (logs.some((log) => log.blockHash === null ||
            log.blockNumber === null ||
            log.transactionIndex === null ||
            log.transactionHash === null ||
            log.logIndex === null ||
            log.topics.length === 0)) {
            // transaction pending
            return null;
        }
        const userOperationReceipt = (0, utils_1.parseUserOperationReceipt)(userOperationHash, receipt);
        return userOperationReceipt;
    }
    async refreshUserOperationStatuses() {
        const ops = this.mempool.dumpSubmittedOps();
        const opEntryPointMap = new Map();
        for (const op of ops) {
            if (!opEntryPointMap.has(op.userOperation.entryPoint)) {
                opEntryPointMap.set(op.userOperation.entryPoint, []);
            }
            opEntryPointMap.get(op.userOperation.entryPoint)?.push(op);
        }
        await Promise.all(this.config.entrypoints.map(async (entryPoint) => {
            const ops = opEntryPointMap.get(entryPoint);
            if (ops) {
                const txs = getTransactionsFromUserOperationEntries(ops);
                await Promise.all(txs.map(async (txInfo) => {
                    await this.refreshTransactionStatus(entryPoint, txInfo);
                }));
            }
            else {
                this.logger.warn({ entryPoint }, "no user operations for entry point");
            }
        }));
    }
    async handleBlock(block) {
        if (this.currentlyHandlingBlock) {
            return;
        }
        this.currentlyHandlingBlock = true;
        this.logger.debug({ blockNumber: block.number }, "handling block");
        const submittedEntries = this.mempool.dumpSubmittedOps();
        if (submittedEntries.length === 0) {
            this.stopWatchingBlocks();
            this.currentlyHandlingBlock = false;
            return;
        }
        // refresh op statuses
        await this.refreshUserOperationStatuses();
        // for all still not included check if needs to be replaced (based on gas price)
        const gasPriceParameters = await this.gasPriceManager.tryGetNetworkGasPrice();
        this.logger.trace({ gasPriceParameters }, "fetched gas price parameters");
        const transactionInfos = getTransactionsFromUserOperationEntries(this.mempool.dumpSubmittedOps());
        await Promise.all(transactionInfos.map(async (txInfo) => {
            if (txInfo.transactionRequest.maxFeePerGas >=
                gasPriceParameters.maxFeePerGas &&
                txInfo.transactionRequest.maxPriorityFeePerGas >=
                    gasPriceParameters.maxPriorityFeePerGas) {
                return;
            }
            await this.replaceTransaction(txInfo, "gas_price");
        }));
        // for any left check if enough time has passed, if so replace
        const transactionInfos2 = getTransactionsFromUserOperationEntries(this.mempool.dumpSubmittedOps());
        await Promise.all(transactionInfos2.map(async (txInfo) => {
            if (Date.now() - txInfo.lastReplaced < 5 * 60 * 1000) {
                return;
            }
            await this.replaceTransaction(txInfo, "stuck");
        }));
        this.currentlyHandlingBlock = false;
    }
    async replaceTransaction(txInfo, reason) {
        let replaceResult = undefined;
        try {
            replaceResult = await this.executor.replaceTransaction(txInfo);
        }
        finally {
            this.metrics.replacedTransactions
                .labels({ reason, status: replaceResult?.status || "failed" })
                .inc();
        }
        if (replaceResult.status === "failed") {
            txInfo.userOperationInfos.map((opInfo) => {
                const userOperation = (0, types_1.deriveUserOperation)(opInfo.mempoolUserOperation);
                this.eventManager.emitDropped(opInfo.userOperationHash, "Failed to replace transaction");
                this.logger.warn({
                    userOperation: JSON.stringify(userOperation, (_k, v) => typeof v === "bigint" ? v.toString() : v),
                    userOpHash: opInfo.userOperationHash,
                    reason
                }, "user operation rejected");
                this.mempool.removeSubmitted(opInfo.userOperationHash);
            });
            this.logger.warn({ oldTxHash: txInfo.transactionHash, reason }, "failed to replace transaction");
            return;
        }
        if (replaceResult.status === "potentially_already_included") {
            this.logger.info({ oldTxHash: txInfo.transactionHash, reason }, "transaction potentially already included");
            txInfo.timesPotentiallyIncluded += 1;
            if (txInfo.timesPotentiallyIncluded >= 3) {
                txInfo.userOperationInfos.map((opInfo) => {
                    this.mempool.removeSubmitted(opInfo.userOperationHash);
                });
                this.executor.markWalletProcessed(txInfo.executor);
                this.logger.warn({ oldTxHash: txInfo.transactionHash, reason }, "transaction potentially already included too many times, removing");
            }
            return;
        }
        const newTxInfo = replaceResult.transactionInfo;
        const missingOps = txInfo.userOperationInfos.filter((info) => !newTxInfo.userOperationInfos
            .map((ni) => ni.userOperationHash)
            .includes(info.userOperationHash));
        const matchingOps = txInfo.userOperationInfos.filter((info) => newTxInfo.userOperationInfos
            .map((ni) => ni.userOperationHash)
            .includes(info.userOperationHash));
        matchingOps.map((opInfo) => {
            this.mempool.replaceSubmitted(opInfo, newTxInfo);
        });
        missingOps.map((opInfo) => {
            this.mempool.removeSubmitted(opInfo.userOperationHash);
            this.logger.warn({
                oldTxHash: txInfo.transactionHash,
                newTxHash: newTxInfo.transactionHash,
                reason
            }, "missing op in new tx");
        });
        this.logger.info({
            oldTxHash: txInfo.transactionHash,
            newTxHash: newTxInfo.transactionHash,
            reason
        }, "replaced transaction");
        return;
    }
}
exports.ExecutorManager = ExecutorManager;
//# sourceMappingURL=executorManager.js.map