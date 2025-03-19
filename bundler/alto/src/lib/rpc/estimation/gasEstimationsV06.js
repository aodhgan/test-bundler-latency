"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasEstimatorV06 = void 0;
const types_1 = require("../../types/index.js");
const viem_1 = require("viem");
const zod_1 = require("zod");
const userop_1 = require("../../utils/userop.js");
const gasEstimationsV07_1 = require("./gasEstimationsV07.js");
const utils_1 = require("../../utils/index.js");
class GasEstimatorV06 {
    config;
    constructor(config) {
        this.config = config;
    }
    decodeSimulateHandleOpResult(data) {
        if (data === "0x") {
            throw new types_1.RpcError("AA23 reverted: UserOperation called non-existant contract, or reverted with 0x", types_1.ValidationErrors.SimulateValidation);
        }
        const decodedError = (0, viem_1.decodeErrorResult)({
            abi: [...types_1.EntryPointV06Abi, ...types_1.EntryPointV06SimulationsAbi],
            data
        });
        if (decodedError &&
            decodedError.errorName === "FailedOp" &&
            decodedError.args) {
            return {
                result: "failed",
                data: decodedError.args[1]
            };
        }
        // custom error thrown by entryPoint if code override is used
        if (decodedError &&
            decodedError.errorName === "CallPhaseReverted" &&
            decodedError.args) {
            return {
                result: "failed",
                data: decodedError.args[0]
            };
        }
        // custom error thrown by entryPoint if code override is used
        if (decodedError &&
            decodedError.errorName === "FailedOpWithRevert" &&
            decodedError.args) {
            return {
                result: "failed",
                data: `${decodedError.args?.[1]} ${(0, gasEstimationsV07_1.parseFailedOpWithRevert)(decodedError.args?.[2])}`
            };
        }
        if (decodedError &&
            decodedError.errorName === "Error" &&
            decodedError.args) {
            return {
                result: "failed",
                data: decodedError.args[0]
            };
        }
        if (decodedError.errorName === "ExecutionResult") {
            const parsedExecutionResult = types_1.executionResultSchema.parse(decodedError.args);
            return {
                result: "execution",
                data: {
                    executionResult: parsedExecutionResult
                }
            };
        }
        throw new Error("Unexpected error whilst decoding simulateHandleOp result");
    }
    async simulateHandleOpV06({ userOperation, targetAddress, targetCallData, entryPoint, useCodeOverride = true, authorizationList, stateOverrides = undefined }) {
        const publicClient = this.config.publicClient;
        const blockTagSupport = this.config.blockTagSupport;
        const utilityWalletAddress = this.config.utilityPrivateKey?.address ??
            "0x4337000c2828F5260d8921fD25829F606b9E8680";
        const fixedGasLimitForEstimation = this.config.fixedGasLimitForEstimation;
        if (this.config.codeOverrideSupport && useCodeOverride) {
            if (stateOverrides === undefined) {
                stateOverrides = {};
            }
            stateOverrides[entryPoint] = {
                ...(0, userop_1.deepHexlify)(stateOverrides?.[entryPoint] || {}),
                code: types_1.ENTRYPOINT_V06_SIMULATION_OVERRIDE
            };
        }
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
        try {
            await publicClient.request({
                method: "eth_call",
                params: [
                    {
                        to: entryPoint,
                        from: utilityWalletAddress,
                        data: (0, viem_1.encodeFunctionData)({
                            abi: types_1.EntryPointV06Abi,
                            functionName: "simulateHandleOp",
                            args: [userOperation, targetAddress, targetCallData]
                        }),
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
            });
        }
        catch (e) {
            const err = e;
            if (/return data out of bounds.*|EVM error OutOfOffset.*/.test(err.details)) {
                // out of bound (low level evm error) occurs when paymaster reverts with less than 32bytes
                return {
                    result: "failed",
                    data: "AA50 postOp revert (paymaster revert data out of bounds)"
                };
            }
            const cause = err.walk((err) => err instanceof viem_1.RpcRequestError);
            const causeParseResult = zod_1.z
                .union([
                zod_1.z.object({
                    code: zod_1.z.literal(3),
                    message: zod_1.z.string(),
                    data: types_1.hexDataSchema
                }),
                /* Fuse RPCs return in this format. */
                zod_1.z.object({
                    code: zod_1.z.number(),
                    message: zod_1.z.string().regex(/VM execution error.*/),
                    data: zod_1.z
                        .string()
                        .transform((data) => data.replace("Reverted ", ""))
                        .pipe(types_1.hexDataSchema)
                }),
                zod_1.z.object({
                    code: zod_1.z.number(),
                    message: zod_1.z
                        .string()
                        .regex(/VM Exception while processing transaction:.*/),
                    data: types_1.hexDataSchema
                }),
                /* Monad devnet RPC return in this format */
                zod_1.z.object({
                    code: zod_1.z.literal(-32603),
                    message: zod_1.z.string().regex(/execution reverted.*/),
                    data: types_1.hexDataSchema
                })
            ])
                .safeParse(cause?.cause);
            if (!causeParseResult.success) {
                throw new Error(JSON.stringify(cause));
            }
            const data = causeParseResult.data.data;
            return this.decodeSimulateHandleOpResult(data);
        }
        throw new Error("Unexpected error");
    }
}
exports.GasEstimatorV06 = GasEstimatorV06;
//# sourceMappingURL=gasEstimationsV06.js.map