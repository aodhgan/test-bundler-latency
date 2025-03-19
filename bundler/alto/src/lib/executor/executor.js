"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executor = void 0;
const types_1 = require("../types/index.js");
const utils_1 = require("../utils/index.js");
const sentry = __importStar(require("@sentry/node"));
const async_mutex_1 = require("async-mutex");
const viem_1 = require("viem");
const utils_2 = require("./utils.js");
class Executor {
    // private unWatch: WatchBlocksReturnType | undefined
    config;
    senderManager;
    logger;
    metrics;
    reputationManager;
    gasPriceManager;
    mutex;
    mempool;
    eventManager;
    constructor({ config, mempool, senderManager, reputationManager, metrics, gasPriceManager, eventManager }) {
        this.config = config;
        this.mempool = mempool;
        this.senderManager = senderManager;
        this.reputationManager = reputationManager;
        this.logger = config.getLogger({ module: "executor" }, {
            level: config.executorLogLevel || config.logLevel
        });
        this.metrics = metrics;
        this.gasPriceManager = gasPriceManager;
        this.eventManager = eventManager;
        this.mutex = new async_mutex_1.Mutex();
    }
    cancelOps(_entryPoint, _ops) {
        throw new Error("Method not implemented.");
    }
    markWalletProcessed(executor) {
        if (!this.senderManager.availableWallets.includes(executor)) {
            this.senderManager.pushWallet(executor);
        }
        return Promise.resolve();
    }
    async replaceTransaction(transactionInfo) {
        const newRequest = { ...transactionInfo.transactionRequest };
        let gasPriceParameters;
        try {
            gasPriceParameters =
                await this.gasPriceManager.tryGetNetworkGasPrice();
        }
        catch (err) {
            this.logger.error({ error: err }, "Failed to get network gas price");
            this.markWalletProcessed(transactionInfo.executor);
            return { status: "failed" };
        }
        newRequest.maxFeePerGas = (0, utils_1.maxBigInt)(gasPriceParameters.maxFeePerGas, (newRequest.maxFeePerGas * 11n + 9n) / 10n);
        newRequest.maxPriorityFeePerGas = (0, utils_1.maxBigInt)(gasPriceParameters.maxPriorityFeePerGas, (newRequest.maxPriorityFeePerGas * 11n + 9n) / 10n);
        newRequest.account = transactionInfo.executor;
        const opsWithHashes = transactionInfo.userOperationInfos.map((opInfo) => {
            const op = (0, types_1.deriveUserOperation)(opInfo.mempoolUserOperation);
            return {
                mempoolUserOperation: opInfo.mempoolUserOperation,
                userOperationHash: (0, utils_1.getUserOperationHash)(op, transactionInfo.entryPoint, this.config.walletClient.chain.id),
                entryPoint: opInfo.entryPoint
            };
        });
        const [isUserOpVersion06, entryPoint] = opsWithHashes.reduce((acc, op) => {
            if (acc[0] !==
                (0, utils_1.isVersion06)(op.mempoolUserOperation) ||
                acc[1] !== op.entryPoint) {
                throw new Error("All user operations must be of the same version");
            }
            return acc;
        }, [
            (0, utils_1.isVersion06)(opsWithHashes[0].mempoolUserOperation),
            opsWithHashes[0].entryPoint
        ]);
        const ep = (0, viem_1.getContract)({
            abi: isUserOpVersion06 ? types_1.EntryPointV06Abi : types_1.EntryPointV07Abi,
            address: entryPoint,
            client: {
                public: this.config.publicClient,
                wallet: this.config.walletClient
            }
        });
        let { simulatedOps, gasLimit } = await (0, utils_2.filterOpsAndEstimateGas)(transactionInfo.entryPoint, ep, transactionInfo.executor, opsWithHashes, newRequest.nonce, newRequest.maxFeePerGas, newRequest.maxPriorityFeePerGas, this.config.blockTagSupport ? "latest" : undefined, this.config.legacyTransactions, this.config.fixedGasLimitForEstimation, this.reputationManager, this.logger);
        const childLogger = this.logger.child({
            transactionHash: transactionInfo.transactionHash,
            executor: transactionInfo.executor.address
        });
        if (simulatedOps.length === 0) {
            childLogger.warn("no ops to bundle");
            this.markWalletProcessed(transactionInfo.executor);
            return { status: "failed" };
        }
        if (simulatedOps.every((op) => op.reason === "AA25 invalid account nonce" ||
            op.reason === "AA10 sender already constructed")) {
            childLogger.trace({ reasons: simulatedOps.map((sop) => sop.reason) }, "all ops failed simulation with nonce error");
            return { status: "potentially_already_included" };
        }
        if (simulatedOps.every((op) => op.reason !== undefined)) {
            childLogger.warn("all ops failed simulation");
            this.markWalletProcessed(transactionInfo.executor);
            return { status: "failed" };
        }
        const opsToBundle = simulatedOps
            .filter((op) => op.reason === undefined)
            .map((op) => {
            const opInfo = transactionInfo.userOperationInfos.find((info) => info.userOperationHash === op.owh.userOperationHash);
            if (!opInfo) {
                throw new Error("opInfo not found");
            }
            return opInfo;
        });
        if (this.config.localGasLimitCalculation) {
            gasLimit = opsToBundle.reduce((acc, opInfo) => {
                const userOperation = (0, types_1.deriveUserOperation)(opInfo.mempoolUserOperation);
                return (acc +
                    userOperation.preVerificationGas +
                    3n * userOperation.verificationGasLimit +
                    userOperation.callGasLimit);
            }, 0n);
        }
        // https://github.com/eth-infinitism/account-abstraction/blob/fa61290d37d079e928d92d53a122efcc63822214/contracts/core/EntryPoint.sol#L236
        let innerHandleOpFloor = 0n;
        for (const owh of opsToBundle) {
            const op = (0, types_1.deriveUserOperation)(owh.mempoolUserOperation);
            innerHandleOpFloor +=
                op.callGasLimit + op.verificationGasLimit + 5000n;
        }
        if (gasLimit < innerHandleOpFloor) {
            gasLimit += innerHandleOpFloor;
        }
        // sometimes the estimation rounds down, adding a fixed constant accounts for this
        gasLimit += 10000n;
        // ensures that we don't submit again with too low of a gas value
        newRequest.gas = (0, utils_1.maxBigInt)(newRequest.gas, gasLimit);
        // update calldata to include only ops that pass simulation
        let txParam;
        const userOps = opsToBundle.map((op) => isUserOpVersion06
            ? op.mempoolUserOperation
            : (0, utils_1.toPackedUserOperation)(op.mempoolUserOperation));
        txParam = {
            isUserOpVersion06,
            ops: userOps,
            entryPoint: transactionInfo.entryPoint
        };
        try {
            childLogger.info({
                newRequest: {
                    ...newRequest,
                    abi: undefined,
                    chain: undefined
                },
                executor: newRequest.account.address,
                opsToBundle: opsToBundle.map((opInfo) => opInfo.userOperationHash)
            }, "replacing transaction");
            const txHash = await this.sendHandleOpsTransaction({
                txParam,
                opts: this.config.legacyTransactions
                    ? {
                        account: newRequest.account,
                        gasPrice: newRequest.maxFeePerGas,
                        gas: newRequest.gas,
                        nonce: newRequest.nonce
                    }
                    : {
                        account: newRequest.account,
                        maxFeePerGas: newRequest.maxFeePerGas,
                        maxPriorityFeePerGas: newRequest.maxPriorityFeePerGas,
                        gas: newRequest.gas,
                        nonce: newRequest.nonce
                    }
            });
            opsToBundle.map(({ entryPoint, mempoolUserOperation }) => {
                const op = (0, types_1.deriveUserOperation)(mempoolUserOperation);
                const chainId = this.config.publicClient.chain?.id;
                const opHash = (0, utils_1.getUserOperationHash)(op, entryPoint, chainId);
                this.eventManager.emitSubmitted(opHash, txHash);
            });
            const newTxInfo = {
                ...transactionInfo,
                transactionRequest: newRequest,
                transactionHash: txHash,
                previousTransactionHashes: [
                    transactionInfo.transactionHash,
                    ...transactionInfo.previousTransactionHashes
                ],
                lastReplaced: Date.now(),
                userOperationInfos: opsToBundle.map((opInfo) => {
                    return {
                        entryPoint: opInfo.entryPoint,
                        mempoolUserOperation: opInfo.mempoolUserOperation,
                        userOperationHash: opInfo.userOperationHash,
                        lastReplaced: Date.now(),
                        firstSubmitted: opInfo.firstSubmitted
                    };
                })
            };
            return {
                status: "replaced",
                transactionInfo: newTxInfo
            };
        }
        catch (err) {
            const e = (0, utils_1.parseViemError)(err);
            if (!e) {
                sentry.captureException(err);
                childLogger.error({ error: err }, "unknown error replacing transaction");
            }
            if (e instanceof viem_1.NonceTooLowError) {
                childLogger.trace({ error: e }, "nonce too low, potentially already included");
                return { status: "potentially_already_included" };
            }
            if (e instanceof viem_1.FeeCapTooLowError) {
                childLogger.warn({ error: e }, "fee cap too low, not replacing");
            }
            if (e instanceof viem_1.InsufficientFundsError) {
                childLogger.warn({ error: e }, "insufficient funds, not replacing");
            }
            if (e instanceof viem_1.IntrinsicGasTooLowError) {
                childLogger.warn({ error: e }, "intrinsic gas too low, not replacing");
            }
            childLogger.warn({ error: e }, "error replacing transaction");
            this.markWalletProcessed(transactionInfo.executor);
            return { status: "failed" };
        }
    }
    async flushStuckTransactions() {
        const allWallets = new Set(this.senderManager.wallets);
        const utilityWallet = this.senderManager.utilityAccount;
        if (utilityWallet) {
            allWallets.add(utilityWallet);
        }
        const wallets = Array.from(allWallets);
        const gasPrice = await this.gasPriceManager.tryGetNetworkGasPrice();
        const promises = wallets.map((wallet) => {
            try {
                (0, utils_2.flushStuckTransaction)(this.config.publicClient, this.config.walletClient, wallet, gasPrice.maxFeePerGas * 5n, this.logger);
            }
            catch (e) {
                this.logger.error({ error: e }, "error flushing stuck transaction");
            }
        });
        await Promise.all(promises);
    }
    async sendHandleOpsTransaction({ txParam, opts }) {
        let data;
        let to;
        const { isUserOpVersion06, ops, entryPoint } = txParam;
        data = (0, viem_1.encodeFunctionData)({
            abi: isUserOpVersion06 ? types_1.EntryPointV06Abi : types_1.EntryPointV07Abi,
            functionName: "handleOps",
            args: [ops, opts.account.address]
        });
        to = entryPoint;
        const request = await this.config.walletClient.prepareTransactionRequest({
            to,
            data,
            ...opts
        });
        request.gas = (0, utils_1.scaleBigIntByPercent)(request.gas, this.config.executorGasMultiplier);
        let isTransactionUnderPriced = false;
        let attempts = 0;
        let transactionHash;
        const maxAttempts = 3;
        // Try sending the transaction and updating relevant fields if there is an error.
        while (attempts < maxAttempts) {
            try {
                transactionHash =
                    await this.config.walletClient.sendTransaction(request);
                break;
            }
            catch (e) {
                isTransactionUnderPriced = false;
                let isErrorHandled = false;
                if (e instanceof viem_1.BaseError) {
                    if ((0, utils_2.isTransactionUnderpricedError)(e)) {
                        this.logger.warn("Transaction underpriced, retrying");
                        request.maxFeePerGas = (0, utils_1.scaleBigIntByPercent)(request.maxFeePerGas, 150n);
                        request.maxPriorityFeePerGas = (0, utils_1.scaleBigIntByPercent)(request.maxPriorityFeePerGas, 150n);
                        isErrorHandled = true;
                        isTransactionUnderPriced = true;
                    }
                }
                const error = e;
                if (error instanceof viem_1.TransactionExecutionError) {
                    const cause = error.cause;
                    if (cause instanceof viem_1.NonceTooLowError ||
                        cause instanceof viem_1.NonceTooHighError) {
                        this.logger.warn("Nonce too low, retrying");
                        request.nonce =
                            await this.config.publicClient.getTransactionCount({
                                address: request.from,
                                blockTag: "pending"
                            });
                        isErrorHandled = true;
                    }
                    if (cause instanceof viem_1.IntrinsicGasTooLowError) {
                        this.logger.warn("Intrinsic gas too low, retrying");
                        request.gas = (0, utils_1.scaleBigIntByPercent)(request.gas, 150n);
                        isErrorHandled = true;
                    }
                    // This is thrown by OP-Stack chains that use proxyd.
                    // ref: https://github.com/ethereum-optimism/optimism/issues/2618#issuecomment-1630272888
                    if (cause.details?.includes("no backends available")) {
                        this.logger.warn("no backends avaiable error, retrying after 500ms");
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        isErrorHandled = true;
                    }
                }
                if (attempts === maxAttempts || !isErrorHandled) {
                    throw error;
                }
                attempts++;
            }
        }
        if (isTransactionUnderPriced) {
            await this.handleTransactionUnderPriced({
                nonce: request.nonce,
                executor: request.account
            });
        }
        // needed for TS
        if (!transactionHash) {
            throw new Error("Transaction hash not assigned");
        }
        return transactionHash;
    }
    // Occurs when tx was sent with conflicting nonce, we want to resubmit all conflicting ops
    async handleTransactionUnderPriced({ nonce, executor }) {
        const submitted = this.mempool.dumpSubmittedOps();
        const conflictingOps = submitted
            .filter((submitted) => {
            const tx = submitted.transactionInfo;
            return (tx.executor.address === executor.address &&
                tx.transactionRequest.nonce === nonce);
        })
            .map(({ userOperation }) => userOperation);
        conflictingOps.map((op) => {
            this.logger.info(`Resubmitting ${op.userOperationHash} due to transaction underpriced`);
            this.mempool.removeSubmitted(op.userOperationHash);
            this.mempool.add(op.mempoolUserOperation, op.entryPoint);
        });
        if (conflictingOps.length > 0) {
            this.markWalletProcessed(executor);
        }
    }
    async bundle(entryPoint, ops) {
        const wallet = await this.senderManager.getWallet();
        const opsWithHashes = ops.map((op) => {
            return {
                mempoolUserOperation: op,
                userOperationHash: (0, utils_1.getUserOperationHash)((0, types_1.deriveUserOperation)(op), entryPoint, this.config.walletClient.chain.id)
            };
        });
        const isUserOpVersion06 = opsWithHashes.reduce((acc, op) => {
            if (acc !==
                (0, utils_1.isVersion06)(op.mempoolUserOperation)) {
                throw new Error("All user operations must be of the same version");
            }
            return acc;
        }, (0, utils_1.isVersion06)(opsWithHashes[0].mempoolUserOperation));
        const ep = (0, viem_1.getContract)({
            abi: isUserOpVersion06 ? types_1.EntryPointV06Abi : types_1.EntryPointV07Abi,
            address: entryPoint,
            client: {
                public: this.config.publicClient,
                wallet: this.config.walletClient
            }
        });
        let childLogger = this.logger.child({
            userOperations: opsWithHashes.map((oh) => oh.userOperationHash),
            entryPoint
        });
        childLogger.debug("bundling user operation");
        // These calls can throw, so we try/catch them to mark wallet as processed in event of error.
        let nonce;
        let gasPriceParameters;
        try {
            ;
            [gasPriceParameters, nonce] = await Promise.all([
                this.gasPriceManager.tryGetNetworkGasPrice(),
                this.config.publicClient.getTransactionCount({
                    address: wallet.address,
                    blockTag: "pending"
                })
            ]);
        }
        catch (err) {
            childLogger.error({ error: err }, "Failed to get parameters for bundling");
            this.markWalletProcessed(wallet);
            return opsWithHashes.map((owh) => {
                return {
                    status: "resubmit",
                    info: {
                        entryPoint,
                        userOpHash: owh.userOperationHash,
                        userOperation: owh.mempoolUserOperation,
                        reason: "Failed to get parameters for bundling"
                    }
                };
            });
        }
        let { gasLimit, simulatedOps } = await (0, utils_2.filterOpsAndEstimateGas)(entryPoint, ep, wallet, opsWithHashes, nonce, gasPriceParameters.maxFeePerGas, gasPriceParameters.maxPriorityFeePerGas, this.config.blockTagSupport ? "pending" : undefined, this.config.legacyTransactions, this.config.fixedGasLimitForEstimation, this.reputationManager, childLogger, (0, utils_2.getAuthorizationList)(opsWithHashes.map(({ mempoolUserOperation }) => mempoolUserOperation)));
        if (simulatedOps.length === 0) {
            childLogger.error("gas limit simulation encountered unexpected failure");
            this.markWalletProcessed(wallet);
            return opsWithHashes.map(({ userOperationHash, mempoolUserOperation }) => {
                return {
                    status: "failure",
                    error: {
                        entryPoint,
                        userOpHash: userOperationHash,
                        userOperation: mempoolUserOperation,
                        reason: "INTERNAL FAILURE"
                    }
                };
            });
        }
        if (simulatedOps.every((op) => op.reason !== undefined)) {
            childLogger.warn("all ops failed simulation");
            this.markWalletProcessed(wallet);
            return simulatedOps.map(({ reason, owh }) => {
                return {
                    status: "failure",
                    error: {
                        entryPoint,
                        userOpHash: owh.userOperationHash,
                        userOperation: owh.mempoolUserOperation,
                        reason: reason
                    }
                };
            });
        }
        const opsWithHashToBundle = simulatedOps
            .filter((op) => op.reason === undefined)
            .map((op) => op.owh);
        childLogger = this.logger.child({
            userOperations: opsWithHashToBundle.map((owh) => owh.userOperationHash),
            entryPoint
        });
        // https://github.com/eth-infinitism/account-abstraction/blob/fa61290d37d079e928d92d53a122efcc63822214/contracts/core/EntryPoint.sol#L236
        let innerHandleOpFloor = 0n;
        let totalBeneficiaryFees = 0n;
        for (const owh of opsWithHashToBundle) {
            const op = (0, types_1.deriveUserOperation)(owh.mempoolUserOperation);
            innerHandleOpFloor +=
                op.callGasLimit + op.verificationGasLimit + 5000n;
            totalBeneficiaryFees += (0, utils_1.getRequiredPrefund)(op);
        }
        if (gasLimit < innerHandleOpFloor) {
            gasLimit += innerHandleOpFloor;
        }
        // sometimes the estimation rounds down, adding a fixed constant accounts for this
        gasLimit += 10000n;
        childLogger.debug({ gasLimit }, "got gas limit");
        let transactionHash;
        try {
            const isLegacyTransaction = this.config.legacyTransactions;
            if (this.config.noProfitBundling) {
                const gasPrice = totalBeneficiaryFees / gasLimit;
                if (isLegacyTransaction) {
                    gasPriceParameters.maxFeePerGas = gasPrice;
                    gasPriceParameters.maxPriorityFeePerGas = gasPrice;
                }
                else {
                    gasPriceParameters.maxFeePerGas = (0, utils_1.maxBigInt)(gasPrice, gasPriceParameters.maxFeePerGas || 0n);
                }
            }
            const authorizationList = (0, utils_2.getAuthorizationList)(opsWithHashToBundle.map(({ mempoolUserOperation }) => mempoolUserOperation));
            let opts;
            if (isLegacyTransaction) {
                opts = {
                    type: "legacy",
                    gasPrice: gasPriceParameters.maxFeePerGas,
                    account: wallet,
                    gas: gasLimit,
                    nonce
                };
            }
            else if (authorizationList) {
                opts = {
                    type: "eip7702",
                    maxFeePerGas: gasPriceParameters.maxFeePerGas,
                    maxPriorityFeePerGas: gasPriceParameters.maxPriorityFeePerGas,
                    account: wallet,
                    gas: gasLimit,
                    nonce,
                    authorizationList
                };
            }
            else {
                opts = {
                    type: "eip1559",
                    maxFeePerGas: gasPriceParameters.maxFeePerGas,
                    maxPriorityFeePerGas: gasPriceParameters.maxPriorityFeePerGas,
                    account: wallet,
                    gas: gasLimit,
                    nonce
                };
            }
            const userOps = opsWithHashToBundle.map(({ mempoolUserOperation }) => {
                const op = (0, types_1.deriveUserOperation)(mempoolUserOperation);
                if (isUserOpVersion06) {
                    return op;
                }
                return (0, utils_1.toPackedUserOperation)(op);
            });
            transactionHash = await this.sendHandleOpsTransaction({
                txParam: {
                    ops: userOps,
                    isUserOpVersion06,
                    entryPoint
                },
                opts
            });
            opsWithHashToBundle.map(({ userOperationHash }) => {
                this.eventManager.emitSubmitted(userOperationHash, transactionHash);
            });
        }
        catch (err) {
            const e = (0, utils_1.parseViemError)(err);
            if (e instanceof viem_1.InsufficientFundsError) {
                childLogger.error({ error: e }, "insufficient funds, not submitting transaction");
                this.markWalletProcessed(wallet);
                return opsWithHashToBundle.map((owh) => {
                    return {
                        status: "resubmit",
                        info: {
                            entryPoint,
                            userOpHash: owh.userOperationHash,
                            userOperation: owh.mempoolUserOperation,
                            reason: viem_1.InsufficientFundsError.name
                        }
                    };
                });
            }
            sentry.captureException(err);
            childLogger.error({ error: JSON.stringify(err) }, "error submitting bundle transaction");
            this.markWalletProcessed(wallet);
            return opsWithHashes.map((owh) => {
                return {
                    status: "failure",
                    error: {
                        entryPoint,
                        userOpHash: owh.userOperationHash,
                        userOperation: owh.mempoolUserOperation,
                        reason: "INTERNAL FAILURE"
                    }
                };
            });
        }
        const userOperationInfos = opsWithHashToBundle.map((op) => {
            return {
                entryPoint,
                mempoolUserOperation: op.mempoolUserOperation,
                userOperationHash: op.userOperationHash,
                lastReplaced: Date.now(),
                firstSubmitted: Date.now()
            };
        });
        const transactionInfo = {
            entryPoint,
            isVersion06: isUserOpVersion06,
            transactionHash: transactionHash,
            previousTransactionHashes: [],
            transactionRequest: {
                account: wallet,
                to: ep.address,
                gas: gasLimit,
                chain: this.config.walletClient.chain,
                maxFeePerGas: gasPriceParameters.maxFeePerGas,
                maxPriorityFeePerGas: gasPriceParameters.maxPriorityFeePerGas,
                nonce: nonce
            },
            executor: wallet,
            userOperationInfos,
            lastReplaced: Date.now(),
            firstSubmitted: Date.now(),
            timesPotentiallyIncluded: 0
        };
        const userOperationResults = (0, utils_2.simulatedOpsToResults)(simulatedOps, transactionInfo);
        childLogger.info({
            transactionRequest: {
                ...transactionInfo.transactionRequest,
                abi: undefined
            },
            txHash: transactionHash,
            opHashes: opsWithHashToBundle.map((owh) => owh.userOperationHash)
        }, "submitted bundle transaction");
        return userOperationResults;
    }
}
exports.Executor = Executor;
//# sourceMappingURL=executor.js.map