"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSimulateValidationResult = exports.parseFailedOpWithRevert = exports.GasEstimatorV07 = void 0;
const types_1 = require("../../types/index.js");
const utils_1 = require("../../utils/index.js");
const viem_1 = require("viem");
const IAccountExecute_1 = require("../../types/contracts/IAccountExecute.js");
const types_2 = require("./types.js");
class GasEstimatorV07 {
    config;
    constructor(config) {
        this.config = config;
    }
    async simulateValidation({ entryPoint, userOperation, queuedUserOperations, authorizationList }) {
        const userOperations = [...queuedUserOperations, userOperation];
        const packedUserOperations = userOperations.map((uo) => (0, utils_1.toPackedUserOperation)(uo));
        const simulateValidationLast = (0, viem_1.encodeFunctionData)({
            abi: types_1.EntryPointV07SimulationsAbi,
            functionName: "simulateValidationLast",
            args: [packedUserOperations]
        });
        const errorResult = await this.callPimlicoEntryPointSimulations({
            entryPoint,
            entryPointSimulationsCallData: [simulateValidationLast],
            authorizationList
        });
        return {
            simulateValidationResult: getSimulateValidationResult(errorResult[0])
        };
    }
    encodeUserOperationCalldata({ op, entryPoint }) {
        const packedOp = (0, utils_1.toPackedUserOperation)(op);
        const executeUserOpMethodSig = (0, viem_1.toFunctionSelector)(IAccountExecute_1.AccountExecuteAbi[0]);
        const callDataMethodSig = (0, viem_1.slice)(packedOp.callData, 0, 4);
        if (executeUserOpMethodSig === callDataMethodSig) {
            return (0, viem_1.encodeFunctionData)({
                abi: IAccountExecute_1.AccountExecuteAbi,
                functionName: "executeUserOp",
                args: [
                    packedOp,
                    (0, utils_1.getUserOperationHash)(op, entryPoint, this.config.publicClient.chain.id)
                ]
            });
        }
        return packedOp.callData;
    }
    encodeSimulateHandleOpLast({ userOperation, queuedUserOperations, entryPoint }) {
        const userOperations = [...queuedUserOperations, userOperation];
        const packedUserOperations = userOperations.map((uop) => ({
            packedUserOperation: (0, utils_1.toPackedUserOperation)(uop),
            userOperation: uop,
            userOperationHash: (0, utils_1.getUserOperationHash)(uop, entryPoint, this.config.publicClient.chain.id)
        }));
        const simulateHandleOpCallData = (0, viem_1.encodeFunctionData)({
            abi: types_1.EntryPointV07SimulationsAbi,
            functionName: "simulateHandleOpLast",
            args: [packedUserOperations.map((uop) => uop.packedUserOperation)]
        });
        return simulateHandleOpCallData;
    }
    encodeBinarySearchGasLimit({ entryPoint, userOperation, queuedUserOperations, target, targetCallData, gasAllowance = this.config.binarySearchGasAllowance, initialMinGas = 0n, functionName }) {
        const queuedOps = queuedUserOperations.map((op) => ({
            op: (0, utils_1.toPackedUserOperation)(op),
            target: op.sender,
            targetCallData: this.encodeUserOperationCalldata({
                op,
                entryPoint
            })
        }));
        const targetOp = {
            op: (0, utils_1.toPackedUserOperation)(userOperation),
            target,
            targetCallData
        };
        const binarySearchVerificationGasLimit = (0, viem_1.encodeFunctionData)({
            abi: types_1.EntryPointV07SimulationsAbi,
            functionName,
            args: [
                queuedOps,
                targetOp,
                entryPoint,
                initialMinGas,
                this.config.binarySearchToleranceDelta,
                gasAllowance
            ]
        });
        return binarySearchVerificationGasLimit;
    }
    // Try to get the calldata gas again if the initial simulation reverted due to hitting the eth_call gasLimit.
    async retryBinarySearch({ entryPoint, optimalGas, minGas, targetOp, target, targetCallData, functionName, queuedOps, stateOverrides, authorizationList }) {
        const maxRetries = 3;
        let retryCount = 0;
        let currentOptimalGas = optimalGas;
        let currentMinGas = minGas;
        while (retryCount < maxRetries) {
            // OptimalGas represents the current lowest gasLimit, so we set the gasAllowance to search range minGas <-> optimalGas
            const gasAllowance = currentOptimalGas - currentMinGas;
            const binarySearchCallGasLimit = this.encodeBinarySearchGasLimit({
                entryPoint,
                userOperation: targetOp,
                target,
                targetCallData,
                queuedUserOperations: queuedOps,
                initialMinGas: currentMinGas,
                gasAllowance,
                functionName
            });
            let cause = await this.callPimlicoEntryPointSimulations({
                entryPoint,
                entryPointSimulationsCallData: [binarySearchCallGasLimit],
                stateOverrides,
                authorizationList
            });
            cause = cause.map((data) => {
                const decodedDelegateAndError = (0, viem_1.decodeErrorResult)({
                    abi: types_1.EntryPointV07Abi,
                    data: data
                });
                if (!decodedDelegateAndError?.args?.[1]) {
                    throw new Error("Unexpected error");
                }
                return decodedDelegateAndError.args[1];
            });
            const callGasLimitResult = validateBinarySearchDataResult(cause[0], functionName);
            if (callGasLimitResult.result === "failed") {
                return callGasLimitResult;
            }
            if (callGasLimitResult.result === "retry") {
                currentOptimalGas = callGasLimitResult.optimalGas;
                currentMinGas = callGasLimitResult.minGas;
                retryCount++;
                continue;
            }
            // If we reach here, it means we have a successful result
            return {
                result: "success",
                data: callGasLimitResult.data
            };
        }
        // If we've exhausted all retries, return a failure result
        return {
            result: "failed",
            data: "Max retries reached for getting call data gas",
            code: types_1.ValidationErrors.SimulateValidation
        };
    }
    async simulateHandleOpV07({ entryPoint, userOperation, queuedUserOperations, stateOverrides = undefined, authorizationList }) {
        const simulateHandleOpLast = this.encodeSimulateHandleOpLast({
            entryPoint,
            userOperation,
            queuedUserOperations
        });
        const binarySearchVerificationGasLimit = this.encodeBinarySearchGasLimit({
            initialMinGas: 9000n,
            entryPoint,
            userOperation,
            queuedUserOperations,
            target: viem_1.zeroAddress,
            targetCallData: "0x",
            functionName: "binarySearchVerificationGasLimit"
        });
        const binarySearchPaymasterVerificationGasLimit = userOperation.paymaster
            ? this.encodeBinarySearchGasLimit({
                initialMinGas: 9000n,
                entryPoint,
                userOperation,
                queuedUserOperations,
                target: viem_1.zeroAddress,
                targetCallData: "0x",
                functionName: "binarySearchPaymasterVerificationGasLimit"
            })
            : null;
        const binarySearchCallGasLimit = this.encodeBinarySearchGasLimit({
            initialMinGas: 9000n,
            entryPoint,
            userOperation,
            queuedUserOperations,
            target: userOperation.sender,
            targetCallData: this.encodeUserOperationCalldata({
                op: userOperation,
                entryPoint
            }),
            functionName: "binarySearchCallGasLimit"
        });
        let cause;
        if (this.config.chainType === "hedera") {
            // due to Hedera specific restrictions, we can't combine these two calls.
            const [simulateHandleOpLastCause, binarySearchVerificationGasLimitCause, binarySearchPaymasterVerificationGasLimitCause, binarySearchCallGasLimitCause] = await Promise.all([
                this.callPimlicoEntryPointSimulations({
                    entryPoint,
                    entryPointSimulationsCallData: [simulateHandleOpLast],
                    stateOverrides,
                    authorizationList
                }),
                this.callPimlicoEntryPointSimulations({
                    entryPoint,
                    entryPointSimulationsCallData: [
                        binarySearchVerificationGasLimit
                    ],
                    stateOverrides,
                    authorizationList
                }),
                binarySearchPaymasterVerificationGasLimit
                    ? this.callPimlicoEntryPointSimulations({
                        entryPoint,
                        entryPointSimulationsCallData: [
                            binarySearchPaymasterVerificationGasLimit
                        ],
                        stateOverrides,
                        authorizationList
                    })
                    : null,
                this.callPimlicoEntryPointSimulations({
                    entryPoint,
                    entryPointSimulationsCallData: [binarySearchCallGasLimit],
                    stateOverrides,
                    authorizationList
                })
            ]);
            cause = [
                simulateHandleOpLastCause[0],
                binarySearchVerificationGasLimitCause[0],
                binarySearchPaymasterVerificationGasLimitCause?.[0] ?? null,
                binarySearchCallGasLimitCause[0]
            ];
        }
        else {
            const [handleOpAndBinarySearchVerificationGasLimits, binarySearchCallDataGasLimits] = await Promise.all([
                binarySearchPaymasterVerificationGasLimit
                    ? await this.callPimlicoEntryPointSimulations({
                        entryPoint,
                        entryPointSimulationsCallData: [
                            simulateHandleOpLast,
                            binarySearchVerificationGasLimit,
                            binarySearchPaymasterVerificationGasLimit
                        ],
                        stateOverrides,
                        authorizationList
                    })
                    : await this.callPimlicoEntryPointSimulations({
                        entryPoint,
                        entryPointSimulationsCallData: [
                            simulateHandleOpLast,
                            binarySearchVerificationGasLimit
                        ],
                        stateOverrides,
                        authorizationList
                    }),
                await this.callPimlicoEntryPointSimulations({
                    entryPoint,
                    entryPointSimulationsCallData: [binarySearchCallGasLimit],
                    stateOverrides,
                    authorizationList
                })
            ]);
            cause = [
                handleOpAndBinarySearchVerificationGasLimits[0],
                handleOpAndBinarySearchVerificationGasLimits[1],
                binarySearchPaymasterVerificationGasLimit
                    ? handleOpAndBinarySearchVerificationGasLimits[2]
                    : null,
                binarySearchCallDataGasLimits[0]
            ];
        }
        cause = cause.map((data) => {
            if (!data) {
                return null;
            }
            const decodedDelegateAndError = (0, viem_1.decodeErrorResult)({
                abi: types_1.EntryPointV07Abi,
                data: data
            });
            const delegateAndRevertResponseBytes = decodedDelegateAndError?.args?.[1];
            if (!delegateAndRevertResponseBytes) {
                throw new Error("Unexpected error");
            }
            return delegateAndRevertResponseBytes;
        });
        const [simulateHandleOpLastCause, binarySearchVerificationGasLimitCause, binarySearchPaymasterVerificationGasLimitCause, binarySearchCallGasLimitCause] = cause;
        try {
            const simulateHandleOpLastResult = getSimulateHandleOpResult(simulateHandleOpLastCause);
            if (simulateHandleOpLastResult.result === "failed") {
                return simulateHandleOpLastResult;
            }
            const verificationGasLimitResult = validateBinarySearchDataResult(binarySearchVerificationGasLimitCause, "binarySearchVerificationGasLimit");
            let verificationGasLimit = 0n;
            if (verificationGasLimitResult.result === "success") {
                verificationGasLimit = verificationGasLimitResult.data.gasUsed;
            }
            if (verificationGasLimitResult.result === "failed") {
                return verificationGasLimitResult;
            }
            if (verificationGasLimitResult.result === "retry") {
                const { optimalGas, minGas } = verificationGasLimitResult;
                const binarySearchResult = await this.retryBinarySearch({
                    entryPoint,
                    optimalGas,
                    minGas,
                    targetOp: userOperation,
                    target: viem_1.zeroAddress,
                    targetCallData: "0x",
                    functionName: "binarySearchVerificationGasLimit",
                    queuedOps: queuedUserOperations,
                    stateOverrides
                });
                if (binarySearchResult.result === "failed") {
                    return binarySearchResult;
                }
                verificationGasLimit = binarySearchResult.data.gasUsed;
            }
            const paymasterVerificationGasLimitResult = binarySearchPaymasterVerificationGasLimitCause
                ? validateBinarySearchDataResult(binarySearchPaymasterVerificationGasLimitCause, "binarySearchPaymasterVerificationGasLimit")
                : {
                    result: "success",
                    data: {
                        gasUsed: 0n,
                        success: true,
                        returnData: "0x"
                    }
                };
            let paymasterVerificationGasLimit = 0n;
            if (paymasterVerificationGasLimitResult.result === "success") {
                paymasterVerificationGasLimit =
                    paymasterVerificationGasLimitResult.data.gasUsed;
            }
            if (paymasterVerificationGasLimitResult.result === "failed") {
                return paymasterVerificationGasLimitResult;
            }
            if (paymasterVerificationGasLimitResult.result === "retry") {
                const { optimalGas, minGas } = paymasterVerificationGasLimitResult;
                const binarySearchResult = await this.retryBinarySearch({
                    entryPoint,
                    optimalGas,
                    minGas,
                    targetOp: userOperation,
                    target: viem_1.zeroAddress,
                    targetCallData: "0x",
                    functionName: "binarySearchPaymasterVerificationGasLimit",
                    queuedOps: queuedUserOperations,
                    stateOverrides
                });
                if (binarySearchResult.result === "failed") {
                    return binarySearchResult;
                }
                paymasterVerificationGasLimit = binarySearchResult.data.gasUsed;
            }
            const callGasLimitResult = validateBinarySearchDataResult(binarySearchCallGasLimitCause, "binarySearchCallGasLimit");
            let callGasLimit = 0n;
            if (callGasLimitResult.result === "success") {
                callGasLimit = callGasLimitResult.data.gasUsed;
            }
            if (callGasLimitResult.result === "failed") {
                return callGasLimitResult;
            }
            if (callGasLimitResult.result === "retry") {
                const { optimalGas, minGas } = callGasLimitResult;
                const binarySearchResult = await this.retryBinarySearch({
                    entryPoint,
                    optimalGas,
                    minGas,
                    targetOp: userOperation,
                    target: userOperation.sender,
                    targetCallData: this.encodeUserOperationCalldata({
                        op: userOperation,
                        entryPoint
                    }),
                    functionName: "binarySearchCallGasLimit",
                    queuedOps: queuedUserOperations,
                    stateOverrides
                });
                if (binarySearchResult.result === "failed") {
                    return binarySearchResult;
                }
                callGasLimit = binarySearchResult.data.gasUsed;
            }
            return {
                result: "execution",
                data: {
                    callGasLimit,
                    verificationGasLimit,
                    paymasterVerificationGasLimit,
                    executionResult: simulateHandleOpLastResult.data.executionResult
                }
            };
        }
        catch (_e) {
            return {
                result: "failed",
                data: "Unknown error, could not parse simulate handle op result.",
                code: types_1.ValidationErrors.SimulateValidation
            };
        }
    }
    async callPimlicoEntryPointSimulations({ entryPoint, entryPointSimulationsCallData, stateOverrides, authorizationList }) {
        const publicClient = this.config.publicClient;
        const blockTagSupport = this.config.blockTagSupport;
        const utilityWalletAddress = this.config.utilityPrivateKey?.address ??
            "0x4337000c2828F5260d8921fD25829F606b9E8680";
        const entryPointSimulationsAddress = this.config.entrypointSimulationContract;
        const fixedGasLimitForEstimation = this.config.fixedGasLimitForEstimation;
        if (!entryPointSimulationsAddress) {
            throw new types_1.RpcError("entryPointSimulationsAddress must be provided for V07 UserOperation", types_1.ValidationErrors.InvalidFields);
        }
        const callData = (0, viem_1.encodeFunctionData)({
            abi: types_1.PimlicoEntryPointSimulationsAbi,
            functionName: "simulateEntryPoint",
            args: [entryPoint, entryPointSimulationsCallData]
        });
        if (authorizationList) {
            stateOverrides = await (0, utils_1.addAuthorizationStateOverrides)({
                stateOverrides,
                authorizationList,
                publicClient
            });
        }
        // Remove state override if not supported by network.
        if (!this.config.balanceOverride) {
            stateOverrides = undefined;
        }
        const result = (await publicClient.request({
            method: "eth_call",
            params: [
                {
                    to: entryPointSimulationsAddress,
                    from: utilityWalletAddress,
                    data: callData,
                    ...(fixedGasLimitForEstimation !== undefined && {
                        gas: `0x${fixedGasLimitForEstimation.toString(16)}`
                    })
                },
                blockTagSupport
                    ? "latest"
                    : (0, viem_1.toHex)(await publicClient.getBlockNumber()),
                // @ts-ignore
                ...(stateOverrides ? [stateOverrides] : [])
            ]
        }));
        const returnBytes = (0, viem_1.decodeAbiParameters)([{ name: "ret", type: "bytes[]" }], result);
        return returnBytes[0];
    }
}
exports.GasEstimatorV07 = GasEstimatorV07;
const panicCodes = {
    // from https://docs.soliditylang.org/en/v0.8.0/control-structures.html
    1: "assert(false)",
    17: "arithmetic overflow/underflow",
    18: "divide by zero",
    33: "invalid enum value",
    34: "storage byte array that is incorrectly encoded",
    49: ".pop() on an empty array.",
    50: "array sout-of-bounds or negative index",
    65: "memory overflow",
    81: "zero-initialized variable of internal function type"
};
function parseFailedOpWithRevert(data) {
    const methodSig = data.slice(0, 10);
    const dataParams = `0x${data.slice(10)}`;
    if (methodSig === "0x08c379a0") {
        const [err] = (0, viem_1.decodeAbiParameters)([
            {
                name: "err",
                type: "string"
            }
        ], dataParams);
        return err;
    }
    if (methodSig === "0x4e487b71") {
        const [code] = (0, viem_1.decodeAbiParameters)([
            {
                name: "err",
                type: "uint256"
            }
        ], dataParams);
        return panicCodes[Number(code)] ?? `${code}`;
    }
    return data;
}
exports.parseFailedOpWithRevert = parseFailedOpWithRevert;
function getSimulateValidationResult(errorData) {
    const decodedDelegateAndError = (0, viem_1.decodeErrorResult)({
        abi: types_1.EntryPointV07Abi,
        data: errorData
    });
    if (!decodedDelegateAndError?.args?.[1]) {
        throw new Error("Unexpected error");
    }
    try {
        const decodedError = (0, viem_1.decodeErrorResult)({
            abi: types_1.EntryPointV07SimulationsAbi,
            data: decodedDelegateAndError.args[1]
        });
        if (decodedError &&
            decodedError.errorName === "FailedOp" &&
            decodedError.args) {
            return {
                status: "failed",
                data: decodedError.args[1]
            };
        }
        if (decodedError &&
            decodedError.errorName === "FailedOpWithRevert" &&
            decodedError.args) {
            return {
                status: "failed",
                data: `${decodedError.args?.[1]} - ${parseFailedOpWithRevert(decodedError.args?.[2])}`
            };
        }
    }
    catch {
        const decodedResult = (0, viem_1.decodeAbiParameters)(types_2.simulationValidationResultStruct, decodedDelegateAndError.args[1])[0];
        return {
            status: "validation",
            data: decodedResult
        };
    }
    throw new Error("Unexpected error - errorName is not ValidationResult or ValidationResultWithAggregation");
}
exports.getSimulateValidationResult = getSimulateValidationResult;
function validateBinarySearchDataResult(data, fnName) {
    try {
        const targetCallResult = (0, viem_1.decodeFunctionResult)({
            abi: types_1.EntryPointV07SimulationsAbi,
            functionName: fnName,
            data: data
        });
        const parsedTargetCallResult = types_1.binarySearchCallResultSchema.parse(targetCallResult);
        if (parsedTargetCallResult.success) {
            return {
                result: "success",
                data: parsedTargetCallResult
            };
        }
        return {
            result: "failed",
            data: parsedTargetCallResult.returnData,
            code: types_1.ExecutionErrors.UserOperationReverted
        };
    }
    catch (_e) {
        try {
            const res = (0, viem_1.decodeErrorResult)({
                abi: types_1.EntryPointV07SimulationsAbi,
                data: data
            });
            if (res.errorName === "SimulationOutOfGas") {
                const [optimalGas, minGas, maxGas] = res.args;
                return {
                    result: "retry",
                    optimalGas,
                    minGas,
                    maxGas
                };
            }
            return {
                result: "failed",
                data,
                code: types_1.ExecutionErrors.UserOperationReverted
            };
        }
        catch {
            // no error we go the result
            return {
                result: "failed",
                data: "Unknown error, could not parse target call data result.",
                code: types_1.ExecutionErrors.UserOperationReverted
            };
        }
    }
}
function getSimulateHandleOpResult(data) {
    try {
        const decodedError = (0, viem_1.decodeErrorResult)({
            abi: types_1.EntryPointV07SimulationsAbi,
            data: data
        });
        if (decodedError &&
            decodedError.errorName === "FailedOp" &&
            decodedError.args) {
            return {
                result: "failed",
                data: decodedError.args[1],
                code: types_1.ValidationErrors.SimulateValidation
            };
        }
        if (decodedError &&
            decodedError.errorName === "FailedOpWithRevert" &&
            decodedError.args) {
            return {
                result: "failed",
                data: `${decodedError.args[1]} ${parseFailedOpWithRevert(decodedError.args?.[2])}`,
                code: types_1.ValidationErrors.SimulateValidation
            };
        }
    }
    catch {
        // no error we go the result
        const decodedResult = (0, viem_1.decodeFunctionResult)({
            abi: types_1.EntryPointV07SimulationsAbi,
            functionName: "simulateHandleOp",
            data
        });
        return {
            result: "execution",
            data: {
                executionResult: decodedResult
            }
        };
    }
    throw new Error("Unexpected error");
}
//# sourceMappingURL=gasEstimationsV07.js.map