"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
const sentry = __importStar(require("@sentry/node"));
const ioredis_1 = __importDefault(require("ioredis"));
const bull_1 = __importDefault(require("bull"));
class EventManager {
    chainId;
    logger;
    metrics;
    redisEventManagerQueue;
    constructor({ config, metrics }) {
        this.chainId = config.publicClient.chain.id;
        this.logger = config.getLogger({ module: "event_manager" }, {
            level: config.logLevel
        });
        this.metrics = metrics;
        if (config.redisQueueEndpoint && config.redisEventManagerQueueName) {
            const redis = new ioredis_1.default(config.redisQueueEndpoint);
            this.redisEventManagerQueue = new bull_1.default(config.redisEventManagerQueueName, {
                createClient: () => {
                    return redis;
                }
            });
            return;
        }
    }
    // emits when the userOperation was mined onchain but reverted during the callphase
    async emitExecutionRevertedOnChain(userOperationHash, transactionHash, reason, blockNumber) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "execution_reverted_onchain",
                transactionHash,
                data: {
                    blockNumber: Number(blockNumber),
                    reason
                }
            }
        });
    }
    // emits when the userOperation was mined onchain but failed EntryPoint validation
    async emitFailedOnChain(userOperationHash, transactionHash, blockNumber) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "failed_onchain",
                transactionHash,
                data: {
                    blockNumber: Number(blockNumber)
                }
            }
        });
    }
    // emits when the userOperation has been included onchain but bundled by a frontrunner
    async emitFrontranOnChain(userOperationHash, transactionHash, blockNumber) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "frontran_onchain",
                transactionHash,
                data: {
                    blockNumber: Number(blockNumber)
                }
            }
        });
    }
    // emits when the userOperation is included onchain
    async emitIncludedOnChain(userOperationHash, transactionHash, blockNumber) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "included_onchain",
                transactionHash,
                data: {
                    blockNumber: Number(blockNumber)
                }
            }
        });
    }
    // emits when the userOperation is placed in the nonce queue
    async emitQueued(userOperationHash) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "queued"
            }
        });
    }
    // emits when the userOperation is first seen
    async emitReceived(userOperationHash, timestamp) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "received"
            },
            timestamp
        });
    }
    // emits when the userOperation failed to get added to the mempool
    async emitFailedValidation(userOperationHash, reason, aaError) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "failed_validation",
                data: {
                    reason,
                    aaError
                }
            }
        });
    }
    // emits when the userOperation has been submitted to the network
    async emitSubmitted(userOperationHash, transactionHash) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "submitted",
                transactionHash
            }
        });
    }
    // emits when the userOperation was dropped from the internal mempool
    async emitDropped(userOperationHash, reason, aaError) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "dropped",
                data: {
                    reason,
                    aaError
                }
            }
        });
    }
    // emits when the userOperation was added to the internal mempool
    async emitAddedToMempool(userOperationHash) {
        await this.emitEvent({
            userOperationHash,
            event: {
                eventType: "added_to_mempool"
            }
        });
    }
    async emitEvent({ userOperationHash, event, timestamp }) {
        if (!this.redisEventManagerQueue) {
            return;
        }
        const entry = {
            userOperationHash,
            eventTimestamp: timestamp ?? Date.now(),
            chainId: this.chainId,
            ...event
        };
        // log to redis here
        let jobStatus;
        try {
            await this.redisEventManagerQueue.add(entry, {
                removeOnComplete: true,
                removeOnFail: true
            });
            jobStatus = "success";
        }
        catch (e) {
            this.logger.error(e, "Failed to send userOperation status event due to ");
            sentry.captureException(e);
            jobStatus = "failed";
        }
        this.metrics.emittedOpEvents
            .labels({
            event_type: event.eventType,
            status: jobStatus
        })
            .inc();
    }
}
exports.EventManager = EventManager;
//# sourceMappingURL=eventManager.js.map