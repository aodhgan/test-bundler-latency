import { type HexData32, type PackedUserOperation, type UserOperation, type UserOperationV06, type UserOperationV07 } from "../types/index.js";
import type { Logger } from "pino";
import { type Address, type Hex, type PublicClient, type TransactionReceipt } from "viem";
export declare function isVersion06(operation: UserOperation): operation is UserOperationV06;
export declare function isVersion07(operation: UserOperation): operation is UserOperationV07;
export declare function getInitCode(unpackedUserOperation: UserOperationV07): `0x${string}`;
export declare function unPackInitCode(initCode: Hex): {
    factory: null;
    factoryData: null;
} | {
    factory: `0x${string}`;
    factoryData: `0x${string}`;
};
export declare function getAccountGasLimits(unpackedUserOperation: UserOperationV07): `0x${string}`;
export declare function unpackAccountGasLimits(accountGasLimits: Hex): {
    verificationGasLimit: bigint;
    callGasLimit: bigint;
};
export declare function getGasLimits(unpackedUserOperation: UserOperationV07): `0x${string}`;
export declare function unpackGasLimits(gasLimits: Hex): {
    maxPriorityFeePerGas: bigint;
    maxFeePerGas: bigint;
};
export declare function getPaymasterAndData(unpackedUserOperation: UserOperationV07): `0x${string}`;
export declare function unpackPaymasterAndData(paymasterAndData: Hex): {
    paymaster: null;
    paymasterVerificationGasLimit: null;
    paymasterPostOpGasLimit: null;
    paymasterData: null;
} | {
    paymaster: `0x${string}`;
    paymasterVerificationGasLimit: bigint;
    paymasterPostOpGasLimit: bigint;
    paymasterData: `0x${string}` | null;
};
export declare function toPackedUserOperation(unpackedUserOperation: UserOperationV07): PackedUserOperation;
export declare function deepHexlify(obj: any): any;
export declare function getAddressFromInitCodeOrPaymasterAndData(data: Hex): Address | null;
type UserOperationDetailsType = {
    accountDeployed: boolean;
    status: "succesful" | "calldata_phase_reverted";
    revertReason?: Hex;
};
export type BundlingStatus = {
    status: "included";
    userOperationDetails: Record<Hex, UserOperationDetailsType>;
} | {
    status: "reverted";
    isAA95: boolean;
} | {
    status: "not_found";
};
export declare const getBundleStatus: (isVersion06: boolean, txHash: HexData32, publicClient: PublicClient, logger: Logger, entryPoint: Address) => Promise<{
    bundlingStatus: BundlingStatus;
    blockNumber: bigint | undefined;
}>;
export declare const getUserOperationHashV06: (userOperation: UserOperationV06, entryPointAddress: Address, chainId: number) => `0x${string}`;
export declare const getUserOperationHashV07: (userOperation: PackedUserOperation, entryPointAddress: Address, chainId: number) => `0x${string}`;
export declare const getUserOperationHash: (userOperation: UserOperation, entryPointAddress: Address, chainId: number) => `0x${string}`;
export declare const getNonceKeyAndValue: (nonce: bigint) => bigint[];
export declare const encodeNonce: ({ nonceKey, nonceSequence }: {
    nonceKey: bigint;
    nonceSequence: bigint;
}) => bigint;
export declare function toUnpackedUserOperation(packedUserOperation: PackedUserOperation): UserOperationV07;
export declare const getRequiredPrefund: (userOperation: UserOperation) => bigint;
export declare function parseUserOperationReceipt(userOpHash: Hex, receipt: TransactionReceipt): {
    sender: `0x${string}`;
    userOpHash: `0x${string}`;
    nonce: bigint;
    success: boolean;
    actualGasCost: bigint;
    actualGasUsed: bigint;
    entryPoint: `0x${string}`;
    logs: {
        address: `0x${string}`;
        data: `0x${string}`;
        blockNumber: bigint;
        blockHash: `0x${string}`;
        transactionHash: `0x${string}`;
        logIndex: bigint;
        transactionIndex: bigint;
        topics: `0x${string}`[];
    }[];
    receipt: {
        to: `0x${string}` | null;
        gasUsed: bigint;
        status: bigint | null;
        contractAddress: `0x${string}` | null;
        blockNumber: bigint;
        blockHash: `0x${string}`;
        transactionHash: `0x${string}`;
        transactionIndex: bigint;
        from: `0x${string}`;
        cumulativeGasUsed: bigint;
        logs: {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }[];
        logsBloom: string;
        effectiveGasPrice?: bigint | null | undefined;
    };
    paymaster?: `0x${string}` | undefined;
    reason?: `0x${string}` | undefined;
};
export {};
//# sourceMappingURL=userop.d.ts.map