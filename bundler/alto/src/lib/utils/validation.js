"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseViemError = exports.calcArbitrumPreVerificationGas = exports.calcOptimismPreVerificationGas = exports.calcMantlePreVerificationGas = exports.calcDefaultPreVerificationGas = exports.calcVerificationGasAndCallGasLimit = exports.calcPreVerificationGas = exports.packUserOpV07 = exports.removeZeroBytesFromUserOp = exports.packUserOpV06 = exports.DefaultGasOverheads = void 0;
const types_1 = require("../types/index.js");
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const bigInt_1 = require("./bigInt.js");
const userop_1 = require("./userop.js");
const ArbitrumL1FeeAbi_1 = require("../types/contracts/ArbitrumL1FeeAbi.js");
const crypto_1 = __importDefault(require("crypto"));
exports.DefaultGasOverheads = {
    fixed: 21000,
    perUserOp: 18300,
    perUserOpWord: 4,
    zeroByte: 4,
    nonZeroByte: 16,
    bundleSize: 1,
    sigSize: 65
};
/**
 * pack the userOperation
 * @param op
 *  "false" to pack entire UserOp, for calculating the calldata cost of putting it on-chain.
 */
function packUserOpV06(op) {
    return (0, viem_1.encodeAbiParameters)([
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
    ], [
        op.sender,
        BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),
        op.initCode,
        op.callData,
        BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),
        BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),
        BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),
        BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),
        BigInt("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),
        (0, viem_1.bytesToHex)(new Uint8Array(op.paymasterAndData.length).fill(255)),
        (0, viem_1.bytesToHex)(new Uint8Array(op.signature.length).fill(255))
    ]);
}
exports.packUserOpV06 = packUserOpV06;
function removeZeroBytesFromUserOp(userOpearation) {
    if ((0, userop_1.isVersion06)(userOpearation)) {
        return {
            sender: userOpearation.sender,
            nonce: userOpearation.nonce,
            initCode: userOpearation.initCode,
            callData: userOpearation.callData,
            callGasLimit: viem_1.maxUint256,
            verificationGasLimit: viem_1.maxUint256,
            preVerificationGas: viem_1.maxUint256,
            maxFeePerGas: viem_1.maxUint256,
            maxPriorityFeePerGas: viem_1.maxUint256,
            paymasterAndData: (0, viem_1.bytesToHex)(new Uint8Array(userOpearation.paymasterAndData.length).fill(255)),
            signature: (0, viem_1.bytesToHex)(new Uint8Array(userOpearation.signature.length).fill(255))
        };
    }
    const packedUserOperation = (0, userop_1.toPackedUserOperation)(userOpearation);
    return {
        sender: packedUserOperation.sender,
        nonce: viem_1.maxUint256,
        initCode: packedUserOperation.initCode,
        callData: packedUserOperation.callData,
        accountGasLimits: (0, viem_1.toHex)(viem_1.maxUint256),
        preVerificationGas: viem_1.maxUint256,
        gasFees: (0, viem_1.toHex)(viem_1.maxUint256),
        paymasterAndData: (0, viem_1.bytesToHex)(new Uint8Array(packedUserOperation.paymasterAndData.length).fill(255)),
        signature: (0, viem_1.bytesToHex)(new Uint8Array(packedUserOperation.signature.length).fill(255))
    };
}
exports.removeZeroBytesFromUserOp = removeZeroBytesFromUserOp;
function packUserOpV07(op) {
    return (0, viem_1.encodeAbiParameters)([
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
            name: "accountGasLimits",
            type: "bytes32"
        },
        {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256"
        },
        {
            internalType: "uint256",
            name: "gasFees",
            type: "bytes32"
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
    ], [
        op.sender,
        op.nonce, // need non zero bytes to get better estimations for preVerificationGas
        op.initCode,
        op.callData,
        op.accountGasLimits, // need non zero bytes to get better estimations for preVerificationGas
        op.preVerificationGas, // need non zero bytes to get better estimations for preVerificationGas
        op.gasFees, // need non zero bytes to get better estimations for preVerificationGas
        op.paymasterAndData,
        op.signature
    ]);
}
exports.packUserOpV07 = packUserOpV07;
async function calcPreVerificationGas({ config, userOperation, entryPoint, gasPriceManager, validate, overheads }) {
    let preVerificationGas = calcDefaultPreVerificationGas(userOperation, overheads);
    if (config.publicClient.chain.id === chains_1.lineaSepolia.id) {
        return preVerificationGas * 2n;
    }
    switch (config.chainType) {
        case "op-stack":
            return await calcOptimismPreVerificationGas(config.publicClient, userOperation, entryPoint, preVerificationGas, gasPriceManager, validate);
        case "arbitrum":
            return await calcArbitrumPreVerificationGas(config.publicClient, userOperation, entryPoint, preVerificationGas, gasPriceManager, validate);
        case "mantle":
            return await calcMantlePreVerificationGas(config.publicClient, userOperation, entryPoint, preVerificationGas, gasPriceManager, validate);
        default:
            return preVerificationGas;
    }
}
exports.calcPreVerificationGas = calcPreVerificationGas;
function calcVerificationGasAndCallGasLimit(userOperation, executionResult, chainId, gasLimits) {
    const verificationGasLimit = gasLimits?.verificationGasLimit ??
        (0, bigInt_1.scaleBigIntByPercent)(executionResult.preOpGas - userOperation.preVerificationGas, 150n);
    const calculatedCallGasLimit = gasLimits?.callGasLimit ??
        executionResult.paid / userOperation.maxFeePerGas -
            executionResult.preOpGas;
    let callGasLimit = (0, bigInt_1.maxBigInt)(calculatedCallGasLimit, 9000n);
    if ((0, userop_1.isVersion06)(userOperation)) {
        callGasLimit += 21000n + 50000n;
    }
    if (chainId === chains_1.baseGoerli.id ||
        chainId === chains_1.baseSepolia.id ||
        chainId === chains_1.base.id) {
        callGasLimit = (0, bigInt_1.scaleBigIntByPercent)(callGasLimit, 110n);
    }
    return {
        verificationGasLimit,
        callGasLimit,
        paymasterVerificationGasLimit: gasLimits?.paymasterVerificationGasLimit ?? 0n
    };
}
exports.calcVerificationGasAndCallGasLimit = calcVerificationGasAndCallGasLimit;
/**
 * calculate the preVerificationGas of the given UserOperation
 * preVerificationGas (by definition) is the cost overhead that can't be calculated on-chain.
 * it is based on parameters that are defined by the Ethereum protocol for external transactions.
 * @param userOp filled userOp to calculate. The only possible missing fields can be the signature and preVerificationGas itself
 * @param overheads gas overheads to use, to override the default values
 */
