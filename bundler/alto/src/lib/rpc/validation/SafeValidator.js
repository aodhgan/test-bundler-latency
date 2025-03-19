"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeValidator = void 0;
const types_1 = require("../../types/index.js");
const utils_1 = require("../../utils/index.js");
const viem_1 = require("viem");
const gasEstimationsV07_1 = require("../estimation/gasEstimationsV07.js");
const BundlerCollectorTracerV07_1 = require("./BundlerCollectorTracerV07.js");
const TracerResultParserV06_1 = require("./TracerResultParserV06.js");
const TracerResultParserV07_1 = require("./TracerResultParserV07.js");
const UnsafeValidator_1 = require("./UnsafeValidator.js");
const tracer_1 = require("./tracer.js");
class SafeValidator extends UnsafeValidator_1.UnsafeValidator {
    senderManager;
    constructor({ config, senderManager, metrics, gasPriceManager }) {
        super({
            config,
            metrics,
            gasPriceManager
        });
        this.senderManager = senderManager;
    }
    async validateUserOperation({ shouldCheckPrefund, userOperation, queuedUserOperations, entryPoint, referencedContracts }) {
        try {
            const validationResult = await this.getValidationResult({
                userOperation,
                queuedUserOperations,
                entryPoint,
                codeHashes: referencedContracts
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
            this.metrics.userOperationsValidationFailure.inc();
            throw e;
        }
    }
    async getCodeHashes(addresses) {
        const deployData = (0, viem_1.encodeDeployData)({
            abi: types_1.CodeHashGetterAbi,
            bytecode: types_1.CodeHashGetterBytecode,
            args: [addresses]
        });
        const wallet = await this.senderManager.getWallet();
        let hash = "";
        try {
            await this.config.publicClient.call({
                account: wallet,
                data: deployData
            });
        }
        catch (e) {
            const error = e;
            // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
            hash = error.walk().data;
        }
        this.senderManager.pushWallet(wallet);
        return {
            hash,
            addresses
        };
    }
    async getValidationResultV07({ userOperation, queuedUserOperations, entryPoint, preCodeHashes }) {
        if (this.config.tenderly) {
            return super.getValidationResultV07({
                userOperation,
                queuedUserOperations,
                entryPoint
            });
        }
        if (preCodeHashes && preCodeHashes.addresses.length > 0) {
            const { hash } = await this.getCodeHashes(preCodeHashes.addresses);
            if (hash !== preCodeHashes.hash) {
                throw new types_1.RpcError("code hashes mismatch", types_1.ValidationErrors.OpcodeValidation);
            }
        }
        const [res, tracerResult] = await this.getValidationResultWithTracerV07(userOperation, entryPoint);
        const [contractAddresses, storageMap] = (0, TracerResultParserV07_1.tracerResultParserV07)(userOperation, tracerResult, res, entryPoint.toLowerCase());
        const codeHashes = preCodeHashes || (await this.getCodeHashes(contractAddresses));
        // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
        if (res === "0x") {
            throw new Error("simulateValidation reverted with no revert string!");
        }
        if (res.returnInfo.accountSigFailed) {
            throw new types_1.RpcError("Invalid UserOp signature", types_1.ValidationErrors.InvalidSignature);
        }
        if (res.returnInfo.paymasterSigFailed) {
            throw new types_1.RpcError("Invalid UserOp paymasterData", types_1.ValidationErrors.InvalidSignature);
        }
        return {
            ...res,
            referencedContracts: codeHashes,
            storageMap
        };
    }
    async getValidationResultV06({ userOperation, entryPoint, preCodeHashes }) {
        if (this.config.tenderly) {
            return super.getValidationResultV06({ userOperation, entryPoint });
        }
        if (preCodeHashes && preCodeHashes.addresses.length > 0) {
            const { hash } = await this.getCodeHashes(preCodeHashes.addresses);
            if (hash !== preCodeHashes.hash) {
                throw new types_1.RpcError("code hashes mismatch", types_1.ValidationErrors.OpcodeValidation);
            }
        }
        const [res, tracerResult] = await this.getValidationResultWithTracerV06(userOperation, entryPoint);
        const [contractAddresses, storageMap] = (0, TracerResultParserV06_1.tracerResultParserV06)(userOperation, tracerResult, res, entryPoint.toLowerCase());
        const codeHashes = preCodeHashes || (await this.getCodeHashes(contractAddresses));
        // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
        if (res === "0x") {
            throw new Error("simulateValidation reverted with no revert string!");
        }
        const validationResult = {
            ...res,
            referencedContracts: codeHashes,
            storageMap
        };
        if (validationResult.returnInfo.sigFailed) {
            throw new types_1.RpcError("Invalid UserOp signature or paymaster signature", types_1.ValidationErrors.InvalidSignature);
        }
        const now = Date.now() / 1000;
        this.logger.debug({
            validAfter: validationResult.returnInfo.validAfter,
            validUntil: validationResult.returnInfo.validUntil,
            now: now
        });
        if (validationResult.returnInfo.validAfter > now - 5) {
            throw new types_1.RpcError("User operation is not valid yet", types_1.ValidationErrors.ExpiresShortly);
        }
        if (validationResult.returnInfo.validUntil < now + 30) {
            throw new types_1.RpcError("expires too soon", types_1.ValidationErrors.ExpiresShortly);
        }
        return validationResult;
    }
    async getValidationResultWithTracerV06(userOperation, entryPoint) {
        const tracerResult = await (0, tracer_1.debug_traceCall)(this.config.publicClient, {
            from: viem_1.zeroAddress,
            to: entryPoint,
            data: (0, viem_1.encodeFunctionData)({
                abi: types_1.EntryPointV06Abi,
                functionName: "simulateValidation",
                args: [userOperation]
            })
        }, {
            tracer: BundlerCollectorTracerV07_1.bundlerCollectorTracer
        });
        const lastResult = tracerResult.calls.slice(-1)[0];
        if (lastResult.type !== "REVERT") {
            throw new Error("Invalid response. simulateCall must revert");
        }
        const data = lastResult.data;
        if (data === "0x") {
            // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
            return [data, tracerResult];
        }
        try {
            const { errorName, args: errorArgs } = (0, viem_1.decodeErrorResult)({
                abi: types_1.EntryPointV06Abi,
                data
            });
            const errFullName = `${errorName}(${errorArgs.toString()})`;
            const errorResult = this.parseErrorResultV06(userOperation, {
                errorName,
                errorArgs
            });
            if (!errorName.includes("Result")) {
                // a real error, not a result.
                throw new Error(errFullName);
            }
            // @ts-ignore
            return [errorResult, tracerResult];
            // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
        }
        catch (e) {
            // if already parsed, throw as is
            if (e.code != null) {
                throw e;
            }
            throw new types_1.RpcError(data);
        }
    }
    parseErrorResultV06(userOperation, 
    // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
    errorResult) {
        if (!errorResult?.errorName?.startsWith("ValidationResult")) {
            // parse it as FailedOp
            // if its FailedOp, then we have the paymaster param... otherwise its an Error(string)
            let paymaster = errorResult.errorArgs.paymaster;
            if (paymaster === viem_1.zeroAddress) {
                paymaster = undefined;
            }
            // eslint-disable-next-line
            const msg = errorResult.errorArgs[1] ?? errorResult.toString();
            if (paymaster == null) {
                throw new types_1.RpcError(`account validation failed: ${msg}`, types_1.ValidationErrors.SimulateValidation);
            }
            throw new types_1.RpcError(`paymaster validation failed: ${msg}`, types_1.ValidationErrors.SimulatePaymasterValidation, {
                paymaster
            });
        }
        const [returnInfo, senderInfo, factoryInfo, paymasterInfo, aggregatorInfo // may be missing (exists only SimulationResultWithAggregator)
        ] = errorResult.errorArgs;
        // extract address from "data" (first 20 bytes)
        // add it as "addr" member to the "stakeinfo" struct
        // if no address, then return "undefined" instead of struct.
        function fillEntity(data, info) {
            const addr = (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(data);
            return addr == null
                ? undefined
                : {
                    ...info,
                    addr
                };
        }
        function fillEntityAggregator(data, info) {
            const addr = (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(data);
            return addr == null
                ? undefined
                : {
                    aggregator: data,
                    stakeInfo: {
                        ...info,
                        addr
                    }
                };
        }
        return {
            returnInfo,
            senderInfo: {
                ...senderInfo,
                addr: userOperation.sender
            },
            factoryInfo: fillEntity(userOperation.initCode, factoryInfo),
            paymasterInfo: fillEntity(userOperation.paymasterAndData, paymasterInfo),
            aggregatorInfo: fillEntityAggregator(aggregatorInfo?.actualAggregator, aggregatorInfo?.stakeInfo)
        };
    }
    async getValidationResultWithTracerV07(userOperation, entryPoint) {
        const packedUserOperation = (0, utils_1.toPackedUserOperation)(userOperation);
        const entryPointSimulationsCallData = (0, viem_1.encodeFunctionData)({
            abi: types_1.EntryPointV07SimulationsAbi,
            functionName: "simulateValidationLast",
            args: [[packedUserOperation]]
        });
        const callData = (0, viem_1.encodeFunctionData)({
            abi: types_1.PimlicoEntryPointSimulationsAbi,
            functionName: "simulateEntryPoint",
            args: [entryPoint, [entryPointSimulationsCallData]]
        });
        const entryPointSimulationsAddress = this.config.entrypointSimulationContract;
        const tracerResult = await (0, tracer_1.debug_traceCall)(this.config.publicClient, {
            from: viem_1.zeroAddress,
            to: entryPointSimulationsAddress,
            data: callData
        }, {
            tracer: BundlerCollectorTracerV07_1.bundlerCollectorTracer
        });
        this.logger.info(`tracerResult: ${JSON.stringify(tracerResult, (_k, v) => typeof v === "bigint" ? v.toString() : v)}`);
        const lastResult = tracerResult.calls.slice(-1)[0];
        if (lastResult.type !== "REVERT") {
            throw new Error("Invalid response. simulateCall must revert");
        }
        const resultData = lastResult.data;
        const simulateValidationResult = (0, gasEstimationsV07_1.getSimulateValidationResult)(resultData);
        if (simulateValidationResult.status === "failed") {
            let errorCode = types_1.ValidationErrors.SimulateValidation;
            const errorMessage = simulateValidationResult.data;
            if (errorMessage.includes("AA24")) {
                errorCode = types_1.ValidationErrors.InvalidSignature;
            }
            throw new types_1.RpcError(errorMessage, errorCode);
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
        if (res.returnInfo.validAfter > now - 5) {
            throw new types_1.RpcError(`User operation is not valid yet, validAfter=${res.returnInfo.validAfter}, now=${now}`, types_1.ValidationErrors.ExpiresShortly);
        }
        if (res.returnInfo.validUntil == null ||
            res.returnInfo.validUntil < now + 30) {
            throw new types_1.RpcError(`UserOperation expires too soon, validUntil=${res.returnInfo.validUntil}, now=${now}`, types_1.ValidationErrors.ExpiresShortly);
        }
        return [res, tracerResult];
    }
}
exports.SafeValidator = SafeValidator;
//# sourceMappingURL=SafeValidator.js.map