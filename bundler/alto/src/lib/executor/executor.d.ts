import type { SenderManager } from "./index.js";
import type { EventManager, GasPriceManager } from "../handlers/index.js";
import type { InterfaceReputationManager, MemoryMempool } from "../mempool/index.js";
import { type Address, type BundleResult, type PackedUserOperation, type TransactionInfo, type UserOperation } from "../types/index.js";
import type { Logger, Metrics } from "../utils/index.js";
import { Mutex } from "async-mutex";
import { type Account } from "viem";
import type { AltoConfig } from "../createConfig.js";
export interface GasEstimateResult {
    preverificationGas: bigint;
    verificationGasLimit: bigint;
    callGasLimit: bigint;
}
export type HandleOpsTxParam = {
    ops: PackedUserOperation[];
    isUserOpVersion06: boolean;
    entryPoint: Address;
};
export type ReplaceTransactionResult = {
    status: "replaced";
    transactionInfo: TransactionInfo;
} | {
    status: "potentially_already_included";
} | {
    status: "failed";
};
export declare class Executor {
    config: AltoConfig;
    senderManager: SenderManager;
    logger: Logger;
    metrics: Metrics;
    reputationManager: InterfaceReputationManager;
    gasPriceManager: GasPriceManager;
    mutex: Mutex;
    mempool: MemoryMempool;
    eventManager: EventManager;
    constructor({ config, mempool, senderManager, reputationManager, metrics, gasPriceManager, eventManager }: {
        config: AltoConfig;
        mempool: MemoryMempool;
        senderManager: SenderManager;
        reputationManager: InterfaceReputationManager;
        metrics: Metrics;
        gasPriceManager: GasPriceManager;
        eventManager: EventManager;
    });
    cancelOps(_entryPoint: Address, _ops: UserOperation[]): Promise<void>;
    markWalletProcessed(executor: Account): Promise<void>;
    replaceTransaction(transactionInfo: TransactionInfo): Promise<ReplaceTransactionResult>;
    flushStuckTransactions(): Promise<void>;
    sendHandleOpsTransaction({ txParam, opts }: {
        txParam: HandleOpsTxParam;
        opts: {
            gasPrice: bigint;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            account: Account;
            gas: bigint;
            nonce: number;
        } | {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            gasPrice?: undefined;
            account: Account;
            gas: bigint;
            nonce: number;
        };
    }): Promise<`0x${string}`>;
    handleTransactionUnderPriced({ nonce, executor }: {
        nonce: number;
        executor: Account;
    }): Promise<void>;
    bundle(entryPoint: Address, ops: UserOperation[]): Promise<BundleResult[]>;
}
//# sourceMappingURL=executor.d.ts.map