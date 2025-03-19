import type { InterfaceReputationManager } from "../mempool/index.js";
import { type BundleResult, EntryPointV06Abi, EntryPointV07Abi, type TransactionInfo, type UserOperationWithHash, MempoolUserOperation } from "../types/index.js";
import type { Logger } from "../utils/index.js";
import { type Account, type Address, type Chain, type GetContractReturnType, type PublicClient, type Transport, type WalletClient, BaseError } from "viem";
import { SignedAuthorizationList } from "viem/experimental";
export declare const isTransactionUnderpricedError: (e: BaseError) => boolean;
export declare const getAuthorizationList: (mempoolUserOperations: MempoolUserOperation[]) => SignedAuthorizationList | undefined;
export declare function simulatedOpsToResults(simulatedOps: {
    owh: UserOperationWithHash;
    reason: string | undefined;
}[], transactionInfo: TransactionInfo): BundleResult[];
export type DefaultFilterOpsAndEstimateGasParams = {};
export declare function filterOpsAndEstimateGas(entryPoint: Address, ep: GetContractReturnType<typeof EntryPointV06Abi | typeof EntryPointV07Abi, {
    public: PublicClient;
    wallet: WalletClient;
}>, wallet: Account, ops: UserOperationWithHash[], nonce: number, maxFeePerGas: bigint, maxPriorityFeePerGas: bigint, blockTag: "latest" | "pending" | undefined, onlyPre1559: boolean, fixedGasLimitForEstimation: bigint | undefined, reputationManager: InterfaceReputationManager, logger: Logger, authorizationList?: SignedAuthorizationList): Promise<{
    simulatedOps: {
        owh: UserOperationWithHash;
        reason: string | undefined;
    }[];
    gasLimit: bigint;
}>;
export declare function flushStuckTransaction(publicClient: PublicClient, walletClient: WalletClient<Transport, Chain, Account | undefined>, wallet: Account, gasPrice: bigint, logger: Logger): Promise<void>;
//# sourceMappingURL=utils.d.ts.map