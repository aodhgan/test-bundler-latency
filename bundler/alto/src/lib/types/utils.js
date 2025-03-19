"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcError = exports.ExecutionErrors = exports.ValidationErrors = void 0;
var ValidationErrors;
(function (ValidationErrors) {
    ValidationErrors[ValidationErrors["InvalidRequest"] = -32601] = "InvalidRequest";
    ValidationErrors[ValidationErrors["InvalidFields"] = -32602] = "InvalidFields";
    ValidationErrors[ValidationErrors["SimulateValidation"] = -32500] = "SimulateValidation";
    ValidationErrors[ValidationErrors["SimulatePaymasterValidation"] = -32501] = "SimulatePaymasterValidation";
    ValidationErrors[ValidationErrors["OpcodeValidation"] = -32502] = "OpcodeValidation";
    ValidationErrors[ValidationErrors["ExpiresShortly"] = -32503] = "ExpiresShortly";
    ValidationErrors[ValidationErrors["Reputation"] = -32504] = "Reputation";
    ValidationErrors[ValidationErrors["InsufficientStake"] = -32505] = "InsufficientStake";
    ValidationErrors[ValidationErrors["UnsupportedSignatureAggregator"] = -32506] = "UnsupportedSignatureAggregator";
    ValidationErrors[ValidationErrors["InvalidSignature"] = -32507] = "InvalidSignature";
})(ValidationErrors || (exports.ValidationErrors = ValidationErrors = {}));
var ExecutionErrors;
(function (ExecutionErrors) {
    ExecutionErrors[ExecutionErrors["UserOperationReverted"] = -32521] = "UserOperationReverted";
})(ExecutionErrors || (exports.ExecutionErrors = ExecutionErrors = {}));
class RpcError extends Error {
    code;
    // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
    data;
    // error codes from: https://eips.ethereum.org/EIPS/eip-1474
    // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
    constructor(msg, code, data = undefined) {
        super(msg);
        this.code = code;
        this.data = data;
    }
}
exports.RpcError = RpcError;
//# sourceMappingURL=utils.js.map