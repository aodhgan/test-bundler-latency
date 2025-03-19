import type { EventManager } from "../handlers/index.js";
import type { MemoryMempool } from "../mempool/index.js";
import { type MempoolUserOperation } from "../types/index.js";
import type { Logger } from "../utils/index.js";
import { type Address, type Hash, type PublicClient } from "viem";
import type { AltoConfig } from "../createConfig.js";
type QueuedUserOperation = {
    entryPoint: Address;
    userOperationHash: Hash;
    mempoolUserOperation: MempoolUserOperation;
    nonceKey: bigint;
    nonceSequence: bigint;
    addedAt: number;
};
export declare class NonceQueuer {
    queuedUserOperations: QueuedUserOperation[];
    config: AltoConfig;
    mempool: MemoryMempool;
    logger: Logger;
    eventManager: EventManager;
    constructor({ config, mempool, eventManager }: {
        config: AltoConfig;
        mempool: MemoryMempool;
        eventManager: EventManager;
    });
    process(): Promise<void>;
    add(mempoolUserOperation: MempoolUserOperation, entryPoint: Address): void;
    resubmitUserOperation(mempoolUserOperation: MempoolUserOperation, entryPoint: Address): void;
    getAvailableUserOperations(publicClient: PublicClient): Promise<QueuedUserOperation[]>;
}
export {};
//# sourceMappingURL=nonceQueuer.d.ts.map