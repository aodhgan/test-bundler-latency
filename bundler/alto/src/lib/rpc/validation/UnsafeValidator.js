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
exports.UnsafeValidator = void 0;
const types_1 = require("../../types/index.js");
const utils_1 = require("../../utils/index.js");
const sentry = __importStar(require("@sentry/node"));
const viem_1 = require("viem");
const zod_validation_error_1 = require("zod-validation-error");
const gasEstimationHandler_1 = require("../estimation/gasEstimationHandler.js");
class UnsafeValidator {
    config;
    metrics;
    gasPriceManager;
    logger;
    gasEstimationHandler;
    constructor({ config, metrics, gasPriceManager }) {
        this.config = config;
        this.metrics = metrics;
        this.gasPriceManager = gasPriceManager;
        this.logger = config.getLogger({ module: "validator" }, {
            level: config.logLevel
        });
        this.gasEstimationHandler = new gasEstimationHandler_1.GasEstimationHandler(config);
    }
    async getSimulationResult(isVersion06, errorResult, logger, simulationType, usingTenderly = false) {
        const entryPointExecutionErrorSchema = isVersion06
            ? types_1.entryPointExecutionErrorSchemaV06
            : types_1.entryPointExecutionErrorSchemaV07;
        const entryPointErrorSchemaParsing = usingTenderly
            ? types_1.entryPointErrorsSchema.safeParse(errorResult)
            : entryPointExecutionErrorSchema.safeParse(errorResult);
        if (!entryPointErrorSchemaParsing.success) {
            try {
                const err = (0, zod_validation_error_1.fromZodError)(entryPointErrorSchemaParsing.error);
                logger.error({ error: err.message }, "unexpected error during valiation");
                logger.error(JSON.stringify(errorResult));
                err.message = `User Operation simulation returned unexpected invalid response: ${err.message}`;
                throw err;
            }
            catch {
                if (errorResult instanceof viem_1.BaseError) {
                    const revertError = errorResult.walk((err) => err instanceof viem_1.ContractFunctionExecutionError);
                    throw new types_1.RpcError(`UserOperation reverted during simulation with reason: ${
                    // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
                    revertError?.cause?.reason}`, types_1.ValidationErrors.SimulateValidation);
                }
                sentry.captureException(errorResult);
                throw new Error(`User Operation simulation returned unexpected invalid response: ${JSON.stringify(errorResult)}`);
            }
        }
        const errorData = entryPointErrorSchemaParsing.data;
        if (errorData.errorName === "FailedOp") {
            const reason = errorData.args.reason;
            throw new types_1.RpcError(`UserOperation reverted during simulation with reason: ${reason}`, types_1.ValidationErrors.SimulateValidation);
        }
        if (simulationType === "validation") {
            if (errorData.errorName !== "ValidationResult" &&
                errorData.errorName !== "ValidationResultWithAggregation") {
                throw new Error("Unexpected error - errorName is not ValidationResult or ValidationResultWithAggregation");
            }
        }
        else if (errorData.errorName !== "ExecutionResult") {
            throw new Error("Unexpected error - errorName is not ExecutionResult");
        }
        const simulationResult = errorData.args;
        return simulationResult;
    }
    async getExecutionResult({ userOperation, entryPoint, queuedUserOperations, addSenderBalanceOverride, authorizationList, stateOverrides }) {
        const error = await this.gasEstimationHandler.simulateHandleOp({
            authorizationList,
            userOperation,
            queuedUserOperations,
            addSenderBalanceOverride,
            balanceOverrideEnabled: this.config.balanceOverride,
            entryPoint,
            targetAddress: viem_1.zeroAddress,
            targetCallData: "0x",
            stateOverrides
        });
        if (error.result === "failed") {
            throw new types_1.RpcError(`UserOperation reverted during simulation with reason: ${error.data}`, types_1.ExecutionErrors.UserOperationReverted);
        }
        return error;
    }
    async getValidationResultV06({ userOperation, entryPoint, authorizationList }) {
        const entryPointContract = (0, viem_1.getContract)({
            address: entryPoint,
            abi: types_1.EntryPointV06Abi,
            client: {
                public: this.config.publicClient
            }
        });
        const simulateValidationPromise = entryPointContract.simulate
            .simulateValidation([userOperation])
            .catch((e) => {
            if (e instanceof Error) {
                return e;
            }
            throw e;
        });
        const runtimeValidationPromise = this.gasEstimationHandler.gasEstimatorV06.simulateHandleOpV06({
            entryPoint,
            userOperation,
            useCodeOverride: false, // disable code override so that call phase reverts aren't caught
            targetAddress: viem_1.zeroAddress,
            authorizationList,
            targetCallData: "0x"
        });
        const [simulateValidationResult, runtimeValidation] = await Promise.all([simulateValidationPromise, runtimeValidationPromise]);
        const validationResult = {
            ...(await this.getSimulationResult((0, utils_1.isVersion06)(userOperation), simulateValidationResult, this.logger, "validation", this.config.tenderly)),
            storageMap: {}
        };
        if (validationResult.returnInfo.sigFailed) {
            throw new types_1.RpcError("Invalid UserOperation signature or paymaster signature", types_1.ValidationErrors.InvalidSignature);
        }
        const now = Date.now() / 1000;
        this.logger.debug({
            validAfter: validationResult.returnInfo.validAfter,
            validUntil: validationResult.returnInfo.validUntil,
            now
        });
        if (validationResult.returnInfo.validAfter > now &&
            this.config.expirationCheck) {
            throw new types_1.RpcError("User operation is not valid yet", types_1.ValidationErrors.ExpiresShortly);
        }
        if (validationResult.returnInfo.validUntil < now + 5 &&
            this.config.expirationCheck) {
            throw new types_1.RpcError("expires too soon", types_1.ValidationErrors.ExpiresShortly);
        }
        // validate runtime
        if (runtimeValidation.result === "failed") {
            throw new types_1.RpcError(`UserOperation reverted during simulation with reason: ${runtimeValidation.data}`, types_1.ValidationErrors.SimulateValidation);
        }
        return validationResult;
    }
    parseValidationData(validationData) {
        const maxUint48 = 2 ** 48 - 1;
        const data = (0, viem_1.pad)((0, viem_1.toHex)(validationData), { size: 32 });
        // string offsets start from left (msb)
        const aggregator = (0, viem_1.slice)(data, 32 - 20);
        let validUntil = Number.parseInt((0, viem_1.slice)(data, 32 - 26, 32 - 20), 16);
        if (validUntil === 0) {
            validUntil = maxUint48;
        }
        const validAfter = Number.parseInt((0, viem_1.slice)(data, 0, 6), 16);
        return {
            aggregator,
            validAfter,
            validUntil
        };
    }
    mergeValidationData(accountValidationData, paymasterValidationData) {
        return {
            paymasterSigFailed: paymasterValidationData.aggregator !== viem_1.zeroAddress,
            accountSigFailed: accountValidationData.aggregator !== viem_1.zeroAddress,
            validAfter: Math.max(accountValidationData.validAfter, paymasterValidationData.validAfter),
            validUntil: Math.min(accountValidationData.validUntil, paymasterValidationData.validUntil)
        };
    }
    mergeValidationDataValues(accountValidationData, paymasterValidationData) {
        return this.mergeValidationData(this.parseValidationData(accountValidationData), this.parseValidationData(paymasterValidationData));
    }
    async getValidationResultV07({ userOperation, queuedUserOperations, entryPoint, authorizationList }) {
        const { simulateValidationResult } = await this.gasEstimationHandler.gasEstimatorV07.simulateValidation({
            entryPoint,
            userOperation,
            queuedUserOperations,
            authorizationList
        });
        if (simulateValidationResult.status === "failed") {
            throw new types_1.RpcError(`UserOperation reverted with reason: ${simulateValidationResult.data}`, types_1.ValidationErrors.SimulateValidation);
        }
        const validationResult = simulateValidationResult.data;
        const mergedValidation = this.mergeValidationDataValues(validationResult.returnInfo.accountValidationData, validationResult.returnInfo.paymasterValidationData);
        const res = {
            returnInfo: {
                ...validationResult.returnInfo,
                accountSigFailed: mergedValidation.accountSigFailed,
                paymasterSigFailed: mergedValidation.paymasterSigFailed,
                validUntil: mergedValidation.validUntil,
                validAfter: mergedValidation.validAfter
            },
            senderInfo: {
                ...validationResult.senderInfo,
                addr: userOperation.sender
            },
            factoryInfo: userOperation.factory && validationResult.factoryInfo
                ? {
                    ...validationResult.factoryInfo,
                    addr: userOperation.factory
                }
                : undefined,
            paymasterInfo: userOperation.paymaster && validationResult.paymasterInfo
                ? {
                    ...validationResult.paymasterInfo,
                    addr: userOperation.paymaster
                }
                : undefined,
            aggregatorInfo: validationResult.aggregatorInfo,
            storageMap: {}
        };
        // this.validateStorageAccessList(userOperation, res, accessList)
        if (res.returnInfo.accountSigFailed) {
            throw new types_1.RpcError("Invalid UserOp signature", types_1.ValidationErrors.InvalidSignature);
        }
        if (res.returnInfo.paymasterSigFailed) {
            throw new types_1.RpcError("Invalid UserOp paymasterData", types_1.ValidationErrors.InvalidSignature);
        }
        const now = Math.floor(Date.now() / 1000);
        if (res.returnInfo.validAfter > now) {
            throw new types_1.RpcError(`User operation is not valid yet, validAfter=${res.returnInfo.validAfter}, now=${now}`, types_1.ValidationErrors.ExpiresShortly);
        }
        if (res.returnInfo.validUntil == null ||
            res.returnInfo.validUntil < now + 5) {
            throw new types_1.RpcError(`UserOperation expires too soon, validUntil=${res.returnInfo.validUntil}, now=${now}`, types_1.ValidationErrors.ExpiresShortly);
        }
        return res;
    }
    getValidationResult({ userOperation, queuedUserOperations, entryPoint, codeHashes, authorizationList }) {
        if ((0, utils_1.isVersion06)(userOperation)) {
            return this.getValidationResultV06({
                userOperation,
                entryPoint,
                codeHashes
            });
        }
        return this.getValidationResultV07({
            userOperation,
            queuedUserOperations: queuedUserOperations,
            entryPoint,
            authorizationList
        });
    }
    async validatePreVerificationGas({ userOperation, entryPoint }) {
        const preVerificationGas = await (0, utils_1.calcPreVerificationGas)({
            config: this.config,
            userOperation,
            entryPoint,
            gasPriceManager: this.gasPriceManager,
            validate: true
        });
        if (preVerificationGas > userOperation.preVerificationGas) {
            throw new types_1.RpcError(`preVerificationGas is not enough, required: ${preVerificationGas}, got: ${userOperation.preVerificationGas}`, types_1.ValidationErrors.SimulateValidation);
        }
    }
    async validateUserOperation({ shouldCheckPrefund, userOperation, queuedUserOperations, entryPoint, authorizationList }) {
        try {
            const validationResult = await this.getValidationResult({
                userOperation,
                queuedUserOperations,
                entryPoint,
                authorizationList
            });
            if (shouldCheckPrefund) {
                const prefund = validationResult.returnInfo.prefund;
                const { verificationGasLimit, callGasLimit } = (0, utils_1.calcVerificationGasAndCallGasLimit)(userOperation, {
                    preOpGas: validationResult.returnInfo.preOpGas,
                    paid: validationResult.returnInfo.prefund
                }, this.config.publicClient.chain.id);
                let mul = 1n;
                if ((0, utils_1.isVersion06)(userOperation) &&
                    userOperation.paymasterAndData) {
                    mul = 3n;
                }
                if ((0, utils_1.isVersion07)(userOperation) &&
                    userOperation.paymaster === "0x") {
                    mul = 3n;
                }
                const requiredPreFund = callGasLimit +
                    verificationGasLimit * mul +
                    userOperation.preVerificationGas;
                if (requiredPreFund > prefund) {
                    throw new types_1.RpcError(`prefund is not enough, required: ${requiredPreFund}, got: ${prefund}`, types_1.ValidationErrors.SimulateValidation);
                }
                // TODO prefund should be greater than it costs us to add it to mempool
            }
            this.metrics.userOperationsValidationSuccess.inc();
            return validationResult;
        }
        catch (e) {
            // console.log(e)
            this.metrics.userOperationsValidationFailure.inc();
            throw e;
        }
    }
}
exports.UnsafeValidator = UnsafeValidator;
//# sourceMappingURL=UnsafeValidator.js.map