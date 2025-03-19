import type { GasPriceManager } from "../handlers/index.js";
import { type Address, type PackedUserOperation, type UserOperation, type UserOperationV06 } from "../types/index.js";
import { type Chain, ContractFunctionRevertedError, EstimateGasExecutionError, FeeCapTooLowError, InsufficientFundsError, IntrinsicGasTooLowError, NonceTooLowError, type PublicClient, type Transport, InternalRpcError } from "viem";
import type { AltoConfig } from "../createConfig.js";
export interface GasOverheads {
    /**
     * fixed overhead for entire handleOp bundle.
     */
    fixed: number;
    /**
     * per userOp overhead, added on top of the above fixed per-bundle.
     */
    perUserOp: number;
    /**
     * overhead for userOp word (32 bytes) block
     */
    perUserOpWord: number;
    /**
     * zero byte cost, for calldata gas cost calculations
     */
    zeroByte: number;
    /**
     * non-zero byte cost, for calldata gas cost calculations
     */
    nonZeroByte: number;
    /**
     * expected bundle size, to split per-bundle overhead between all ops.
     */
    bundleSize: number;
    /**
     * expected length of the userOp signature.
     */
    sigSize: number;
}
export declare const DefaultGasOverheads: GasOverheads;
/**
 * pack the userOperation
 * @param op
 *  "false" to pack entire UserOp, for calculating the calldata cost of putting it on-chain.
 */
export declare function packUserOpV06(op: UserOperationV06): `0x${string}`;
export declare function removeZeroBytesFromUserOp<T extends UserOperation>(userOpearation: T): T extends UserOperationV06 ? UserOperationV06 : PackedUserOperation;
export declare function packUserOpV07(op: PackedUserOperation): `0x${string}`;
export declare function calcPreVerificationGas({ config, userOperation, entryPoint, gasPriceManager, validate, overheads }: {
    config: AltoConfig;
    userOperation: UserOperation;
    entryPoint: Address;
    gasPriceManager: GasPriceManager;
    validate: boolean;
    overheads?: GasOverheads;
}): Promise<bigint>;
export declare function calcVerificationGasAndCallGasLimit(userOperation: UserOperation, executionResult: {
    preOpGas: bigint;
    paid: bigint;
}, chainId: number, gasLimits?: {
    callGasLimit?: bigint;
    verificationGasLimit?: bigint;
    paymasterVerificationGasLimit?: bigint;
}): {
    verificationGasLimit: bigint;
    callGasLimit: bigint;
    paymasterVerificationGasLimit: bigint;
};
/**
 * calculate the preVerificationGas of the given UserOperation
 * preVerificationGas (by definition) is the cost overhead that can't be calculated on-chain.
 * it is based on parameters that are defined by the Ethereum protocol for external transactions.
 * @param userOp filled userOp to calculate. The only possible missing fields can be the signature and preVerificationGas itself
 * @param overheads gas overheads to use, to override the default values
 */
export declare function calcDefaultPreVerificationGas(userOperation: UserOperation, overheads?: Partial<GasOverheads>): bigint;
export declare function calcMantlePreVerificationGas(publicClient: PublicClient<Transport, Chain>, op: UserOperation, entryPoint: Address, staticFee: bigint, gasPriceManager: GasPriceManager, verify?: boolean): Promise<bigint>;
export declare function calcOptimismPreVerificationGas(publicClient: PublicClient<Transport, Chain>, op: UserOperation, entryPoint: Address, staticFee: bigint, gasPriceManager: GasPriceManager, validate: boolean): Promise<bigint>;
export declare function calcArbitrumPreVerificationGas(publicClient: PublicClient<Transport, Chain | undefined>, op: UserOperation, entryPoint: Address, staticFee: bigint, gasPriceManager: GasPriceManager, validate: boolean): Promise<bigint>;
export declare function parseViemError(err: unknown): NonceTooLowError | FeeCapTooLowError | InsufficientFundsError | IntrinsicGasTooLowError | ContractFunctionRevertedError | EstimateGasExecutionError | InternalRpcError | undefined;
//# sourceMappingURL=validation.d.ts.map