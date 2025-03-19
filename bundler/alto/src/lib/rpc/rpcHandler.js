"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcHandler = void 0;
const types_1 = require("../types/index.js");
const utils_1 = require("../utils/index.js");
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
class RpcHandler {
    config;
    validator;
    mempool;
    executor;
    monitor;
    nonceQueuer;
    logger;
    metrics;
    executorManager;
    reputationManager;
    gasPriceManager;
    eventManager;
    constructor({ config, validator, mempool, executor, monitor, nonceQueuer, executorManager, reputationManager, metrics, gasPriceManager, eventManager }) {
        this.config = config;
        this.validator = validator;
        this.mempool = mempool;
        this.executor = executor;
        this.monitor = monitor;
        this.nonceQueuer = nonceQueuer;
        this.logger = config.getLogger({ module: "rpc" }, {
            level: config.rpcLogLevel || config.logLevel
        });
        this.metrics = metrics;
        this.executorManager = executorManager;
        this.reputationManager = reputationManager;
        this.gasPriceManager = gasPriceManager;
        this.eventManager = eventManager;
    }
    async handleMethod(request, apiVersion) {
        // call the method with the params
        const method = request.method;
        switch (method) {
            case "eth_chainId":
                return {
                    method,
                    result: this.eth_chainId(...request.params)
                };
            case "eth_supportedEntryPoints":
                return {
                    method,
                    result: this.eth_supportedEntryPoints(...request.params)
                };
            case "eth_estimateUserOperationGas":
                return {
                    method,
                    result: await this.eth_estimateUserOperationGas(apiVersion, request.params[0], request.params[1], request.params[2])
                };
            case "eth_sendUserOperation":
                return {
                    method,
                    result: await this.eth_sendUserOperation(apiVersion, ...request.params)
                };
            case "eth_getUserOperationByHash":
                return {
                    method,
                    result: await this.eth_getUserOperationByHash(...request.params)
                };
            case "eth_getUserOperationReceipt":
                return {
                    method,
                    result: await this.eth_getUserOperationReceipt(...request.params)
                };
            case "debug_bundler_clearMempool":
                return {
                    method,
                    result: this.debug_bundler_clearMempool(...request.params)
                };
            case "debug_bundler_clearState":
                return {
                    method,
                    result: this.debug_bundler_clearState(...request.params)
                };
            case "debug_bundler_dumpMempool":
                return {
                    method,
                    result: await this.debug_bundler_dumpMempool(...request.params)
                };
            case "debug_bundler_sendBundleNow":
                return {
                    method,
                    result: await this.debug_bundler_sendBundleNow(...request.params)
                };
            case "debug_bundler_setBundlingMode":
                return {
                    method,
                    result: await this.debug_bundler_setBundlingMode(...request.params)
                };
            case "debug_bundler_setReputation":
                return {
                    method,
                    result: this.debug_bundler_setReputation(request.params)
                };
            case "debug_bundler_dumpReputation":
                return {
                    method,
                    result: this.debug_bundler_dumpReputation(...request.params)
                };
            case "debug_bundler_getStakeStatus":
                return {
                    method,
                    result: await this.debug_bundler_getStakeStatus(...request.params)
                };
            case "pimlico_getUserOperationStatus":
                return {
                    method,
                    result: this.pimlico_getUserOperationStatus(...request.params)
                };
            case "pimlico_getUserOperationGasPrice":
                return {
                    method,
                    result: await this.pimlico_getUserOperationGasPrice(...request.params)
                };
            case "pimlico_sendUserOperationNow":
                return {
                    method,
                    result: await this.pimlico_sendUserOperationNow(apiVersion, ...request.params)
                };
            case "pimlico_experimental_sendUserOperation7702":
                return {
                    method,
                    result: await this.pimlico_experimental_sendUserOperation7702(apiVersion, ...request.params)
                };
            case "pimlico_experimental_estimateUserOperationGas7702":
                return {
                    method,
                    result: await this.pimlico_experimental_estimateUserOperationGas7702(apiVersion, request.params[0], request.params[1], request.params[2], request.params[3])
                };
        }
    }
    ensureEntryPointIsSupported(entryPoint) {
        if (!this.config.entrypoints.includes(entryPoint)) {
            throw new Error(`EntryPoint ${entryPoint} not supported, supported EntryPoints: ${this.config.entrypoints.join(", ")}`);
        }
    }
    ensureDebugEndpointsAreEnabled(methodName) {
        if (!this.config.enableDebugEndpoints) {
            throw new types_1.RpcError(`${methodName} is only available in development environment`);
        }
    }
    async preMempoolChecks(opHash, userOperation, apiVersion, entryPoint) {
        if (this.config.legacyTransactions &&
            userOperation.maxFeePerGas !== userOperation.maxPriorityFeePerGas) {
            const reason = "maxPriorityFeePerGas must equal maxFeePerGas on chains that don't support EIP-1559";
            this.eventManager.emitFailedValidation(opHash, reason);
            throw new types_1.RpcError(reason);
        }
        if (apiVersion !== "v1") {
            await this.gasPriceManager.validateGasPrice({
                maxFeePerGas: userOperation.maxFeePerGas,
                maxPriorityFeePerGas: userOperation.maxPriorityFeePerGas
            });
        }
        if (userOperation.verificationGasLimit < 10000n) {
            const reason = "verificationGasLimit must be at least 10000";
            this.eventManager.emitFailedValidation(opHash, reason);
            throw new types_1.RpcError(reason);
        }
        this.logger.trace({ userOperation, entryPoint }, "beginning validation");
        if (userOperation.preVerificationGas === 0n ||
            userOperation.verificationGasLimit === 0n) {
            const reason = "user operation gas limits must be larger than 0";
            this.eventManager.emitFailedValidation(opHash, reason);
            throw new types_1.RpcError(reason);
        }
        if ((0, utils_1.isVersion07)(userOperation)) {
            const gasLimits = userOperation.callGasLimit +
                userOperation.verificationGasLimit +
                (userOperation.paymasterPostOpGasLimit ?? 0n) +
                (userOperation.paymasterVerificationGasLimit ?? 0n);
            if (gasLimits > this.config.maxGasPerBundle) {
                throw new types_1.RpcError(`User operation gas limits exceed the max gas per bundle: ${gasLimits} > ${this.config.maxGasPerBundle}`);
            }
        }
        if ((0, utils_1.isVersion06)(userOperation)) {
            const gasLimits = userOperation.callGasLimit + userOperation.verificationGasLimit;
            const maxGasPerBundle = (this.config.maxGasPerBundle * 130n) / 100n;
            if (gasLimits > maxGasPerBundle) {
                throw new types_1.RpcError(`User operation gas limits exceed the max gas per bundle: ${gasLimits} > ${this.config.maxGasPerBundle}`);
            }
        }
    }
    eth_chainId() {
        return BigInt(this.config.publicClient.chain.id);
    }
    eth_supportedEntryPoints() {
        return this.config.entrypoints;
    }
    async eth_estimateUserOperationGas(apiVersion, userOperation, entryPoint, stateOverrides) {
        return await this.estimateGas({
            apiVersion,
            userOperation,
            entryPoint,
            stateOverrides
        });
    }
    async eth_sendUserOperation(apiVersion, userOperation, entryPoint) {
        const hash = (0, utils_1.getUserOperationHash)(userOperation, entryPoint, this.config.publicClient.chain.id);
        this.eventManager.emitReceived(hash);
        let status = "rejected";
        try {
            status = await this.addToMempoolIfValid(userOperation, entryPoint, apiVersion);
            return hash;
        }
        catch (error) {
            status = "rejected";
            throw error;
        }
        finally {
            this.metrics.userOperationsReceived
                .labels({
                status,
                type: "regular"
            })
                .inc();
        }
    }
    async eth_getUserOperationByHash(userOperationHash) {
        const userOperationEventAbiItem = (0, viem_1.getAbiItem)({
            abi: types_1.EntryPointV06Abi,
            name: "UserOperationEvent"
        });
        let fromBlock;
        let toBlock;
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
        if (filterResult.length === 0) {
            return null;
        }
        const userOperationEvent = filterResult[0];
        const txHash = userOperationEvent.transactionHash;
        if (txHash === null) {
            // transaction pending
            return null;
        }
        const getTransaction = async (txHash) => {
            try {
                return await this.config.publicClient.getTransaction({
                    hash: txHash
                });
            }
            catch (e) {
                if (e instanceof viem_1.TransactionNotFoundError) {
                    return getTransaction(txHash);
                }
                throw e;
            }
        };
        const tx = await getTransaction(txHash);
        if (!tx.to) {
            return null;
        }
        let op;
        try {
            const decoded = (0, viem_1.decodeFunctionData)({
                abi: [...types_1.EntryPointV06Abi, ...types_1.EntryPointV07Abi],
                data: tx.input
            });
            if (decoded.functionName !== "handleOps") {
                return null;
            }
            const ops = decoded.args[0];
            const foundOp = ops.find((op) => op.sender === userOperationEvent.args.sender &&
                op.nonce === userOperationEvent.args.nonce);
            if (foundOp === undefined) {
                return null;
            }
            const handleOpsV07AbiItem = (0, viem_1.getAbiItem)({
                abi: types_1.EntryPointV07Abi,
                name: "handleOps"
            });
            const handleOpsV07Selector = (0, viem_1.toFunctionSelector)(handleOpsV07AbiItem);
            if ((0, viem_1.slice)(tx.input, 0, 4) === handleOpsV07Selector) {
                op = (0, utils_1.toUnpackedUserOperation)(foundOp);
            }
            else {
                op = foundOp;
            }
        }
        catch {
            return null;
        }
        const result = {
            userOperation: op,
            entryPoint: (0, viem_1.getAddress)(tx.to),
            transactionHash: txHash,
            blockHash: tx.blockHash ?? "0x",
            blockNumber: BigInt(tx.blockNumber ?? 0n)
        };
        return result;
    }
    eth_getUserOperationReceipt(userOperationHash) {
        return this.executorManager.getUserOperationReceipt(userOperationHash);
    }
    debug_bundler_clearState() {
        this.ensureDebugEndpointsAreEnabled("debug_bundler_clearState");
        this.mempool.clear();
        this.reputationManager.clear();
        return "ok";
    }
    debug_bundler_clearMempool() {
        this.ensureDebugEndpointsAreEnabled("debug_bundler_clearMempool");
        this.mempool.clear();
        this.reputationManager.clearEntityCount();
        return "ok";
    }
    async debug_bundler_dumpMempool(entryPoint) {
        this.ensureDebugEndpointsAreEnabled("debug_bundler_dumpMempool");
        this.ensureEntryPointIsSupported(entryPoint);
        return this.mempool
            .dumpOutstanding()
            .map((userOpInfo) => (0, types_1.deriveUserOperation)(userOpInfo.mempoolUserOperation));
    }
    async debug_bundler_sendBundleNow() {
        this.ensureDebugEndpointsAreEnabled("debug_bundler_sendBundleNow");
        const transactions = await this.executorManager.bundleNow();
        return transactions[0];
    }
    async debug_bundler_setBundlingMode(bundlingMode) {
        this.ensureDebugEndpointsAreEnabled("debug_bundler_setBundlingMode");
        await this.executorManager.setBundlingMode(bundlingMode);
        return "ok";
    }
    debug_bundler_dumpReputation(entryPoint) {
        this.ensureDebugEndpointsAreEnabled("debug_bundler_setReputation");
        this.ensureEntryPointIsSupported(entryPoint);
        return this.reputationManager.dumpReputations(entryPoint);
    }
    async debug_bundler_getStakeStatus(address, entryPoint) {
        this.ensureDebugEndpointsAreEnabled("debug_bundler_getStakeStatus");
        this.ensureEntryPointIsSupported(entryPoint);
        return types_1.bundlerGetStakeStatusResponseSchema.parse({
            method: "debug_bundler_getStakeStatus",
            result: await this.reputationManager.getStakeStatus(entryPoint, address)
        }).result;
    }
    debug_bundler_setReputation(args) {
        this.ensureDebugEndpointsAreEnabled("debug_bundler_setReputation");
        this.reputationManager.setReputation(args[1], args[0]);
        return "ok";
    }
    pimlico_getUserOperationStatus(userOperationHash) {
        return this.monitor.getUserOperationStatus(userOperationHash);
    }
    async pimlico_getUserOperationGasPrice() {
        let { maxFeePerGas, maxPriorityFeePerGas } = await this.gasPriceManager.getGasPrice();
        if (this.config.chainType === "hedera") {
            maxFeePerGas /= 10n ** 9n;
            maxPriorityFeePerGas /= 10n ** 9n;
        }
        const { slow, standard, fast } = this.config.gasPriceMultipliers;
        return {
            slow: {
                maxFeePerGas: (maxFeePerGas * slow) / 100n,
                maxPriorityFeePerGas: (maxPriorityFeePerGas * slow) / 100n
            },
            standard: {
                maxFeePerGas: (maxFeePerGas * standard) / 100n,
                maxPriorityFeePerGas: (maxPriorityFeePerGas * standard) / 100n
            },
            fast: {
                maxFeePerGas: (maxFeePerGas * fast) / 100n,
                maxPriorityFeePerGas: (maxPriorityFeePerGas * fast) / 100n
            }
        };
    }
    // check if we want to bundle userOperation. If yes, add to mempool
    async addToMempoolIfValid(op, entryPoint, apiVersion) {
        this.ensureEntryPointIsSupported(entryPoint);
        const userOperation = (0, types_1.deriveUserOperation)(op);
        const opHash = (0, utils_1.getUserOperationHash)(userOperation, entryPoint, this.config.publicClient.chain.id);
        await this.preMempoolChecks(opHash, userOperation, apiVersion, entryPoint);
        const currentNonceValue = await this.getNonceValue(userOperation, entryPoint);
        const [, userOperationNonceValue] = (0, utils_1.getNonceKeyAndValue)(userOperation.nonce);
        if (userOperationNonceValue < currentNonceValue) {
            const reason = "UserOperation failed validation with reason: AA25 invalid account nonce";
            this.eventManager.emitFailedValidation(opHash, reason, "AA25");
            throw new types_1.RpcError(reason, types_1.ValidationErrors.InvalidFields);
        }
        if (userOperationNonceValue > currentNonceValue + 10n) {
            const reason = "UserOperation failed validaiton with reason: AA25 invalid account nonce";
            this.eventManager.emitFailedValidation(opHash, reason, "AA25");
            throw new types_1.RpcError(reason, types_1.ValidationErrors.InvalidFields);
        }
        let queuedUserOperations = [];
        if (userOperationNonceValue > currentNonceValue &&
            (0, utils_1.isVersion07)(userOperation)) {
            queuedUserOperations = await this.mempool.getQueuedUserOperations(userOperation, entryPoint, currentNonceValue);
        }
        if (userOperationNonceValue >
            currentNonceValue + BigInt(queuedUserOperations.length)) {
            this.nonceQueuer.add(op, entryPoint);
            return "queued";
        }
        if (this.config.dangerousSkipUserOperationValidation) {
            const [success, errorReason] = this.mempool.add(op, entryPoint);
            if (!success) {
                this.eventManager.emitFailedValidation(opHash, errorReason, (0, utils_1.getAAError)(errorReason));
                throw new types_1.RpcError(errorReason, types_1.ValidationErrors.InvalidFields);
            }
            return "added";
        }
        if (apiVersion !== "v1") {
            await this.validator.validatePreVerificationGas({
                userOperation,
                entryPoint
            });
        }
        let authorizationList;
        if ((0, types_1.is7702Type)(op)) {
            authorizationList = [op.authorization];
        }
        const validationResult = await this.validator.validateUserOperation({
            shouldCheckPrefund: apiVersion !== "v1",
            userOperation,
            queuedUserOperations,
            entryPoint,
            authorizationList
        });
        await this.reputationManager.checkReputation(userOperation, entryPoint, validationResult);
        await this.mempool.checkEntityMultipleRoleViolation(userOperation);
        const [success, errorReason] = this.mempool.add(op, entryPoint, validationResult.referencedContracts);
        if (!success) {
            this.eventManager.emitFailedValidation(opHash, errorReason, (0, utils_1.getAAError)(errorReason));
            throw new types_1.RpcError(errorReason, types_1.ValidationErrors.InvalidFields);
        }
        return "added";
    }
    async pimlico_experimental_estimateUserOperationGas7702(apiVersion, userOperation, entryPoint, authorization, stateOverrides) {
        if (!this.config.enableExperimental7702Endpoints) {
            throw new types_1.RpcError("pimlico_experimental_estimateUserOperationGas7702 endpoint is not enabled", types_1.ValidationErrors.InvalidFields);
        }
        return await this.estimateGas({
            apiVersion,
            userOperation,
            authorization,
            entryPoint,
            stateOverrides
        });
    }
    async pimlico_experimental_sendUserOperation7702(apiVersion, userOperation, entryPoint, authorizationSignature) {
        if (!this.config.enableExperimental7702Endpoints) {
            throw new types_1.RpcError("pimlico_experimental_sendUserOperation7702 endpoint is not enabled", types_1.ValidationErrors.InvalidFields);
        }
        this.ensureEntryPointIsSupported(entryPoint);
        try {
            await this.addToMempoolIfValid({
                userOperation,
                authorization: authorizationSignature
            }, entryPoint, apiVersion);
        }
        catch (e) {
            this.logger.error(e);
        }
        return (0, utils_1.getUserOperationHash)(userOperation, entryPoint, this.config.publicClient.chain.id);
    }
    async pimlico_sendUserOperationNow(apiVersion, userOperation, entryPoint) {
        console.time("sendUserOpTotal");
        if (!this.config.enableInstantBundlingEndpoint) {
            throw new types_1.RpcError("pimlico_sendUserOperationNow endpoint is not enabled", types_1.ValidationErrors.InvalidFields);
        }
        console.time("ensureEntryPointIsSupported");
        this.ensureEntryPointIsSupported(entryPoint);
        console.timeEnd("ensureEntryPointIsSupported");
        console.time("getUserOperationHash");
        const opHash = (0, utils_1.getUserOperationHash)(userOperation, entryPoint, this.config.publicClient.chain.id);
        console.timeEnd("getUserOperationHash");
        console.time("preMempoolChecks");
        await this.preMempoolChecks(opHash, userOperation, apiVersion, entryPoint);
        console.timeEnd("preMempoolChecks");
        console.time("bundle");
        const result = (await this.executor.bundle(entryPoint, [userOperation]))[0];
        console.timeEnd("bundle");
        if (result.status === "failure") {
            const { userOpHash, reason } = result.error;
            this.monitor.setUserOperationStatus(userOpHash, {
                status: "rejected",
                transactionHash: null
            });
            this.logger.warn({
                userOperation: JSON.stringify(result.error.userOperation, (_k, v) => (typeof v === "bigint" ? v.toString() : v)),
                userOpHash,
                reason
            }, "user operation rejected");
            this.metrics.userOperationsSubmitted
                .labels({ status: "failed" })
                .inc();
            const { error } = result;
            throw new types_1.RpcError(`userOperation reverted during simulation with reason: ${error.reason}`);
        }
        const res = result;
        console.time("markWalletProcessed");
        this.executor.markWalletProcessed(res.value.transactionInfo.executor);
        console.timeEnd("markWalletProcessed");
        // wait for receipt
        console.time("waitForTransactionReceipt");
        const receipt = await this.config.publicClient.waitForTransactionReceipt({
            hash: res.value.transactionInfo.transactionHash,
            pollingInterval: 100
        });
        console.timeEnd("waitForTransactionReceipt");
        console.time("parseUserOperationReceipt");
        const userOperationReceipt = (0, utils_1.parseUserOperationReceipt)(opHash, receipt);
        console.timeEnd("parseUserOperationReceipt");
        console.timeEnd("sendUserOpTotal");
        console.log("\n");
        return userOperationReceipt;
    }
    async getNonceValue(userOperation, entryPoint) {
        const entryPointContract = (0, viem_1.getContract)({
            address: entryPoint,
            abi: (0, utils_1.isVersion06)(userOperation)
                ? types_1.EntryPointV06Abi
                : types_1.EntryPointV07Abi,
            client: {
                public: this.config.publicClient
            }
        });
        const [nonceKey] = (0, utils_1.getNonceKeyAndValue)(userOperation.nonce);
        const getNonceResult = await entryPointContract.read.getNonce([userOperation.sender, nonceKey], {
            blockTag: "latest"
        });
        const [_, currentNonceValue] = (0, utils_1.getNonceKeyAndValue)(getNonceResult);
        return currentNonceValue;
    }
    async estimateGas({ apiVersion, userOperation, entryPoint, stateOverrides, authorization }) {
        this.ensureEntryPointIsSupported(entryPoint);
        if (userOperation.maxFeePerGas === 0n) {
            throw new types_1.RpcError("user operation max fee per gas must be larger than 0 during gas estimation");
        }
        // Check if the nonce is valid
        // If the nonce is less than the current nonce, the user operation has already been executed
        // If the nonce is greater than the current nonce, we may have missing user operations in the mempool
        const currentNonceValue = await this.getNonceValue(userOperation, entryPoint);
        const [, userOperationNonceValue] = (0, utils_1.getNonceKeyAndValue)(userOperation.nonce);
        let queuedUserOperations = [];
        if (userOperationNonceValue < currentNonceValue) {
            throw new types_1.RpcError("UserOperation reverted during simulation with reason: AA25 invalid account nonce", types_1.ValidationErrors.InvalidFields);
        }
        if (userOperationNonceValue > currentNonceValue) {
            // Nonce queues are supported only for v7 user operations
            if ((0, utils_1.isVersion06)(userOperation)) {
                throw new types_1.RpcError("UserOperation reverted during simulation with reason: AA25 invalid account nonce", types_1.ValidationErrors.InvalidFields);
            }
            queuedUserOperations = await this.mempool.getQueuedUserOperations(userOperation, entryPoint, currentNonceValue);
            if (userOperationNonceValue >
                currentNonceValue + BigInt(queuedUserOperations.length)) {
                throw new types_1.RpcError("UserOperation reverted during simulation with reason: AA25 invalid account nonce", types_1.ValidationErrors.InvalidFields);
            }
        }
        // Prepare userOperation for simulation
        const { simulationVerificationGasLimit, simulationCallGasLimit, simulationPaymasterVerificationGasLimit, simulationPaymasterPostOpGasLimit } = this.config;
        const simulationUserOperation = {
            ...userOperation,
            preVerificationGas: 0n,
            verificationGasLimit: simulationVerificationGasLimit,
            callGasLimit: simulationCallGasLimit
        };
        if ((0, utils_1.isVersion07)(simulationUserOperation)) {
            simulationUserOperation.paymasterVerificationGasLimit =
                simulationPaymasterVerificationGasLimit;
            simulationUserOperation.paymasterPostOpGasLimit =
                simulationPaymasterPostOpGasLimit;
        }
        // This is necessary because entryPoint pays
        // min(maxFeePerGas, baseFee + maxPriorityFeePerGas) for the verification
        // Since we don't want our estimations to depend upon baseFee, we set
        // maxFeePerGas to maxPriorityFeePerGas
        simulationUserOperation.maxPriorityFeePerGas =
            simulationUserOperation.maxFeePerGas;
        const executionResult = await this.validator.getExecutionResult({
            userOperation: simulationUserOperation,
            entryPoint,
            queuedUserOperations,
            addSenderBalanceOverride: true,
            stateOverrides: (0, utils_1.deepHexlify)(stateOverrides),
            authorizationList: authorization ? [authorization] : undefined
        });
        let { verificationGasLimit, callGasLimit, paymasterVerificationGasLimit } = (0, utils_1.calcVerificationGasAndCallGasLimit)(simulationUserOperation, executionResult.data.executionResult, this.config.publicClient.chain.id, executionResult.data);
        let paymasterPostOpGasLimit = 0n;
        if (!paymasterVerificationGasLimit &&
            (0, utils_1.isVersion07)(simulationUserOperation) &&
            simulationUserOperation.paymaster !== null &&
            "paymasterVerificationGasLimit" in
                executionResult.data.executionResult) {
            paymasterVerificationGasLimit =
                executionResult.data.executionResult
                    .paymasterVerificationGasLimit || 1n;
            paymasterVerificationGasLimit = (0, utils_1.scaleBigIntByPercent)(paymasterVerificationGasLimit, this.config.paymasterGasLimitMultiplier);
        }
        if ((0, utils_1.isVersion07)(simulationUserOperation) &&
            simulationUserOperation.paymaster !== null &&
            "paymasterPostOpGasLimit" in executionResult.data.executionResult) {
            paymasterPostOpGasLimit =
                executionResult.data.executionResult.paymasterPostOpGasLimit ||
                    1n;
            paymasterPostOpGasLimit = (0, utils_1.scaleBigIntByPercent)(paymasterPostOpGasLimit, this.config.paymasterGasLimitMultiplier);
        }
        if (this.config.publicClient.chain.id === chains_1.base.id ||
            this.config.publicClient.chain.id === chains_1.baseSepolia.id) {
            callGasLimit += 10000n;
        }
        if (this.config.publicClient.chain.id === chains_1.base.id ||
            this.config.publicClient.chain.id === chains_1.optimism.id) {
            callGasLimit = (0, utils_1.maxBigInt)(callGasLimit, 120000n);
        }
        if (simulationUserOperation.callData === "0x") {
            callGasLimit = 0n;
        }
        if ((0, utils_1.isVersion06)(simulationUserOperation)) {
            callGasLimit = (0, utils_1.scaleBigIntByPercent)(callGasLimit, this.config.v6CallGasLimitMultiplier);
        }
        if ((0, utils_1.isVersion07)(simulationUserOperation)) {
            verificationGasLimit = (0, utils_1.scaleBigIntByPercent)(verificationGasLimit, this.config.v7VerificationGasLimitMultiplier);
            paymasterVerificationGasLimit = (0, utils_1.scaleBigIntByPercent)(paymasterVerificationGasLimit, this.config.v7PaymasterVerificationGasLimitMultiplier);
            callGasLimit = (0, utils_1.scaleBigIntByPercent)(callGasLimit, this.config.v7CallGasLimitMultiplier);
        }
        let preVerificationGas = await (0, utils_1.calcPreVerificationGas)({
            config: this.config,
            userOperation: {
                ...userOperation,
                callGasLimit, // use actual callGasLimit
                verificationGasLimit, // use actual verificationGasLimit
                paymasterPostOpGasLimit, // use actual paymasterPostOpGasLimit
                paymasterVerificationGasLimit // use actual paymasterVerificationGasLimit
            },
            entryPoint,
            gasPriceManager: this.gasPriceManager,
            validate: false
        });
        preVerificationGas = (0, utils_1.scaleBigIntByPercent)(preVerificationGas, 110n);
        // Check if userOperation passes without estimation balance overrides
        if ((0, utils_1.isVersion06)(simulationUserOperation)) {
            await this.validator.getExecutionResult({
                userOperation: {
                    ...simulationUserOperation,
                    preVerificationGas,
                    verificationGasLimit,
                    callGasLimit,
                    paymasterVerificationGasLimit,
                    paymasterPostOpGasLimit
                },
                entryPoint,
                queuedUserOperations,
                addSenderBalanceOverride: false,
                stateOverrides: (0, utils_1.deepHexlify)(stateOverrides),
                authorizationList: authorization ? [authorization] : undefined
            });
        }
        if ((0, utils_1.isVersion07)(simulationUserOperation)) {
            return {
                preVerificationGas,
                verificationGasLimit,
                callGasLimit,
                paymasterVerificationGasLimit,
                paymasterPostOpGasLimit
            };
        }
        if (apiVersion === "v2") {
            return {
                preVerificationGas,
                verificationGasLimit,
                callGasLimit
            };
        }
        return {
            preVerificationGas,
            verificationGas: verificationGasLimit,
            verificationGasLimit,
            callGasLimit
        };
    }
}
exports.RpcHandler = RpcHandler;
//# sourceMappingURL=rpcHandler.js.map