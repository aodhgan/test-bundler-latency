"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.receiptSchema = exports.logSchema = exports.hexDataSchema = exports.hexData32Schema = exports.addressSchema = exports.bundlerResponseSchema = exports.pimlicoGetUserOperationGasPriceResponseSchema = exports.pimlicoGetUserOperationStatusResponseSchema = exports.bundlerDumpReputationsResponseSchema = exports.bundlerSetReputationsResponseSchema = exports.bundlerSetBundlingModeResponseSchema = exports.bundlerSendBundleNowResponseSchema = exports.bundlerGetStakeStatusResponseSchema = exports.bundlerDumpMempoolResponseSchema = exports.bundlerClearMempoolResponseSchema = exports.bundlerClearStateResponseSchema = exports.userOperationSchema = exports.jsonRpcResultSchema = exports.jsonRpcSchema = exports.bundlerRequestSchema = exports.pimlicoGetUserOperationGasPriceRequestSchema = exports.pimlicoGetUserOperationStatusRequestSchema = exports.pimlicoGetStakeStatusRequestSchema = exports.bundlerDumpReputationsRequestSchema = exports.bundlerSetReputationsRequestSchema = exports.bundlerSetBundlingModeRequestSchema = exports.bundlerSendBundleNowRequestSchema = exports.bundlerDumpMempoolRequestSchema = exports.bundlerClearMempoolRequestSchema = exports.bundlerClearStateRequestSchema = exports.altoVersions = exports.hexNumberSchema = exports.commaSeperatedAddressPattern = exports.hexData32Pattern = void 0;
const viem_1 = require("viem");
const zod_1 = require("zod");
const hexDataPattern = /^0x[0-9A-Fa-f]*$/;
const addressPattern = /^0x[0-9,a-f,A-F]{40}$/;
exports.hexData32Pattern = /^0x([0-9a-fA-F][0-9a-fA-F]){32}$/;
exports.commaSeperatedAddressPattern = /^(0x[0-9a-fA-F]{40})(,\s*(0x[0-9a-fA-F]{40}))*$/;
const addressSchema = zod_1.z
    .string()
    .regex(addressPattern, { message: "not a valid hex address" })
    .transform((val) => (0, viem_1.getAddress)(val));
exports.addressSchema = addressSchema;
exports.hexNumberSchema = zod_1.z
    .string()
    .regex(hexDataPattern)
    .or(zod_1.z.number())
    .or(zod_1.z.bigint())
    .transform((val) => BigInt(val))
    .refine((val) => val <= viem_1.maxUint256, {
    message: "not a valid uint256"
});
const hexDataSchema = zod_1.z
    .string()
    .regex(hexDataPattern, { message: "not valid hex data" })
    .transform((val) => val);
exports.hexDataSchema = hexDataSchema;
const hexData32Schema = zod_1.z
    .string()
    .regex(exports.hexData32Pattern, { message: "not valid 32-byte hex data" })
    .transform((val) => val);
exports.hexData32Schema = hexData32Schema;
const userOperationV06Schema = zod_1.z
    .object({
    sender: addressSchema,
    nonce: exports.hexNumberSchema,
    initCode: hexDataSchema,
    callData: hexDataSchema,
    callGasLimit: exports.hexNumberSchema,
    verificationGasLimit: exports.hexNumberSchema,
    preVerificationGas: exports.hexNumberSchema,
    maxPriorityFeePerGas: exports.hexNumberSchema,
    maxFeePerGas: exports.hexNumberSchema,
    paymasterAndData: hexDataSchema,
    signature: hexDataSchema
})
    .strict()
    .transform((val) => {
    return val;
});
const userOperationV07Schema = zod_1.z
    .object({
    sender: addressSchema,
    nonce: exports.hexNumberSchema,
    factory: addressSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    factoryData: hexDataSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    callData: hexDataSchema,
    callGasLimit: exports.hexNumberSchema,
    verificationGasLimit: exports.hexNumberSchema,
    preVerificationGas: exports.hexNumberSchema,
    maxFeePerGas: exports.hexNumberSchema,
    maxPriorityFeePerGas: exports.hexNumberSchema,
    paymaster: addressSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    paymasterVerificationGasLimit: exports.hexNumberSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    paymasterPostOpGasLimit: exports.hexNumberSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    paymasterData: hexDataSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    signature: hexDataSchema
})
    .strict()
    .transform((val) => val);
