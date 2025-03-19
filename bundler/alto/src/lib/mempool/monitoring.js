"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
class Monitor {
    userOperationToStatus;
    userOperationTimeouts;
    timeout;
    constructor(timeout = 60 * 60 * 1000) {
        this.timeout = timeout;
        this.userOperationToStatus = {};
        this.userOperationTimeouts = {};
    }
    setUserOperationStatus(userOperation, status) {
        // Clear existing timer if it exists
        if (this.userOperationTimeouts[userOperation]) {
            clearTimeout(this.userOperationTimeouts[userOperation]);
        }
        // Set the user operation status
        this.userOperationToStatus[userOperation] = status;
        // Set a new timer and store its identifier
        this.userOperationTimeouts[userOperation] = setTimeout(() => {
            delete this.userOperationToStatus[userOperation];
            delete this.userOperationTimeouts[userOperation];
        }, this.timeout);
    }
    getUserOperationStatus(userOperation) {
        const status = this.userOperationToStatus[userOperation];
        if (status === undefined) {
            return {
                status: "not_found",
                transactionHash: null
            };
        }
        return status;
    }
}
exports.Monitor = Monitor;
//# sourceMappingURL=monitoring.js.map