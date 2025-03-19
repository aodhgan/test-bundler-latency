"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlidingWindowTimedQueue = void 0;
class SlidingWindowTimedQueue {
    // Element 0 will always be the min.
    minDeque;
    // Element 0 will always be the max.
    maxDeque;
    latestValue;
    queueValidityMs;
    constructor(queueValidityMs) {
        this.minDeque = [];
        this.maxDeque = [];
        this.latestValue = null;
        this.queueValidityMs = queueValidityMs;
    }
    saveValue(value) {
        if (value === 0n) {
            return;
        }
        const timestamp = Date.now();
        // Remove expired entries.
        const cutoffTime = timestamp - this.queueValidityMs;
        this.minDeque = this.minDeque.filter((entry) => entry.timestamp >= cutoffTime);
        this.maxDeque = this.maxDeque.filter((entry) => entry.timestamp >= cutoffTime);
        // Maintain the min deque by removing all elements from the back that are larger then the new value.
        while (this.minDeque.length &&
            this.minDeque[this.minDeque.length - 1].value >= value) {
            this.minDeque.pop();
        }
        this.minDeque.push({ value, timestamp });
        // Maintain the max deque by removing all elements from the back that are smaller then the new value.
        while (this.maxDeque.length &&
            this.maxDeque[this.maxDeque.length - 1].value <= value) {
            this.maxDeque.pop();
        }
        this.maxDeque.push({ value, timestamp });
        // Record the latest value.
        this.latestValue = value;
    }
    getLatestValue() {
        return this.latestValue;
    }
    getMinValue() {
        return this.minDeque.length ? this.minDeque[0].value : null;
    }
    getMaxValue() {
        return this.maxDeque.length ? this.maxDeque[0].value : null;
    }
}
exports.SlidingWindowTimedQueue = SlidingWindowTimedQueue;
//# sourceMappingURL=slidingWindowTimedQueue.js.map