const partialUserOperationV06Schema = zod_1.z
    .object({
    sender: addressSchema,
    nonce: exports.hexNumberSchema,
    initCode: hexDataSchema,
    callData: hexDataSchema,
    callGasLimit: exports.hexNumberSchema.default(1n),
    verificationGasLimit: exports.hexNumberSchema.default(1n),
    preVerificationGas: exports.hexNumberSchema.default(1n),
    maxPriorityFeePerGas: exports.hexNumberSchema.default(1n),
    maxFeePerGas: exports.hexNumberSchema.default(1n),
    paymasterAndData: hexDataSchema,
    signature: hexDataSchema
})
    .strict()
    .transform((val) => {
    return val;
});
const partialUserOperationV07Schema = zod_1.z
    .object({
    sender: addressSchema,
    nonce: exports.hexNumberSchema,
    factory: addressSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    factoryData: hexDataSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    callData: hexDataSchema,
    callGasLimit: exports.hexNumberSchema.default(1n),
    verificationGasLimit: exports.hexNumberSchema.default(1n),
    preVerificationGas: exports.hexNumberSchema.default(1n),
    maxFeePerGas: exports.hexNumberSchema.default(1n),
    maxPriorityFeePerGas: exports.hexNumberSchema.default(1n),
    paymaster: addressSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    paymasterVerificationGasLimit: exports.hexNumberSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    paymasterPostOpGasLimit: exports.hexNumberSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    paymasterData: hexDataSchema
        .nullable()
        .optional()
        .transform((val) => val ?? null),
    signature: hexDataSchema
})
    .strict()
    .transform((val) => val);
const packerUserOperationSchema = zod_1.z
    .object({
    sender: addressSchema,
    nonce: exports.hexNumberSchema,
    initCode: hexDataSchema,
    callData: hexDataSchema,
    accountGasLimits: hexData32Schema,
    preVerificationGas: exports.hexNumberSchema,
    gasFees: hexData32Schema,
    paymasterAndData: hexDataSchema,
    signature: hexDataSchema
})
    .strict()
    .transform((val) => val);
const partialUserOperationSchema = zod_1.z.union([
    partialUserOperationV06Schema,
    partialUserOperationV07Schema
]);
const userOperationSchema = zod_1.z.union([
    userOperationV06Schema,
    userOperationV07Schema
]);
exports.userOperationSchema = userOperationSchema;
const jsonRpcSchema = zod_1.z
    .object({
    jsonrpc: zod_1.z.literal("2.0"),
    id: zod_1.z.number(),
    method: zod_1.z.string(),
    params: zod_1.z
        .array(zod_1.z.unknown())
        .optional()
        .transform((val) => val ?? [])
})
    .strict();
exports.jsonRpcSchema = jsonRpcSchema;
const jsonRpcResultSchema = zod_1.z
    .object({
    jsonrpc: zod_1.z.literal("2.0"),
    id: zod_1.z.number(),
    result: zod_1.z.unknown()
})
    .strict();
