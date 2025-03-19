export declare class MantleManager {
    private tokenRatioQueue;
    private scalarQueue;
    private rollupDataGasAndOverheadQueue;
    private l1GasPriceQueue;
    constructor(queueValidity: number);
    getMinMantleOracleValues(): {
        minTokenRatio: bigint;
        minScalar: bigint;
        minRollupDataGasAndOverhead: bigint;
        minL1GasPrice: bigint;
    };
    saveMantleOracleValues({ tokenRatio, scalar, rollupDataGasAndOverhead, l1GasPrice }: {
        tokenRatio: bigint;
        scalar: bigint;
        rollupDataGasAndOverhead: bigint;
        l1GasPrice: bigint;
    }): void;
}
//# sourceMappingURL=mantleGasPriceManager.d.ts.map