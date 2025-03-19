"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUserOperationReceipt = exports.getRequiredPrefund = exports.toUnpackedUserOperation = exports.encodeNonce = exports.getNonceKeyAndValue = exports.getUserOperationHash = exports.getUserOperationHashV07 = exports.getUserOperationHashV06 = exports.getBundleStatus = exports.getAddressFromInitCodeOrPaymasterAndData = exports.deepHexlify = exports.toPackedUserOperation = exports.unpackPaymasterAndData = exports.getPaymasterAndData = exports.unpackGasLimits = exports.getGasLimits = exports.unpackAccountGasLimits = exports.getAccountGasLimits = exports.unPackInitCode = exports.getInitCode = exports.isVersion07 = exports.isVersion06 = void 0;
const types_1 = require("../types/index.js");
const sentry = __importStar(require("@sentry/node"));
const viem_1 = require("viem");
const zod_1 = require("zod");
const zod_validation_error_1 = require("zod-validation-error");
const helpers_1 = require("./helpers.js");
// Type predicate check if the UserOperation is V06.
function isVersion06(operation) {
    return "initCode" in operation && "paymasterAndData" in operation;
}
exports.isVersion06 = isVersion06;
// Type predicate to check if the UserOperation is V07.
function isVersion07(operation) {
    return "factory" in operation && "paymaster" in operation;
}
exports.isVersion07 = isVersion07;
function getInitCode(unpackedUserOperation) {
    return unpackedUserOperation.factory
        ? (0, viem_1.concat)([
            unpackedUserOperation.factory,
            unpackedUserOperation.factoryData || "0x"
        ])
        : "0x";
}
exports.getInitCode = getInitCode;
function unPackInitCode(initCode) {
    if (initCode === "0x") {
        return {
            factory: null,
            factoryData: null
        };
    }
    return {
        factory: (0, viem_1.getAddress)((0, viem_1.slice)(initCode, 0, 20)),
        factoryData: (0, viem_1.slice)(initCode, 20)
    };
}
exports.unPackInitCode = unPackInitCode;
function getAccountGasLimits(unpackedUserOperation) {
    return (0, viem_1.concat)([
        (0, viem_1.pad)((0, viem_1.toHex)(unpackedUserOperation.verificationGasLimit), {
            size: 16
        }),
        (0, viem_1.pad)((0, viem_1.toHex)(unpackedUserOperation.callGasLimit), { size: 16 })
    ]);
}
exports.getAccountGasLimits = getAccountGasLimits;
function unpackAccountGasLimits(accountGasLimits) {
    return {
        verificationGasLimit: BigInt((0, viem_1.slice)(accountGasLimits, 0, 16)),
        callGasLimit: BigInt((0, viem_1.slice)(accountGasLimits, 16))
    };
}
exports.unpackAccountGasLimits = unpackAccountGasLimits;
function getGasLimits(unpackedUserOperation) {
    return (0, viem_1.concat)([
        (0, viem_1.pad)((0, viem_1.toHex)(unpackedUserOperation.maxPriorityFeePerGas), {
            size: 16
        }),
        (0, viem_1.pad)((0, viem_1.toHex)(unpackedUserOperation.maxFeePerGas), { size: 16 })
    ]);
}
exports.getGasLimits = getGasLimits;
function unpackGasLimits(gasLimits) {
    return {
        maxPriorityFeePerGas: BigInt((0, viem_1.slice)(gasLimits, 0, 16)),
        maxFeePerGas: BigInt((0, viem_1.slice)(gasLimits, 16))
    };
}
exports.unpackGasLimits = unpackGasLimits;
function getPaymasterAndData(unpackedUserOperation) {
    return unpackedUserOperation.paymaster
        ? (0, viem_1.concat)([
            unpackedUserOperation.paymaster,
            (0, viem_1.pad)((0, viem_1.toHex)(unpackedUserOperation.paymasterVerificationGasLimit || 0n), {
                size: 16
            }),
            (0, viem_1.pad)((0, viem_1.toHex)(unpackedUserOperation.paymasterPostOpGasLimit || 0n), {
                size: 16
            }),
            unpackedUserOperation.paymasterData || "0x"
        ])
        : "0x";
}
exports.getPaymasterAndData = getPaymasterAndData;
function unpackPaymasterAndData(paymasterAndData) {
    if (paymasterAndData === "0x") {
        return {
            paymaster: null,
            paymasterVerificationGasLimit: null,
            paymasterPostOpGasLimit: null,
            paymasterData: null
        };
    }
    const paymasterAndDataSize = (0, viem_1.size)(paymasterAndData);
    return {
        paymaster: (0, viem_1.getAddress)((0, viem_1.slice)(paymasterAndData, 0, 20)),
        paymasterVerificationGasLimit: BigInt((0, viem_1.slice)(paymasterAndData, 20, 36)),
        paymasterPostOpGasLimit: BigInt((0, viem_1.slice)(paymasterAndData, 36, 52)),
        paymasterData: paymasterAndDataSize > 52 ? (0, viem_1.slice)(paymasterAndData, 52) : null
    };
}
exports.unpackPaymasterAndData = unpackPaymasterAndData;
function toPackedUserOperation(unpackedUserOperation) {
    return {
        sender: unpackedUserOperation.sender,
        nonce: unpackedUserOperation.nonce,
        initCode: getInitCode(unpackedUserOperation),
        callData: unpackedUserOperation.callData,
        accountGasLimits: getAccountGasLimits(unpackedUserOperation),
        preVerificationGas: unpackedUserOperation.preVerificationGas,
        gasFees: getGasLimits(unpackedUserOperation),
        paymasterAndData: getPaymasterAndData(unpackedUserOperation),
        signature: unpackedUserOperation.signature
    };
}
exports.toPackedUserOperation = toPackedUserOperation;
// biome-ignore lint/suspicious/noExplicitAny: it's a generic type
function deepHexlify(obj) {
    if (typeof obj === "function") {
        return undefined;
    }
    if (obj == null || typeof obj === "string" || typeof obj === "boolean") {
        return obj;
    }
    if (typeof obj === "bigint") {
        return (0, viem_1.toHex)(obj);
    }
    if (obj._isBigNumber != null || typeof obj !== "object") {
        return (0, viem_1.toHex)(obj).replace(/^0x0/, "0x");
    }
    if (Array.isArray(obj)) {
        return obj.map((member) => deepHexlify(member));
    }
    return Object.keys(obj).reduce(
    // biome-ignore lint/suspicious/noExplicitAny: it's a recursive function, so it's hard to type
    (set, key) => {
        set[key] = deepHexlify(obj[key]);
        return set;
    }, {});
}
exports.deepHexlify = deepHexlify;
function getAddressFromInitCodeOrPaymasterAndData(data) {
    if (!data) {
        return null;
    }
    if (data.length >= 42) {
        return (0, viem_1.getAddress)(data.slice(0, 42));
    }
    return null;
}
exports.getAddressFromInitCodeOrPaymasterAndData = getAddressFromInitCodeOrPaymasterAndData;
// Return the status of the bundling transaction.
const getBundleStatus = async (isVersion06, txHash, publicClient, logger, entryPoint) => {
    try {
        const receipt = await publicClient.getTransactionReceipt({
            hash: txHash
        });
        const blockNumber = receipt.blockNumber;
        if (receipt.status === "reverted") {
            const bundlingStatus = {
                status: "reverted",
                isAA95: false
            };
            if ("error" in receipt) {
                try {
                    const match = receipt.error.match(/0x([a-fA-F0-9]+)?/);
                    if (match) {
                        const revertReason = match[0];
                        const decoded = (0, viem_1.decodeErrorResult)({
                            data: revertReason,
                            abi: (0, viem_1.parseAbi)([
                                "error FailedOp(uint256 opIndex, string reason)"
                            ])
                        });
                        if (decoded.args[1] === "AA95 out of gas") {
                            bundlingStatus.isAA95 = true;
                        }
                    }
                }
                catch (e) {
                    logger.error("Failed to decode userOperation revert reason due to ", e);
                }
            }
            return { bundlingStatus, blockNumber };
        }
        const userOperationDetails = receipt.logs
            .filter((log) => (0, helpers_1.areAddressesEqual)(log.address, entryPoint))
            .reduce((result, log) => {
            try {
                const { data, topics } = log;
                const { eventName, args } = (0, viem_1.decodeEventLog)({
                    abi: isVersion06 ? types_1.EntryPointV06Abi : types_1.EntryPointV07Abi,
                    data,
                    topics
                });
                if (eventName === "AccountDeployed" ||
                    eventName === "UserOperationRevertReason" ||
                    eventName === "UserOperationEvent") {
                    const opHash = args.userOpHash;
                    // create result entry if doesn't exist
                    result[opHash] ??= {
                        accountDeployed: false,
                        status: "succesful"
                    };
                    switch (eventName) {
                        case "AccountDeployed": {
                            result[opHash].accountDeployed = true;
                            break;
                        }
                        case "UserOperationRevertReason": {
                            result[opHash].revertReason = args.revertReason;
                            break;
                        }
                        case "UserOperationEvent": {
                            const status = args.success
                                ? "succesful"
                                : "calldata_phase_reverted";
                            result[opHash].status = status;
                            break;
                        }
                    }
                }
            }
            catch (e) {
                sentry.captureException(e);
            }
            return result;
        }, {});
        return {
            bundlingStatus: {
                status: "included",
                userOperationDetails
            },
            blockNumber
        };
    }
    catch {
        return {
            bundlingStatus: {
                status: "not_found"
            },
            blockNumber: undefined
        };
    }
};
exports.getBundleStatus = getBundleStatus;
const getUserOperationHashV06 = (userOperation, entryPointAddress, chainId) => {
    const hash = (0, viem_1.keccak256)((0, viem_1.encodeAbiParameters)([
        {
            name: "sender",
            type: "address"
        },
        {
            name: "nonce",
            type: "uint256"
        },
        {
            name: "initCodeHash",
            type: "bytes32"
        },
        {
            name: "callDataHash",
            type: "bytes32"
        },
        {
            name: "callGasLimit",
            type: "uint256"
        },
        {
            name: "verificationGasLimit",
            type: "uint256"
        },
        {
            name: "preVerificationGas",
            type: "uint256"
        },
        {
            name: "maxFeePerGas",
            type: "uint256"
        },
        {
            name: "maxPriorityFeePerGas",
            type: "uint256"
        },
        {
            name: "paymasterAndDataHash",
            type: "bytes32"
        }
    ], [
        userOperation.sender,
        userOperation.nonce,
        (0, viem_1.keccak256)(userOperation.initCode),
        (0, viem_1.keccak256)(userOperation.callData),
        userOperation.callGasLimit,
        userOperation.verificationGasLimit,
        userOperation.preVerificationGas,
        userOperation.maxFeePerGas,
        userOperation.maxPriorityFeePerGas,
        (0, viem_1.keccak256)(userOperation.paymasterAndData)
    ]));
    return (0, viem_1.keccak256)((0, viem_1.encodeAbiParameters)([
        {
            name: "userOpHash",
            type: "bytes32"
        },
        {
            name: "entryPointAddress",
            type: "address"
        },
        {
            name: "chainId",
            type: "uint256"
        }
    ], [hash, entryPointAddress, BigInt(chainId)]));
};
exports.getUserOperationHashV06 = getUserOperationHashV06;
const getUserOperationHashV07 = (userOperation, entryPointAddress, chainId) => {
    const hash = (0, viem_1.keccak256)((0, viem_1.encodeAbiParameters)([
        {
            name: "sender",
            type: "address"
        },
        {
            name: "nonce",
            type: "uint256"
        },
        {
            name: "initCodeHash",
            type: "bytes32"
        },
        {
            name: "callDataHash",
            type: "bytes32"
        },
        {
            name: "accountGasLimits",
            type: "bytes32"
        },
        {
            name: "preVerificationGas",
            type: "uint256"
        },
        {
            name: "gasFees",
            type: "bytes32"
        },
        {
            name: "paymasterAndDataHash",
            type: "bytes32"
        }
    ], [
        userOperation.sender,
        userOperation.nonce,
        (0, viem_1.keccak256)(userOperation.initCode),
        (0, viem_1.keccak256)(userOperation.callData),
        userOperation.accountGasLimits,
        userOperation.preVerificationGas,
        userOperation.gasFees,
        (0, viem_1.keccak256)(userOperation.paymasterAndData)
    ]));
    return (0, viem_1.keccak256)((0, viem_1.encodeAbiParameters)([
        {
            name: "userOpHash",
            type: "bytes32"
        },
        {
            name: "entryPointAddress",
            type: "address"
        },
        {
            name: "chainId",
            type: "uint256"
        }
    ], [hash, entryPointAddress, BigInt(chainId)]));
};
exports.getUserOperationHashV07 = getUserOperationHashV07;
const getUserOperationHash = (userOperation, entryPointAddress, chainId) => {
    if (isVersion06(userOperation)) {
        return (0, exports.getUserOperationHashV06)(userOperation, entryPointAddress, chainId);
    }
    return (0, exports.getUserOperationHashV07)(toPackedUserOperation(userOperation), entryPointAddress, chainId);
};
exports.getUserOperationHash = getUserOperationHash;
const getNonceKeyAndValue = (nonce) => {
    const nonceKey = nonce >> 64n; // first 192 bits of nonce
    const nonceSequence = nonce & 0xffffffffffffffffn; // last 64 bits of nonce
    return [nonceKey, nonceSequence];
};
exports.getNonceKeyAndValue = getNonceKeyAndValue;
const encodeNonce = ({ nonceKey, nonceSequence }) => {
    return (nonceKey << 64n) | nonceSequence;
};
exports.encodeNonce = encodeNonce;
function toUnpackedUserOperation(packedUserOperation) {
    const { factory, factoryData } = unPackInitCode(packedUserOperation.initCode);
    const { callGasLimit, verificationGasLimit } = unpackAccountGasLimits(packedUserOperation.accountGasLimits);
    const { maxFeePerGas, maxPriorityFeePerGas } = unpackGasLimits(packedUserOperation.gasFees);
    const { paymaster, paymasterVerificationGasLimit, paymasterPostOpGasLimit, paymasterData } = unpackPaymasterAndData(packedUserOperation.paymasterAndData);
    return {
        sender: packedUserOperation.sender,
        nonce: packedUserOperation.nonce,
        factory: factory,
        factoryData: factoryData,
        callData: packedUserOperation.callData,
        callGasLimit: callGasLimit,
        verificationGasLimit: verificationGasLimit,
        preVerificationGas: packedUserOperation.preVerificationGas,
        maxFeePerGas: maxFeePerGas,
        maxPriorityFeePerGas: maxPriorityFeePerGas,
        paymaster: paymaster,
        paymasterVerificationGasLimit: paymasterVerificationGasLimit,
        paymasterPostOpGasLimit: paymasterPostOpGasLimit,
        paymasterData: paymasterData,
        signature: packedUserOperation.signature
    };
}
exports.toUnpackedUserOperation = toUnpackedUserOperation;
const getRequiredPrefund = (userOperation) => {
    if (isVersion06(userOperation)) {
        const op = userOperation;
        const multiplier = (op.paymasterAndData?.length ?? 0) > 2 ? BigInt(3) : BigInt(1);
        const requiredGas = op.callGasLimit +
            op.verificationGasLimit * multiplier +
            op.preVerificationGas;
        return BigInt(requiredGas) * BigInt(op.maxFeePerGas);
    }
    const op = userOperation;
    const requiredGas = op.verificationGasLimit +
        op.callGasLimit +
        (op.paymasterVerificationGasLimit || 0n) +
        (op.paymasterPostOpGasLimit || 0n) +
        op.preVerificationGas;
    return requiredGas * op.maxFeePerGas;
};
exports.getRequiredPrefund = getRequiredPrefund;
function parseUserOperationReceipt(userOpHash, receipt) {
    const userOperationRevertReasonAbi = (0, viem_1.parseAbi)([
        "event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)"
    ]);
    const userOperationEventTopic = (0, viem_1.encodeEventTopics)({
        abi: types_1.EntryPointV06Abi,
        eventName: "UserOperationEvent"
    });
    const userOperationRevertReasonTopicEvent = (0, viem_1.encodeEventTopics)({
        abi: userOperationRevertReasonAbi
    })[0];
    let entryPoint = viem_1.zeroAddress;
    let revertReason = undefined;
    let startIndex = -1;
    let endIndex = -1;
    receipt.logs.forEach((log, index) => {
        if (log?.topics[0] === userOperationEventTopic[0]) {
            // process UserOperationEvent
            if (log.topics[1] === userOpHash) {
                // it's our userOpHash. save as end of logs array
                endIndex = index;
                entryPoint = log.address;
            }
            else if (endIndex === -1) {
                // it's a different hash. remember it as beginning index, but only if we didn't find our end index yet.
                startIndex = index;
            }
        }
        if (log?.topics[0] === userOperationRevertReasonTopicEvent) {
            // process UserOperationRevertReason
            if (log.topics[1] === userOpHash) {
                // it's our userOpHash. capture revert reason.
                const decodedLog = (0, viem_1.decodeEventLog)({
                    abi: userOperationRevertReasonAbi,
                    data: log.data,
                    topics: log.topics
                });
                revertReason = decodedLog.args.revertReason;
            }
        }
    });
    if (endIndex === -1) {
        throw new Error("fatal: no UserOperationEvent in logs");
    }
    const filteredLogs = receipt.logs.slice(startIndex + 1, endIndex);
    const logsParsing = zod_1.z.array(types_1.logSchema).safeParse(filteredLogs);
    if (!logsParsing.success) {
        const err = (0, zod_validation_error_1.fromZodError)(logsParsing.error);
        throw err;
    }
    const receiptParsing = types_1.receiptSchema.safeParse({
        ...receipt,
        status: receipt.status === "success" ? 1 : 0
    });
    if (!receiptParsing.success) {
        const err = (0, zod_validation_error_1.fromZodError)(receiptParsing.error);
        throw err;
    }
    const userOperationEvent = (0, viem_1.parseEventLogs)({
        abi: types_1.EntryPointV06Abi,
        eventName: "UserOperationEvent",
        args: {
            userOpHash
        },
        logs: receipt.logs
    })[0];
    let paymaster = userOperationEvent.args.paymaster;
    paymaster = paymaster === viem_1.zeroAddress ? undefined : paymaster;
    const userOperationReceipt = {
        userOpHash,
        entryPoint,
        sender: userOperationEvent.args.sender,
        nonce: userOperationEvent.args.nonce,
        paymaster,
        actualGasUsed: userOperationEvent.args.actualGasUsed,
        actualGasCost: userOperationEvent.args.actualGasCost,
        success: userOperationEvent.args.success,
        reason: revertReason,
        logs: logsParsing.data,
        receipt: receiptParsing.data
    };
    return userOperationReceipt;
}
exports.parseUserOperationReceipt = parseUserOperationReceipt;
//# sourceMappingURL=userop.js.map