exports.jsonRpcResultSchema = jsonRpcResultSchema;
const chainIdRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_chainId"),
    params: zod_1.z.tuple([])
});
const supportedEntryPointsRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_supportedEntryPoints"),
    params: zod_1.z.tuple([])
});
const stateOverridesSchema = zod_1.z.record(addressSchema, zod_1.z.object({
    balance: exports.hexNumberSchema.optional(),
    nonce: exports.hexNumberSchema.optional(),
    code: hexDataSchema.optional(),
    state: zod_1.z.record(hexData32Schema, hexData32Schema).optional(),
    stateDiff: zod_1.z.record(hexData32Schema, hexData32Schema).optional()
}));
const signedAuthorizationSchema = zod_1.z.object({
    contractAddress: addressSchema,
    chainId: exports.hexNumberSchema.transform((val) => Number(val)),
    nonce: exports.hexNumberSchema.transform((val) => Number(val)),
    r: hexData32Schema.transform((val) => val),
    s: hexData32Schema.transform((val) => val),
    v: exports.hexNumberSchema,
    yParity: exports.hexNumberSchema.transform((val) => Number(val))
});
const estimateUserOperationGasRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_estimateUserOperationGas"),
    params: zod_1.z.union([
        zod_1.z.tuple([partialUserOperationSchema, addressSchema]),
        zod_1.z.tuple([
            partialUserOperationSchema,
            addressSchema,
            stateOverridesSchema
        ])
    ])
});
const sendUserOperationRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_sendUserOperation"),
    params: zod_1.z.tuple([userOperationSchema, addressSchema])
});
const getUserOperationByHashRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_getUserOperationByHash"),
    params: zod_1.z.tuple([
        zod_1.z
            .string()
            .regex(exports.hexData32Pattern, { message: "Missing/invalid userOpHash" })
            .transform((val) => val)
    ])
});
const getUserOperationReceiptRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_getUserOperationReceipt"),
    params: zod_1.z.tuple([
        zod_1.z
            .string()
            .regex(exports.hexData32Pattern, { message: "Missing/invalid userOpHash" })
            .transform((val) => val)
    ])
});
const bundlerClearStateRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_clearState"),
    params: zod_1.z.tuple([])
});
exports.bundlerClearStateRequestSchema = bundlerClearStateRequestSchema;
const bundlerClearMempoolRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_clearMempool"),
    params: zod_1.z.tuple([])
});
exports.bundlerClearMempoolRequestSchema = bundlerClearMempoolRequestSchema;
const bundlerDumpMempoolRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_dumpMempool"),
    params: zod_1.z.tuple([addressSchema])
});
exports.bundlerDumpMempoolRequestSchema = bundlerDumpMempoolRequestSchema;
const bundlerSendBundleNowRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_sendBundleNow"),
    params: zod_1.z.tuple([])
});
exports.bundlerSendBundleNowRequestSchema = bundlerSendBundleNowRequestSchema;
const bundlerSetBundlingModeRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_setBundlingMode"),
    params: zod_1.z.tuple([zod_1.z.enum(["manual", "auto"])])
});
exports.bundlerSetBundlingModeRequestSchema = bundlerSetBundlingModeRequestSchema;
const bundlerSetReputationsRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_setReputation"),
    params: zod_1.z.tuple([
        zod_1.z.array(zod_1.z.object({
            address: addressSchema,
            opsSeen: exports.hexNumberSchema,
            opsIncluded: exports.hexNumberSchema
        })),
        addressSchema
    ])
});
exports.bundlerSetReputationsRequestSchema = bundlerSetReputationsRequestSchema;
const bundlerDumpReputationsRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_dumpReputation"),
    params: zod_1.z.tuple([addressSchema])
});
exports.bundlerDumpReputationsRequestSchema = bundlerDumpReputationsRequestSchema;
const pimlicoGetStakeStatusRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_getStakeStatus"),
    params: zod_1.z.tuple([addressSchema, addressSchema])
});
exports.pimlicoGetStakeStatusRequestSchema = pimlicoGetStakeStatusRequestSchema;
const pimlicoGetUserOperationStatusRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_getUserOperationStatus"),
    params: zod_1.z.tuple([hexData32Schema])
});
exports.pimlicoGetUserOperationStatusRequestSchema = pimlicoGetUserOperationStatusRequestSchema;
const pimlicoGetUserOperationGasPriceRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_getUserOperationGasPrice"),
    params: zod_1.z.tuple([])
});
exports.pimlicoGetUserOperationGasPriceRequestSchema = pimlicoGetUserOperationGasPriceRequestSchema;
const pimlicoSendUserOperationNowRequestSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_sendUserOperationNow"),
    params: zod_1.z.tuple([userOperationSchema, addressSchema])
});
const pimlicoExperimentalEstimateUserOperationGas7702RequestSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_experimental_estimateUserOperationGas7702"),
    params: zod_1.z.union([
        zod_1.z.tuple([
            partialUserOperationSchema,
            addressSchema,
            signedAuthorizationSchema // authorization
        ]),
        zod_1.z.tuple([
            partialUserOperationSchema,
            addressSchema,
            signedAuthorizationSchema, // authorization
            stateOverridesSchema
        ])
    ])
});
const pimlicoExperimentalSendUserOperation7702RequestSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_experimental_sendUserOperation7702"),
    params: zod_1.z.tuple([
        userOperationSchema,
        addressSchema,
        signedAuthorizationSchema
    ])
});
exports.altoVersions = zod_1.z.enum(["v1", "v2"]);
const bundlerRequestSchema = zod_1.z.discriminatedUnion("method", [
    chainIdRequestSchema,
    supportedEntryPointsRequestSchema,
    estimateUserOperationGasRequestSchema,
    sendUserOperationRequestSchema,
    getUserOperationByHashRequestSchema,
    getUserOperationReceiptRequestSchema,
    bundlerClearStateRequestSchema,
    bundlerClearMempoolRequestSchema,
    bundlerDumpMempoolRequestSchema,
    bundlerSendBundleNowRequestSchema,
    bundlerSetBundlingModeRequestSchema,
    bundlerSetReputationsRequestSchema,
    bundlerDumpReputationsRequestSchema,
    pimlicoGetStakeStatusRequestSchema,
    pimlicoGetUserOperationStatusRequestSchema,
    pimlicoGetUserOperationGasPriceRequestSchema,
    pimlicoSendUserOperationNowRequestSchema,
    pimlicoExperimentalSendUserOperation7702RequestSchema,
    pimlicoExperimentalEstimateUserOperationGas7702RequestSchema
]);
exports.bundlerRequestSchema = bundlerRequestSchema;
const chainIdResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_chainId"),
    result: exports.hexNumberSchema
});
const supportedEntryPointsResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_supportedEntryPoints"),
    result: zod_1.z.array(addressSchema)
});
const estimateUserOperationGasResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_estimateUserOperationGas"),
    result: zod_1.z.union([
        zod_1.z.object({
            callGasLimit: exports.hexNumberSchema,
            preVerificationGas: exports.hexNumberSchema,
            verificationGasLimit: exports.hexNumberSchema,
            verificationGas: exports.hexNumberSchema.optional()
        }),
        zod_1.z.object({
            callGasLimit: exports.hexNumberSchema,
            preVerificationGas: exports.hexNumberSchema,
            verificationGasLimit: exports.hexNumberSchema,
            paymasterVerificationGasLimit: exports.hexNumberSchema.optional(),
            paymasterPostOpGasLimit: exports.hexNumberSchema.optional()
        })
    ])
});
const sendUserOperationResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_sendUserOperation"),
    result: hexData32Schema
});
const getUserOperationByHashResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_getUserOperationByHash"),
    result: zod_1.z
        .object({
        userOperation: userOperationSchema,
        entryPoint: addressSchema,
        blockNumber: exports.hexNumberSchema,
        blockHash: hexData32Schema,
        transactionHash: hexData32Schema
    })
        .or(zod_1.z.null())
});
const logSchema = zod_1.z.object({
    //removed: z.boolean().optional(),
    logIndex: exports.hexNumberSchema,
    transactionIndex: exports.hexNumberSchema,
    transactionHash: hexData32Schema,
    blockHash: hexData32Schema,
    blockNumber: exports.hexNumberSchema,
    address: addressSchema,
    data: hexDataSchema,
    topics: zod_1.z.array(hexData32Schema)
});
exports.logSchema = logSchema;
const receiptSchema = zod_1.z.object({
    transactionHash: hexData32Schema,
    transactionIndex: exports.hexNumberSchema,
    blockHash: hexData32Schema,
    blockNumber: exports.hexNumberSchema,
    from: addressSchema,
    to: addressSchema.or(zod_1.z.null()),
    cumulativeGasUsed: exports.hexNumberSchema,
    gasUsed: exports.hexNumberSchema,
    contractAddress: addressSchema.or(zod_1.z.null()),
    logs: zod_1.z.array(logSchema),
    logsBloom: zod_1.z.string().regex(/^0x[0-9a-f]{512}$/),
    //root: hexData32Schema,
    status: exports.hexNumberSchema.or(zod_1.z.null()),
    effectiveGasPrice: exports.hexNumberSchema.nullish()
    //type: hexNumberSchema
});
exports.receiptSchema = receiptSchema;
const userOperationReceiptSchema = zod_1.z
    .object({
    userOpHash: hexData32Schema,
    entryPoint: addressSchema,
    sender: addressSchema,
    nonce: exports.hexNumberSchema,
    paymaster: addressSchema.optional(),
    actualGasCost: exports.hexNumberSchema,
    actualGasUsed: exports.hexNumberSchema,
    success: zod_1.z.boolean(),
    reason: hexDataSchema.optional(), // revert reason
    logs: zod_1.z.array(logSchema),
    receipt: receiptSchema
})
    .or(zod_1.z.null());
const getUserOperationReceiptResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("eth_getUserOperationReceipt"),
    result: userOperationReceiptSchema
});
const bundlerClearStateResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_clearState"),
    result: zod_1.z.literal("ok")
});
exports.bundlerClearStateResponseSchema = bundlerClearStateResponseSchema;
const bundlerClearMempoolResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_clearMempool"),
    result: zod_1.z.literal("ok")
});
exports.bundlerClearMempoolResponseSchema = bundlerClearMempoolResponseSchema;
const bundlerDumpMempoolResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_dumpMempool"),
    result: zod_1.z.array(userOperationSchema)
});
exports.bundlerDumpMempoolResponseSchema = bundlerDumpMempoolResponseSchema;
const bundlerGetStakeStatusResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_getStakeStatus"),
    result: zod_1.z.object({
        stakeInfo: zod_1.z.object({
            addr: zod_1.z.string(),
            stake: zod_1.z
                .string()
                .or(zod_1.z.number())
                .or(zod_1.z.bigint())
                .transform((val) => Number(val).toString()),
            unstakeDelaySec: zod_1.z
                .string()
                .or(zod_1.z.number())
                .or(zod_1.z.bigint())
                .transform((val) => Number(val).toString())
        }),
        isStaked: zod_1.z.boolean()
    })
});
exports.bundlerGetStakeStatusResponseSchema = bundlerGetStakeStatusResponseSchema;
const bundlerSendBundleNowResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_sendBundleNow"),
    result: hexData32Schema
});
exports.bundlerSendBundleNowResponseSchema = bundlerSendBundleNowResponseSchema;
const bundlerSetBundlingModeResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_setBundlingMode"),
    result: zod_1.z.literal("ok")
});
exports.bundlerSetBundlingModeResponseSchema = bundlerSetBundlingModeResponseSchema;
const bundlerSetReputationsResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_setReputation"),
    result: zod_1.z.literal("ok")
});
exports.bundlerSetReputationsResponseSchema = bundlerSetReputationsResponseSchema;
const bundlerDumpReputationsResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("debug_bundler_dumpReputation"),
    // TODO: FIX
    result: zod_1.z.array(zod_1.z.object({
        address: addressSchema,
        opsSeen: exports.hexNumberSchema,
        opsIncluded: exports.hexNumberSchema,
        status: exports.hexNumberSchema.optional()
    }))
});
exports.bundlerDumpReputationsResponseSchema = bundlerDumpReputationsResponseSchema;
const userOperationStatus = zod_1.z.object({
    status: zod_1.z.enum([
        "not_found",
        "not_submitted",
        "submitted",
        "rejected",
        "reverted",
        "included",
        "failed"
    ]),
    transactionHash: hexData32Schema.or(zod_1.z.null())
});
const pimlicoGetUserOperationStatusResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_getUserOperationStatus"),
    result: userOperationStatus
});
exports.pimlicoGetUserOperationStatusResponseSchema = pimlicoGetUserOperationStatusResponseSchema;
const gasPriceSchema = zod_1.z.object({
    slow: zod_1.z.object({
        maxFeePerGas: zod_1.z.bigint(),
        maxPriorityFeePerGas: zod_1.z.bigint()
    }),
    standard: zod_1.z.object({
        maxFeePerGas: zod_1.z.bigint(),
        maxPriorityFeePerGas: zod_1.z.bigint()
    }),
    fast: zod_1.z.object({
        maxFeePerGas: zod_1.z.bigint(),
        maxPriorityFeePerGas: zod_1.z.bigint()
    })
});
const pimlicoGetUserOperationGasPriceResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_getUserOperationGasPrice"),
    result: gasPriceSchema
});
exports.pimlicoGetUserOperationGasPriceResponseSchema = pimlicoGetUserOperationGasPriceResponseSchema;
const pimlicoSendUserOperationNowResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_sendUserOperationNow"),
    result: userOperationReceiptSchema
});
const pimlicoExperimentalSendUserOperation7702ResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_experimental_sendUserOperation7702"),
    result: hexData32Schema
});
const pimlicoExperimentalEstimateUserOperation7702ResponseSchema = zod_1.z.object({
    method: zod_1.z.literal("pimlico_experimental_estimateUserOperationGas7702"),
    result: zod_1.z.union([
        zod_1.z.object({
            callGasLimit: exports.hexNumberSchema,
            preVerificationGas: exports.hexNumberSchema,
            verificationGasLimit: exports.hexNumberSchema,
            verificationGas: exports.hexNumberSchema.optional()
        }),
        zod_1.z.object({
            callGasLimit: exports.hexNumberSchema,
            preVerificationGas: exports.hexNumberSchema,
            verificationGasLimit: exports.hexNumberSchema,
            paymasterVerificationGasLimit: exports.hexNumberSchema.optional(),
            paymasterPostOpGasLimit: exports.hexNumberSchema.optional()
        })
    ])
});
const bundlerResponseSchema = zod_1.z.discriminatedUnion("method", [
    chainIdResponseSchema,
    supportedEntryPointsResponseSchema,
    estimateUserOperationGasResponseSchema,
    sendUserOperationResponseSchema,
    getUserOperationByHashResponseSchema,
    getUserOperationReceiptResponseSchema,
    bundlerClearStateResponseSchema,
    bundlerClearMempoolResponseSchema,
    bundlerDumpMempoolResponseSchema,
    bundlerGetStakeStatusResponseSchema,
    bundlerSendBundleNowResponseSchema,
    bundlerSetBundlingModeResponseSchema,
    bundlerSetReputationsResponseSchema,
    bundlerDumpReputationsResponseSchema,
    pimlicoGetUserOperationStatusResponseSchema,
    pimlicoGetUserOperationGasPriceResponseSchema,
    pimlicoSendUserOperationNowResponseSchema,
    pimlicoExperimentalSendUserOperation7702ResponseSchema,
    pimlicoExperimentalEstimateUserOperation7702ResponseSchema
]);
exports.bundlerResponseSchema = bundlerResponseSchema;
const OpEventType = zod_1.z.union([
    zod_1.z.object({
        eventType: zod_1.z.literal("received")
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("added_to_mempool")
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("queued")
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("failed_validation"),
        data: zod_1.z.object({
            reason: zod_1.z.string().optional(),
            aaError: zod_1.z.string().optional()
        })
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("dropped"),
        data: zod_1.z.object({
            reason: zod_1.z.string().optional(),
            aaError: zod_1.z.string().optional()
        })
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("submitted"),
        transactionHash: hexData32Schema
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("included_onchain"),
        transactionHash: hexData32Schema,
        data: zod_1.z.object({
            blockNumber: zod_1.z.number()
        })
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("frontran_onchain"),
        transactionHash: hexData32Schema,
        data: zod_1.z.object({
            blockNumber: zod_1.z.number()
        })
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("failed_onchain"),
        transactionHash: hexData32Schema,
        data: zod_1.z.object({
            blockNumber: zod_1.z.number(),
            reason: zod_1.z.string().optional(),
            aaError: zod_1.z.string().optional()
        })
    }),
    zod_1.z.object({
        eventType: zod_1.z.literal("execution_reverted_onchain"),
        transactionHash: hexData32Schema,
        data: zod_1.z.object({
            blockNumber: zod_1.z.number(),
            reason: zod_1.z.string().optional()
        })
    })
]);
//# sourceMappingURL=schemas.js.map