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
exports.flushStuckTransaction = exports.filterOpsAndEstimateGas = exports.simulatedOpsToResults = exports.getAuthorizationList = exports.isTransactionUnderpricedError = void 0;
const types_1 = require("../types/index.js");
const utils_1 = require("../utils/index.js");
// biome-ignore lint/style/noNamespaceImport: explicitly make it clear when sentry is used
const sentry = __importStar(require("@sentry/node"));
const viem_1 = require("viem");
const isTransactionUnderpricedError = (e) => {
    return e?.details
        ?.toLowerCase()
        .includes("replacement transaction underpriced");
};
exports.isTransactionUnderpricedError = isTransactionUnderpricedError;
const getAuthorizationList = (mempoolUserOperations) => {
    const authorizationList = mempoolUserOperations
        .map((op) => {
        if ((0, types_1.is7702Type)(op)) {
            return op.authorization;
        }
        return undefined;
    })
        .filter((auth) => auth !== undefined);
    return authorizationList.length > 0 ? authorizationList : undefined;
};
exports.getAuthorizationList = getAuthorizationList;
function simulatedOpsToResults(simulatedOps, transactionInfo) {
    return simulatedOps.map(({ reason, owh }) => {
        if (reason === undefined) {
            return {
                status: "success",
                value: {
                    userOperation: {
                        entryPoint: transactionInfo.entryPoint,
                        mempoolUserOperation: owh.mempoolUserOperation,
                        userOperationHash: owh.userOperationHash,
                        lastReplaced: Date.now(),
                        firstSubmitted: Date.now()
                    },
                    transactionInfo
                }
            };
        }
        return {
            status: "failure",
            error: {
                entryPoint: transactionInfo.entryPoint,
                userOperation: owh.mempoolUserOperation,
                userOpHash: owh.userOperationHash,
                reason: reason
            }
        };
    });
}
exports.simulatedOpsToResults = simulatedOpsToResults;
async function filterOpsAndEstimateGas(entryPoint, ep, wallet, ops, nonce, maxFeePerGas, maxPriorityFeePerGas, blockTag, onlyPre1559, fixedGasLimitForEstimation, reputationManager, logger, authorizationList) {
    const simulatedOps = ops.map((owh) => {
        return { owh, reason: undefined };
    });
    let gasLimit;
    const isUserOpV06 = (0, utils_1.isVersion06)(simulatedOps[0].owh.mempoolUserOperation);
    const gasOptions = onlyPre1559
        ? { gasPrice: maxFeePerGas }
        : { maxFeePerGas, maxPriorityFeePerGas };
    let fixedEstimationGasLimit = fixedGasLimitForEstimation;
    let retriesLeft = 5;
    while (simulatedOps.filter((op) => op.reason === undefined).length > 0) {
        try {
            const opsToSend = simulatedOps
                .filter((op) => op.reason === undefined)
                .map(({ owh }) => {
                const op = (0, types_1.deriveUserOperation)(owh.mempoolUserOperation);
                return isUserOpV06
                    ? op
                    : (0, utils_1.toPackedUserOperation)(op);
            });
            gasLimit = await ep.estimateGas.handleOps(
            // @ts-ignore - ep is set correctly for opsToSend, but typescript doesn't know that
            [opsToSend, wallet.address], {
                account: wallet,
                nonce: nonce,
                blockTag: blockTag,
                ...(fixedEstimationGasLimit !== undefined && {
                    gas: fixedEstimationGasLimit
                }),
                ...(authorizationList !== undefined && {
                    authorizationList
                }),
                ...gasOptions
            });
            return { simulatedOps, gasLimit };
        }
        catch (err) {
            logger.error({ err, blockTag }, "error estimating gas");
            const e = (0, utils_1.parseViemError)(err);
            if (e instanceof viem_1.ContractFunctionRevertedError) {
                const failedOpError = types_1.failedOpErrorSchema.safeParse(e.data);
                const failedOpWithRevertError = types_1.failedOpWithRevertErrorSchema.safeParse(e.data);
                let errorData = undefined;
                if (failedOpError.success) {
                    errorData = failedOpError.data.args;
                }
                if (failedOpWithRevertError.success) {
                    errorData = failedOpWithRevertError.data.args;
                }
                if (errorData) {
                    if (errorData.reason.indexOf("AA95 out of gas") !== -1 &&
                        retriesLeft > 0) {
                        retriesLeft--;
                        fixedEstimationGasLimit = (0, utils_1.scaleBigIntByPercent)(fixedEstimationGasLimit || BigInt(30_000_000), 110n);
                        continue;
                    }
                    logger.debug({
                        errorData,
                        userOpHashes: simulatedOps
                            .filter((op) => op.reason === undefined)
                            .map((op) => op.owh.userOperationHash)
                    }, "user op in batch invalid");
                    const failingOp = simulatedOps.filter((op) => op.reason === undefined)[Number(errorData.opIndex)];
                    failingOp.reason = `${errorData.reason}${errorData?.inner
                        ? ` - ${errorData.inner}`
                        : ""}`;
                    reputationManager.crashedHandleOps((0, types_1.deriveUserOperation)(failingOp.owh.mempoolUserOperation), entryPoint, failingOp.reason);
                }
                if (!(failedOpError.success || failedOpWithRevertError.success)) {
                    sentry.captureException(err);
                    logger.error({
                        error: `${failedOpError.error} ${failedOpWithRevertError.error}`
                    }, "failed to parse failedOpError");
                    return {
                        simulatedOps: [],
                        gasLimit: 0n
                    };
                }
            }
            else if (e instanceof viem_1.EstimateGasExecutionError ||
                err instanceof viem_1.EstimateGasExecutionError) {
                if (e?.cause instanceof viem_1.FeeCapTooLowError && retriesLeft > 0) {
                    retriesLeft--;
                    logger.info({ error: e.shortMessage }, "error estimating gas due to max fee < basefee");
                    if ("gasPrice" in gasOptions) {
                        gasOptions.gasPrice = (0, utils_1.scaleBigIntByPercent)(gasOptions.gasPrice || maxFeePerGas, 125n);
                    }
                    if ("maxFeePerGas" in gasOptions) {
                        gasOptions.maxFeePerGas = (0, utils_1.scaleBigIntByPercent)(gasOptions.maxFeePerGas || maxFeePerGas, 125n);
                    }
                    if ("maxPriorityFeePerGas" in gasOptions) {
                        gasOptions.maxPriorityFeePerGas = (0, utils_1.scaleBigIntByPercent)(gasOptions.maxPriorityFeePerGas ||
                            maxPriorityFeePerGas, 125n);
                    }
                    continue;
                }
                try {
                    let errorHexData = "0x";
                    if (err instanceof viem_1.EstimateGasExecutionError) {
                        errorHexData = (0, utils_1.getRevertErrorData)(err);
                    }
                    else {
                        errorHexData = e?.details.split("Reverted ")[1];
                    }
                    const errorResult = (0, viem_1.decodeErrorResult)({
                        abi: isUserOpV06 ? types_1.EntryPointV06Abi : types_1.EntryPointV07Abi,
                        data: errorHexData
                    });
                    logger.debug({
                        errorName: errorResult.errorName,
                        args: errorResult.args,
                        userOpHashes: simulatedOps
                            .filter((op) => op.reason === undefined)
                            .map((op) => op.owh.userOperationHash)
                    }, "user op in batch invalid");
                    if (errorResult.errorName !== "FailedOpWithRevert" &&
                        errorResult.errorName !== "FailedOp") {
                        logger.error({
                            errorName: errorResult.errorName,
                            args: errorResult.args
                        }, "unexpected error result");
                        return {
                            simulatedOps: [],
                            gasLimit: 0n
                        };
                    }
                    const failingOp = simulatedOps.filter((op) => op.reason === undefined)[Number(errorResult.args[0])];
                    failingOp.reason = errorResult.args[1];
                }
                catch (e) {
                    logger.error({ error: JSON.stringify(err) }, "failed to parse error result");
                    return {
                        simulatedOps: [],
                        gasLimit: 0n
                    };
                }
            }
            else {
                sentry.captureException(err);
                logger.error({ error: JSON.stringify(err), blockTag }, "error estimating gas");
                return { simulatedOps: [], gasLimit: 0n };
            }
        }
    }
    return { simulatedOps, gasLimit: 0n };
}
exports.filterOpsAndEstimateGas = filterOpsAndEstimateGas;
async function flushStuckTransaction(publicClient, walletClient, wallet, gasPrice, logger) {
    const latestNonce = await publicClient.getTransactionCount({
        address: wallet.address,
        blockTag: "latest"
    });
    const pendingNonce = await publicClient.getTransactionCount({
        address: wallet.address,
        blockTag: "pending"
    });
    logger.debug({ latestNonce, pendingNonce, wallet: wallet.address }, "checking for stuck transactions");
    // same nonce is okay
    if (latestNonce === pendingNonce) {
        return;
    }
    // one nonce ahead is also okay
    if (latestNonce + 1 === pendingNonce) {
        return;
    }
    logger.info({ latestNonce, pendingNonce, wallet: wallet.address }, "found stuck transaction, flushing");
    for (let nonceToFlush = latestNonce; nonceToFlush < pendingNonce; nonceToFlush++) {
        try {
            const txHash = await walletClient.sendTransaction({
                account: wallet,
                to: wallet.address,
                value: 0n,
                nonce: nonceToFlush,
                maxFeePerGas: gasPrice,
                maxPriorityFeePerGas: gasPrice
            });
            logger.debug({ txHash, nonce: nonceToFlush, wallet: wallet.address }, "flushed stuck transaction");
        }
        catch (e) {
            sentry.captureException(e);
            logger.warn({ error: e }, "error flushing stuck transaction");
        }
    }
}
exports.flushStuckTransaction = flushStuckTransaction;
//# sourceMappingURL=utils.js.map