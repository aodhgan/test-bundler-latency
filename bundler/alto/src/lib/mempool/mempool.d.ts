import type { EventManager } from "../handlers/index.js";
import { type InterfaceValidator, type MempoolUserOperation, type ReferencedCodeHashes, type StorageMap, type SubmittedUserOperation, type TransactionInfo, type UserOperation, type UserOperationInfo } from "../types/index.js";
import type { HexData32 } from "../types/index.js";
import type { Metrics } from "../utils/index.js";
import { type Address } from "viem";
import type { Monitor } from "./monitoring.js";
import { type InterfaceReputationManager } from "./reputationManager.js";
import type { AltoConfig } from "../createConfig.js";
export declare class MemoryMempool {
    private config;
    private monitor;
    private reputationManager;
    private store;
    private throttledEntityBundleCount;
    private logger;
    private validator;
    private eventManager;
    constructor({ config, monitor, reputationManager, validator, metrics, eventManager }: {
        config: AltoConfig;
        monitor: Monitor;
        reputationManager: InterfaceReputationManager;
        validator: InterfaceValidator;
        metrics: Metrics;
        eventManager: EventManager;
    });
    replaceSubmitted(userOperation: UserOperationInfo, transactionInfo: TransactionInfo): void;
    markSubmitted(userOpHash: `0x${string}`, transactionInfo: TransactionInfo): void;
    dumpOutstanding(): UserOperationInfo[];
    dumpProcessing(): UserOperationInfo[];
    dumpSubmittedOps(): SubmittedUserOperation[];
    removeSubmitted(userOpHash: `0x${string}`): void;
    removeProcessing(userOpHash: `0x${string}`): void;
    checkEntityMultipleRoleViolation(op: UserOperation): Promise<void>;
    getKnownEntities(): {
        sender: Set<Address>;
        paymasters: Set<Address>;
        factories: Set<Address>;
    };
    add(mempoolUserOperation: MempoolUserOperation, entryPoint: Address, referencedContracts?: ReferencedCodeHashes): [boolean, string];
    shouldSkip(opInfo: UserOperationInfo, paymasterDeposit: {
        [paymaster: string]: bigint;
    }, stakedEntityCount: {
        [addr: string]: number;
    }, knownEntities: {
        sender: Set<`0x${string}`>;
        paymasters: Set<`0x${string}`>;
        factories: Set<`0x${string}`>;
    }, senders: Set<string>, storageMap: StorageMap): Promise<{
        skip: boolean;
        paymasterDeposit: {
            [paymaster: string]: bigint;
        };
        stakedEntityCount: {
            [addr: string]: number;
        };
        knownEntities: {
            sender: Set<`0x${string}`>;
            paymasters: Set<`0x${string}`>;
            factories: Set<`0x${string}`>;
        };
        senders: Set<string>;
        storageMap: StorageMap;
    }>;
    process(maxGasLimit: bigint, minOps?: number): Promise<UserOperationInfo[]>;
    get(opHash: HexData32): UserOperation | null;
    getQueuedUserOperations(userOperation: UserOperation, entryPoint: Address, _currentNonceValue?: bigint): Promise<UserOperation[]>;
    clear(): void;
}
//# sourceMappingURL=mempool.d.ts.map