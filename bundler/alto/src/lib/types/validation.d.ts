import { z } from "zod";
export type StakeInfo = {
    addr?: string;
    stake: bigint;
    unstakeDelaySec: bigint;
};
export type SlotMap = {
    [slot: string]: string;
};
export type StorageMap = {
    [address: string]: string | SlotMap;
};
export declare const signatureValidationFailedSchema: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
    aggregator: `0x${string}`;
}, [string]>;
export type SignatureValidationFailed = z.infer<typeof signatureValidationFailedSchema>;
export declare const signatureValidationFailedErrorSchema: z.ZodObject<{
    args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
        aggregator: `0x${string}`;
    }, [string]>;
    errorName: z.ZodLiteral<"SignatureValidationFailed">;
}, "strip", z.ZodTypeAny, {
    args: {
        aggregator: `0x${string}`;
    };
    errorName: "SignatureValidationFailed";
}, {
    args: [string];
    errorName: "SignatureValidationFailed";
}>;
export declare const senderAddressResultSchema: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
    sender: `0x${string}`;
}, [string]>;
export type SenderAddressResult = z.infer<typeof senderAddressResultSchema>;
export declare const senderAddressResultErrorSchema: z.ZodObject<{
    args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
        sender: `0x${string}`;
    }, [string]>;
    errorName: z.ZodLiteral<"SenderAddressResult">;
}, "strip", z.ZodTypeAny, {
    args: {
        sender: `0x${string}`;
    };
    errorName: "SenderAddressResult";
}, {
    args: [string];
    errorName: "SenderAddressResult";
}>;
export declare const failedOpSchema: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodString], null>, {
    opIndex: bigint;
    reason: string;
}, [bigint, string]>;
export type FailedOp = z.infer<typeof failedOpSchema>;
export declare const failedOpErrorSchema: z.ZodObject<{
    args: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodString], null>, {
        opIndex: bigint;
        reason: string;
    }, [bigint, string]>;
    errorName: z.ZodLiteral<"FailedOp">;
}, "strip", z.ZodTypeAny, {
    args: {
        opIndex: bigint;
        reason: string;
    };
    errorName: "FailedOp";
}, {
    args: [bigint, string];
    errorName: "FailedOp";
}>;
export declare const failedOpWithRevertSchema: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodString, z.ZodString], null>, {
    opIndex: bigint;
    reason: string;
    inner: string;
}, [bigint, string, string]>;
export type FailedOpWithRevert = z.infer<typeof failedOpWithRevertSchema>;
export declare const failedOpWithRevertErrorSchema: z.ZodObject<{
    args: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodString, z.ZodString], null>, {
        opIndex: bigint;
        reason: string;
        inner: string;
    }, [bigint, string, string]>;
    errorName: z.ZodLiteral<"FailedOpWithRevert">;
}, "strip", z.ZodTypeAny, {
    args: {
        opIndex: bigint;
        reason: string;
        inner: string;
    };
    errorName: "FailedOpWithRevert";
}, {
    args: [bigint, string, string];
    errorName: "FailedOpWithRevert";
}>;
export declare const executionResultSchemaV06: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodNumber, z.ZodNumber, z.ZodBoolean, z.ZodString], null>, {
    preOpGas: bigint;
    paid: bigint;
    validAfter: number;
    validUntil: number;
    targetSuccess: boolean;
    targetResult: `0x${string}`;
}, [bigint, bigint, number, number, boolean, string]>;
export declare const executionResultSchemaV07: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBoolean, z.ZodString], null>, {
    preOpGas: bigint;
    paid: bigint;
    validationData: bigint;
    paymasterValidationData: bigint;
    paymasterVerificationGasLimit: bigint;
    paymasterPostOpGasLimit: bigint;
    targetSuccess: boolean;
    targetResult: `0x${string}`;
}, [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string]>;
export declare const executionResultSchema: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodNumber, z.ZodNumber, z.ZodBoolean, z.ZodString], null>, {
    preOpGas: bigint;
    paid: bigint;
    validAfter: number;
    validUntil: number;
    targetSuccess: boolean;
    targetResult: `0x${string}`;
}, [bigint, bigint, number, number, boolean, string]>, z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBoolean, z.ZodString], null>, {
    preOpGas: bigint;
    paid: bigint;
    validationData: bigint;
    paymasterValidationData: bigint;
    paymasterVerificationGasLimit: bigint;
    paymasterPostOpGasLimit: bigint;
    targetSuccess: boolean;
    targetResult: `0x${string}`;
}, [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string]>]>;
export type ExecutionResult = z.infer<typeof executionResultSchema>;
export declare const binarySearchCallResultSchema: z.ZodObject<{
    gasUsed: z.ZodBigInt;
    success: z.ZodBoolean;
    returnData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    success: boolean;
    returnData: `0x${string}`;
    gasUsed: bigint;
}, {
    success: boolean;
    returnData: string;
    gasUsed: bigint;
}>;
export type BinarySearchCallResult = z.infer<typeof binarySearchCallResultSchema>;
export declare const executionResultErrorSchema: z.ZodObject<{
    args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodNumber, z.ZodNumber, z.ZodBoolean, z.ZodString], null>, {
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    }, [bigint, bigint, number, number, boolean, string]>, z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBoolean, z.ZodString], null>, {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    }, [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string]>]>;
    errorName: z.ZodLiteral<"ExecutionResult">;
}, "strip", z.ZodTypeAny, {
    args: ({
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    }) & ({
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | undefined);
    errorName: "ExecutionResult";
}, {
    args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
    errorName: "ExecutionResult";
}>;
export declare const validationResultSchemaV06: z.ZodEffects<z.ZodTuple<[z.ZodObject<{
    preOpGas: z.ZodBigInt;
    prefund: z.ZodBigInt;
    sigFailed: z.ZodBoolean;
    validAfter: z.ZodNumber;
    validUntil: z.ZodNumber;
    paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: `0x${string}`;
}, {
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: string;
}>, z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>], null>, {
    returnInfo: {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: `0x${string}`;
    };
    senderInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
    factoryInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    paymasterInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
}, [{
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: string;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined]>;
export declare const validationResultSchemaV07: z.ZodEffects<z.ZodTuple<[z.ZodObject<{
    preOpGas: z.ZodBigInt;
    prefund: z.ZodBigInt;
    accountValidationData: z.ZodBigInt;
    paymasterValidationData: z.ZodBigInt;
    accountSigFailed: z.ZodOptional<z.ZodBoolean>;
    paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
    validAfter: z.ZodOptional<z.ZodNumber>;
    validUntil: z.ZodOptional<z.ZodNumber>;
    paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: `0x${string}`;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}, {
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: string;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}>, z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>], null>, {
    returnInfo: {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: `0x${string}`;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    };
    senderInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
    factoryInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    paymasterInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
}, [{
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: string;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined]>;
export declare const validationResultSchema: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
    preOpGas: z.ZodBigInt;
    prefund: z.ZodBigInt;
    sigFailed: z.ZodBoolean;
    validAfter: z.ZodNumber;
    validUntil: z.ZodNumber;
    paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: `0x${string}`;
}, {
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: string;
}>, z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>], null>, {
    returnInfo: {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: `0x${string}`;
    };
    senderInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
    factoryInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    paymasterInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
}, [{
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: string;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
    preOpGas: z.ZodBigInt;
    prefund: z.ZodBigInt;
    accountValidationData: z.ZodBigInt;
    paymasterValidationData: z.ZodBigInt;
    accountSigFailed: z.ZodOptional<z.ZodBoolean>;
    paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
    validAfter: z.ZodOptional<z.ZodNumber>;
    validUntil: z.ZodOptional<z.ZodNumber>;
    paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: `0x${string}`;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}, {
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: string;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}>, z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>], null>, {
    returnInfo: {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: `0x${string}`;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    };
    senderInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
    factoryInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    paymasterInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
}, [{
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: string;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined]>]>;
export type ValidationResultV06 = z.infer<typeof validationResultSchemaV06>;
export type ValidationResultV07 = z.infer<typeof validationResultSchemaV07>;
export type ValidationResult = z.infer<typeof validationResultSchema>;
export declare const validationResultErrorSchema: z.ZodObject<{
    args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
        preOpGas: z.ZodBigInt;
        prefund: z.ZodBigInt;
        sigFailed: z.ZodBoolean;
        validAfter: z.ZodNumber;
        validUntil: z.ZodNumber;
        paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: `0x${string}`;
    }, {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }>, z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>], null>, {
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    }, [{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
        preOpGas: z.ZodBigInt;
        prefund: z.ZodBigInt;
        accountValidationData: z.ZodBigInt;
        paymasterValidationData: z.ZodBigInt;
        accountSigFailed: z.ZodOptional<z.ZodBoolean>;
        paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
        validAfter: z.ZodOptional<z.ZodNumber>;
        validUntil: z.ZodOptional<z.ZodNumber>;
        paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: `0x${string}`;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }>, z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>], null>, {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    }, [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined]>]>;
    errorName: z.ZodLiteral<"ValidationResult">;
}, "strip", z.ZodTypeAny, {
    args: ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    }) & ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | undefined);
    errorName: "ValidationResult";
}, {
    args: ([{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined] | [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined]) & ([{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined] | [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined] | undefined);
    errorName: "ValidationResult";
}>;
export type ValidationResultError = z.infer<typeof validationResultErrorSchema>;
export declare const validationResultWithAggregationSchemaV06: z.ZodEffects<z.ZodTuple<[z.ZodObject<{
    preOpGas: z.ZodBigInt;
    prefund: z.ZodBigInt;
    sigFailed: z.ZodBoolean;
    validAfter: z.ZodNumber;
    validUntil: z.ZodNumber;
    paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: `0x${string}`;
}, {
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: string;
}>, z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    stakeInfo: z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    aggregator: `0x${string}`;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
}, {
    aggregator: string;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
}>>], null>, {
    returnInfo: {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: `0x${string}`;
    };
    senderInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
    factoryInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    paymasterInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    aggregatorInfo: {
        aggregator: `0x${string}`;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined;
}, [{
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: string;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    aggregator: string;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
} | undefined]>;
export declare const validationResultWithAggregationSchemaV07: z.ZodEffects<z.ZodTuple<[z.ZodObject<{
    preOpGas: z.ZodBigInt;
    prefund: z.ZodBigInt;
    accountValidationData: z.ZodBigInt;
    paymasterValidationData: z.ZodBigInt;
    accountSigFailed: z.ZodOptional<z.ZodBoolean>;
    paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
    validAfter: z.ZodOptional<z.ZodNumber>;
    validUntil: z.ZodOptional<z.ZodNumber>;
    paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: `0x${string}`;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}, {
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: string;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}>, z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    stakeInfo: z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    aggregator: `0x${string}`;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
}, {
    aggregator: string;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
}>>], null>, {
    returnInfo: {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: `0x${string}`;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    };
    senderInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
    factoryInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    paymasterInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    aggregatorInfo: {
        aggregator: `0x${string}`;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined;
}, [{
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: string;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    aggregator: string;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
} | undefined]>;
export declare const validationResultWithAggregationSchema: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
    preOpGas: z.ZodBigInt;
    prefund: z.ZodBigInt;
    sigFailed: z.ZodBoolean;
    validAfter: z.ZodNumber;
    validUntil: z.ZodNumber;
    paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: `0x${string}`;
}, {
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: string;
}>, z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    stakeInfo: z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    aggregator: `0x${string}`;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
}, {
    aggregator: string;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
}>>], null>, {
    returnInfo: {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: `0x${string}`;
    };
    senderInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
    factoryInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    paymasterInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    aggregatorInfo: {
        aggregator: `0x${string}`;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined;
}, [{
    preOpGas: bigint;
    validAfter: number;
    validUntil: number;
    prefund: bigint;
    sigFailed: boolean;
    paymasterContext: string;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    aggregator: string;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
} | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
    preOpGas: z.ZodBigInt;
    prefund: z.ZodBigInt;
    accountValidationData: z.ZodBigInt;
    paymasterValidationData: z.ZodBigInt;
    accountSigFailed: z.ZodOptional<z.ZodBoolean>;
    paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
    validAfter: z.ZodOptional<z.ZodNumber>;
    validUntil: z.ZodOptional<z.ZodNumber>;
    paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: `0x${string}`;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}, {
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: string;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}>, z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    addr: z.ZodOptional<z.ZodString>;
    stake: z.ZodBigInt;
    unstakeDelaySec: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}>>, z.ZodOptional<z.ZodObject<{
    aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    stakeInfo: z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    aggregator: `0x${string}`;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
}, {
    aggregator: string;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
}>>], null>, {
    returnInfo: {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: `0x${string}`;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    };
    senderInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
    factoryInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    paymasterInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined;
    aggregatorInfo: {
        aggregator: `0x${string}`;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined;
}, [{
    preOpGas: bigint;
    prefund: bigint;
    paymasterContext: string;
    paymasterValidationData: bigint;
    accountValidationData: bigint;
    accountSigFailed?: boolean | undefined;
    paymasterSigFailed?: boolean | undefined;
    validAfter?: number | undefined;
    validUntil?: number | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
}, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    stake: bigint;
    unstakeDelaySec: bigint;
    addr?: string | undefined;
} | undefined, {
    aggregator: string;
    stakeInfo: {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    };
} | undefined]>]>;
export type ValidationResultWithAggregationV06 = z.infer<typeof validationResultWithAggregationSchemaV06>;
export type ValidationResultWithAggregationV07 = z.infer<typeof validationResultWithAggregationSchemaV07>;
export type ValidationResultWithAggregation = z.infer<typeof validationResultWithAggregationSchema>;
export declare const validationResultWithAggregationErrorSchema: z.ZodObject<{
    args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
        preOpGas: z.ZodBigInt;
        prefund: z.ZodBigInt;
        sigFailed: z.ZodBoolean;
        validAfter: z.ZodNumber;
        validUntil: z.ZodNumber;
        paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: `0x${string}`;
    }, {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }>, z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        stakeInfo: z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        aggregator: `0x${string}`;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    }, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    }>>], null>, {
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    }, [{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
        preOpGas: z.ZodBigInt;
        prefund: z.ZodBigInt;
        accountValidationData: z.ZodBigInt;
        paymasterValidationData: z.ZodBigInt;
        accountSigFailed: z.ZodOptional<z.ZodBoolean>;
        paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
        validAfter: z.ZodOptional<z.ZodNumber>;
        validUntil: z.ZodOptional<z.ZodNumber>;
        paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: `0x${string}`;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }>, z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        stakeInfo: z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        aggregator: `0x${string}`;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    }, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    }>>], null>, {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    }, [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined]>]>;
    errorName: z.ZodLiteral<"ValidationResultWithAggregation">;
}, "strip", z.ZodTypeAny, {
    args: ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    }) & ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | undefined);
    errorName: "ValidationResultWithAggregation";
}, {
    args: ([{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined] | [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined]) & ([{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined] | [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined] | undefined);
    errorName: "ValidationResultWithAggregation";
}>;
export declare const entryPointErrorsSchema: z.ZodDiscriminatedUnion<"errorName", [z.ZodObject<{
    args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
        preOpGas: z.ZodBigInt;
        prefund: z.ZodBigInt;
        sigFailed: z.ZodBoolean;
        validAfter: z.ZodNumber;
        validUntil: z.ZodNumber;
        paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: `0x${string}`;
    }, {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }>, z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>], null>, {
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    }, [{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
        preOpGas: z.ZodBigInt;
        prefund: z.ZodBigInt;
        accountValidationData: z.ZodBigInt;
        paymasterValidationData: z.ZodBigInt;
        accountSigFailed: z.ZodOptional<z.ZodBoolean>;
        paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
        validAfter: z.ZodOptional<z.ZodNumber>;
        validUntil: z.ZodOptional<z.ZodNumber>;
        paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: `0x${string}`;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }>, z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>], null>, {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    }, [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined]>]>;
    errorName: z.ZodLiteral<"ValidationResult">;
}, "strip", z.ZodTypeAny, {
    args: ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    }) & ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | undefined);
    errorName: "ValidationResult";
}, {
    args: ([{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined] | [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined]) & ([{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined] | [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined] | undefined);
    errorName: "ValidationResult";
}>, z.ZodObject<{
    args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodNumber, z.ZodNumber, z.ZodBoolean, z.ZodString], null>, {
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    }, [bigint, bigint, number, number, boolean, string]>, z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBoolean, z.ZodString], null>, {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    }, [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string]>]>;
    errorName: z.ZodLiteral<"ExecutionResult">;
}, "strip", z.ZodTypeAny, {
    args: ({
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    }) & ({
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | undefined);
    errorName: "ExecutionResult";
}, {
    args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
    errorName: "ExecutionResult";
}>, z.ZodObject<{
    args: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodString], null>, {
        opIndex: bigint;
        reason: string;
    }, [bigint, string]>;
    errorName: z.ZodLiteral<"FailedOp">;
}, "strip", z.ZodTypeAny, {
    args: {
        opIndex: bigint;
        reason: string;
    };
    errorName: "FailedOp";
}, {
    args: [bigint, string];
    errorName: "FailedOp";
}>, z.ZodObject<{
    args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
        sender: `0x${string}`;
    }, [string]>;
    errorName: z.ZodLiteral<"SenderAddressResult">;
}, "strip", z.ZodTypeAny, {
    args: {
        sender: `0x${string}`;
    };
    errorName: "SenderAddressResult";
}, {
    args: [string];
    errorName: "SenderAddressResult";
}>, z.ZodObject<{
    args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
        aggregator: `0x${string}`;
    }, [string]>;
    errorName: z.ZodLiteral<"SignatureValidationFailed">;
}, "strip", z.ZodTypeAny, {
    args: {
        aggregator: `0x${string}`;
    };
    errorName: "SignatureValidationFailed";
}, {
    args: [string];
    errorName: "SignatureValidationFailed";
}>, z.ZodObject<{
    args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
        preOpGas: z.ZodBigInt;
        prefund: z.ZodBigInt;
        sigFailed: z.ZodBoolean;
        validAfter: z.ZodNumber;
        validUntil: z.ZodNumber;
        paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: `0x${string}`;
    }, {
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }>, z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        stakeInfo: z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        aggregator: `0x${string}`;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    }, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    }>>], null>, {
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    }, [{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
        preOpGas: z.ZodBigInt;
        prefund: z.ZodBigInt;
        accountValidationData: z.ZodBigInt;
        paymasterValidationData: z.ZodBigInt;
        accountSigFailed: z.ZodOptional<z.ZodBoolean>;
        paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
        validAfter: z.ZodOptional<z.ZodNumber>;
        validUntil: z.ZodOptional<z.ZodNumber>;
        paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: `0x${string}`;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }>, z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        addr: z.ZodOptional<z.ZodString>;
        stake: z.ZodBigInt;
        unstakeDelaySec: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }>>, z.ZodOptional<z.ZodObject<{
        aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        stakeInfo: z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        aggregator: `0x${string}`;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    }, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    }>>], null>, {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    }, [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined]>]>;
    errorName: z.ZodLiteral<"ValidationResultWithAggregation">;
}, "strip", z.ZodTypeAny, {
    args: ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    }) & ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | undefined);
    errorName: "ValidationResultWithAggregation";
}, {
    args: ([{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined] | [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined]) & ([{
        preOpGas: bigint;
        validAfter: number;
        validUntil: number;
        prefund: bigint;
        sigFailed: boolean;
        paymasterContext: string;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined] | [{
        preOpGas: bigint;
        prefund: bigint;
        paymasterContext: string;
        paymasterValidationData: bigint;
        accountValidationData: bigint;
        accountSigFailed?: boolean | undefined;
        paymasterSigFailed?: boolean | undefined;
        validAfter?: number | undefined;
        validUntil?: number | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    }, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        stake: bigint;
        unstakeDelaySec: bigint;
        addr?: string | undefined;
    } | undefined, {
        aggregator: string;
        stakeInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
    } | undefined] | undefined);
    errorName: "ValidationResultWithAggregation";
}>]>;
export declare const errorCauseSchema: z.ZodObject<{
    name: z.ZodLiteral<"ContractFunctionRevertedError">;
    data: z.ZodDiscriminatedUnion<"errorName", [z.ZodObject<{
        args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
            preOpGas: z.ZodBigInt;
            prefund: z.ZodBigInt;
            sigFailed: z.ZodBoolean;
            validAfter: z.ZodNumber;
            validUntil: z.ZodNumber;
            paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        }, "strip", z.ZodTypeAny, {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        }, {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }>, z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>, z.ZodOptional<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>>, z.ZodOptional<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>>], null>, {
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        }, [{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
            preOpGas: z.ZodBigInt;
            prefund: z.ZodBigInt;
            accountValidationData: z.ZodBigInt;
            paymasterValidationData: z.ZodBigInt;
            accountSigFailed: z.ZodOptional<z.ZodBoolean>;
            paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
            validAfter: z.ZodOptional<z.ZodNumber>;
            validUntil: z.ZodOptional<z.ZodNumber>;
            paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        }, "strip", z.ZodTypeAny, {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }>, z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>, z.ZodOptional<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>>, z.ZodOptional<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>>], null>, {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        }, [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined]>]>;
        errorName: z.ZodLiteral<"ValidationResult">;
    }, "strip", z.ZodTypeAny, {
        args: ({
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        } | {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        }) & ({
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        } | {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        } | undefined);
        errorName: "ValidationResult";
    }, {
        args: ([{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined] | [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined]) & ([{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined] | [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined] | undefined);
        errorName: "ValidationResult";
    }>, z.ZodObject<{
        args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodNumber, z.ZodNumber, z.ZodBoolean, z.ZodString], null>, {
            preOpGas: bigint;
            paid: bigint;
            validAfter: number;
            validUntil: number;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        }, [bigint, bigint, number, number, boolean, string]>, z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBoolean, z.ZodString], null>, {
            preOpGas: bigint;
            paid: bigint;
            validationData: bigint;
            paymasterValidationData: bigint;
            paymasterVerificationGasLimit: bigint;
            paymasterPostOpGasLimit: bigint;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        }, [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string]>]>;
        errorName: z.ZodLiteral<"ExecutionResult">;
    }, "strip", z.ZodTypeAny, {
        args: ({
            preOpGas: bigint;
            paid: bigint;
            validAfter: number;
            validUntil: number;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        } | {
            preOpGas: bigint;
            paid: bigint;
            validationData: bigint;
            paymasterValidationData: bigint;
            paymasterVerificationGasLimit: bigint;
            paymasterPostOpGasLimit: bigint;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        }) & ({
            preOpGas: bigint;
            paid: bigint;
            validAfter: number;
            validUntil: number;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        } | {
            preOpGas: bigint;
            paid: bigint;
            validationData: bigint;
            paymasterValidationData: bigint;
            paymasterVerificationGasLimit: bigint;
            paymasterPostOpGasLimit: bigint;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        } | undefined);
        errorName: "ExecutionResult";
    }, {
        args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
        errorName: "ExecutionResult";
    }>, z.ZodObject<{
        args: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodString], null>, {
            opIndex: bigint;
            reason: string;
        }, [bigint, string]>;
        errorName: z.ZodLiteral<"FailedOp">;
    }, "strip", z.ZodTypeAny, {
        args: {
            opIndex: bigint;
            reason: string;
        };
        errorName: "FailedOp";
    }, {
        args: [bigint, string];
        errorName: "FailedOp";
    }>, z.ZodObject<{
        args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
            sender: `0x${string}`;
        }, [string]>;
        errorName: z.ZodLiteral<"SenderAddressResult">;
    }, "strip", z.ZodTypeAny, {
        args: {
            sender: `0x${string}`;
        };
        errorName: "SenderAddressResult";
    }, {
        args: [string];
        errorName: "SenderAddressResult";
    }>, z.ZodObject<{
        args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
            aggregator: `0x${string}`;
        }, [string]>;
        errorName: z.ZodLiteral<"SignatureValidationFailed">;
    }, "strip", z.ZodTypeAny, {
        args: {
            aggregator: `0x${string}`;
        };
        errorName: "SignatureValidationFailed";
    }, {
        args: [string];
        errorName: "SignatureValidationFailed";
    }>, z.ZodObject<{
        args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
            preOpGas: z.ZodBigInt;
            prefund: z.ZodBigInt;
            sigFailed: z.ZodBoolean;
            validAfter: z.ZodNumber;
            validUntil: z.ZodNumber;
            paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        }, "strip", z.ZodTypeAny, {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        }, {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }>, z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>, z.ZodOptional<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>>, z.ZodOptional<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>>, z.ZodOptional<z.ZodObject<{
            aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            stakeInfo: z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        }, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        }>>], null>, {
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        }, [{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
            preOpGas: z.ZodBigInt;
            prefund: z.ZodBigInt;
            accountValidationData: z.ZodBigInt;
            paymasterValidationData: z.ZodBigInt;
            accountSigFailed: z.ZodOptional<z.ZodBoolean>;
            paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
            validAfter: z.ZodOptional<z.ZodNumber>;
            validUntil: z.ZodOptional<z.ZodNumber>;
            paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        }, "strip", z.ZodTypeAny, {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }>, z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>, z.ZodOptional<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>>, z.ZodOptional<z.ZodObject<{
            addr: z.ZodOptional<z.ZodString>;
            stake: z.ZodBigInt;
            unstakeDelaySec: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }>>, z.ZodOptional<z.ZodObject<{
            aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            stakeInfo: z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        }, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        }>>], null>, {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        }, [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined]>]>;
        errorName: z.ZodLiteral<"ValidationResultWithAggregation">;
    }, "strip", z.ZodTypeAny, {
        args: ({
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        } | {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        }) & ({
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        } | {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        } | undefined);
        errorName: "ValidationResultWithAggregation";
    }, {
        args: ([{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined] | [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined]) & ([{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined] | [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined] | undefined);
        errorName: "ValidationResultWithAggregation";
    }>]>;
}, "strip", z.ZodTypeAny, {
    data: {
        args: {
            aggregator: `0x${string}`;
        };
        errorName: "SignatureValidationFailed";
    } | {
        args: {
            sender: `0x${string}`;
        };
        errorName: "SenderAddressResult";
    } | {
        args: {
            opIndex: bigint;
            reason: string;
        };
        errorName: "FailedOp";
    } | {
        args: ({
            preOpGas: bigint;
            paid: bigint;
            validAfter: number;
            validUntil: number;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        } | {
            preOpGas: bigint;
            paid: bigint;
            validationData: bigint;
            paymasterValidationData: bigint;
            paymasterVerificationGasLimit: bigint;
            paymasterPostOpGasLimit: bigint;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        }) & ({
            preOpGas: bigint;
            paid: bigint;
            validAfter: number;
            validUntil: number;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        } | {
            preOpGas: bigint;
            paid: bigint;
            validationData: bigint;
            paymasterValidationData: bigint;
            paymasterVerificationGasLimit: bigint;
            paymasterPostOpGasLimit: bigint;
            targetSuccess: boolean;
            targetResult: `0x${string}`;
        } | undefined);
        errorName: "ExecutionResult";
    } | {
        args: ({
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        } | {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        }) & ({
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        } | {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
        } | undefined);
        errorName: "ValidationResult";
    } | {
        args: ({
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        } | {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        }) & ({
            returnInfo: {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        } | {
            returnInfo: {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            };
            senderInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
            factoryInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            paymasterInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined;
            aggregatorInfo: {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined;
        } | undefined);
        errorName: "ValidationResultWithAggregation";
    };
    name: "ContractFunctionRevertedError";
}, {
    data: {
        args: [string];
        errorName: "SignatureValidationFailed";
    } | {
        args: [string];
        errorName: "SenderAddressResult";
    } | {
        args: [bigint, string];
        errorName: "FailedOp";
    } | {
        args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
        errorName: "ExecutionResult";
    } | {
        args: ([{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined] | [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined]) & ([{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined] | [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined] | undefined);
        errorName: "ValidationResult";
    } | {
        args: ([{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined] | [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined]) & ([{
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: string;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined] | [{
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: string;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        }, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined, {
            aggregator: string;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined] | undefined);
        errorName: "ValidationResultWithAggregation";
    };
    name: "ContractFunctionRevertedError";
}>;
export type ErrorCause = z.infer<typeof errorCauseSchema>;
export declare const vmExecutionError: z.ZodObject<{
    name: z.ZodLiteral<"CallExecutionError">;
    cause: z.ZodObject<{
        name: z.ZodLiteral<"RpcRequestError">;
        cause: z.ZodObject<{
            data: z.ZodEffects<z.ZodString, {
                args: {
                    aggregator: `0x${string}`;
                };
                errorName: "SignatureValidationFailed";
            } | {
                args: {
                    sender: `0x${string}`;
                };
                errorName: "SenderAddressResult";
            } | {
                args: {
                    opIndex: bigint;
                    reason: string;
                };
                errorName: "FailedOp";
            } | {
                args: ({
                    preOpGas: bigint;
                    paid: bigint;
                    validAfter: number;
                    validUntil: number;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | {
                    preOpGas: bigint;
                    paid: bigint;
                    validationData: bigint;
                    paymasterValidationData: bigint;
                    paymasterVerificationGasLimit: bigint;
                    paymasterPostOpGasLimit: bigint;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                }) & ({
                    preOpGas: bigint;
                    paid: bigint;
                    validAfter: number;
                    validUntil: number;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | {
                    preOpGas: bigint;
                    paid: bigint;
                    validationData: bigint;
                    paymasterValidationData: bigint;
                    paymasterVerificationGasLimit: bigint;
                    paymasterPostOpGasLimit: bigint;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | undefined);
                errorName: "ExecutionResult";
            } | {
                args: ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                }) & ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | undefined);
                errorName: "ValidationResult";
            } | {
                args: ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                }) & ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | undefined);
                errorName: "ValidationResultWithAggregation";
            }, string>;
        }, "strip", z.ZodTypeAny, {
            data: {
                args: {
                    aggregator: `0x${string}`;
                };
                errorName: "SignatureValidationFailed";
            } | {
                args: {
                    sender: `0x${string}`;
                };
                errorName: "SenderAddressResult";
            } | {
                args: {
                    opIndex: bigint;
                    reason: string;
                };
                errorName: "FailedOp";
            } | {
                args: ({
                    preOpGas: bigint;
                    paid: bigint;
                    validAfter: number;
                    validUntil: number;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | {
                    preOpGas: bigint;
                    paid: bigint;
                    validationData: bigint;
                    paymasterValidationData: bigint;
                    paymasterVerificationGasLimit: bigint;
                    paymasterPostOpGasLimit: bigint;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                }) & ({
                    preOpGas: bigint;
                    paid: bigint;
                    validAfter: number;
                    validUntil: number;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | {
                    preOpGas: bigint;
                    paid: bigint;
                    validationData: bigint;
                    paymasterValidationData: bigint;
                    paymasterVerificationGasLimit: bigint;
                    paymasterPostOpGasLimit: bigint;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | undefined);
                errorName: "ExecutionResult";
            } | {
                args: ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                }) & ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | undefined);
                errorName: "ValidationResult";
            } | {
                args: ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                }) & ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | undefined);
                errorName: "ValidationResultWithAggregation";
            };
        }, {
            data: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: "RpcRequestError";
        cause: {
            data: {
                args: {
                    aggregator: `0x${string}`;
                };
                errorName: "SignatureValidationFailed";
            } | {
                args: {
                    sender: `0x${string}`;
                };
                errorName: "SenderAddressResult";
            } | {
                args: {
                    opIndex: bigint;
                    reason: string;
                };
                errorName: "FailedOp";
            } | {
                args: ({
                    preOpGas: bigint;
                    paid: bigint;
                    validAfter: number;
                    validUntil: number;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | {
                    preOpGas: bigint;
                    paid: bigint;
                    validationData: bigint;
                    paymasterValidationData: bigint;
                    paymasterVerificationGasLimit: bigint;
                    paymasterPostOpGasLimit: bigint;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                }) & ({
                    preOpGas: bigint;
                    paid: bigint;
                    validAfter: number;
                    validUntil: number;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | {
                    preOpGas: bigint;
                    paid: bigint;
                    validationData: bigint;
                    paymasterValidationData: bigint;
                    paymasterVerificationGasLimit: bigint;
                    paymasterPostOpGasLimit: bigint;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | undefined);
                errorName: "ExecutionResult";
            } | {
                args: ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                }) & ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | undefined);
                errorName: "ValidationResult";
            } | {
                args: ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                }) & ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | undefined);
                errorName: "ValidationResultWithAggregation";
            };
        };
    }, {
        name: "RpcRequestError";
        cause: {
            data: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    name: "CallExecutionError";
    cause: {
        name: "RpcRequestError";
        cause: {
            data: {
                args: {
                    aggregator: `0x${string}`;
                };
                errorName: "SignatureValidationFailed";
            } | {
                args: {
                    sender: `0x${string}`;
                };
                errorName: "SenderAddressResult";
            } | {
                args: {
                    opIndex: bigint;
                    reason: string;
                };
                errorName: "FailedOp";
            } | {
                args: ({
                    preOpGas: bigint;
                    paid: bigint;
                    validAfter: number;
                    validUntil: number;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | {
                    preOpGas: bigint;
                    paid: bigint;
                    validationData: bigint;
                    paymasterValidationData: bigint;
                    paymasterVerificationGasLimit: bigint;
                    paymasterPostOpGasLimit: bigint;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                }) & ({
                    preOpGas: bigint;
                    paid: bigint;
                    validAfter: number;
                    validUntil: number;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | {
                    preOpGas: bigint;
                    paid: bigint;
                    validationData: bigint;
                    paymasterValidationData: bigint;
                    paymasterVerificationGasLimit: bigint;
                    paymasterPostOpGasLimit: bigint;
                    targetSuccess: boolean;
                    targetResult: `0x${string}`;
                } | undefined);
                errorName: "ExecutionResult";
            } | {
                args: ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                }) & ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                } | undefined);
                errorName: "ValidationResult";
            } | {
                args: ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                }) & ({
                    returnInfo: {
                        preOpGas: bigint;
                        validAfter: number;
                        validUntil: number;
                        prefund: bigint;
                        sigFailed: boolean;
                        paymasterContext: `0x${string}`;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | {
                    returnInfo: {
                        preOpGas: bigint;
                        prefund: bigint;
                        paymasterContext: `0x${string}`;
                        paymasterValidationData: bigint;
                        accountValidationData: bigint;
                        accountSigFailed?: boolean | undefined;
                        paymasterSigFailed?: boolean | undefined;
                        validAfter?: number | undefined;
                        validUntil?: number | undefined;
                    };
                    senderInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                    factoryInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    paymasterInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    } | undefined;
                    aggregatorInfo: {
                        aggregator: `0x${string}`;
                        stakeInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                    } | undefined;
                } | undefined);
                errorName: "ValidationResultWithAggregation";
            };
        };
    };
}, {
    name: "CallExecutionError";
    cause: {
        name: "RpcRequestError";
        cause: {
            data: string;
        };
    };
}>;
export declare const entryPointExecutionErrorSchemaV06: z.ZodEffects<z.ZodObject<{
    name: z.ZodLiteral<"ContractFunctionExecutionError">;
    cause: z.ZodDiscriminatedUnion<"name", [z.ZodObject<{
        name: z.ZodLiteral<"ContractFunctionRevertedError">;
        data: z.ZodDiscriminatedUnion<"errorName", [z.ZodObject<{
            args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
                preOpGas: z.ZodBigInt;
                prefund: z.ZodBigInt;
                sigFailed: z.ZodBoolean;
                validAfter: z.ZodNumber;
                validUntil: z.ZodNumber;
                paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            }, "strip", z.ZodTypeAny, {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            }, {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }>, z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>], null>, {
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }, [{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
                preOpGas: z.ZodBigInt;
                prefund: z.ZodBigInt;
                accountValidationData: z.ZodBigInt;
                paymasterValidationData: z.ZodBigInt;
                accountSigFailed: z.ZodOptional<z.ZodBoolean>;
                paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
                validAfter: z.ZodOptional<z.ZodNumber>;
                validUntil: z.ZodOptional<z.ZodNumber>;
                paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            }, "strip", z.ZodTypeAny, {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }>, z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>], null>, {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }, [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]>]>;
            errorName: z.ZodLiteral<"ValidationResult">;
        }, "strip", z.ZodTypeAny, {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | undefined);
            errorName: "ValidationResult";
        }, {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | undefined);
            errorName: "ValidationResult";
        }>, z.ZodObject<{
            args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodNumber, z.ZodNumber, z.ZodBoolean, z.ZodString], null>, {
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }, [bigint, bigint, number, number, boolean, string]>, z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBoolean, z.ZodString], null>, {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }, [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string]>]>;
            errorName: z.ZodLiteral<"ExecutionResult">;
        }, "strip", z.ZodTypeAny, {
            args: ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }) & ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | undefined);
            errorName: "ExecutionResult";
        }, {
            args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
            errorName: "ExecutionResult";
        }>, z.ZodObject<{
            args: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodString], null>, {
                opIndex: bigint;
                reason: string;
            }, [bigint, string]>;
            errorName: z.ZodLiteral<"FailedOp">;
        }, "strip", z.ZodTypeAny, {
            args: {
                opIndex: bigint;
                reason: string;
            };
            errorName: "FailedOp";
        }, {
            args: [bigint, string];
            errorName: "FailedOp";
        }>, z.ZodObject<{
            args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
                sender: `0x${string}`;
            }, [string]>;
            errorName: z.ZodLiteral<"SenderAddressResult">;
        }, "strip", z.ZodTypeAny, {
            args: {
                sender: `0x${string}`;
            };
            errorName: "SenderAddressResult";
        }, {
            args: [string];
            errorName: "SenderAddressResult";
        }>, z.ZodObject<{
            args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
                aggregator: `0x${string}`;
            }, [string]>;
            errorName: z.ZodLiteral<"SignatureValidationFailed">;
        }, "strip", z.ZodTypeAny, {
            args: {
                aggregator: `0x${string}`;
            };
            errorName: "SignatureValidationFailed";
        }, {
            args: [string];
            errorName: "SignatureValidationFailed";
        }>, z.ZodObject<{
            args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
                preOpGas: z.ZodBigInt;
                prefund: z.ZodBigInt;
                sigFailed: z.ZodBoolean;
                validAfter: z.ZodNumber;
                validUntil: z.ZodNumber;
                paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            }, "strip", z.ZodTypeAny, {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            }, {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }>, z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                stakeInfo: z.ZodObject<{
                    addr: z.ZodOptional<z.ZodString>;
                    stake: z.ZodBigInt;
                    unstakeDelaySec: z.ZodBigInt;
                }, "strip", z.ZodTypeAny, {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                }, {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            }, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            }>>], null>, {
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }, [{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
                preOpGas: z.ZodBigInt;
                prefund: z.ZodBigInt;
                accountValidationData: z.ZodBigInt;
                paymasterValidationData: z.ZodBigInt;
                accountSigFailed: z.ZodOptional<z.ZodBoolean>;
                paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
                validAfter: z.ZodOptional<z.ZodNumber>;
                validUntil: z.ZodOptional<z.ZodNumber>;
                paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            }, "strip", z.ZodTypeAny, {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }>, z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                stakeInfo: z.ZodObject<{
                    addr: z.ZodOptional<z.ZodString>;
                    stake: z.ZodBigInt;
                    unstakeDelaySec: z.ZodBigInt;
                }, "strip", z.ZodTypeAny, {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                }, {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            }, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            }>>], null>, {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }, [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]>]>;
            errorName: z.ZodLiteral<"ValidationResultWithAggregation">;
        }, "strip", z.ZodTypeAny, {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | undefined);
            errorName: "ValidationResultWithAggregation";
        }, {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | undefined);
            errorName: "ValidationResultWithAggregation";
        }>]>;
    }, "strip", z.ZodTypeAny, {
        data: {
            args: {
                aggregator: `0x${string}`;
            };
            errorName: "SignatureValidationFailed";
        } | {
            args: {
                sender: `0x${string}`;
            };
            errorName: "SenderAddressResult";
        } | {
            args: {
                opIndex: bigint;
                reason: string;
            };
            errorName: "FailedOp";
        } | {
            args: ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }) & ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | undefined);
            errorName: "ExecutionResult";
        } | {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | undefined);
            errorName: "ValidationResult";
        } | {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    }, {
        data: {
            args: [string];
            errorName: "SignatureValidationFailed";
        } | {
            args: [string];
            errorName: "SenderAddressResult";
        } | {
            args: [bigint, string];
            errorName: "FailedOp";
        } | {
            args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
            errorName: "ExecutionResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | undefined);
            errorName: "ValidationResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    }>, z.ZodObject<{
        name: z.ZodLiteral<"CallExecutionError">;
        cause: z.ZodObject<{
            name: z.ZodLiteral<"RpcRequestError">;
            cause: z.ZodObject<{
                data: z.ZodEffects<z.ZodString, {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                }, string>;
            }, "strip", z.ZodTypeAny, {
                data: {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                };
            }, {
                data: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: "RpcRequestError";
            cause: {
                data: {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                };
            };
        }, {
            name: "RpcRequestError";
            cause: {
                data: string;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                };
            };
        };
    }, {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: string;
            };
        };
    }>]>;
}, "strip", z.ZodTypeAny, {
    name: "ContractFunctionExecutionError";
    cause: {
        data: {
            args: {
                aggregator: `0x${string}`;
            };
            errorName: "SignatureValidationFailed";
        } | {
            args: {
                sender: `0x${string}`;
            };
            errorName: "SenderAddressResult";
        } | {
            args: {
                opIndex: bigint;
                reason: string;
            };
            errorName: "FailedOp";
        } | {
            args: ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }) & ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | undefined);
            errorName: "ExecutionResult";
        } | {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | undefined);
            errorName: "ValidationResult";
        } | {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    } | {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                };
            };
        };
    };
}, {
    name: "ContractFunctionExecutionError";
    cause: {
        data: {
            args: [string];
            errorName: "SignatureValidationFailed";
        } | {
            args: [string];
            errorName: "SenderAddressResult";
        } | {
            args: [bigint, string];
            errorName: "FailedOp";
        } | {
            args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
            errorName: "ExecutionResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | undefined);
            errorName: "ValidationResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    } | {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: string;
            };
        };
    };
}>, {
    args: {
        aggregator: `0x${string}`;
    };
    errorName: "SignatureValidationFailed";
} | {
    args: {
        sender: `0x${string}`;
    };
    errorName: "SenderAddressResult";
} | {
    args: {
        opIndex: bigint;
        reason: string;
    };
    errorName: "FailedOp";
} | {
    args: ({
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    }) & ({
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | undefined);
    errorName: "ExecutionResult";
} | {
    args: ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    }) & ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | undefined);
    errorName: "ValidationResult";
} | {
    args: ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    }) & ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | undefined);
    errorName: "ValidationResultWithAggregation";
}, {
    name: "ContractFunctionExecutionError";
    cause: {
        data: {
            args: [string];
            errorName: "SignatureValidationFailed";
        } | {
            args: [string];
            errorName: "SenderAddressResult";
        } | {
            args: [bigint, string];
            errorName: "FailedOp";
        } | {
            args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
            errorName: "ExecutionResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | undefined);
            errorName: "ValidationResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    } | {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: string;
            };
        };
    };
}>;
export type EntryPointExecutionErrorV06 = z.infer<typeof entryPointExecutionErrorSchemaV06>;
export declare const entryPointExecutionErrorSchemaV07: z.ZodEffects<z.ZodObject<{
    name: z.ZodLiteral<"ContractFunctionExecutionError">;
    cause: z.ZodDiscriminatedUnion<"name", [z.ZodObject<{
        name: z.ZodLiteral<"ContractFunctionRevertedError">;
        data: z.ZodDiscriminatedUnion<"errorName", [z.ZodObject<{
            args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
                preOpGas: z.ZodBigInt;
                prefund: z.ZodBigInt;
                sigFailed: z.ZodBoolean;
                validAfter: z.ZodNumber;
                validUntil: z.ZodNumber;
                paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            }, "strip", z.ZodTypeAny, {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            }, {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }>, z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>], null>, {
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }, [{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
                preOpGas: z.ZodBigInt;
                prefund: z.ZodBigInt;
                accountValidationData: z.ZodBigInt;
                paymasterValidationData: z.ZodBigInt;
                accountSigFailed: z.ZodOptional<z.ZodBoolean>;
                paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
                validAfter: z.ZodOptional<z.ZodNumber>;
                validUntil: z.ZodOptional<z.ZodNumber>;
                paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            }, "strip", z.ZodTypeAny, {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }>, z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>], null>, {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }, [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]>]>;
            errorName: z.ZodLiteral<"ValidationResult">;
        }, "strip", z.ZodTypeAny, {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | undefined);
            errorName: "ValidationResult";
        }, {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | undefined);
            errorName: "ValidationResult";
        }>, z.ZodObject<{
            args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodNumber, z.ZodNumber, z.ZodBoolean, z.ZodString], null>, {
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }, [bigint, bigint, number, number, boolean, string]>, z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBigInt, z.ZodBoolean, z.ZodString], null>, {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }, [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string]>]>;
            errorName: z.ZodLiteral<"ExecutionResult">;
        }, "strip", z.ZodTypeAny, {
            args: ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }) & ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | undefined);
            errorName: "ExecutionResult";
        }, {
            args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
            errorName: "ExecutionResult";
        }>, z.ZodObject<{
            args: z.ZodEffects<z.ZodTuple<[z.ZodBigInt, z.ZodString], null>, {
                opIndex: bigint;
                reason: string;
            }, [bigint, string]>;
            errorName: z.ZodLiteral<"FailedOp">;
        }, "strip", z.ZodTypeAny, {
            args: {
                opIndex: bigint;
                reason: string;
            };
            errorName: "FailedOp";
        }, {
            args: [bigint, string];
            errorName: "FailedOp";
        }>, z.ZodObject<{
            args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
                sender: `0x${string}`;
            }, [string]>;
            errorName: z.ZodLiteral<"SenderAddressResult">;
        }, "strip", z.ZodTypeAny, {
            args: {
                sender: `0x${string}`;
            };
            errorName: "SenderAddressResult";
        }, {
            args: [string];
            errorName: "SenderAddressResult";
        }>, z.ZodObject<{
            args: z.ZodEffects<z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, {
                aggregator: `0x${string}`;
            }, [string]>;
            errorName: z.ZodLiteral<"SignatureValidationFailed">;
        }, "strip", z.ZodTypeAny, {
            args: {
                aggregator: `0x${string}`;
            };
            errorName: "SignatureValidationFailed";
        }, {
            args: [string];
            errorName: "SignatureValidationFailed";
        }>, z.ZodObject<{
            args: z.ZodUnion<[z.ZodEffects<z.ZodTuple<[z.ZodObject<{
                preOpGas: z.ZodBigInt;
                prefund: z.ZodBigInt;
                sigFailed: z.ZodBoolean;
                validAfter: z.ZodNumber;
                validUntil: z.ZodNumber;
                paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            }, "strip", z.ZodTypeAny, {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: `0x${string}`;
            }, {
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }>, z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                stakeInfo: z.ZodObject<{
                    addr: z.ZodOptional<z.ZodString>;
                    stake: z.ZodBigInt;
                    unstakeDelaySec: z.ZodBigInt;
                }, "strip", z.ZodTypeAny, {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                }, {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            }, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            }>>], null>, {
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }, [{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]>, z.ZodEffects<z.ZodTuple<[z.ZodObject<{
                preOpGas: z.ZodBigInt;
                prefund: z.ZodBigInt;
                accountValidationData: z.ZodBigInt;
                paymasterValidationData: z.ZodBigInt;
                accountSigFailed: z.ZodOptional<z.ZodBoolean>;
                paymasterSigFailed: z.ZodOptional<z.ZodBoolean>;
                validAfter: z.ZodOptional<z.ZodNumber>;
                validUntil: z.ZodOptional<z.ZodNumber>;
                paymasterContext: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            }, "strip", z.ZodTypeAny, {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: `0x${string}`;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }>, z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                addr: z.ZodOptional<z.ZodString>;
                stake: z.ZodBigInt;
                unstakeDelaySec: z.ZodBigInt;
            }, "strip", z.ZodTypeAny, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }>>, z.ZodOptional<z.ZodObject<{
                aggregator: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                stakeInfo: z.ZodObject<{
                    addr: z.ZodOptional<z.ZodString>;
                    stake: z.ZodBigInt;
                    unstakeDelaySec: z.ZodBigInt;
                }, "strip", z.ZodTypeAny, {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                }, {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                aggregator: `0x${string}`;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            }, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            }>>], null>, {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }, [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]>]>;
            errorName: z.ZodLiteral<"ValidationResultWithAggregation">;
        }, "strip", z.ZodTypeAny, {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | undefined);
            errorName: "ValidationResultWithAggregation";
        }, {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | undefined);
            errorName: "ValidationResultWithAggregation";
        }>]>;
    }, "strip", z.ZodTypeAny, {
        data: {
            args: {
                aggregator: `0x${string}`;
            };
            errorName: "SignatureValidationFailed";
        } | {
            args: {
                sender: `0x${string}`;
            };
            errorName: "SenderAddressResult";
        } | {
            args: {
                opIndex: bigint;
                reason: string;
            };
            errorName: "FailedOp";
        } | {
            args: ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }) & ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | undefined);
            errorName: "ExecutionResult";
        } | {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | undefined);
            errorName: "ValidationResult";
        } | {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    }, {
        data: {
            args: [string];
            errorName: "SignatureValidationFailed";
        } | {
            args: [string];
            errorName: "SenderAddressResult";
        } | {
            args: [bigint, string];
            errorName: "FailedOp";
        } | {
            args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
            errorName: "ExecutionResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | undefined);
            errorName: "ValidationResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    }>, z.ZodObject<{
        name: z.ZodLiteral<"CallExecutionError">;
        cause: z.ZodObject<{
            name: z.ZodLiteral<"RpcRequestError">;
            cause: z.ZodObject<{
                data: z.ZodEffects<z.ZodString, {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                }, string>;
            }, "strip", z.ZodTypeAny, {
                data: {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                };
            }, {
                data: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            name: "RpcRequestError";
            cause: {
                data: {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                };
            };
        }, {
            name: "RpcRequestError";
            cause: {
                data: string;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                };
            };
        };
    }, {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: string;
            };
        };
    }>]>;
}, "strip", z.ZodTypeAny, {
    name: "ContractFunctionExecutionError";
    cause: {
        data: {
            args: {
                aggregator: `0x${string}`;
            };
            errorName: "SignatureValidationFailed";
        } | {
            args: {
                sender: `0x${string}`;
            };
            errorName: "SenderAddressResult";
        } | {
            args: {
                opIndex: bigint;
                reason: string;
            };
            errorName: "FailedOp";
        } | {
            args: ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            }) & ({
                preOpGas: bigint;
                paid: bigint;
                validAfter: number;
                validUntil: number;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | {
                preOpGas: bigint;
                paid: bigint;
                validationData: bigint;
                paymasterValidationData: bigint;
                paymasterVerificationGasLimit: bigint;
                paymasterPostOpGasLimit: bigint;
                targetSuccess: boolean;
                targetResult: `0x${string}`;
            } | undefined);
            errorName: "ExecutionResult";
        } | {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
            } | undefined);
            errorName: "ValidationResult";
        } | {
            args: ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            }) & ({
                returnInfo: {
                    preOpGas: bigint;
                    validAfter: number;
                    validUntil: number;
                    prefund: bigint;
                    sigFailed: boolean;
                    paymasterContext: `0x${string}`;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | {
                returnInfo: {
                    preOpGas: bigint;
                    prefund: bigint;
                    paymasterContext: `0x${string}`;
                    paymasterValidationData: bigint;
                    accountValidationData: bigint;
                    accountSigFailed?: boolean | undefined;
                    paymasterSigFailed?: boolean | undefined;
                    validAfter?: number | undefined;
                    validUntil?: number | undefined;
                };
                senderInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
                factoryInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                paymasterInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                } | undefined;
                aggregatorInfo: {
                    aggregator: `0x${string}`;
                    stakeInfo: {
                        stake: bigint;
                        unstakeDelaySec: bigint;
                        addr?: string | undefined;
                    };
                } | undefined;
            } | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    } | {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: {
                    args: {
                        aggregator: `0x${string}`;
                    };
                    errorName: "SignatureValidationFailed";
                } | {
                    args: {
                        sender: `0x${string}`;
                    };
                    errorName: "SenderAddressResult";
                } | {
                    args: {
                        opIndex: bigint;
                        reason: string;
                    };
                    errorName: "FailedOp";
                } | {
                    args: ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    }) & ({
                        preOpGas: bigint;
                        paid: bigint;
                        validAfter: number;
                        validUntil: number;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | {
                        preOpGas: bigint;
                        paid: bigint;
                        validationData: bigint;
                        paymasterValidationData: bigint;
                        paymasterVerificationGasLimit: bigint;
                        paymasterPostOpGasLimit: bigint;
                        targetSuccess: boolean;
                        targetResult: `0x${string}`;
                    } | undefined);
                    errorName: "ExecutionResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResult";
                } | {
                    args: ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    }) & ({
                        returnInfo: {
                            preOpGas: bigint;
                            validAfter: number;
                            validUntil: number;
                            prefund: bigint;
                            sigFailed: boolean;
                            paymasterContext: `0x${string}`;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | {
                        returnInfo: {
                            preOpGas: bigint;
                            prefund: bigint;
                            paymasterContext: `0x${string}`;
                            paymasterValidationData: bigint;
                            accountValidationData: bigint;
                            accountSigFailed?: boolean | undefined;
                            paymasterSigFailed?: boolean | undefined;
                            validAfter?: number | undefined;
                            validUntil?: number | undefined;
                        };
                        senderInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        };
                        factoryInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        paymasterInfo: {
                            stake: bigint;
                            unstakeDelaySec: bigint;
                            addr?: string | undefined;
                        } | undefined;
                        aggregatorInfo: {
                            aggregator: `0x${string}`;
                            stakeInfo: {
                                stake: bigint;
                                unstakeDelaySec: bigint;
                                addr?: string | undefined;
                            };
                        } | undefined;
                    } | undefined);
                    errorName: "ValidationResultWithAggregation";
                };
            };
        };
    };
}, {
    name: "ContractFunctionExecutionError";
    cause: {
        data: {
            args: [string];
            errorName: "SignatureValidationFailed";
        } | {
            args: [string];
            errorName: "SenderAddressResult";
        } | {
            args: [bigint, string];
            errorName: "FailedOp";
        } | {
            args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
            errorName: "ExecutionResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | undefined);
            errorName: "ValidationResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    } | {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: string;
            };
        };
    };
}>, {
    args: {
        aggregator: `0x${string}`;
    };
    errorName: "SignatureValidationFailed";
} | {
    args: {
        sender: `0x${string}`;
    };
    errorName: "SenderAddressResult";
} | {
    args: {
        opIndex: bigint;
        reason: string;
    };
    errorName: "FailedOp";
} | {
    args: ({
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    }) & ({
        preOpGas: bigint;
        paid: bigint;
        validAfter: number;
        validUntil: number;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | {
        preOpGas: bigint;
        paid: bigint;
        validationData: bigint;
        paymasterValidationData: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        targetSuccess: boolean;
        targetResult: `0x${string}`;
    } | undefined);
    errorName: "ExecutionResult";
} | {
    args: ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    }) & ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
    } | undefined);
    errorName: "ValidationResult";
} | {
    args: ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    }) & ({
        returnInfo: {
            preOpGas: bigint;
            validAfter: number;
            validUntil: number;
            prefund: bigint;
            sigFailed: boolean;
            paymasterContext: `0x${string}`;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | {
        returnInfo: {
            preOpGas: bigint;
            prefund: bigint;
            paymasterContext: `0x${string}`;
            paymasterValidationData: bigint;
            accountValidationData: bigint;
            accountSigFailed?: boolean | undefined;
            paymasterSigFailed?: boolean | undefined;
            validAfter?: number | undefined;
            validUntil?: number | undefined;
        };
        senderInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        };
        factoryInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        paymasterInfo: {
            stake: bigint;
            unstakeDelaySec: bigint;
            addr?: string | undefined;
        } | undefined;
        aggregatorInfo: {
            aggregator: `0x${string}`;
            stakeInfo: {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            };
        } | undefined;
    } | undefined);
    errorName: "ValidationResultWithAggregation";
}, {
    name: "ContractFunctionExecutionError";
    cause: {
        data: {
            args: [string];
            errorName: "SignatureValidationFailed";
        } | {
            args: [string];
            errorName: "SenderAddressResult";
        } | {
            args: [bigint, string];
            errorName: "FailedOp";
        } | {
            args: [bigint, bigint, number, number, boolean, string] | [bigint, bigint, bigint, bigint, bigint, bigint, boolean, string];
            errorName: "ExecutionResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined] | undefined);
            errorName: "ValidationResult";
        } | {
            args: ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined]) & ([{
                preOpGas: bigint;
                validAfter: number;
                validUntil: number;
                prefund: bigint;
                sigFailed: boolean;
                paymasterContext: string;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | [{
                preOpGas: bigint;
                prefund: bigint;
                paymasterContext: string;
                paymasterValidationData: bigint;
                accountValidationData: bigint;
                accountSigFailed?: boolean | undefined;
                paymasterSigFailed?: boolean | undefined;
                validAfter?: number | undefined;
                validUntil?: number | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            }, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                stake: bigint;
                unstakeDelaySec: bigint;
                addr?: string | undefined;
            } | undefined, {
                aggregator: string;
                stakeInfo: {
                    stake: bigint;
                    unstakeDelaySec: bigint;
                    addr?: string | undefined;
                };
            } | undefined] | undefined);
            errorName: "ValidationResultWithAggregation";
        };
        name: "ContractFunctionRevertedError";
    } | {
        name: "CallExecutionError";
        cause: {
            name: "RpcRequestError";
            cause: {
                data: string;
            };
        };
    };
}>;
export type EntryPointExecutionErrorV07 = z.infer<typeof entryPointExecutionErrorSchemaV07>;
//# sourceMappingURL=validation.d.ts.map