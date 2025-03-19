"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitrumL1FeeAbi = void 0;
exports.ArbitrumL1FeeAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "bool",
                name: "contractCreation",
                type: "bool"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "gasEstimateL1Component",
        outputs: [
            {
                internalType: "uint64",
                name: "gasEstimateForL1",
                type: "uint64"
            },
            {
                internalType: "uint256",
                name: "baseFee",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "l1BaseFeeEstimate",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];
//# sourceMappingURL=ArbitrumL1FeeAbi.js.map