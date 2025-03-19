"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulationValidationResultStruct = void 0;
exports.simulationValidationResultStruct = [
    {
        components: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "preOpGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "prefund",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "accountValidationData",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "paymasterValidationData",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterContext",
                        type: "bytes"
                    }
                ],
                internalType: "struct IEntryPoint.ReturnInfo",
                name: "returnInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "senderInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "factoryInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "paymasterInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "aggregator",
                        type: "address"
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "stake",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "unstakeDelaySec",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct IStakeManager.StakeInfo",
                        name: "stakeInfo",
                        type: "tuple"
                    }
                ],
                internalType: "struct IEntryPoint.AggregatorStakeInfo",
                name: "aggregatorInfo",
                type: "tuple"
            }
        ],
        internalType: "struct IEntryPointSimulations.ValidationResult",
        name: "",
        type: "tuple"
    }
];
//# sourceMappingURL=types.js.map