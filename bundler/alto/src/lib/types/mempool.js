"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionStatus = exports.is7702Type = exports.deriveUserOperation = void 0;
const deriveUserOperation = (op) => {
    if ((0, exports.is7702Type)(op)) {
        return op.userOperation;
    }
    return op;
};
exports.deriveUserOperation = deriveUserOperation;
const is7702Type = (op) => {
    return "authorization" in op;
};
exports.is7702Type = is7702Type;
var SubmissionStatus;
(function (SubmissionStatus) {
    SubmissionStatus["NotSubmitted"] = "not_submitted";
    SubmissionStatus["Rejected"] = "rejected";
    SubmissionStatus["Submitted"] = "submitted";
    SubmissionStatus["Included"] = "included";
})(SubmissionStatus || (exports.SubmissionStatus = SubmissionStatus = {}));
//# sourceMappingURL=mempool.js.map