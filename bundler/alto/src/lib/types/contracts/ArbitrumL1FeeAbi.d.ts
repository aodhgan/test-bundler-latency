export declare const ArbitrumL1FeeAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "contractCreation";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "gasEstimateL1Component";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "gasEstimateForL1";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint256";
        readonly name: "baseFee";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "l1BaseFeeEstimate";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=ArbitrumL1FeeAbi.d.ts.map