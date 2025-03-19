import { type StateOverrides, type UserOperationV07, type ValidationResultV07 } from "../../types/index.js";
import type { Hex } from "viem";
import { type Address } from "viem";
import { type SimulateBinarySearchRetryResult, type SimulateHandleOpResult } from "./types.js";
import type { AltoConfig } from "../../createConfig.js";
import type { SignedAuthorizationList } from "viem/experimental";
export declare class GasEstimatorV07 {
    private config;
    constructor(config: AltoConfig);
    simulateValidation({ entryPoint, userOperation, queuedUserOperations, authorizationList }: {
        entryPoint: Address;
        userOperation: UserOperationV07;
        queuedUserOperations: UserOperationV07[];
        authorizationList?: SignedAuthorizationList;
    }): Promise<{
        simulateValidationResult: {
            status: "validation" | "failed";
            data: string | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            };
        };
    }>;
    encodeUserOperationCalldata({ op, entryPoint }: {
        op: UserOperationV07;
        entryPoint: Address;
    }): `0x${string}`;
    encodeSimulateHandleOpLast({ userOperation, queuedUserOperations, entryPoint }: {
        userOperation: UserOperationV07;
        queuedUserOperations: UserOperationV07[];
        entryPoint: Address;
    }): Hex;
    encodeBinarySearchGasLimit({ entryPoint, userOperation, queuedUserOperations, target, targetCallData, gasAllowance, initialMinGas, functionName }: {
        entryPoint: Address;
        userOperation: UserOperationV07;
        queuedUserOperations: UserOperationV07[];
        target: Address;
        targetCallData: Hex;
        gasAllowance?: bigint;
        initialMinGas?: bigint;
        functionName: "binarySearchPaymasterVerificationGasLimit" | "binarySearchVerificationGasLimit" | "binarySearchCallGasLimit";
    }): Hex;
    retryBinarySearch({ entryPoint, optimalGas, minGas, targetOp, target, targetCallData, functionName, queuedOps, stateOverrides, authorizationList }: {
        entryPoint: Address;
        optimalGas: bigint;
        minGas: bigint;
        targetOp: UserOperationV07;
        queuedOps: UserOperationV07[];
        target: Address;
        targetCallData: Hex;
        functionName: "binarySearchPaymasterVerificationGasLimit" | "binarySearchVerificationGasLimit" | "binarySearchCallGasLimit";
        stateOverrides?: StateOverrides | undefined;
        authorizationList?: SignedAuthorizationList;
    }): Promise<SimulateBinarySearchRetryResult>;
    simulateHandleOpV07({ entryPoint, userOperation, queuedUserOperations, stateOverrides, authorizationList }: {
        entryPoint: Address;
        userOperation: UserOperationV07;
        queuedUserOperations: UserOperationV07[];
        stateOverrides?: StateOverrides | undefined;
        authorizationList?: SignedAuthorizationList;
    }): Promise<SimulateHandleOpResult>;
    callPimlicoEntryPointSimulations({ entryPoint, entryPointSimulationsCallData, stateOverrides, authorizationList }: {
        entryPoint: Address;
        entryPointSimulationsCallData: Hex[];
        stateOverrides?: StateOverrides;
        authorizationList?: SignedAuthorizationList;
    }): Promise<readonly `0x${string}`[]>;
}
export declare function parseFailedOpWithRevert(data: Hex): string;
export declare function getSimulateValidationResult(errorData: Hex): {
    status: "failed" | "validation";
    data: ValidationResultV07 | Hex | string;
};
//# sourceMappingURL=gasEstimationsV07.d.ts.map