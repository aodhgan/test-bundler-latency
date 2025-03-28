"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestStorageAccountBytecode = exports.TestStorageAccountAbi = void 0;
exports.TestStorageAccountAbi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldState",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newState",
                type: "uint256"
            }
        ],
        name: "State",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "eventSender",
                type: "address"
            }
        ],
        name: "TestMessage",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "entryPoint",
                type: "address"
            }
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "coin",
        outputs: [
            {
                internalType: "contract TestCoin",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum IPaymaster.PostOpMode",
                name: "",
                type: "uint8"
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "postOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "rule",
                type: "string"
            }
        ],
        name: "runRule",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract TestCoin",
                name: "_coin",
                type: "address"
            }
        ],
        name: "setCoin",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_state",
                type: "uint256"
            }
        ],
        name: "setState",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "maxCost",
                type: "uint256"
            }
        ],
        name: "validatePaymasterUserOp",
        outputs: [
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256"
            }
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];
exports.TestStorageAccountBytecode = "0x608060405234801561001057600080fd5b50611103806100206000396000f3fe60806040526004361061007b5760003560e01c8063a9a234091161004e578063a9a2340914610140578063a9e966b714610161578063cd330fb014610181578063f465c77e146101a157600080fd5b8063107679041461008057806311df9995146100955780633a871cdd146100d257806382e46b7514610100575b600080fd5b61009361008e366004610d1a565b6101cf565b005b3480156100a157600080fd5b506001546100b5906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100de57600080fd5b506100f26100ed366004610d3e565b61022d565b6040519081526020016100c9565b34801561010c57600080fd5b506100f261011b366004610d1a565b600180546001600160a01b0319166001600160a01b0392909216919091179055600090565b34801561014c57600080fd5b5061009361015b366004610d92565b50505050565b34801561016d57600080fd5b5061009361017c366004610e21565b6102d7565b34801561018d57600080fd5b506100f261019c366004610e50565b610318565b3480156101ad57600080fd5b506101c16101bc366004610d3e565b610a40565b6040516100c9929190610f59565b604051621cb65b60e51b8152600160048201526001600160a01b03821690630396cb609034906024016000604051808303818588803b15801561021157600080fd5b505af1158015610225573d6000803e3d6000fd5b505050505050565b6000811561028157604051600090339084908381818185875af1925050503d8060008114610277576040519150601f19603f3d011682016040523d82523d6000602084013e61027c565b606091505b505050505b6102cc610292610140860186610f7b565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061031892505050565b506000949350505050565b60005460408051918252602082018390527fe56f542cbdb0e18291d73ec9fd0b443112d0b4f547479e1303ffbc1007cc4f0f910160405180910390a1600055565b604080518082019091526006815265373ab6b132b960d11b6020918201528151908201206000907ff648814c67221440671fd7c2de979db4020a9320fb7985ff79ca8e7dced277f80361036c575043919050565b60408051808201909152600c81526b3130b630b731b296b9b2b63360a11b6020918201528251908301207fe1eb40348c4d42c6f93b840cbedec69afb249b96fd8af4bcbeed87fcef3815d80361042f576001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a08231906024015b602060405180830381865afa158015610405573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104299190610fc9565b92915050565b60408051808201909152600981526836b4b73a16b9b2b63360b91b6020918201528251908301207f39509d2173ec8a4262a15fa569ebaeed05ddef813417dbd2877e415703355b6e036104c7576001546040516335313c2160e11b81523060048201526001600160a01b0390911690636a627842906024015b6020604051808303816000875af1158015610405573d6000803e3d6000fd5b60408051808201909152600981526862616c616e63652d3160b81b6020918201528251908301207f48bf62c98ebd199a8c4fa7e17d20fdbda06a014deb397741460366ff7e1e07550361054557600180546040516370a0823160e01b815260048101929092526001600160a01b0316906370a08231906024016103e8565b6040805180820190915260068152656d696e742d3160d01b6020918201528251908301207ff794573481a09002e3e46f42daa5499159620e2a2cc3f5bdd26c0a2669544d93036105c057600180546040516335313c2160e11b815260048101929092526001600160a01b031690636a627842906024016104a8565b6040805180820190915260098152683932b0b216b9b2b63360b91b6020918201528251908301207fe747e51a5f7ad590b9fccede410368a5290f3882b98279585394331e760e1f270361061e5750506001546001600160a01b031690565b60408051808201909152601081526f616c6c6f77616e63652d73656c662d3160801b6020918201528251908301207fcc3befdbd4c845f2f5f48ac59e621de2a47c26950d22d6092b4c2ffafdfc7f9f036106a95760018054604051636eb1769f60e11b815230600482015260248101929092526001600160a01b03169063dd62ed3e906044016103e8565b60408051808201909152601081526f30b63637bbb0b731b2969896b9b2b63360811b6020918201528251908301207f46b549298973374f07ae868394b73f37c1cf6f25e976e36f99f1abbe6a5284e6036107345760018054604051636eb1769f60e11b815260048101929092523060248301526001600160a01b03169063dd62ed3e906044016103e8565b60408051808201909152600b81526a39ba393ab1ba16b9b2b63360a91b6020918201528251908301207e05e75ff00cb9bce888bba342b06e4b9d4695ba7caf0afdef7ef8cf6735bb7d036107fe5760015460405160016222a30f60e01b031981523060048201526001600160a01b039091169063ffdd5cf1906024015b6060604051808303816000875af11580156107d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f49190610fe2565b6040015192915050565b6040805180820190915260088152677374727563742d3160c01b6020918201528251908301207f416c09f102f2ef6799166d01fa870b6995b38e93784afdbdda0c68b94ab7eadd0361087e576001805460405160016222a30f60e01b0319815260048101929092526001600160a01b03169063ffdd5cf1906024016107b1565b60408051808201909152600c81526b1a5b9b995c8b5c995d995c9d60a21b6020918201528251908301207fc78ed5b2fc828eecd2c4fb3d39653e18c93b7d1815a5571aa088439dec36211a0361096c5760015460408051640100000000600160c01b03602084811b919091166325d9185c17831b908201526000926001600160a01b0316910160408051601f198184030181529082905261091e9161103e565b6000604051808303816000865af19150503d806000811461095b576040519150601f19603f3d011682016040523d82523d6000602084013e610960565b606091505b50600095945050505050565b6040805180820190915260038152626f6f6760e81b6020918201528251908301207f106495a8f613c9fc38a970d5fb1d6be2ed483721cd6d69eb72a826a46ca87b0503610a3757600160009054906101000a90046001600160a01b03166001600160a01b0316633b6a02f66127106040518263ffffffff1660e01b815260040160206040518083038160008887f193505050508015610a28575060408051601f3d908101601f19168201909252610a2591810190610fc9565b60015b15610a2f57505b506000919050565b61042982610b31565b6060600080610a53610120870187610f7b565b610a6191601490829061105a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505060408051808201909152600e81526d1c1bdcdd13dc0b58dbdb9d195e1d60921b60209182015283519084012092935050507fa5c5a2573a01687081241ad21c031e4220a49723dbd63e3fcdfcf266f286434203610b1857505060408051808201909152600c81526b1cdbdb594b58dbdb9d195e1d60a21b602082015290506000610b29565b610b23868686610c80565b92509250505b935093915050565b6040805160208082019092526000908190528251918301919091207fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47003610b7a57506000919050565b6040805180820190915260028152616f6b60f01b6020918201528251908301207f14502d3ab34ae28d404da8f6ec0501c6f295f66caa41e122cfa9b1291bc0f9e803610bc857506000919050565b60408051808201909152600481526319985a5b60e21b6020918201528251908301207f3b2564d7e0fe091d49b4c20f4632191e4ed6986bf993849879abfef9465def2503610c495760405162461bcd60e51b81526020600482015260096024820152686661696c2072756c6560b81b60448201526064015b60405180910390fd5b81604051602001610c5a9190611084565b60408051601f198184030181529082905262461bcd60e51b8252610c40916004016110ba565b6060600080610c93610120870187610f7b565b610ca191601490829061105a565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350610ce492508391506103189050565b50506040805160208101909152600080825290969095509350505050565b6001600160a01b0381168114610d1757600080fd5b50565b600060208284031215610d2c57600080fd5b8135610d3781610d02565b9392505050565b600080600060608486031215610d5357600080fd5b833567ffffffffffffffff811115610d6a57600080fd5b84016101608187031215610d7d57600080fd5b95602085013595506040909401359392505050565b60008060008060608587031215610da857600080fd5b843560038110610db757600080fd5b9350602085013567ffffffffffffffff80821115610dd457600080fd5b818701915087601f830112610de857600080fd5b813581811115610df757600080fd5b886020828501011115610e0957600080fd5b95986020929092019750949560400135945092505050565b600060208284031215610e3357600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610e6257600080fd5b813567ffffffffffffffff80821115610e7a57600080fd5b818401915084601f830112610e8e57600080fd5b813581811115610ea057610ea0610e3a565b604051601f8201601f19908116603f01168101908382118183101715610ec857610ec8610e3a565b81604052828152876020848701011115610ee157600080fd5b826020860160208301376000928101602001929092525095945050505050565b60005b83811015610f1c578181015183820152602001610f04565b8381111561015b5750506000910152565b60008151808452610f45816020860160208601610f01565b601f01601f19169290920160200192915050565b604081526000610f6c6040830185610f2d565b90508260208301529392505050565b6000808335601e19843603018112610f9257600080fd5b83018035915067ffffffffffffffff821115610fad57600080fd5b602001915036819003821315610fc257600080fd5b9250929050565b600060208284031215610fdb57600080fd5b5051919050565b600060608284031215610ff457600080fd5b6040516060810181811067ffffffffffffffff8211171561101757611017610e3a565b80604052508251815260208301516020820152604083015160408201528091505092915050565b60008251611050818460208701610f01565b9190910192915050565b6000808585111561106a57600080fd5b8386111561107757600080fd5b5050820193919092039150565b6d03ab735b737bbb710393ab6329d160951b8152600082516110ad81600e850160208701610f01565b91909101600e0192915050565b602081526000610d376020830184610f2d56fea2646970667358221220574b6029aec2914882063fae6590155da5a4c11dc20c39e193b554aa58e9d09364736f6c634300080f0033";
//# sourceMappingURL=TestStorageAccount.js.map