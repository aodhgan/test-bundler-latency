export declare class ArbitrumManager {
    private l1BaseFeeQueue;
    private l2BaseFeeQueue;
    constructor(queueValidity: number);
    saveL1BaseFee(baseFee: bigint): void;
    saveL2BaseFee(baseFee: bigint): void;
    getMinL1BaseFee(): bigint;
    getMaxL1BaseFee(): bigint;
    getMaxL2BaseFee(): bigint;
}
//# sourceMappingURL=arbitrumGasPriceManager.d.ts.map