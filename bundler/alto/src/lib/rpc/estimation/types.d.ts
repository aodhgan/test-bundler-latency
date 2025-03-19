import type { Address, ExecutionResult, PackedUserOperation, BinarySearchCallResult } from "../../types/index.js";
import type { Hex } from "viem";
export type SimulateHandleOpResult<TypeResult extends "failed" | "execution" = "failed" | "execution"> = {
    result: TypeResult;
    data: TypeResult extends "failed" ? string : {
        callGasLimit?: bigint;
        verificationGasLimit?: bigint;
        paymasterVerificationGasLimit?: bigint;
        executionResult: ExecutionResult;
    };
    code?: TypeResult extends "failed" ? number : undefined;
};
export type SimulateBinarySearchRetryResult<TypeResult extends "failed" | "success" = "failed" | "success"> = {
    result: TypeResult;
    data: TypeResult extends "failed" ? string : BinarySearchCallResult;
    code?: TypeResult extends "failed" ? number : undefined;
};
export type CallDataSimulationArgs = {
    op: PackedUserOperation;
    target: Address;
    targetCallData: Hex;
};
export type SimulationOutOfGasResult = {
    optimalGas: bigint;
    minGas: bigint;
    maxGas: bigint;
};
export declare const simulationValidationResultStruct: readonly [{
    readonly components: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "preOpGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "prefund";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "accountValidationData";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "paymasterValidationData";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "paymasterContext";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IEntryPoint.ReturnInfo";
        readonly name: "returnInfo";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "unstakeDelaySec";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IStakeManager.StakeInfo";
        readonly name: "senderInfo";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "unstakeDelaySec";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IStakeManager.StakeInfo";
        readonly name: "factoryInfo";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "unstakeDelaySec";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IStakeManager.StakeInfo";
        readonly name: "paymasterInfo";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "aggregator";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "stake";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly name: "stakeInfo";
            readonly type: "tuple";
        }];
        readonly internalType: "struct IEntryPoint.AggregatorStakeInfo";
        readonly name: "aggregatorInfo";
        readonly type: "tuple";
    }];
    readonly internalType: "struct IEntryPointSimulations.ValidationResult";
    readonly name: "";
    readonly type: "tuple";
}];
//# sourceMappingURL=types.d.ts.map