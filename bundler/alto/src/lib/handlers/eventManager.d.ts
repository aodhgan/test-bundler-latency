import type { Metrics } from "../utils/index.js";
import type { Hex } from "viem";
import type { AltoConfig } from "../createConfig.js";
export declare class EventManager {
    private chainId;
    private logger;
    private metrics;
    private redisEventManagerQueue?;
    constructor({ config, metrics }: {
        config: AltoConfig;
        metrics: Metrics;
    });
    emitExecutionRevertedOnChain(userOperationHash: Hex, transactionHash: Hex, reason: Hex, blockNumber: bigint): Promise<void>;
    emitFailedOnChain(userOperationHash: Hex, transactionHash: Hex, blockNumber: bigint): Promise<void>;
    emitFrontranOnChain(userOperationHash: Hex, transactionHash: Hex, blockNumber: bigint): Promise<void>;
    emitIncludedOnChain(userOperationHash: Hex, transactionHash: Hex, blockNumber: bigint): Promise<void>;
    emitQueued(userOperationHash: Hex): Promise<void>;
    emitReceived(userOperationHash: Hex, timestamp?: number): Promise<void>;
    emitFailedValidation(userOperationHash: Hex, reason?: string, aaError?: string): Promise<void>;
    emitSubmitted(userOperationHash: Hex, transactionHash: Hex): Promise<void>;
    emitDropped(userOperationHash: Hex, reason?: string, aaError?: string): Promise<void>;
    emitAddedToMempool(userOperationHash: Hex): Promise<void>;
    private emitEvent;
}
//# sourceMappingURL=eventManager.d.ts.map