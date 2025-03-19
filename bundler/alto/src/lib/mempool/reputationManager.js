"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReputationManager = exports.NullReputationManager = exports.BundlerReputationParams = exports.ReputationStatuses = exports.EntityType = void 0;
const types_1 = require("../types/index.js");
const utils_1 = require("../utils/index.js");
const viem_1 = require("viem");
var EntityType;
(function (EntityType) {
    EntityType["Account"] = "Account";
    EntityType["Paymaster"] = "Paymaster";
    EntityType["Factory"] = "Factory";
    EntityType["Aggregator"] = "Aggregator";
})(EntityType || (exports.EntityType = EntityType = {}));
exports.ReputationStatuses = {
    ok: 0n,
    throttled: 1n,
    banned: 2n
};
exports.BundlerReputationParams = {
    minInclusionDenominator: 10n,
    throttlingSlack: 10n,
    banSlack: 50n
};
class NullReputationManager {
    checkReputation(_userOperation, _entryPoint, _validationResult) {
        return Promise.resolve();
    }
    increaseUserOperationCount(_) {
        return;
    }
    decreaseUserOperationCount(_) {
        return;
    }
    updateUserOperationSeenStatus(_, _entryPoint) {
        return;
    }
    updateUserOperationIncludedStatus(_, _entryPoint, __) {
        return;
    }
    crashedHandleOps(_, _entryPoint, __) {
        return;
    }
    setReputation(_, __) {
        return;
    }
    dumpReputations(_entryPoint) {
        return [];
    }
    getStatus(_entryPoint, _address) {
        throw new Error("Method not implemented.");
    }
    getStakeStatus(_entryPoint, _) {
        throw new Error("Method not implemented.");
    }
    clear() {
        return;
    }
    clearEntityCount() {
        return;
    }
}
exports.NullReputationManager = NullReputationManager;
class ReputationManager {
    config;
    entityCount = {};
    throttledEntityMinMempoolCount;
    maxMempoolUserOperationsPerSender;
    maxMempoolUserOperationsPerNewUnstakedEntity;
    inclusionRateFactor;
    entries = {};
    whitelist = new Set();
    blackList = new Set();
    bundlerReputationParams;
    logger;
    constructor(config) {
        this.config = config;
        this.logger = config.getLogger({ module: "reputation_manager" }, {
            level: config.reputationManagerLogLevel || config.logLevel
        });
        this.maxMempoolUserOperationsPerNewUnstakedEntity = 10n;
        this.inclusionRateFactor = 10n;
        this.throttledEntityMinMempoolCount = 4n;
        this.maxMempoolUserOperationsPerSender = 4n;
        this.bundlerReputationParams = exports.BundlerReputationParams;
        // Currently we don't have any args for blacklist and whitelist
        // for (const address of blackList || []) {
        //     this.blackList.add(address)
        // }
        // for (const address of whiteList || []) {
        //     this.whitelist.add(address)
        // }
        for (const entryPoint of config.entrypoints) {
            this.entries[entryPoint] = {};
        }
    }
    setReputation(entryPoint, reputations) {
        for (const reputation of reputations) {
            const address = (0, viem_1.getAddress)(reputation.address);
            this.entries[entryPoint][address] = {
                address,
                opsSeen: BigInt(reputation.opsSeen),
                opsIncluded: BigInt(reputation.opsIncluded)
            };
        }
        this.logger.debug({
            reputations: this.entries
        }, "Reputation set");
    }
    dumpReputations(entryPoint) {
        return Object.values(this.entries[entryPoint]).map((entry) => ({
            ...entry,
            status: this.getStatus(entryPoint, entry.address)
        }));
    }
    clear() {
        for (const entryPoint of Object.keys(this.entries)) {
            this.entries[entryPoint] = {};
        }
        this.entityCount = {};
    }
    clearEntityCount() {
        this.entityCount = {};
    }
    async getStakeStatus(entryPoint, address) {
        const entryPointContract = (0, viem_1.getContract)({
            abi: types_1.EntryPointV06Abi,
            address: entryPoint,
            client: {
                public: this.config.publicClient
            }
        });
        const stakeInfo = await entryPointContract.read.getDepositInfo([
            address
        ]);
        const stake = BigInt(stakeInfo.stake);
        const unstakeDelaySec = BigInt(stakeInfo.unstakeDelaySec);
        const isStaked = stake >= this.config.minEntityStake &&
            unstakeDelaySec >= this.config.minEntityUnstakeDelay;
        return {
            stakeInfo: {
                addr: address,
                stake: stake,
                unstakeDelaySec: unstakeDelaySec
            },
            isStaked
        };
    }
    checkReputation(userOperation, entryPoint, validationResult) {
        this.increaseUserOperationCount(userOperation);
        this.checkReputationStatus(entryPoint, EntityType.Account, validationResult.senderInfo, this.maxMempoolUserOperationsPerSender);
        if (validationResult.paymasterInfo) {
            this.checkReputationStatus(entryPoint, EntityType.Paymaster, validationResult.paymasterInfo);
        }
        if (validationResult.factoryInfo) {
            this.checkReputationStatus(entryPoint, EntityType.Factory, validationResult.factoryInfo);
        }
        const aggregatorValidationResult = validationResult;
        if (aggregatorValidationResult.aggregatorInfo) {
            this.checkReputationStatus(entryPoint, EntityType.Aggregator, aggregatorValidationResult.aggregatorInfo.stakeInfo);
        }
        return Promise.resolve();
    }
    getEntityCount(address) {
        return this.entityCount[address] ?? 0;
    }
    increaseSeen(entryPoint, address) {
        let entry = this.entries[entryPoint][address];
        if (!entry) {
            this.entries[entryPoint][address] = {
                address,
                opsSeen: 0n,
                opsIncluded: 0n
            };
            entry = this.entries[entryPoint][address];
        }
        entry.opsSeen++;
    }
    updateCrashedHandleOps(entryPoint, address) {
        const entry = this.entries[entryPoint][address];
        if (!entry) {
            this.entries[entryPoint][address] = {
                address,
                opsSeen: 1000n,
                opsIncluded: 0n
            };
            return;
        }
        entry.opsSeen = 1000n;
        entry.opsIncluded = 0n;
    }
    crashedHandleOps(op, entryPoint, reason) {
        const isUserOpV06 = (0, utils_1.isVersion06)(op);
        if (reason.startsWith("AA3")) {
            // paymaster
            const paymaster = isUserOpV06
                ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(op.paymasterAndData)
                : op.paymaster;
            if (paymaster) {
                this.updateCrashedHandleOps(entryPoint, paymaster);
            }
        }
        else if (reason.startsWith("AA2")) {
            // sender
            const sender = op.sender;
            this.updateCrashedHandleOps(entryPoint, sender);
        }
        else if (reason.startsWith("AA1")) {
            // init code
            const factory = isUserOpV06
                ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(op.initCode)
                : op.factory;
            if (factory) {
                this.updateCrashedHandleOps(entryPoint, factory);
            }
        }
    }
    updateIncludedStatus(entryPoint, address) {
        let entry = this.entries[entryPoint][address];
        if (!entry) {
            this.entries[entryPoint][address] = {
                address,
                opsSeen: 0n,
                opsIncluded: 0n
            };
            entry = this.entries[entryPoint][address];
        }
        entry.opsIncluded++;
    }
    updateUserOperationIncludedStatus(userOperation, entryPoint, accountDeployed) {
        const sender = userOperation.sender;
        this.updateIncludedStatus(entryPoint, sender);
        const isUserOpV06 = (0, utils_1.isVersion06)(userOperation);
        const paymaster = isUserOpV06
            ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(userOperation.paymasterAndData)
            : userOperation.paymaster;
        if (paymaster) {
            this.updateIncludedStatus(entryPoint, paymaster);
        }
        if (accountDeployed) {
            const factory = (isUserOpV06
                ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(userOperation.initCode)
                : userOperation.factory);
            if (factory) {
                this.updateIncludedStatus(entryPoint, factory);
            }
        }
    }
    updateUserOperationSeenStatus(userOperation, entryPoint) {
        const sender = userOperation.sender;
        this.increaseSeen(entryPoint, sender);
        const isUserOpV06 = (0, utils_1.isVersion06)(userOperation);
        const paymaster = isUserOpV06
            ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(userOperation.paymasterAndData)
            : userOperation.paymaster;
        if (paymaster) {
            this.increaseSeen(entryPoint, paymaster);
        }
        const factory = (isUserOpV06
            ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(userOperation.initCode)
            : userOperation.factory);
        this.logger.debug({ userOperation, factory }, "updateUserOperationSeenStatus");
        if (factory) {
            this.increaseSeen(entryPoint, factory);
        }
    }
    increaseUserOperationCount(userOperation) {
        const sender = userOperation.sender;
        this.entityCount[sender] = (this.entityCount[sender] ?? 0n) + 1n;
        const isUserOpV06 = (0, utils_1.isVersion06)(userOperation);
        const paymaster = isUserOpV06
            ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(userOperation.paymasterAndData)
            : userOperation.paymaster;
        if (paymaster) {
            this.entityCount[paymaster] =
                (this.entityCount[paymaster] ?? 0n) + 1n;
        }
        const factory = (isUserOpV06
            ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(userOperation.initCode)
            : userOperation.factory);
        if (factory) {
            this.entityCount[factory] = (this.entityCount[factory] ?? 0n) + 1n;
        }
    }
    decreaseUserOperationCount(userOperation) {
        const sender = userOperation.sender;
        this.entityCount[sender] = (this.entityCount[sender] ?? 0n) - 1n;
        const isUserOpV06 = (0, utils_1.isVersion06)(userOperation);
        this.entityCount[sender] =
            this.entityCount[sender] < 0n ? 0n : this.entityCount[sender];
        const paymaster = isUserOpV06
            ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(userOperation.paymasterAndData)
            : userOperation.paymaster;
        if (paymaster) {
            this.entityCount[paymaster] =
                (this.entityCount[paymaster] ?? 0n) - 1n;
            this.entityCount[paymaster] =
                this.entityCount[paymaster] < 0n
                    ? 0n
                    : this.entityCount[paymaster];
        }
        const factory = (isUserOpV06
            ? (0, utils_1.getAddressFromInitCodeOrPaymasterAndData)(userOperation.initCode)
            : userOperation.factory);
        if (factory) {
            this.entityCount[factory] = (this.entityCount[factory] ?? 0n) - 1n;
            this.entityCount[factory] =
                this.entityCount[factory] < 0n ? 0n : this.entityCount[factory];
        }
    }
    checkReputationStatus(entryPoint, entityType, stakeInfo, maxMempoolUserOperationsPerSenderOverride) {
        const maxTxMempoolAllowedEntity = maxMempoolUserOperationsPerSenderOverride ??
            this.calCulateMaxMempoolUserOperationsPerEntity(entryPoint, stakeInfo.addr);
        this.checkBanned(entryPoint, entityType, stakeInfo);
        const entityCount = this.getEntityCount(stakeInfo.addr);
        if (entityCount > this.throttledEntityMinMempoolCount) {
            this.checkThrottled(entryPoint, entityType, stakeInfo);
        }
        if (entityCount > maxTxMempoolAllowedEntity) {
            this.checkStake(entryPoint, entityType, stakeInfo);
        }
    }
    getStatus(entryPoint, address) {
        if (!address || this.whitelist.has(address)) {
            return exports.ReputationStatuses.ok;
        }
        if (this.blackList.has(address)) {
            return exports.ReputationStatuses.banned;
        }
        const entry = this.entries[entryPoint][address];
        if (!entry) {
            return exports.ReputationStatuses.ok;
        }
        const minExpectedIncluded = entry.opsSeen / this.bundlerReputationParams.minInclusionDenominator;
        this.logger.debug({
            address: address,
            minExpectedIncluded,
            opsSeen: entry.opsSeen,
            minInclusionDenominator: this.bundlerReputationParams.minInclusionDenominator,
            opsIncluded: entry.opsIncluded,
            throttlingSlack: this.bundlerReputationParams.throttlingSlack,
            banSlack: this.bundlerReputationParams.banSlack
        }, "minExpectedIncluded");
        if (minExpectedIncluded <=
            entry.opsIncluded + this.bundlerReputationParams.throttlingSlack) {
            entry.status = exports.ReputationStatuses.ok;
            return exports.ReputationStatuses.ok;
        }
        if (minExpectedIncluded <=
            entry.opsIncluded + this.bundlerReputationParams.banSlack) {
            entry.status = exports.ReputationStatuses.throttled;
            return exports.ReputationStatuses.throttled;
        }
        entry.status = exports.ReputationStatuses.banned;
        return exports.ReputationStatuses.banned;
    }
    checkBanned(entryPoint, entityType, stakeInfo) {
        const status = this.getStatus(entryPoint, stakeInfo.addr);
        if (status === exports.ReputationStatuses.banned) {
            throw new types_1.RpcError(`${entityType} ${stakeInfo.addr} is banned from using the pimlico`, types_1.ValidationErrors.Reputation);
        }
    }
    checkThrottled(entryPoint, entityType, stakeInfo) {
        const status = this.getStatus(entryPoint, stakeInfo.addr);
        if (status === exports.ReputationStatuses.throttled) {
            throw new types_1.RpcError(`${entityType} ${stakeInfo.addr} is throttled by the pimlico`, types_1.ValidationErrors.Reputation);
        }
    }
    isWhiteListed(address) {
        return this.whitelist.has(address);
    }
    checkStake(entryPoint, entityType, stakeInfo) {
        if (this.isWhiteListed(stakeInfo.addr)) {
            return;
        }
        this.checkBanned(entryPoint, entityType, stakeInfo);
        if (stakeInfo.stake < this.config.minEntityStake) {
            if (stakeInfo.stake === 0n) {
                throw new types_1.RpcError(`${entityType} ${stakeInfo.addr} is unstaked and must stake minimum ${this.config.minEntityStake} to use pimlico`, types_1.ValidationErrors.InsufficientStake);
            }
            throw new types_1.RpcError(`${entityType} ${stakeInfo.addr} does not have enough stake to use pimlico`, types_1.ValidationErrors.InsufficientStake);
        }
        if (stakeInfo.unstakeDelaySec < this.config.minEntityUnstakeDelay) {
            throw new types_1.RpcError(`${entityType} ${stakeInfo.addr} does not have enough unstake delay to use pimlico`, types_1.ValidationErrors.InsufficientStake);
        }
    }
    calCulateMaxMempoolUserOperationsPerEntity(entryPoint, address) {
        const entry = this.entries[entryPoint][address];
        if (!entry) {
            return this.maxMempoolUserOperationsPerNewUnstakedEntity;
        }
        let inclusionRate = 0n;
        if (entry.opsSeen !== 0n) {
            // prevent NaN of Infinity in tests
            inclusionRate = entry.opsIncluded / entry.opsSeen;
        }
        return (this.maxMempoolUserOperationsPerNewUnstakedEntity +
            inclusionRate * this.inclusionRateFactor +
            (entry.opsIncluded > 10000n ? 10000n : entry.opsIncluded));
    }
}
exports.ReputationManager = ReputationManager;
//# sourceMappingURL=reputationManager.js.map