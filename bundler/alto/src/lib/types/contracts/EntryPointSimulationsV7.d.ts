export declare const EntryPointV07SimulationsAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "_accountValidation";
    readonly inputs: readonly [{
        readonly name: "opIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "userOp";
        readonly type: "tuple";
        readonly internalType: "struct PackedUserOperation";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "outOpInfo";
        readonly type: "tuple";
        readonly internalType: "struct EntryPoint.UserOpInfo";
        readonly components: readonly [{
            readonly name: "mUserOp";
            readonly type: "tuple";
            readonly internalType: "struct EntryPoint.MemoryUserOp";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterVerificationGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterPostOpGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymaster";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "userOpHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "prefund";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "contextOffset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "preOpGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "validationData";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "paymasterValidationData";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "paymasterVerificationGasLimit";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "_paymasterValidation";
    readonly inputs: readonly [{
        readonly name: "opIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "userOp";
        readonly type: "tuple";
        readonly internalType: "struct PackedUserOperation";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "outOpInfo";
        readonly type: "tuple";
        readonly internalType: "struct EntryPoint.UserOpInfo";
        readonly components: readonly [{
            readonly name: "mUserOp";
            readonly type: "tuple";
            readonly internalType: "struct EntryPoint.MemoryUserOp";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterVerificationGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterPostOpGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymaster";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "userOpHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "prefund";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "contextOffset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "preOpGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "validationData";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "paymasterValidationData";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "paymasterVerificationGasLimit";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "_validatePrepayment";
    readonly inputs: readonly [{
        readonly name: "opIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "userOp";
        readonly type: "tuple";
        readonly internalType: "struct PackedUserOperation";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "outOpInfo";
        readonly type: "tuple";
        readonly internalType: "struct EntryPoint.UserOpInfo";
        readonly components: readonly [{
            readonly name: "mUserOp";
            readonly type: "tuple";
            readonly internalType: "struct EntryPoint.MemoryUserOp";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterVerificationGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterPostOpGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymaster";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "userOpHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "prefund";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "contextOffset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "preOpGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "validationData";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "paymasterValidationData";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "paymasterVerificationGasLimit";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "addStake";
    readonly inputs: readonly [{
        readonly name: "unstakeDelaySec";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "binarySearchCallGasLimit";
    readonly inputs: readonly [{
        readonly name: "queuedUserOps";
        readonly type: "tuple[]";
        readonly internalType: "struct SimulationArgs[]";
        readonly components: readonly [{
            readonly name: "op";
            readonly type: "tuple";
            readonly internalType: "struct PackedUserOperation";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCode";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "gasFees";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "paymasterAndData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "targetCallData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "targetUserOp";
        readonly type: "tuple";
        readonly internalType: "struct SimulationArgs";
        readonly components: readonly [{
            readonly name: "op";
            readonly type: "tuple";
            readonly internalType: "struct PackedUserOperation";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCode";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "gasFees";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "paymasterAndData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "targetCallData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "entryPoint";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "initialMinGas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "toleranceDelta";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "gasAllowance";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IEntryPointSimulations.TargetCallResult";
        readonly components: readonly [{
            readonly name: "gasUsed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "binarySearchPaymasterVerificationGasLimit";
    readonly inputs: readonly [{
        readonly name: "queuedUserOps";
        readonly type: "tuple[]";
        readonly internalType: "struct SimulationArgs[]";
        readonly components: readonly [{
            readonly name: "op";
            readonly type: "tuple";
            readonly internalType: "struct PackedUserOperation";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCode";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "gasFees";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "paymasterAndData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "targetCallData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "targetUserOp";
        readonly type: "tuple";
        readonly internalType: "struct SimulationArgs";
        readonly components: readonly [{
            readonly name: "op";
            readonly type: "tuple";
            readonly internalType: "struct PackedUserOperation";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCode";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "gasFees";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "paymasterAndData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "targetCallData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "entryPoint";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "initialMinGas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "toleranceDelta";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "gasAllowance";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IEntryPointSimulations.TargetCallResult";
        readonly components: readonly [{
            readonly name: "gasUsed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "binarySearchVerificationGasLimit";
    readonly inputs: readonly [{
        readonly name: "queuedUserOps";
        readonly type: "tuple[]";
        readonly internalType: "struct SimulationArgs[]";
        readonly components: readonly [{
            readonly name: "op";
            readonly type: "tuple";
            readonly internalType: "struct PackedUserOperation";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCode";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "gasFees";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "paymasterAndData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "targetCallData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "targetUserOp";
        readonly type: "tuple";
        readonly internalType: "struct SimulationArgs";
        readonly components: readonly [{
            readonly name: "op";
            readonly type: "tuple";
            readonly internalType: "struct PackedUserOperation";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initCode";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "gasFees";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "paymasterAndData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "targetCallData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "entryPoint";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "initialMinGas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "toleranceDelta";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "gasAllowance";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IEntryPointSimulations.TargetCallResult";
        readonly components: readonly [{
            readonly name: "gasUsed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "depositTo";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "deposits";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "deposit";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "staked";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "stake";
        readonly type: "uint112";
        readonly internalType: "uint112";
    }, {
        readonly name: "unstakeDelaySec";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "withdrawTime";
        readonly type: "uint48";
        readonly internalType: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getDepositInfo";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "info";
        readonly type: "tuple";
        readonly internalType: "struct IStakeManager.DepositInfo";
        readonly components: readonly [{
            readonly name: "deposit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "staked";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "stake";
            readonly type: "uint112";
            readonly internalType: "uint112";
        }, {
            readonly name: "unstakeDelaySec";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "withdrawTime";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getNonce";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "key";
        readonly type: "uint192";
        readonly internalType: "uint192";
    }];
    readonly outputs: readonly [{
        readonly name: "nonce";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getUserOpHash";
    readonly inputs: readonly [{
        readonly name: "userOp";
        readonly type: "tuple";
        readonly internalType: "struct PackedUserOperation";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "incrementNonce";
    readonly inputs: readonly [{
        readonly name: "key";
        readonly type: "uint192";
        readonly internalType: "uint192";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "innerHandleOp";
    readonly inputs: readonly [{
        readonly name: "callData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "opInfo";
        readonly type: "tuple";
        readonly internalType: "struct EntryPoint.UserOpInfo";
        readonly components: readonly [{
            readonly name: "mUserOp";
            readonly type: "tuple";
            readonly internalType: "struct EntryPoint.MemoryUserOp";
            readonly components: readonly [{
                readonly name: "sender";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterVerificationGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterPostOpGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "preVerificationGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymaster";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "userOpHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "prefund";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "contextOffset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "preOpGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "context";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "preGas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "actualGasCost";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "paymasterPostOpGasLimit";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "nonceSequenceNumber";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint192";
        readonly internalType: "uint192";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "simulateCall";
    readonly inputs: readonly [{
        readonly name: "entryPoint";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "payload";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "gas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "success";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "result";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "simulateCallAndRevert";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "gas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "simulateHandleOp";
    readonly inputs: readonly [{
        readonly name: "op";
        readonly type: "tuple";
        readonly internalType: "struct PackedUserOperation";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IEntryPointSimulations.ExecutionResult";
        readonly components: readonly [{
            readonly name: "preOpGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "accountValidationData";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterValidationData";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterVerificationGasLimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterPostOpGasLimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "targetSuccess";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "targetResult";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "simulateHandleOpBulk";
    readonly inputs: readonly [{
        readonly name: "ops";
        readonly type: "tuple[]";
        readonly internalType: "struct PackedUserOperation[]";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IEntryPointSimulations.ExecutionResult[]";
        readonly components: readonly [{
            readonly name: "preOpGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "accountValidationData";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterValidationData";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterVerificationGasLimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterPostOpGasLimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "targetSuccess";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "targetResult";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "simulateHandleOpLast";
    readonly inputs: readonly [{
        readonly name: "ops";
        readonly type: "tuple[]";
        readonly internalType: "struct PackedUserOperation[]";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IEntryPointSimulations.ExecutionResult";
        readonly components: readonly [{
            readonly name: "preOpGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "accountValidationData";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterValidationData";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterVerificationGasLimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "paymasterPostOpGasLimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "targetSuccess";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "targetResult";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "simulateValidation";
    readonly inputs: readonly [{
        readonly name: "userOp";
        readonly type: "tuple";
        readonly internalType: "struct PackedUserOperation";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IEntryPointSimulations.ValidationResult";
        readonly components: readonly [{
            readonly name: "returnInfo";
            readonly type: "tuple";
            readonly internalType: "struct IEntryPoint.ReturnInfo";
            readonly components: readonly [{
                readonly name: "preOpGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "prefund";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "accountValidationData";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterValidationData";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "senderInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "factoryInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "paymasterInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "aggregatorInfo";
            readonly type: "tuple";
            readonly internalType: "struct IEntryPoint.AggregatorStakeInfo";
            readonly components: readonly [{
                readonly name: "aggregator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stakeInfo";
                readonly type: "tuple";
                readonly internalType: "struct IStakeManager.StakeInfo";
                readonly components: readonly [{
                    readonly name: "stake";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "unstakeDelaySec";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "simulateValidationBulk";
    readonly inputs: readonly [{
        readonly name: "userOps";
        readonly type: "tuple[]";
        readonly internalType: "struct PackedUserOperation[]";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IEntryPointSimulations.ValidationResult[]";
        readonly components: readonly [{
            readonly name: "returnInfo";
            readonly type: "tuple";
            readonly internalType: "struct IEntryPoint.ReturnInfo";
            readonly components: readonly [{
                readonly name: "preOpGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "prefund";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "accountValidationData";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterValidationData";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "senderInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "factoryInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "paymasterInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "aggregatorInfo";
            readonly type: "tuple";
            readonly internalType: "struct IEntryPoint.AggregatorStakeInfo";
            readonly components: readonly [{
                readonly name: "aggregator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stakeInfo";
                readonly type: "tuple";
                readonly internalType: "struct IStakeManager.StakeInfo";
                readonly components: readonly [{
                    readonly name: "stake";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "unstakeDelaySec";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "simulateValidationLast";
    readonly inputs: readonly [{
        readonly name: "userOps";
        readonly type: "tuple[]";
        readonly internalType: "struct PackedUserOperation[]";
        readonly components: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "initCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "accountGasLimits";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "preVerificationGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasFees";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "paymasterAndData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IEntryPointSimulations.ValidationResult";
        readonly components: readonly [{
            readonly name: "returnInfo";
            readonly type: "tuple";
            readonly internalType: "struct IEntryPoint.ReturnInfo";
            readonly components: readonly [{
                readonly name: "preOpGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "prefund";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "accountValidationData";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterValidationData";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "paymasterContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "senderInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "factoryInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "paymasterInfo";
            readonly type: "tuple";
            readonly internalType: "struct IStakeManager.StakeInfo";
            readonly components: readonly [{
                readonly name: "stake";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "unstakeDelaySec";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "aggregatorInfo";
            readonly type: "tuple";
            readonly internalType: "struct IEntryPoint.AggregatorStakeInfo";
            readonly components: readonly [{
                readonly name: "aggregator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "stakeInfo";
                readonly type: "tuple";
                readonly internalType: "struct IStakeManager.StakeInfo";
                readonly components: readonly [{
                    readonly name: "stake";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "unstakeDelaySec";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "unlockStake";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "withdrawStake";
    readonly inputs: readonly [{
        readonly name: "withdrawAddress";
        readonly type: "address";
        readonly internalType: "address payable";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "withdrawTo";
    readonly inputs: readonly [{
        readonly name: "withdrawAddress";
        readonly type: "address";
        readonly internalType: "address payable";
    }, {
        readonly name: "withdrawAmount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "AccountDeployed";
    readonly inputs: readonly [{
        readonly name: "userOpHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "factory";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "paymaster";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "BeforeExecution";
    readonly inputs: readonly [];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Deposited";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "totalDeposit";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PostOpRevertReason";
    readonly inputs: readonly [{
        readonly name: "userOpHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "nonce";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "revertReason";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SignatureAggregatorChanged";
    readonly inputs: readonly [{
        readonly name: "aggregator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "StakeLocked";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "totalStaked";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "unstakeDelaySec";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "StakeUnlocked";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "withdrawTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "StakeWithdrawn";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "withdrawAddress";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UserOperationEvent";
    readonly inputs: readonly [{
        readonly name: "userOpHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "paymaster";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "nonce";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "success";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }, {
        readonly name: "actualGasCost";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "actualGasUsed";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UserOperationPrefundTooLow";
    readonly inputs: readonly [{
        readonly name: "userOpHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "nonce";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "UserOperationRevertReason";
    readonly inputs: readonly [{
        readonly name: "userOpHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "nonce";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "revertReason";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Withdrawn";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "withdrawAddress";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "FailedOp";
    readonly inputs: readonly [{
        readonly name: "opIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "reason";
        readonly type: "string";
        readonly internalType: "string";
    }];
}, {
    readonly type: "error";
    readonly name: "FailedOpWithRevert";
    readonly inputs: readonly [{
        readonly name: "opIndex";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "reason";
        readonly type: "string";
        readonly internalType: "string";
    }, {
        readonly name: "inner";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
}, {
    readonly type: "error";
    readonly name: "PostOpReverted";
    readonly inputs: readonly [{
        readonly name: "returnData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
}, {
    readonly type: "error";
    readonly name: "ReentrancyGuardReentrantCall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SenderAddressResult";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "SignatureValidationFailed";
    readonly inputs: readonly [{
        readonly name: "aggregator";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "SimulationOutOfGas";
    readonly inputs: readonly [{
        readonly name: "optimalGas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "minGas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "maxGas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "innerCallResult";
    readonly inputs: readonly [{
        readonly name: "remainingGas";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}];
//# sourceMappingURL=EntryPointSimulationsV7.d.ts.map