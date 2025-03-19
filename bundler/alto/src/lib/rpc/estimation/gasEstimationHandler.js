"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasEstimationHandler = void 0;
const utils_1 = require("../../utils/index.js");
const viem_1 = require("viem");
const gasEstimationsV06_1 = require("./gasEstimationsV06.js");
const gasEstimationsV07_1 = require("./gasEstimationsV07.js");
function getStateOverrides({ addSenderBalanceOverride, userOperation, stateOverrides = {} }) {
    const result = { ...stateOverrides };
    if (addSenderBalanceOverride) {
        result[userOperation.sender] = {
            ...(0, utils_1.deepHexlify)(stateOverrides?.[userOperation.sender] || {}),
            balance: (0, viem_1.toHex)((0, viem_1.parseEther)("1000000"))
        };
    }
    return result;
}
class GasEstimationHandler {
    gasEstimatorV06;
    gasEstimatorV07;
    constructor(config) {
        this.gasEstimatorV06 = new gasEstimationsV06_1.GasEstimatorV06(config);
        this.gasEstimatorV07 = new gasEstimationsV07_1.GasEstimatorV07(config);
    }
    simulateHandleOp({ userOperation, queuedUserOperations, addSenderBalanceOverride, balanceOverrideEnabled, entryPoint, targetAddress, targetCallData, authorizationList, stateOverrides = {} }) {
        let finalStateOverride = undefined;
        // Add balance override only for v0.6 userOperations (so that prefund check during simulation passes).
        if (balanceOverrideEnabled && (0, utils_1.isVersion06)(userOperation)) {
            finalStateOverride = getStateOverrides({
                userOperation,
                addSenderBalanceOverride,
                stateOverrides
            });
        }
        if ((0, utils_1.isVersion06)(userOperation)) {
            return this.gasEstimatorV06.simulateHandleOpV06({
                userOperation,
                entryPoint,
                targetAddress,
                targetCallData,
                authorizationList,
                stateOverrides: finalStateOverride
            });
        }
        return this.gasEstimatorV07.simulateHandleOpV07({
            userOperation: userOperation,
            queuedUserOperations: queuedUserOperations,
            entryPoint,
            authorizationList,
            stateOverrides
        });
    }
}
exports.GasEstimationHandler = GasEstimationHandler;
//# sourceMappingURL=gasEstimationHandler.js.map