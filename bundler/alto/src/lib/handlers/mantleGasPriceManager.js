"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MantleManager = void 0;
const slidingWindowTimedQueue_1 = require("../utils/slidingWindowTimedQueue.js");
class MantleManager {
    tokenRatioQueue;
    scalarQueue;
    rollupDataGasAndOverheadQueue;
    l1GasPriceQueue;
    constructor(queueValidity) {
        this.tokenRatioQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
        this.scalarQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
        this.l1GasPriceQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
        this.rollupDataGasAndOverheadQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
    }
    getMinMantleOracleValues() {
        return {
            minTokenRatio: this.tokenRatioQueue.getMinValue() || 1n,
            minScalar: this.scalarQueue.getMinValue() || 1n,
            minRollupDataGasAndOverhead: this.rollupDataGasAndOverheadQueue.getMinValue() || 1n,
            minL1GasPrice: this.l1GasPriceQueue.getMinValue() || 1n
        };
    }
    saveMantleOracleValues({ tokenRatio, scalar, rollupDataGasAndOverhead, l1GasPrice }) {
        this.tokenRatioQueue.saveValue(tokenRatio);
        this.scalarQueue.saveValue(scalar);
        this.rollupDataGasAndOverheadQueue.saveValue(rollupDataGasAndOverhead);
        this.l1GasPriceQueue.saveValue(l1GasPrice);
    }
}
exports.MantleManager = MantleManager;
//# sourceMappingURL=mantleGasPriceManager.js.map