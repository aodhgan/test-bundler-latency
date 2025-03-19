import type { EventManager, GasPriceManager } from "../handlers/index.js";
import type { InterfaceReputationManager, MemoryMempool, Monitor } from "../mempool/index.js";
import { type BundlingMode, type HexData32, type MempoolUserOperation, type TransactionInfo, type UserOperationInfo } from "../types/index.js";
import type { Metrics } from "../utils/index.js";
import { type Address, type Block, type Hash } from "viem";
import type { Executor } from "./executor.js";
import type { AltoConfig } from "../createConfig.js";
export declare class ExecutorManager {
    private config;
    private executor;
    private mempool;
    private monitor;
    private logger;
    private metrics;
    private reputationManager;
    private unWatch;
    private currentlyHandlingBlock;
    private gasPriceManager;
    private eventManager;
    private opsCount;
    private bundlingMode;
    constructor({ config, executor, mempool, monitor, reputationManager, metrics, gasPriceManager, eventManager }: {
        config: AltoConfig;
        executor: Executor;
        mempool: MemoryMempool;
        monitor: Monitor;
        reputationManager: InterfaceReputationManager;
        metrics: Metrics;
        gasPriceManager: GasPriceManager;
        eventManager: EventManager;
    });
    setBundlingMode(bundleMode: BundlingMode): Promise<void>;
    autoScalingBundling(): Promise<void>;
    getOpsToBundle(): Promise<UserOperationInfo[][]>;
    bundleNow(): Promise<Hash[]>;
    sendToExecutor(entryPoint: Address, mempoolOps: MempoolUserOperation[]): Promise<`0x${string}` | undefined>;
    bundle(opsToBundle?: UserOperationInfo[][]): Promise<void>;
    startWatchingBlocks(handleBlock: (block: Block) => void): void;
    stopWatchingBlocks(): void;
    private refreshTransactionStatus;
    checkFrontrun({ userOperationHash, transactionHash, blockNumber }: {
        userOperationHash: HexData32;
        transactionHash: Hash;
        blockNumber: bigint;
    }): void;
    getUserOperationReceipt(userOperationHash: HexData32): Promise<{
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
    } | null>;
    refreshUserOperationStatuses(): Promise<void>;
    handleBlock(block: Block): Promise<void>;
    replaceTransaction(txInfo: TransactionInfo, reason: string): Promise<void>;
}
//# sourceMappingURL=executorManager.d.ts.map