"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryPointExecutionErrorSchemaV07 = exports.entryPointExecutionErrorSchemaV06 = exports.vmExecutionError = exports.errorCauseSchema = exports.entryPointErrorsSchema = exports.validationResultWithAggregationErrorSchema = exports.validationResultWithAggregationSchema = exports.validationResultWithAggregationSchemaV07 = exports.validationResultWithAggregationSchemaV06 = exports.validationResultErrorSchema = exports.validationResultSchema = exports.validationResultSchemaV07 = exports.validationResultSchemaV06 = exports.executionResultErrorSchema = exports.binarySearchCallResultSchema = exports.executionResultSchema = exports.executionResultSchemaV07 = exports.executionResultSchemaV06 = exports.failedOpWithRevertErrorSchema = exports.failedOpWithRevertSchema = exports.failedOpErrorSchema = exports.failedOpSchema = exports.senderAddressResultErrorSchema = exports.senderAddressResultSchema = exports.signatureValidationFailedErrorSchema = exports.signatureValidationFailedSchema = void 0;
const viem_1 = require("viem");
const zod_1 = require("zod");
const _1 = require("./index.js");
const contracts_1 = require("./contracts/index.js");
const schemas_1 = require("./schemas.js");
// hexnum regex
const hexPattern = /^0x[0-9a-f]*$/;
exports.signatureValidationFailedSchema = zod_1.z
    .tuple([schemas_1.addressSchema])
    .transform((val) => {
    return { aggregator: val[0] };
});
exports.signatureValidationFailedErrorSchema = zod_1.z.object({
    args: exports.signatureValidationFailedSchema,
    errorName: zod_1.z.literal("SignatureValidationFailed")
});
exports.senderAddressResultSchema = zod_1.z
    .tuple([schemas_1.addressSchema])
    .transform((val) => {
    return {
        sender: val[0]
    };
});
exports.senderAddressResultErrorSchema = zod_1.z.object({
    args: exports.senderAddressResultSchema,
    errorName: zod_1.z.literal("SenderAddressResult")
});
exports.failedOpSchema = zod_1.z
    .tuple([zod_1.z.bigint(), zod_1.z.string()])
    .transform((val) => {
    return { opIndex: val[0], reason: val[1] };
});
exports.failedOpErrorSchema = zod_1.z.object({
    args: exports.failedOpSchema,
    errorName: zod_1.z.literal("FailedOp")
});
exports.failedOpWithRevertSchema = zod_1.z
    .tuple([zod_1.z.bigint(), zod_1.z.string(), zod_1.z.string()])
    .transform((val) => {
    return { opIndex: val[0], reason: val[1], inner: val[2] };
});
exports.failedOpWithRevertErrorSchema = zod_1.z.object({
    args: exports.failedOpWithRevertSchema,
    errorName: zod_1.z.literal("FailedOpWithRevert")
});
exports.executionResultSchemaV06 = zod_1.z
    .tuple([
    zod_1.z.bigint(),
    zod_1.z.bigint(),
    zod_1.z.number(),
    zod_1.z.number(),
    zod_1.z.boolean(),
    zod_1.z.string().regex(hexPattern)
])
    .transform((val) => {
    return {
        preOpGas: val[0],
        paid: val[1],
        validAfter: val[2],
        validUntil: val[3],
        targetSuccess: val[4],
        targetResult: val[5]
    };
});
exports.executionResultSchemaV07 = zod_1.z
    .tuple([
    zod_1.z.bigint(),
    zod_1.z.bigint(),
    zod_1.z.bigint(),
    zod_1.z.bigint(),
    zod_1.z.bigint(),
    zod_1.z.bigint(),
    zod_1.z.boolean(),
    zod_1.z.string().regex(hexPattern)
])
    .transform((val) => {
    return {
        preOpGas: val[0],
        paid: val[1],
        validationData: val[2],
        paymasterValidationData: val[3],
        paymasterVerificationGasLimit: val[4],
        paymasterPostOpGasLimit: val[5],
        targetSuccess: val[6],
        targetResult: val[7]
    };
});
exports.executionResultSchema = zod_1.z.union([
    exports.executionResultSchemaV06,
    exports.executionResultSchemaV07
]);
exports.binarySearchCallResultSchema = zod_1.z.object({
    gasUsed: zod_1.z.bigint(),
    success: zod_1.z.boolean(),
    returnData: zod_1.z
        .string()
        .regex(hexPattern)
        .transform((val) => val)
});
exports.executionResultErrorSchema = zod_1.z.object({
    args: exports.executionResultSchema,
    errorName: zod_1.z.literal("ExecutionResult")
});
const stakeInfoSchema = zod_1.z.object({
    addr: zod_1.z.string().optional(),
    stake: zod_1.z.bigint(),
    unstakeDelaySec: zod_1.z.bigint()
});
exports.validationResultSchemaV06 = zod_1.z
    .tuple([
    zod_1.z.object({
        preOpGas: zod_1.z.bigint(),
        prefund: zod_1.z.bigint(),
        sigFailed: zod_1.z.boolean(),
        validAfter: zod_1.z.number(),
        validUntil: zod_1.z.number(),
        paymasterContext: zod_1.z
            .string()
            .regex(hexPattern)
            .transform((val) => val)
    }),
    stakeInfoSchema,
    stakeInfoSchema.optional(),
    stakeInfoSchema.optional()
])
    .transform((val) => {
    return {
        returnInfo: val[0],
        senderInfo: val[1],
        factoryInfo: val[2],
        paymasterInfo: val[3]
    };
});
exports.validationResultSchemaV07 = zod_1.z
    .tuple([
    zod_1.z.object({
        preOpGas: zod_1.z.bigint(),
        prefund: zod_1.z.bigint(),
        accountValidationData: zod_1.z.bigint(),
        paymasterValidationData: zod_1.z.bigint(),
        accountSigFailed: zod_1.z.boolean().optional(),
        paymasterSigFailed: zod_1.z.boolean().optional(),
        validAfter: zod_1.z.number().optional(),
        validUntil: zod_1.z.number().optional(),
        paymasterContext: zod_1.z
            .string()
            .regex(hexPattern)
            .transform((val) => val)
    }),
    stakeInfoSchema,
    stakeInfoSchema.optional(),
    stakeInfoSchema.optional()
])
    .transform((val) => {
    return {
        returnInfo: val[0],
        senderInfo: val[1],
        factoryInfo: val[2],
        paymasterInfo: val[3]
    };
});
exports.validationResultSchema = zod_1.z.union([
    exports.validationResultSchemaV06,
    exports.validationResultSchemaV07
]);
exports.validationResultErrorSchema = zod_1.z.object({
    args: exports.validationResultSchema,
    errorName: zod_1.z.literal("ValidationResult")
});
exports.validationResultWithAggregationSchemaV06 = zod_1.z
    .tuple([
    zod_1.z.object({
        preOpGas: zod_1.z.bigint(),
        prefund: zod_1.z.bigint(),
        sigFailed: zod_1.z.boolean(),
        validAfter: zod_1.z.number(),
        validUntil: zod_1.z.number(),
        paymasterContext: zod_1.z
            .string()
            .regex(hexPattern)
            .transform((val) => val)
    }),
    stakeInfoSchema,
    stakeInfoSchema.optional(),
    stakeInfoSchema.optional(),
    zod_1.z
        .object({
        aggregator: schemas_1.addressSchema,
        stakeInfo: stakeInfoSchema
    })
        .optional()
])
    .transform((val) => {
    return {
        returnInfo: val[0],
        senderInfo: val[1],
        factoryInfo: val[2],
        paymasterInfo: val[3],
        aggregatorInfo: val[4]
    };
});
exports.validationResultWithAggregationSchemaV07 = zod_1.z
    .tuple([
    zod_1.z.object({
        preOpGas: zod_1.z.bigint(),
        prefund: zod_1.z.bigint(),
        accountValidationData: zod_1.z.bigint(),
        paymasterValidationData: zod_1.z.bigint(),
        accountSigFailed: zod_1.z.boolean().optional(),
        paymasterSigFailed: zod_1.z.boolean().optional(),
        validAfter: zod_1.z.number().optional(),
        validUntil: zod_1.z.number().optional(),
        paymasterContext: zod_1.z
            .string()
            .regex(hexPattern)
            .transform((val) => val)
    }),
    stakeInfoSchema,
    stakeInfoSchema.optional(),
    stakeInfoSchema.optional(),
    zod_1.z
        .object({
        aggregator: schemas_1.addressSchema,
        stakeInfo: stakeInfoSchema
    })
        .optional()
])
    .transform((val) => {
    return {
        returnInfo: val[0],
        senderInfo: val[1],
        factoryInfo: val[2],
        paymasterInfo: val[3],
        aggregatorInfo: val[4]
    };
});
exports.validationResultWithAggregationSchema = zod_1.z.union([
    exports.validationResultWithAggregationSchemaV06,
    exports.validationResultWithAggregationSchemaV07
]);
exports.validationResultWithAggregationErrorSchema = zod_1.z.object({
    args: exports.validationResultWithAggregationSchema,
    errorName: zod_1.z.literal("ValidationResultWithAggregation")
});
exports.entryPointErrorsSchema = zod_1.z.discriminatedUnion("errorName", [
    exports.validationResultErrorSchema,
    exports.executionResultErrorSchema,
    exports.failedOpErrorSchema,
    exports.senderAddressResultErrorSchema,
    exports.signatureValidationFailedErrorSchema,
    exports.validationResultWithAggregationErrorSchema
]);
exports.errorCauseSchema = zod_1.z.object({
    name: zod_1.z.literal("ContractFunctionRevertedError"),
    data: exports.entryPointErrorsSchema
});
exports.vmExecutionError = zod_1.z.object({
    name: zod_1.z.literal("CallExecutionError"),
    cause: zod_1.z.object({
        name: zod_1.z.literal("RpcRequestError"),
        cause: zod_1.z.object({
            data: zod_1.z.string().transform((val) => {
                const hexStringRegex = /0x([a-fA-F0-9]+)?/;
                const match = val.match(hexStringRegex);
                if (!match) {
                    throw new _1.RpcError(`User operation reverted on-chain with unknown error (some chains don't return revert reason) ${val}`);
                }
                const errorHexData = match[0];
                if (errorHexData === "0x") {
                    throw new _1.RpcError(`User operation reverted on-chain with unknown error (some chains don't return revert reason) ${val}`);
                }
                const errorResult = (0, viem_1.decodeErrorResult)({
                    abi: contracts_1.EntryPointV06Abi,
                    data: errorHexData
                });
                return exports.entryPointErrorsSchema.parse(errorResult);
            })
        })
    })
});
exports.entryPointExecutionErrorSchemaV06 = zod_1.z
    .object({
    name: zod_1.z.literal("ContractFunctionExecutionError"),
    cause: zod_1.z.discriminatedUnion("name", [
        exports.errorCauseSchema,
        exports.vmExecutionError
    ])
})
    .transform((val) => {
    if (val.cause.name === "CallExecutionError") {
        return val.cause.cause.cause.data;
    }
    return val.cause.data;
});
exports.entryPointExecutionErrorSchemaV07 = zod_1.z
    .object({
    name: zod_1.z.literal("ContractFunctionExecutionError"),
    cause: zod_1.z.discriminatedUnion("name", [
        exports.errorCauseSchema,
        exports.vmExecutionError
    ])
})
    .transform((val) => {
    if (val.cause.name === "CallExecutionError") {
        return val.cause.cause.cause.data;
    }
    return val.cause.data;
});
//# sourceMappingURL=validation.js.map