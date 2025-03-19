import { type StakeInfo, type UserOperation, type ValidationResult, type ValidationResultWithAggregation } from "../types/index.js";
import { type Address } from "viem";
import type { AltoConfig } from "../createConfig.js";
export interface InterfaceReputationManager {
    checkReputation(userOperation: UserOperation, entryPoint: Address, validationResult: ValidationResult | ValidationResultWithAggregation): Promise<void>;
    updateUserOperationSeenStatus(userOperation: UserOperation, entryPoint: Address): void;
    increaseUserOperationCount(userOperation: UserOperation): void;
    decreaseUserOperationCount(userOperation: UserOperation): void;
    getStatus(entryPoint: Address, address: Address | null): ReputationStatus;
    updateUserOperationIncludedStatus(userOperation: UserOperation, entryPoint: Address, accountDeployed: boolean): void;
    crashedHandleOps(userOperation: UserOperation, entryPoint: Address, reason: string): void;
    setReputation(entryPoint: Address, args: {
        address: Address;
        opsSeen: bigint;
        opsIncluded: bigint;
    }[]): void;
    dumpReputations(entryPoint: Address): ReputationEntry[];
    getStakeStatus(entryPoint: Address, address: Address): Promise<{
        stakeInfo: StakeInfo;
        isStaked: boolean;
    }>;
    clear(): void;
    clearEntityCount(): void;
}
export declare enum EntityType {
    Account = "Account",
    Paymaster = "Paymaster",
    Factory = "Factory",
    Aggregator = "Aggregator"
}
export type ReputationStatus = 0n | 1n | 2n;
export declare const ReputationStatuses: {
    ok: ReputationStatus;
    throttled: ReputationStatus;
    banned: ReputationStatus;
};
export interface ReputationEntry {
    address: Address;
    opsSeen: bigint;
    opsIncluded: bigint;
    status?: ReputationStatus;
}
export interface ReputationParams {
    minInclusionDenominator: bigint;
    throttlingSlack: bigint;
    banSlack: bigint;
}
export declare const BundlerReputationParams: ReputationParams;
export declare class NullReputationManager implements InterfaceReputationManager {
    checkReputation(_userOperation: UserOperation, _entryPoint: Address, _validationResult: ValidationResult | ValidationResultWithAggregation): Promise<void>;
    increaseUserOperationCount(_: UserOperation): void;
    decreaseUserOperationCount(_: UserOperation): void;
    updateUserOperationSeenStatus(_: UserOperation, _entryPoint: Address): void;
    updateUserOperationIncludedStatus(_: UserOperation, _entryPoint: Address, __: boolean): void;
    crashedHandleOps(_: UserOperation, _entryPoint: Address, __: string): void;
    setReputation(_: Address, __: {
        address: Address;
        opsSeen: bigint;
        opsIncluded: bigint;
    }[]): void;
    dumpReputations(_entryPoint: Address): ReputationEntry[];
    getStatus(_entryPoint: Address, _address: `0x${string}` | null): ReputationStatus;
    getStakeStatus(_entryPoint: Address, _: Address): Promise<{
        stakeInfo: StakeInfo;
        isStaked: boolean;
    }>;
    clear(): void;
    clearEntityCount(): void;
}
export declare class ReputationManager implements InterfaceReputationManager {
    private config;
    private entityCount;
    private throttledEntityMinMempoolCount;
    private maxMempoolUserOperationsPerSender;
    private maxMempoolUserOperationsPerNewUnstakedEntity;
    private inclusionRateFactor;
    private entries;
    private whitelist;
    private blackList;
    private bundlerReputationParams;
    private logger;
    constructor(config: AltoConfig);
    setReputation(entryPoint: Address, reputations: {
        address: Address;
        opsSeen: bigint;
        opsIncluded: bigint;
    }[]): void;
    dumpReputations(entryPoint: Address): ReputationEntry[];
    clear(): void;
    clearEntityCount(): void;
    getStakeStatus(entryPoint: Address, address: Address): Promise<{
        stakeInfo: StakeInfo;
        isStaked: boolean;
    }>;
    checkReputation(userOperation: UserOperation, entryPoint: Address, validationResult: ValidationResult | ValidationResultWithAggregation): Promise<void>;
    getEntityCount(address: Address): bigint;
    increaseSeen(entryPoint: Address, address: Address): void;
    updateCrashedHandleOps(entryPoint: Address, address: Address): void;
    crashedHandleOps(op: UserOperation, entryPoint: Address, reason: string): void;
    updateIncludedStatus(entryPoint: Address, address: Address): void;
    updateUserOperationIncludedStatus(userOperation: UserOperation, entryPoint: Address, accountDeployed: boolean): void;
    updateUserOperationSeenStatus(userOperation: UserOperation, entryPoint: Address): void;
    increaseUserOperationCount(userOperation: UserOperation): void;
    decreaseUserOperationCount(userOperation: UserOperation): void;
    checkReputationStatus(entryPoint: Address, entityType: EntityType, stakeInfo: StakeInfo, maxMempoolUserOperationsPerSenderOverride?: bigint): void;
    getStatus(entryPoint: Address, address: Address | null): ReputationStatus;
    checkBanned(entryPoint: Address, entityType: EntityType, stakeInfo: StakeInfo): void;
    checkThrottled(entryPoint: Address, entityType: EntityType, stakeInfo: StakeInfo): void;
    isWhiteListed(address: Address): boolean;
    checkStake(entryPoint: Address, entityType: EntityType, stakeInfo: StakeInfo): void;
    calCulateMaxMempoolUserOperationsPerEntity(entryPoint: Address, address: Address): bigint;
}
//# sourceMappingURL=reputationManager.d.ts.map