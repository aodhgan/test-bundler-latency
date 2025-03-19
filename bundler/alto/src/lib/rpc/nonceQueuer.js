"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonceQueuer = void 0;
const types_1 = require("../types/index.js");
const utils_1 = require("../utils/index.js");
const viem_1 = require("viem");
class NonceQueuer {
    queuedUserOperations = [];
    config;
    mempool;
    logger;
    eventManager;
    constructor({ config, mempool, eventManager }) {
        this.config = config;
        this.mempool = mempool;
        this.logger = config.getLogger({ module: "nonce_queuer" }, {
            level: config.nonceQueuerLogLevel || config.logLevel
        });
        this.eventManager = eventManager;
        setInterval(() => {
            this.process();
        }, 2000);
    }
    async process() {
        // remove queued ops that have been in the queue for more than 15 minutes
        this.queuedUserOperations = this.queuedUserOperations.filter((qop) => {
            return qop.addedAt > Date.now() - 1000 * 60 * 15;
        });
        if (this.queuedUserOperations.length === 0) {
            return;
        }
        const availableOps = await this.getAvailableUserOperations(this.config.publicClient);
        if (availableOps.length === 0) {
            return;
        }
        this.queuedUserOperations = this.queuedUserOperations.filter((qop) => {
            return !availableOps.some((op) => {
                return op.userOperationHash === qop.userOperationHash;
            });
        });
        availableOps.map((op) => {
            this.resubmitUserOperation(op.mempoolUserOperation, op.entryPoint);
        });
        this.logger.info({ availableOps: availableOps.map((qop) => qop.userOperationHash) }, "submitted user operations from nonce queue");
    }
    add(mempoolUserOperation, entryPoint) {
        const userOperation = (0, types_1.deriveUserOperation)(mempoolUserOperation);
        const [nonceKey, nonceSequence] = (0, utils_1.getNonceKeyAndValue)(userOperation.nonce);
        const userOperationHash = (0, utils_1.getUserOperationHash)((0, types_1.deriveUserOperation)(mempoolUserOperation), entryPoint, this.config.publicClient.chain.id);
        this.queuedUserOperations.push({
            entryPoint,
            userOperationHash,
            mempoolUserOperation,
            nonceKey,
            nonceSequence,
            addedAt: Date.now()
        });
        this.eventManager.emitQueued(userOperationHash);
    }
    resubmitUserOperation(mempoolUserOperation, entryPoint) {
        const userOperation = mempoolUserOperation;
        this.logger.info({ userOperation: userOperation }, "submitting user operation from nonce queue");
        const result = this.mempool.add(mempoolUserOperation, entryPoint);
        if (result) {
            this.logger.info({ userOperation: userOperation, result: result }, "added user operation");
        }
        else {
            this.logger.error("error adding user operation");
        }
    }
    async getAvailableUserOperations(publicClient) {
        const queuedUserOperations = this.queuedUserOperations.slice();
        let results;
        try {
            results = await publicClient.multicall({
                contracts: queuedUserOperations.map((qop) => {
                    const userOperation = (0, types_1.deriveUserOperation)(qop.mempoolUserOperation);
                    const isUserOpV06 = (0, utils_1.isVersion06)(userOperation);
                    return {
                        address: qop.entryPoint,
                        abi: isUserOpV06 ? types_1.EntryPointV06Abi : types_1.EntryPointV07Abi,
                        functionName: "getNonce",
                        args: [userOperation.sender, qop.nonceKey]
                    };
                }),
                blockTag: this.config.blockTagSupport ? "latest" : undefined
            });
        }
        catch (error) {
            this.logger.error({ error: JSON.stringify(error) }, "error fetching with multiCall");
            results = await Promise.all(queuedUserOperations.map(async (qop) => {
                const userOperation = (0, types_1.deriveUserOperation)(qop.mempoolUserOperation);
                try {
                    const isUserOpV06 = (0, utils_1.isVersion06)(userOperation);
                    const entryPointContract = isUserOpV06
                        ? (0, viem_1.getContract)({
                            abi: types_1.EntryPointV06Abi,
                            address: qop.entryPoint,
                            client: {
                                public: publicClient
                            }
                        })
                        : (0, viem_1.getContract)({
                            abi: types_1.EntryPointV07Abi,
                            address: qop.entryPoint,
                            client: {
                                public: publicClient
                            }
                        });
                    const nonce = await entryPointContract.read.getNonce([userOperation.sender, qop.nonceKey], { blockTag: "latest" });
                    return {
                        result: nonce,
                        status: "success"
                    };
                }
                catch (e) {
                    return {
                        error: e,
                        status: "failure"
                    };
                }
            }));
        }
        if (results.length !== queuedUserOperations.length) {
            this.logger.error("error fetching nonces");
            return [];
        }
        const currentOutstandingOps = [];
        for (let i = 0; i < queuedUserOperations.length; i++) {
            const qop = queuedUserOperations[i];
            const result = results[i];
            if (result.status !== "success") {
                this.logger.error({ error: result.error }, "error fetching nonce");
                continue;
            }
            const onchainNonce = result.result;
            const qopNonce = (0, utils_1.encodeNonce)({
                nonceSequence: qop.nonceSequence,
                nonceKey: qop.nonceKey
            });
            if (onchainNonce === qopNonce) {
                currentOutstandingOps.push(qop);
            }
        }
        return currentOutstandingOps;
    }
}
exports.NonceQueuer = NonceQueuer;
//# sourceMappingURL=nonceQueuer.js.map