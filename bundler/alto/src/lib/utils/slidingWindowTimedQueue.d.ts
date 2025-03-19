export declare class SlidingWindowTimedQueue {
    private minDeque;
    private maxDeque;
    private latestValue;
    private queueValidityMs;
    constructor(queueValidityMs: number);
    saveValue(value: bigint): void;
    getLatestValue(): bigint | null;
    getMinValue(): bigint | null;
    getMaxValue(): bigint | null;
}
//# sourceMappingURL=slidingWindowTimedQueue.d.ts.map