import { z } from "zod";
declare const gasPrice: z.ZodEffects<z.ZodObject<{
    maxFee: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, bigint, string | number>;
    maxPriorityFee: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, bigint, string | number>;
}, "strip", z.ZodTypeAny, {
    maxFee: bigint;
    maxPriorityFee: bigint;
}, {
    maxFee: string | number;
    maxPriorityFee: string | number;
}>, {
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
}, {
    maxFee: string | number;
    maxPriorityFee: string | number;
}>;
export declare const gasStationResult: z.ZodObject<{
    safeLow: z.ZodEffects<z.ZodObject<{
        maxFee: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, bigint, string | number>;
        maxPriorityFee: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, bigint, string | number>;
    }, "strip", z.ZodTypeAny, {
        maxFee: bigint;
        maxPriorityFee: bigint;
    }, {
        maxFee: string | number;
        maxPriorityFee: string | number;
    }>, {
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
    }, {
        maxFee: string | number;
        maxPriorityFee: string | number;
    }>;
    standard: z.ZodEffects<z.ZodObject<{
        maxFee: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, bigint, string | number>;
        maxPriorityFee: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, bigint, string | number>;
    }, "strip", z.ZodTypeAny, {
        maxFee: bigint;
        maxPriorityFee: bigint;
    }, {
        maxFee: string | number;
        maxPriorityFee: string | number;
    }>, {
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
    }, {
        maxFee: string | number;
        maxPriorityFee: string | number;
    }>;
    fast: z.ZodEffects<z.ZodObject<{
        maxFee: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, bigint, string | number>;
        maxPriorityFee: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, bigint, string | number>;
    }, "strip", z.ZodTypeAny, {
        maxFee: bigint;
        maxPriorityFee: bigint;
    }, {
        maxFee: string | number;
        maxPriorityFee: string | number;
    }>, {
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
    }, {
        maxFee: string | number;
        maxPriorityFee: string | number;
    }>;
}, "strip", z.ZodTypeAny, {
    safeLow: {
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
    };
    standard: {
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
    };
    fast: {
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
    };
}, {
    safeLow: {
        maxFee: string | number;
        maxPriorityFee: string | number;
    };
    standard: {
        maxFee: string | number;
        maxPriorityFee: string | number;
    };
    fast: {
        maxFee: string | number;
        maxPriorityFee: string | number;
    };
}>;
export declare const gasPriceMultipliers: z.ZodObject<{
    slow: z.ZodBigInt;
    standard: z.ZodBigInt;
    fast: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    standard: bigint;
    fast: bigint;
    slow: bigint;
}, {
    standard: bigint;
    fast: bigint;
    slow: bigint;
}>;
export type GasPriceMultipliers = z.infer<typeof gasPriceMultipliers>;
export type GasPriceParameters = z.infer<typeof gasPrice>;
export {};
//# sourceMappingURL=gasPrice.d.ts.map