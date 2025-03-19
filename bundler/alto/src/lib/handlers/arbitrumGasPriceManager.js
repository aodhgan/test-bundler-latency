"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitrumManager = void 0;
const viem_1 = require("viem");
const slidingWindowTimedQueue_1 = require("../utils/slidingWindowTimedQueue.js");
class ArbitrumManager {
    l1BaseFeeQueue;
    l2BaseFeeQueue;
    constructor(queueValidity) {
        this.l1BaseFeeQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
        this.l2BaseFeeQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
    }
    saveL1BaseFee(baseFee) {
        this.l1BaseFeeQueue.saveValue(baseFee);
    }
    saveL2BaseFee(baseFee) {
        this.l2BaseFeeQueue.saveValue(baseFee);
    }
    getMinL1BaseFee() {
        let minL1BaseFee = this.l1BaseFeeQueue.getMinValue() || 1n;
        return minL1BaseFee;
    }
    getMaxL1BaseFee() {
        let maxL1BaseFee = this.l1BaseFeeQueue.getMaxValue() || viem_1.maxUint128;
        return maxL1BaseFee;
    }
    getMaxL2BaseFee() {
        let maxL2BaseFee = this.l2BaseFeeQueue.getMaxValue() || viem_1.maxUint128;
        return maxL2BaseFee;
    }
}
exports.ArbitrumManager = ArbitrumManager;
//# sourceMappingURL=arbitrumGasPriceManager.js.map