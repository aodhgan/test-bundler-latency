"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptimismManager = void 0;
const slidingWindowTimedQueue_1 = require("../utils/slidingWindowTimedQueue.js");
class OptimismManager {
    l1FeeQueue;
    constructor(queueValidity) {
        this.l1FeeQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
    }
    getMinL1Fee() {
        return this.l1FeeQueue.getMinValue() || 1n;
    }
    saveL1FeeValue(l1Fee) {
        this.l1FeeQueue.saveValue(l1Fee);
    }
}
exports.OptimismManager = OptimismManager;
//# sourceMappingURL=optimismManager.js.map