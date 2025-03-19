"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStore = void 0;
class MemoryStore {
    // private monitoredTransactions: Map<HexData32, TransactionInfo> = new Map() // tx hash to info
    outstandingUserOperations = [];
    processingUserOperations = [];
    submittedUserOperations = [];
    logger;
    metrics;
    constructor(logger, metrics) {
        this.logger = logger;
        this.metrics = metrics;
    }
    addOutstanding(op) {
        const store = this.outstandingUserOperations;
        store.push(op);
        this.logger.debug({ userOpHash: op.userOperationHash, store: "outstanding" }, "added user op to mempool");
        this.metrics.userOperationsInMempool
            .labels({
            status: "outstanding"
        })
            .inc();
    }
    addProcessing(op) {
        const store = this.processingUserOperations;
        store.push(op);
        this.logger.debug({ userOpHash: op.userOperationHash, store: "processing" }, "added user op to mempool");
        this.metrics.userOperationsInMempool
            .labels({
            status: "processing"
        })
            .inc();
    }
    addSubmitted(op) {
        const store = this.submittedUserOperations;
        store.push(op);
        this.logger.debug({
            userOpHash: op.userOperation.userOperationHash,
            store: "submitted"
        }, "added user op to submitted mempool");
        this.metrics.userOperationsInMempool
            .labels({
            status: "submitted"
        })
            .inc();
    }
    removeOutstanding(userOpHash) {
        const index = this.outstandingUserOperations.findIndex((op) => op.userOperationHash === userOpHash);
        if (index === -1) {
            this.logger.warn({ userOpHash, store: "outstanding" }, "tried to remove non-existent user op from mempool");
            return;
        }
        this.outstandingUserOperations.splice(index, 1);
        this.logger.debug({ userOpHash, store: "outstanding" }, "removed user op from mempool");
        this.metrics.userOperationsInMempool
            .labels({
            status: "outstanding"
        })
            .dec();
    }
    removeProcessing(userOpHash) {
        const index = this.processingUserOperations.findIndex((op) => op.userOperationHash === userOpHash);
        if (index === -1) {
            this.logger.warn({ userOpHash, store: "outstanding" }, "tried to remove non-existent user op from mempool");
            return;
        }
        this.processingUserOperations.splice(index, 1);
        this.logger.debug({ userOpHash, store: "processing" }, "removed user op from mempool");
        this.metrics.userOperationsInMempool
            .labels({
            status: "processing"
        })
            .dec();
    }
    removeSubmitted(userOpHash) {
        const index = this.submittedUserOperations.findIndex((op) => op.userOperation.userOperationHash === userOpHash);
        if (index === -1) {
            this.logger.warn({ userOpHash, store: "submitted" }, "tried to remove non-existent user op from mempool");
            return;
        }
        this.submittedUserOperations.splice(index, 1);
        this.logger.debug({ userOpHash, store: "submitted" }, "removed user op from mempool");
        this.metrics.userOperationsInMempool
            .labels({
            status: "submitted"
        })
            .dec();
    }
    dumpOutstanding() {
        this.logger.trace({
            store: "outstanding",
            length: this.outstandingUserOperations.length
        }, "dumping mempool");
        return this.outstandingUserOperations;
    }
    dumpProcessing() {
        this.logger.trace({
            store: "processing",
            length: this.processingUserOperations.length
        }, "dumping mempool");
        return this.processingUserOperations;
    }
    dumpSubmitted() {
        this.logger.trace({ store: "submitted", length: this.submittedUserOperations.length }, "dumping mempool");
        return this.submittedUserOperations;
    }
    clear(from) {
        if (from === "outstanding") {
            this.outstandingUserOperations = [];
            this.logger.debug({ store: from, length: this.outstandingUserOperations.length }, "clearing mempool");
        }
        else if (from === "processing") {
            this.processingUserOperations = [];
            this.logger.debug({ store: from, length: this.processingUserOperations.length }, "clearing mempool");
        }
        else if (from === "submitted") {
            this.submittedUserOperations = [];
            this.logger.debug({ store: from, length: this.submittedUserOperations.length }, "clearing mempool");
        }
        else {
            throw new Error("unreachable");
        }
    }
}
exports.MemoryStore = MemoryStore;
//# sourceMappingURL=store.js.map