function calcDefaultPreVerificationGas(userOperation, overheads) {
    const ov = { ...exports.DefaultGasOverheads, ...(overheads ?? {}) };
    const p = removeZeroBytesFromUserOp(userOperation);
    let packed;
    if ((0, userop_1.isVersion06)(userOperation)) {
        packed = (0, viem_1.toBytes)(packUserOpV06(p));
    }
    else {
        packed = (0, viem_1.toBytes)(packUserOpV07(p));
    }
    const lengthInWord = (packed.length + 31) / 32;
    const callDataCost = packed
        .map((x) => (x === 0 ? ov.zeroByte : ov.nonZeroByte))
        .reduce((sum, x) => sum + x);
    const ret = Math.round(callDataCost +
        ov.fixed / ov.bundleSize +
        ov.perUserOp +
        ov.perUserOpWord * lengthInWord);
    return BigInt(ret);
}
exports.calcDefaultPreVerificationGas = calcDefaultPreVerificationGas;
// Returns back the bytes for the handleOps call
function getHandleOpsCallData(op, entryPoint) {
    if ((0, userop_1.isVersion07)(op)) {
        return (0, viem_1.encodeFunctionData)({
            abi: types_1.EntryPointV07Abi,
            functionName: "handleOps",
            args: [[removeZeroBytesFromUserOp(op)], entryPoint]
        });
    }
    return (0, viem_1.encodeFunctionData)({
        abi: types_1.EntryPointV06Abi,
        functionName: "handleOps",
        args: [[removeZeroBytesFromUserOp(op)], entryPoint]
    });
}
async function calcMantlePreVerificationGas(publicClient, op, entryPoint, staticFee, gasPriceManager, verify) {
    const data = getHandleOpsCallData(op, entryPoint);
    const serializedTx = (0, viem_1.serializeTransaction)({
        to: entryPoint,
        chainId: publicClient.chain.id,
        nonce: 999999,
        gasLimit: viem_1.maxUint64,
        gasPrice: viem_1.maxUint64,
        data
    }, {
        r: "0x123451234512345123451234512345123451234512345123451234512345",
        s: "0x123451234512345123451234512345123451234512345123451234512345",
        v: 28n
    });
    let tokenRatio;
    let scalar;
    let rollupDataGasAndOverhead;
    let l1GasPrice;
    const mantleManager = gasPriceManager.mantleManager;
    if (verify) {
        const minValues = mantleManager.getMinMantleOracleValues();
        tokenRatio = minValues.minTokenRatio;
        scalar = minValues.minScalar;
        rollupDataGasAndOverhead = minValues.minRollupDataGasAndOverhead;
        l1GasPrice = minValues.minL1GasPrice;
    }
    else {
        ;
        [tokenRatio, scalar, rollupDataGasAndOverhead, l1GasPrice] =
            await Promise.all([
                publicClient.readContract({
                    address: "0x420000000000000000000000000000000000000F",
                    abi: types_1.MantleBvmGasPriceOracleAbi,
                    functionName: "tokenRatio"
                }),
                publicClient.readContract({
                    address: "0x420000000000000000000000000000000000000F",
                    abi: types_1.MantleBvmGasPriceOracleAbi,
                    functionName: "scalar"
                }),
                publicClient.readContract({
                    address: "0x420000000000000000000000000000000000000F",
                    abi: types_1.MantleBvmGasPriceOracleAbi,
                    functionName: "getL1GasUsed",
                    args: [serializedTx]
                }),
                publicClient.readContract({
                    address: "0x420000000000000000000000000000000000000F",
                    abi: types_1.MantleBvmGasPriceOracleAbi,
                    functionName: "l1BaseFee"
                })
            ]);
        mantleManager.saveMantleOracleValues({
            tokenRatio,
            scalar,
            rollupDataGasAndOverhead,
            l1GasPrice
        });
    }
    const mantleL1RollUpFeeDivisionFactor = 1000000n;
    const l1RollupFee = (rollupDataGasAndOverhead * l1GasPrice * tokenRatio * scalar) /
        mantleL1RollUpFeeDivisionFactor;
    const l2MaxFee = BigInt(op.maxFeePerGas);
    return staticFee + l1RollupFee / l2MaxFee;
}
exports.calcMantlePreVerificationGas = calcMantlePreVerificationGas;
function getOpStackHandleOpsCallData(op, entryPoint, verify) {
    let modifiedOp = {
        ...op
    };
    // Only randomize signature during estimations.
    if (!verify) {
        const randomizeBytes = (length) => (0, viem_1.toHex)(crypto_1.default.randomBytes(length).toString("hex"));
        const sigLength = (0, viem_1.size)(op.signature);
        let newSignature;
        if (sigLength < 65) {
            // For short signatures, randomize the entire thing
            newSignature = randomizeBytes(sigLength);
        }
        else {
            // For longer signatures, only randomize the last 65 bytes
            const originalPart = (0, viem_1.slice)(op.signature, 0, sigLength - 65);
            const randomPart = randomizeBytes(65);
            newSignature = (0, viem_1.concat)([originalPart, randomPart]);
        }
        modifiedOp = {
            ...op,
            signature: newSignature
        };
    }
    if ((0, userop_1.isVersion07)(modifiedOp)) {
        return (0, viem_1.encodeFunctionData)({
            abi: types_1.EntryPointV07Abi,
            functionName: "handleOps",
            args: [[(0, userop_1.toPackedUserOperation)(modifiedOp)], entryPoint]
        });
    }
    return (0, viem_1.encodeFunctionData)({
        abi: types_1.EntryPointV06Abi,
        functionName: "handleOps",
        args: [[modifiedOp], entryPoint]
    });
}
async function calcOptimismPreVerificationGas(publicClient, op, entryPoint, staticFee, gasPriceManager, validate) {
    const data = getOpStackHandleOpsCallData(op, entryPoint, validate);
    const serializedTx = (0, viem_1.serializeTransaction)({
        to: entryPoint,
        chainId: publicClient.chain.id,
        maxFeePerGas: (0, viem_1.parseGwei)("120"),
        maxPriorityFeePerGas: (0, viem_1.parseGwei)("120"),
        gas: 10000000n,
        data
    }, {
        r: "0x123451234512345123451234512345123451234512345123451234512345",
        s: "0x123451234512345123451234512345123451234512345123451234512345",
        yParity: 1
    });
    const opGasPriceOracle = (0, viem_1.getContract)({
        abi: types_1.OpL1FeeAbi,
        address: "0x420000000000000000000000000000000000000F",
        client: {
            public: publicClient
        }
    });
    const [l1Fee, baseFeePerGas] = await Promise.all([
        validate
            ? gasPriceManager.optimismManager.getMinL1Fee()
            : opGasPriceOracle.read.getL1Fee([serializedTx]),
        validate
            ? gasPriceManager.getMaxBaseFeePerGas()
            : gasPriceManager.getBaseFee()
    ]);
    let l2MaxFee;
    let l2PriorityFee;
    if (validate) {
        l2MaxFee = await gasPriceManager.getHighestMaxFeePerGas();
        l2PriorityFee =
            baseFeePerGas +
                (await gasPriceManager.getHighestMaxPriorityFeePerGas());
    }
    else {
        const gasPrices = await gasPriceManager.getGasPrice();
        l2MaxFee = gasPrices.maxFeePerGas;
        l2PriorityFee = baseFeePerGas + gasPrices.maxPriorityFeePerGas;
    }
    const l2price = (0, bigInt_1.minBigInt)(l2MaxFee, l2PriorityFee);
    return staticFee + l1Fee / l2price;
}
exports.calcOptimismPreVerificationGas = calcOptimismPreVerificationGas;
async function calcArbitrumPreVerificationGas(publicClient, op, entryPoint, staticFee, gasPriceManager, validate) {
    const data = getHandleOpsCallData(op, entryPoint);
    const precompileAddress = "0x00000000000000000000000000000000000000C8";
    const serializedTx = (0, viem_1.serializeTransaction)({
        to: entryPoint,
        chainId: publicClient.chain?.id ?? 10,
        nonce: 999999,
        gasLimit: viem_1.maxUint64,
        gasPrice: viem_1.maxUint64,
        data
    }, {
        r: "0x123451234512345123451234512345123451234512345123451234512345",
        s: "0x123451234512345123451234512345123451234512345123451234512345",
        v: 28n
    });
    const arbGasPriceOracle = (0, viem_1.getContract)({
        abi: ArbitrumL1FeeAbi_1.ArbitrumL1FeeAbi,
        address: precompileAddress,
        client: {
            public: publicClient
        }
    });
    const { result } = await arbGasPriceOracle.simulate.gasEstimateL1Component([
        entryPoint,
        false,
        serializedTx
    ]);
    let [gasForL1, l2BaseFee, l1BaseFeeEstimate] = result;
    const arbitrumManager = gasPriceManager.arbitrumManager;
    arbitrumManager.saveL1BaseFee(l1BaseFeeEstimate);
    arbitrumManager.saveL2BaseFee(l2BaseFee);
    if (validate) {
        if (l1BaseFeeEstimate === 0n) {
            l1BaseFeeEstimate = arbitrumManager.getMaxL1BaseFee();
        }
        // gasEstimateL1Component source: https://github.com/OffchainLabs/nitro/blob/5cd7d6913eb6b4dedb08f6ea49d7f9802d2cc5b9/execution/nodeInterface/NodeInterface.go#L515-L551
        const feesForL1 = (gasForL1 * l2BaseFee) / l1BaseFeeEstimate;
        const minL1BaseFeeEstimate = arbitrumManager.getMinL1BaseFee();
        const maxL2BaseFee = arbitrumManager.getMaxL2BaseFee();
        gasForL1 = (feesForL1 * minL1BaseFeeEstimate) / maxL2BaseFee;
    }
    return staticFee + gasForL1;
}
exports.calcArbitrumPreVerificationGas = calcArbitrumPreVerificationGas;
function parseViemError(err) {
    if (err instanceof viem_1.ContractFunctionExecutionError ||
        err instanceof viem_1.TransactionExecutionError) {
        const e = err.cause;
        if (e instanceof viem_1.NonceTooLowError) {
            return e;
        }
        if (e instanceof viem_1.FeeCapTooLowError) {
            return e;
        }
        if (e instanceof viem_1.InsufficientFundsError) {
            return e;
        }
        if (e instanceof viem_1.IntrinsicGasTooLowError) {
            return e;
        }
        if (e instanceof viem_1.ContractFunctionRevertedError) {
            return e;
        }
        if (e instanceof viem_1.EstimateGasExecutionError) {
            return e;
        }
        if (e instanceof viem_1.InternalRpcError) {
            return e;
        }
        return;
    }
    return;
}
exports.parseViemError = parseViemError;
//# sourceMappingURL=validation.js.map