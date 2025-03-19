import { z } from "zod";
import type { MempoolUserOperation } from "./mempool.js";
import { SignedAuthorization } from "viem/experimental";
export declare const hexData32Pattern: RegExp;
export declare const commaSeperatedAddressPattern: RegExp;
declare const addressSchema: z.ZodEffects<z.ZodString, `0x${string}`, string>;
export declare const hexNumberSchema: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
declare const hexDataSchema: z.ZodEffects<z.ZodString, `0x${string}`, string>;
declare const hexData32Schema: z.ZodEffects<z.ZodString, `0x${string}`, string>;
export type Address = z.infer<typeof addressSchema>;
export type HexNumber = z.infer<typeof hexNumberSchema>;
export type HexData = z.infer<typeof hexDataSchema>;
export type HexData32 = z.infer<typeof hexData32Schema>;
declare const userOperationV06Schema: z.ZodEffects<z.ZodObject<{
    sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strict", z.ZodTypeAny, {
    sender: `0x${string}`;
    nonce: bigint;
    initCode: `0x${string}`;
    paymasterAndData: `0x${string}`;
    callData: `0x${string}`;
    callGasLimit: bigint;
    verificationGasLimit: bigint;
    preVerificationGas: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    signature: `0x${string}`;
}, {
    sender: string;
    nonce: string | number | bigint;
    initCode: string;
    paymasterAndData: string;
    callData: string;
    callGasLimit: string | number | bigint;
    verificationGasLimit: string | number | bigint;
    preVerificationGas: string | number | bigint;
    maxFeePerGas: string | number | bigint;
    maxPriorityFeePerGas: string | number | bigint;
    signature: string;
}>, {
    sender: `0x${string}`;
    nonce: bigint;
    initCode: `0x${string}`;
    paymasterAndData: `0x${string}`;
    callData: `0x${string}`;
    callGasLimit: bigint;
    verificationGasLimit: bigint;
    preVerificationGas: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    signature: `0x${string}`;
}, {
    sender: string;
    nonce: string | number | bigint;
    initCode: string;
    paymasterAndData: string;
    callData: string;
    callGasLimit: string | number | bigint;
    verificationGasLimit: string | number | bigint;
    preVerificationGas: string | number | bigint;
    maxFeePerGas: string | number | bigint;
    maxPriorityFeePerGas: string | number | bigint;
    signature: string;
}>;
declare const userOperationV07Schema: z.ZodEffects<z.ZodObject<{
    sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
    factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
    callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
    paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
    paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
    paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
    signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strict", z.ZodTypeAny, {
    sender: `0x${string}`;
    factory: `0x${string}` | null;
    paymaster: `0x${string}` | null;
    nonce: bigint;
    callData: `0x${string}`;
    callGasLimit: bigint;
    verificationGasLimit: bigint;
    preVerificationGas: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    signature: `0x${string}`;
    paymasterVerificationGasLimit: bigint | null;
    paymasterPostOpGasLimit: bigint | null;
    factoryData: `0x${string}` | null;
    paymasterData: `0x${string}` | null;
}, {
    sender: string;
    nonce: string | number | bigint;
    callData: string;
    callGasLimit: string | number | bigint;
    verificationGasLimit: string | number | bigint;
    preVerificationGas: string | number | bigint;
    maxFeePerGas: string | number | bigint;
    maxPriorityFeePerGas: string | number | bigint;
    signature: string;
    factory?: string | null | undefined;
    factoryData?: string | null | undefined;
    paymaster?: string | null | undefined;
    paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
    paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
    paymasterData?: string | null | undefined;
}>, {
    sender: `0x${string}`;
    factory: `0x${string}` | null;
    paymaster: `0x${string}` | null;
    nonce: bigint;
    callData: `0x${string}`;
    callGasLimit: bigint;
    verificationGasLimit: bigint;
    preVerificationGas: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    signature: `0x${string}`;
    paymasterVerificationGasLimit: bigint | null;
    paymasterPostOpGasLimit: bigint | null;
    factoryData: `0x${string}` | null;
    paymasterData: `0x${string}` | null;
}, {
    sender: string;
    nonce: string | number | bigint;
    callData: string;
    callGasLimit: string | number | bigint;
    verificationGasLimit: string | number | bigint;
    preVerificationGas: string | number | bigint;
    maxFeePerGas: string | number | bigint;
    maxPriorityFeePerGas: string | number | bigint;
    signature: string;
    factory?: string | null | undefined;
    factoryData?: string | null | undefined;
    paymaster?: string | null | undefined;
    paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
    paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
    paymasterData?: string | null | undefined;
}>;
declare const packerUserOperationSchema: z.ZodEffects<z.ZodObject<{
    sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    accountGasLimits: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    gasFees: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strict", z.ZodTypeAny, {
    sender: `0x${string}`;
    nonce: bigint;
    initCode: `0x${string}`;
    paymasterAndData: `0x${string}`;
    callData: `0x${string}`;
    preVerificationGas: bigint;
    signature: `0x${string}`;
    accountGasLimits: `0x${string}`;
    gasFees: `0x${string}`;
}, {
    sender: string;
    nonce: string | number | bigint;
    initCode: string;
    paymasterAndData: string;
    callData: string;
    preVerificationGas: string | number | bigint;
    signature: string;
    accountGasLimits: string;
    gasFees: string;
}>, {
    sender: `0x${string}`;
    nonce: bigint;
    initCode: `0x${string}`;
    paymasterAndData: `0x${string}`;
    callData: `0x${string}`;
    preVerificationGas: bigint;
    signature: `0x${string}`;
    accountGasLimits: `0x${string}`;
    gasFees: `0x${string}`;
}, {
    sender: string;
    nonce: string | number | bigint;
    initCode: string;
    paymasterAndData: string;
    callData: string;
    preVerificationGas: string | number | bigint;
    signature: string;
    accountGasLimits: string;
    gasFees: string;
}>;
declare const userOperationSchema: z.ZodUnion<[z.ZodEffects<z.ZodObject<{
    sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strict", z.ZodTypeAny, {
    sender: `0x${string}`;
    nonce: bigint;
    initCode: `0x${string}`;
    paymasterAndData: `0x${string}`;
    callData: `0x${string}`;
    callGasLimit: bigint;
    verificationGasLimit: bigint;
    preVerificationGas: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    signature: `0x${string}`;
}, {
    sender: string;
    nonce: string | number | bigint;
    initCode: string;
    paymasterAndData: string;
    callData: string;
    callGasLimit: string | number | bigint;
    verificationGasLimit: string | number | bigint;
    preVerificationGas: string | number | bigint;
    maxFeePerGas: string | number | bigint;
    maxPriorityFeePerGas: string | number | bigint;
    signature: string;
}>, {
    sender: `0x${string}`;
    nonce: bigint;
    initCode: `0x${string}`;
    paymasterAndData: `0x${string}`;
    callData: `0x${string}`;
    callGasLimit: bigint;
    verificationGasLimit: bigint;
    preVerificationGas: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    signature: `0x${string}`;
}, {
    sender: string;
    nonce: string | number | bigint;
    initCode: string;
    paymasterAndData: string;
    callData: string;
    callGasLimit: string | number | bigint;
    verificationGasLimit: string | number | bigint;
    preVerificationGas: string | number | bigint;
    maxFeePerGas: string | number | bigint;
    maxPriorityFeePerGas: string | number | bigint;
    signature: string;
}>, z.ZodEffects<z.ZodObject<{
    sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
    factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
    callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
    paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
    paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
    paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
    signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strict", z.ZodTypeAny, {
    sender: `0x${string}`;
    factory: `0x${string}` | null;
    paymaster: `0x${string}` | null;
    nonce: bigint;
    callData: `0x${string}`;
    callGasLimit: bigint;
    verificationGasLimit: bigint;
    preVerificationGas: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    signature: `0x${string}`;
    paymasterVerificationGasLimit: bigint | null;
    paymasterPostOpGasLimit: bigint | null;
    factoryData: `0x${string}` | null;
    paymasterData: `0x${string}` | null;
}, {
    sender: string;
    nonce: string | number | bigint;
    callData: string;
    callGasLimit: string | number | bigint;
    verificationGasLimit: string | number | bigint;
    preVerificationGas: string | number | bigint;
    maxFeePerGas: string | number | bigint;
    maxPriorityFeePerGas: string | number | bigint;
    signature: string;
    factory?: string | null | undefined;
    factoryData?: string | null | undefined;
    paymaster?: string | null | undefined;
    paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
    paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
    paymasterData?: string | null | undefined;
}>, {
    sender: `0x${string}`;
    factory: `0x${string}` | null;
    paymaster: `0x${string}` | null;
    nonce: bigint;
    callData: `0x${string}`;
    callGasLimit: bigint;
    verificationGasLimit: bigint;
    preVerificationGas: bigint;
    maxFeePerGas: bigint;
    maxPriorityFeePerGas: bigint;
    signature: `0x${string}`;
    paymasterVerificationGasLimit: bigint | null;
    paymasterPostOpGasLimit: bigint | null;
    factoryData: `0x${string}` | null;
    paymasterData: `0x${string}` | null;
}, {
    sender: string;
    nonce: string | number | bigint;
    callData: string;
    callGasLimit: string | number | bigint;
    verificationGasLimit: string | number | bigint;
    preVerificationGas: string | number | bigint;
    maxFeePerGas: string | number | bigint;
    maxPriorityFeePerGas: string | number | bigint;
    signature: string;
    factory?: string | null | undefined;
    factoryData?: string | null | undefined;
    paymaster?: string | null | undefined;
    paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
    paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
    paymasterData?: string | null | undefined;
}>]>;
export type UserOperationV06 = z.infer<typeof userOperationV06Schema>;
export type UserOperationV07 = z.infer<typeof userOperationV07Schema>;
export type PackedUserOperation = z.infer<typeof packerUserOperationSchema>;
export type UserOperation = z.infer<typeof userOperationSchema>;
export type UserOperation7702 = {
    userOperation: UserOperation;
    authorization: SignedAuthorization;
};
export type UserOperationRequest = {
    userOperation: UserOperation;
    entryPoint: Address;
};
export type UserOperationWithHash = {
    mempoolUserOperation: MempoolUserOperation;
    userOperationHash: HexData32;
};
declare const jsonRpcSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    id: z.ZodNumber;
    method: z.ZodString;
    params: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodUnknown, "many">>, unknown[], unknown[] | undefined>;
}, "strict", z.ZodTypeAny, {
    params: unknown[];
    jsonrpc: "2.0";
    id: number;
    method: string;
}, {
    jsonrpc: "2.0";
    id: number;
    method: string;
    params?: unknown[] | undefined;
}>;
declare const jsonRpcResultSchema: z.ZodObject<{
    jsonrpc: z.ZodLiteral<"2.0">;
    id: z.ZodNumber;
    result: z.ZodUnknown;
}, "strict", z.ZodTypeAny, {
    jsonrpc: "2.0";
    id: number;
    result?: unknown;
}, {
    jsonrpc: "2.0";
    id: number;
    result?: unknown;
}>;
declare const chainIdRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_chainId">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "eth_chainId";
}, {
    params: [];
    method: "eth_chainId";
}>;
declare const supportedEntryPointsRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_supportedEntryPoints">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "eth_supportedEntryPoints";
}, {
    params: [];
    method: "eth_supportedEntryPoints";
}>;
declare const stateOverridesSchema: z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodObject<{
    balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    nonce: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    code: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
    state: z.ZodOptional<z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>>>;
    stateDiff: z.ZodOptional<z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>>>;
}, "strip", z.ZodTypeAny, {
    balance?: bigint | undefined;
    nonce?: bigint | undefined;
    code?: `0x${string}` | undefined;
    state?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
    stateDiff?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
}, {
    balance?: string | number | bigint | undefined;
    nonce?: string | number | bigint | undefined;
    code?: string | undefined;
    state?: Record<string, string> | undefined;
    stateDiff?: Record<string, string> | undefined;
}>>;
export type StateOverrides = z.infer<typeof stateOverridesSchema>;
declare const estimateUserOperationGasRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_estimateUserOperationGas">;
    params: z.ZodUnion<[z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodObject<{
        balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        nonce: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        code: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        state: z.ZodOptional<z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>>>;
        stateDiff: z.ZodOptional<z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>>>;
    }, "strip", z.ZodTypeAny, {
        balance?: bigint | undefined;
        nonce?: bigint | undefined;
        code?: `0x${string}` | undefined;
        state?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
        stateDiff?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
    }, {
        balance?: string | number | bigint | undefined;
        nonce?: string | number | bigint | undefined;
        code?: string | undefined;
        state?: Record<string, string> | undefined;
        stateDiff?: Record<string, string> | undefined;
    }>>], null>]>;
}, "strip", z.ZodTypeAny, {
    params: [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`] | [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`, Partial<Record<`0x${string}`, {
        balance?: bigint | undefined;
        nonce?: bigint | undefined;
        code?: `0x${string}` | undefined;
        state?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
        stateDiff?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
    }>>];
    method: "eth_estimateUserOperationGas";
}, {
    params: [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string] | [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string, Record<string, {
        balance?: string | number | bigint | undefined;
        nonce?: string | number | bigint | undefined;
        code?: string | undefined;
        state?: Record<string, string> | undefined;
        stateDiff?: Record<string, string> | undefined;
    }>];
    method: "eth_estimateUserOperationGas";
}>;
declare const sendUserOperationRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_sendUserOperation">;
    params: z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`];
    method: "eth_sendUserOperation";
}, {
    params: [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string];
    method: "eth_sendUserOperation";
}>;
declare const getUserOperationByHashRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_getUserOperationByHash">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "eth_getUserOperationByHash";
}, {
    params: [string];
    method: "eth_getUserOperationByHash";
}>;
declare const getUserOperationReceiptRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_getUserOperationReceipt">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "eth_getUserOperationReceipt";
}, {
    params: [string];
    method: "eth_getUserOperationReceipt";
}>;
declare const bundlerClearStateRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_clearState">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "debug_bundler_clearState";
}, {
    params: [];
    method: "debug_bundler_clearState";
}>;
declare const bundlerClearMempoolRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_clearMempool">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "debug_bundler_clearMempool";
}, {
    params: [];
    method: "debug_bundler_clearMempool";
}>;
declare const bundlerDumpMempoolRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_dumpMempool">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "debug_bundler_dumpMempool";
}, {
    params: [string];
    method: "debug_bundler_dumpMempool";
}>;
declare const bundlerSendBundleNowRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_sendBundleNow">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "debug_bundler_sendBundleNow";
}, {
    params: [];
    method: "debug_bundler_sendBundleNow";
}>;
declare const bundlerSetBundlingModeRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_setBundlingMode">;
    params: z.ZodTuple<[z.ZodEnum<["manual", "auto"]>], null>;
}, "strip", z.ZodTypeAny, {
    params: ["manual" | "auto"];
    method: "debug_bundler_setBundlingMode";
}, {
    params: ["manual" | "auto"];
    method: "debug_bundler_setBundlingMode";
}>;
declare const bundlerSetReputationsRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_setReputation">;
    params: z.ZodTuple<[z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        opsSeen: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        opsIncluded: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        opsSeen: bigint;
        opsIncluded: bigint;
    }, {
        address: string;
        opsSeen: string | number | bigint;
        opsIncluded: string | number | bigint;
    }>, "many">, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [{
        address: `0x${string}`;
        opsSeen: bigint;
        opsIncluded: bigint;
    }[], `0x${string}`];
    method: "debug_bundler_setReputation";
}, {
    params: [{
        address: string;
        opsSeen: string | number | bigint;
        opsIncluded: string | number | bigint;
    }[], string];
    method: "debug_bundler_setReputation";
}>;
declare const bundlerDumpReputationsRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_dumpReputation">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "debug_bundler_dumpReputation";
}, {
    params: [string];
    method: "debug_bundler_dumpReputation";
}>;
declare const pimlicoGetStakeStatusRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_getStakeStatus">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`, `0x${string}`];
    method: "debug_bundler_getStakeStatus";
}, {
    params: [string, string];
    method: "debug_bundler_getStakeStatus";
}>;
declare const pimlicoGetUserOperationStatusRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"pimlico_getUserOperationStatus">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "pimlico_getUserOperationStatus";
}, {
    params: [string];
    method: "pimlico_getUserOperationStatus";
}>;
declare const pimlicoGetUserOperationGasPriceRequestSchema: z.ZodObject<{
    method: z.ZodLiteral<"pimlico_getUserOperationGasPrice">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "pimlico_getUserOperationGasPrice";
}, {
    params: [];
    method: "pimlico_getUserOperationGasPrice";
}>;
export declare const altoVersions: z.ZodEnum<["v1", "v2"]>;
export type AltoVersions = z.infer<typeof altoVersions>;
declare const bundlerRequestSchema: z.ZodDiscriminatedUnion<"method", [z.ZodObject<{
    method: z.ZodLiteral<"eth_chainId">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "eth_chainId";
}, {
    params: [];
    method: "eth_chainId";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_supportedEntryPoints">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "eth_supportedEntryPoints";
}, {
    params: [];
    method: "eth_supportedEntryPoints";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_estimateUserOperationGas">;
    params: z.ZodUnion<[z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>, z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodObject<{
        balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        nonce: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        code: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        state: z.ZodOptional<z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>>>;
        stateDiff: z.ZodOptional<z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>>>;
    }, "strip", z.ZodTypeAny, {
        balance?: bigint | undefined;
        nonce?: bigint | undefined;
        code?: `0x${string}` | undefined;
        state?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
        stateDiff?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
    }, {
        balance?: string | number | bigint | undefined;
        nonce?: string | number | bigint | undefined;
        code?: string | undefined;
        state?: Record<string, string> | undefined;
        stateDiff?: Record<string, string> | undefined;
    }>>], null>]>;
}, "strip", z.ZodTypeAny, {
    params: [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`] | [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`, Partial<Record<`0x${string}`, {
        balance?: bigint | undefined;
        nonce?: bigint | undefined;
        code?: `0x${string}` | undefined;
        state?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
        stateDiff?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
    }>>];
    method: "eth_estimateUserOperationGas";
}, {
    params: [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string] | [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string, Record<string, {
        balance?: string | number | bigint | undefined;
        nonce?: string | number | bigint | undefined;
        code?: string | undefined;
        state?: Record<string, string> | undefined;
        stateDiff?: Record<string, string> | undefined;
    }>];
    method: "eth_estimateUserOperationGas";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_sendUserOperation">;
    params: z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`];
    method: "eth_sendUserOperation";
}, {
    params: [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string];
    method: "eth_sendUserOperation";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_getUserOperationByHash">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "eth_getUserOperationByHash";
}, {
    params: [string];
    method: "eth_getUserOperationByHash";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_getUserOperationReceipt">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "eth_getUserOperationReceipt";
}, {
    params: [string];
    method: "eth_getUserOperationReceipt";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_clearState">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "debug_bundler_clearState";
}, {
    params: [];
    method: "debug_bundler_clearState";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_clearMempool">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "debug_bundler_clearMempool";
}, {
    params: [];
    method: "debug_bundler_clearMempool";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_dumpMempool">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "debug_bundler_dumpMempool";
}, {
    params: [string];
    method: "debug_bundler_dumpMempool";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_sendBundleNow">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "debug_bundler_sendBundleNow";
}, {
    params: [];
    method: "debug_bundler_sendBundleNow";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_setBundlingMode">;
    params: z.ZodTuple<[z.ZodEnum<["manual", "auto"]>], null>;
}, "strip", z.ZodTypeAny, {
    params: ["manual" | "auto"];
    method: "debug_bundler_setBundlingMode";
}, {
    params: ["manual" | "auto"];
    method: "debug_bundler_setBundlingMode";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_setReputation">;
    params: z.ZodTuple<[z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        opsSeen: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        opsIncluded: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        opsSeen: bigint;
        opsIncluded: bigint;
    }, {
        address: string;
        opsSeen: string | number | bigint;
        opsIncluded: string | number | bigint;
    }>, "many">, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [{
        address: `0x${string}`;
        opsSeen: bigint;
        opsIncluded: bigint;
    }[], `0x${string}`];
    method: "debug_bundler_setReputation";
}, {
    params: [{
        address: string;
        opsSeen: string | number | bigint;
        opsIncluded: string | number | bigint;
    }[], string];
    method: "debug_bundler_setReputation";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_dumpReputation">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "debug_bundler_dumpReputation";
}, {
    params: [string];
    method: "debug_bundler_dumpReputation";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_getStakeStatus">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`, `0x${string}`];
    method: "debug_bundler_getStakeStatus";
}, {
    params: [string, string];
    method: "debug_bundler_getStakeStatus";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_getUserOperationStatus">;
    params: z.ZodTuple<[z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [`0x${string}`];
    method: "pimlico_getUserOperationStatus";
}, {
    params: [string];
    method: "pimlico_getUserOperationStatus";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_getUserOperationGasPrice">;
    params: z.ZodTuple<[], null>;
}, "strip", z.ZodTypeAny, {
    params: [];
    method: "pimlico_getUserOperationGasPrice";
}, {
    params: [];
    method: "pimlico_getUserOperationGasPrice";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_sendUserOperationNow">;
    params: z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>], null>;
}, "strip", z.ZodTypeAny, {
    params: [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`];
    method: "pimlico_sendUserOperationNow";
}, {
    params: [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string];
    method: "pimlico_sendUserOperationNow";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_experimental_sendUserOperation7702">;
    params: z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodObject<{
        contractAddress: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        chainId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
        r: z.ZodEffects<z.ZodEffects<z.ZodString, `0x${string}`, string>, `0x${string}`, string>;
        s: z.ZodEffects<z.ZodEffects<z.ZodString, `0x${string}`, string>, `0x${string}`, string>;
        v: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        yParity: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        contractAddress: `0x${string}`;
        chainId: number;
    }, {
        nonce: string | number | bigint;
        r: string;
        s: string;
        v: string | number | bigint;
        yParity: string | number | bigint;
        contractAddress: string;
        chainId: string | number | bigint;
    }>], null>;
}, "strip", z.ZodTypeAny, {
    params: [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`, {
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        contractAddress: `0x${string}`;
        chainId: number;
    }];
    method: "pimlico_experimental_sendUserOperation7702";
}, {
    params: [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string, {
        nonce: string | number | bigint;
        r: string;
        s: string;
        v: string | number | bigint;
        yParity: string | number | bigint;
        contractAddress: string;
        chainId: string | number | bigint;
    }];
    method: "pimlico_experimental_sendUserOperation7702";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_experimental_estimateUserOperationGas7702">;
    params: z.ZodUnion<[z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodObject<{
        contractAddress: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        chainId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
        r: z.ZodEffects<z.ZodEffects<z.ZodString, `0x${string}`, string>, `0x${string}`, string>;
        s: z.ZodEffects<z.ZodEffects<z.ZodString, `0x${string}`, string>, `0x${string}`, string>;
        v: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        yParity: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        contractAddress: `0x${string}`;
        chainId: number;
    }, {
        nonce: string | number | bigint;
        r: string;
        s: string;
        v: string | number | bigint;
        yParity: string | number | bigint;
        contractAddress: string;
        chainId: string | number | bigint;
    }>], null>, z.ZodTuple<[z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        verificationGasLimit: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        preVerificationGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        maxPriorityFeePerGas: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodObject<{
        contractAddress: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        chainId: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
        r: z.ZodEffects<z.ZodEffects<z.ZodString, `0x${string}`, string>, `0x${string}`, string>;
        s: z.ZodEffects<z.ZodEffects<z.ZodString, `0x${string}`, string>, `0x${string}`, string>;
        v: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        yParity: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, number, string | number | bigint>;
    }, "strip", z.ZodTypeAny, {
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        contractAddress: `0x${string}`;
        chainId: number;
    }, {
        nonce: string | number | bigint;
        r: string;
        s: string;
        v: string | number | bigint;
        yParity: string | number | bigint;
        contractAddress: string;
        chainId: string | number | bigint;
    }>, z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodObject<{
        balance: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        nonce: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        code: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        state: z.ZodOptional<z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>>>;
        stateDiff: z.ZodOptional<z.ZodRecord<z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodEffects<z.ZodString, `0x${string}`, string>>>;
    }, "strip", z.ZodTypeAny, {
        balance?: bigint | undefined;
        nonce?: bigint | undefined;
        code?: `0x${string}` | undefined;
        state?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
        stateDiff?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
    }, {
        balance?: string | number | bigint | undefined;
        nonce?: string | number | bigint | undefined;
        code?: string | undefined;
        state?: Record<string, string> | undefined;
        stateDiff?: Record<string, string> | undefined;
    }>>], null>]>;
}, "strip", z.ZodTypeAny, {
    params: [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`, {
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        contractAddress: `0x${string}`;
        chainId: number;
    }] | [{
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, `0x${string}`, {
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        yParity: number;
        contractAddress: `0x${string}`;
        chainId: number;
    }, Partial<Record<`0x${string}`, {
        balance?: bigint | undefined;
        nonce?: bigint | undefined;
        code?: `0x${string}` | undefined;
        state?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
        stateDiff?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
    }>>];
    method: "pimlico_experimental_estimateUserOperationGas7702";
}, {
    params: [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string, {
        nonce: string | number | bigint;
        r: string;
        s: string;
        v: string | number | bigint;
        yParity: string | number | bigint;
        contractAddress: string;
        chainId: string | number | bigint;
    }] | [{
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        signature: string;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        callGasLimit?: string | number | bigint | undefined;
        verificationGasLimit?: string | number | bigint | undefined;
        preVerificationGas?: string | number | bigint | undefined;
        maxFeePerGas?: string | number | bigint | undefined;
        maxPriorityFeePerGas?: string | number | bigint | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }, string, {
        nonce: string | number | bigint;
        r: string;
        s: string;
        v: string | number | bigint;
        yParity: string | number | bigint;
        contractAddress: string;
        chainId: string | number | bigint;
    }, Record<string, {
        balance?: string | number | bigint | undefined;
        nonce?: string | number | bigint | undefined;
        code?: string | undefined;
        state?: Record<string, string> | undefined;
        stateDiff?: Record<string, string> | undefined;
    }>];
    method: "pimlico_experimental_estimateUserOperationGas7702";
}>]>;
declare const chainIdResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_chainId">;
    result: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
}, "strip", z.ZodTypeAny, {
    result: bigint;
    method: "eth_chainId";
}, {
    result: string | number | bigint;
    method: "eth_chainId";
}>;
declare const supportedEntryPointsResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_supportedEntryPoints">;
    result: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
}, "strip", z.ZodTypeAny, {
    result: `0x${string}`[];
    method: "eth_supportedEntryPoints";
}, {
    result: string[];
    method: "eth_supportedEntryPoints";
}>;
declare const estimateUserOperationGasResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_estimateUserOperationGas">;
    result: z.ZodUnion<[z.ZodObject<{
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGas: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    }, "strip", z.ZodTypeAny, {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    }, {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    }>, z.ZodObject<{
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterVerificationGasLimit: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterPostOpGasLimit: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    }, "strip", z.ZodTypeAny, {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    }, {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    result: ({
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    } | {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    }) & ({
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    } | {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    } | undefined);
    method: "eth_estimateUserOperationGas";
}, {
    result: ({
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    } | {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    }) & ({
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    } | {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    } | undefined);
    method: "eth_estimateUserOperationGas";
}>;
declare const sendUserOperationResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_sendUserOperation">;
    result: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    result: `0x${string}`;
    method: "eth_sendUserOperation";
}, {
    result: string;
    method: "eth_sendUserOperation";
}>;
declare const getUserOperationByHashResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_getUserOperationByHash">;
    result: z.ZodUnion<[z.ZodObject<{
        userOperation: z.ZodUnion<[z.ZodEffects<z.ZodObject<{
            sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        }, "strict", z.ZodTypeAny, {
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        }, {
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        }>, {
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        }, {
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        }>, z.ZodEffects<z.ZodObject<{
            sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
            factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
            callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
            paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
            paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
            paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
            signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        }, "strict", z.ZodTypeAny, {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        }, {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        }>, {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        }, {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        }>]>;
        entryPoint: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        entryPoint: `0x${string}`;
        userOperation: ({
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        } | {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        }) & ({
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        } | {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        } | undefined);
        blockNumber: bigint;
        blockHash: `0x${string}`;
        transactionHash: `0x${string}`;
    }, {
        entryPoint: string;
        userOperation: ({
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        } | {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        }) & ({
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        } | {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        } | undefined);
        blockNumber: string | number | bigint;
        blockHash: string;
        transactionHash: string;
    }>, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    result: {
        entryPoint: `0x${string}`;
        userOperation: ({
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        } | {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        }) & ({
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        } | {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        } | undefined);
        blockNumber: bigint;
        blockHash: `0x${string}`;
        transactionHash: `0x${string}`;
    } | null;
    method: "eth_getUserOperationByHash";
}, {
    result: {
        entryPoint: string;
        userOperation: ({
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        } | {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        }) & ({
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        } | {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        } | undefined);
        blockNumber: string | number | bigint;
        blockHash: string;
        transactionHash: string;
    } | null;
    method: "eth_getUserOperationByHash";
}>;
declare const logSchema: z.ZodObject<{
    logIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    data: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    topics: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
}, "strip", z.ZodTypeAny, {
    address: `0x${string}`;
    data: `0x${string}`;
    blockNumber: bigint;
    blockHash: `0x${string}`;
    transactionHash: `0x${string}`;
    logIndex: bigint;
    transactionIndex: bigint;
    topics: `0x${string}`[];
}, {
    address: string;
    data: string;
    blockNumber: string | number | bigint;
    blockHash: string;
    transactionHash: string;
    logIndex: string | number | bigint;
    transactionIndex: string | number | bigint;
    topics: string[];
}>;
declare const receiptSchema: z.ZodObject<{
    transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    from: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    to: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
    cumulativeGasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    gasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
    contractAddress: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
    logs: z.ZodArray<z.ZodObject<{
        logIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        data: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        topics: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        data: `0x${string}`;
        blockNumber: bigint;
        blockHash: `0x${string}`;
        transactionHash: `0x${string}`;
        logIndex: bigint;
        transactionIndex: bigint;
        topics: `0x${string}`[];
    }, {
        address: string;
        data: string;
        blockNumber: string | number | bigint;
        blockHash: string;
        transactionHash: string;
        logIndex: string | number | bigint;
        transactionIndex: string | number | bigint;
        topics: string[];
    }>, "many">;
    logsBloom: z.ZodString;
    status: z.ZodUnion<[z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, z.ZodNull]>;
    effectiveGasPrice: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>;
}, "strip", z.ZodTypeAny, {
    to: `0x${string}` | null;
    gasUsed: bigint;
    status: bigint | null;
    contractAddress: `0x${string}` | null;
    blockNumber: bigint;
    blockHash: `0x${string}`;
    transactionHash: `0x${string}`;
    transactionIndex: bigint;
    from: `0x${string}`;
    cumulativeGasUsed: bigint;
    logs: {
        address: `0x${string}`;
        data: `0x${string}`;
        blockNumber: bigint;
        blockHash: `0x${string}`;
        transactionHash: `0x${string}`;
        logIndex: bigint;
        transactionIndex: bigint;
        topics: `0x${string}`[];
    }[];
    logsBloom: string;
    effectiveGasPrice?: bigint | null | undefined;
}, {
    to: string | null;
    gasUsed: string | number | bigint;
    status: string | number | bigint | null;
    contractAddress: string | null;
    blockNumber: string | number | bigint;
    blockHash: string;
    transactionHash: string;
    transactionIndex: string | number | bigint;
    from: string;
    cumulativeGasUsed: string | number | bigint;
    logs: {
        address: string;
        data: string;
        blockNumber: string | number | bigint;
        blockHash: string;
        transactionHash: string;
        logIndex: string | number | bigint;
        transactionIndex: string | number | bigint;
        topics: string[];
    }[];
    logsBloom: string;
    effectiveGasPrice?: string | number | bigint | null | undefined;
}>;
declare const getUserOperationReceiptResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"eth_getUserOperationReceipt">;
    result: z.ZodUnion<[z.ZodObject<{
        userOpHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        entryPoint: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        actualGasCost: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        actualGasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        success: z.ZodBoolean;
        reason: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        logs: z.ZodArray<z.ZodObject<{
            logIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            data: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            topics: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        }, "strip", z.ZodTypeAny, {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }, {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }>, "many">;
        receipt: z.ZodObject<{
            transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            from: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            to: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
            cumulativeGasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            gasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            contractAddress: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
            logs: z.ZodArray<z.ZodObject<{
                logIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                data: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                topics: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
            }, "strip", z.ZodTypeAny, {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }, {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }>, "many">;
            logsBloom: z.ZodString;
            status: z.ZodUnion<[z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, z.ZodNull]>;
            effectiveGasPrice: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>;
        }, "strip", z.ZodTypeAny, {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        }, {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        sender: `0x${string}`;
        userOpHash: `0x${string}`;
        nonce: bigint;
        success: boolean;
        actualGasCost: bigint;
        actualGasUsed: bigint;
        entryPoint: `0x${string}`;
        logs: {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }[];
        receipt: {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        };
        paymaster?: `0x${string}` | undefined;
        reason?: `0x${string}` | undefined;
    }, {
        sender: string;
        userOpHash: string;
        nonce: string | number | bigint;
        success: boolean;
        actualGasCost: string | number | bigint;
        actualGasUsed: string | number | bigint;
        entryPoint: string;
        logs: {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }[];
        receipt: {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        };
        paymaster?: string | undefined;
        reason?: string | undefined;
    }>, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    result: {
        sender: `0x${string}`;
        userOpHash: `0x${string}`;
        nonce: bigint;
        success: boolean;
        actualGasCost: bigint;
        actualGasUsed: bigint;
        entryPoint: `0x${string}`;
        logs: {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }[];
        receipt: {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        };
        paymaster?: `0x${string}` | undefined;
        reason?: `0x${string}` | undefined;
    } | null;
    method: "eth_getUserOperationReceipt";
}, {
    result: {
        sender: string;
        userOpHash: string;
        nonce: string | number | bigint;
        success: boolean;
        actualGasCost: string | number | bigint;
        actualGasUsed: string | number | bigint;
        entryPoint: string;
        logs: {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }[];
        receipt: {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        };
        paymaster?: string | undefined;
        reason?: string | undefined;
    } | null;
    method: "eth_getUserOperationReceipt";
}>;
declare const bundlerClearStateResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_clearState">;
    result: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    result: "ok";
    method: "debug_bundler_clearState";
}, {
    result: "ok";
    method: "debug_bundler_clearState";
}>;
declare const bundlerClearMempoolResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_clearMempool">;
    result: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    result: "ok";
    method: "debug_bundler_clearMempool";
}, {
    result: "ok";
    method: "debug_bundler_clearMempool";
}>;
declare const bundlerDumpMempoolResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_dumpMempool">;
    result: z.ZodArray<z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    result: ({
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    })[];
    method: "debug_bundler_dumpMempool";
}, {
    result: ({
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    })[];
    method: "debug_bundler_dumpMempool";
}>;
declare const bundlerGetStakeStatusResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_getStakeStatus">;
    result: z.ZodObject<{
        stakeInfo: z.ZodObject<{
            addr: z.ZodString;
            stake: z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, string, string | number | bigint>;
            unstakeDelaySec: z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, string, string | number | bigint>;
        }, "strip", z.ZodTypeAny, {
            stake: string;
            unstakeDelaySec: string;
            addr: string;
        }, {
            stake: string | number | bigint;
            unstakeDelaySec: string | number | bigint;
            addr: string;
        }>;
        isStaked: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        stakeInfo: {
            stake: string;
            unstakeDelaySec: string;
            addr: string;
        };
        isStaked: boolean;
    }, {
        stakeInfo: {
            stake: string | number | bigint;
            unstakeDelaySec: string | number | bigint;
            addr: string;
        };
        isStaked: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    result: {
        stakeInfo: {
            stake: string;
            unstakeDelaySec: string;
            addr: string;
        };
        isStaked: boolean;
    };
    method: "debug_bundler_getStakeStatus";
}, {
    result: {
        stakeInfo: {
            stake: string | number | bigint;
            unstakeDelaySec: string | number | bigint;
            addr: string;
        };
        isStaked: boolean;
    };
    method: "debug_bundler_getStakeStatus";
}>;
declare const bundlerSendBundleNowResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_sendBundleNow">;
    result: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    result: `0x${string}`;
    method: "debug_bundler_sendBundleNow";
}, {
    result: string;
    method: "debug_bundler_sendBundleNow";
}>;
declare const bundlerSetBundlingModeResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_setBundlingMode">;
    result: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    result: "ok";
    method: "debug_bundler_setBundlingMode";
}, {
    result: "ok";
    method: "debug_bundler_setBundlingMode";
}>;
declare const bundlerSetReputationsResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_setReputation">;
    result: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    result: "ok";
    method: "debug_bundler_setReputation";
}, {
    result: "ok";
    method: "debug_bundler_setReputation";
}>;
declare const bundlerDumpReputationsResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_dumpReputation">;
    result: z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        opsSeen: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        opsIncluded: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        status: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        opsSeen: bigint;
        opsIncluded: bigint;
        status?: bigint | undefined;
    }, {
        address: string;
        opsSeen: string | number | bigint;
        opsIncluded: string | number | bigint;
        status?: string | number | bigint | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        address: `0x${string}`;
        opsSeen: bigint;
        opsIncluded: bigint;
        status?: bigint | undefined;
    }[];
    method: "debug_bundler_dumpReputation";
}, {
    result: {
        address: string;
        opsSeen: string | number | bigint;
        opsIncluded: string | number | bigint;
        status?: string | number | bigint | undefined;
    }[];
    method: "debug_bundler_dumpReputation";
}>;
declare const userOperationStatus: z.ZodObject<{
    status: z.ZodEnum<["not_found", "not_submitted", "submitted", "rejected", "reverted", "included", "failed"]>;
    transactionHash: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
    transactionHash: `0x${string}` | null;
}, {
    status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
    transactionHash: string | null;
}>;
export type UserOperationStatus = z.infer<typeof userOperationStatus>;
declare const pimlicoGetUserOperationStatusResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"pimlico_getUserOperationStatus">;
    result: z.ZodObject<{
        status: z.ZodEnum<["not_found", "not_submitted", "submitted", "rejected", "reverted", "included", "failed"]>;
        transactionHash: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
    }, "strip", z.ZodTypeAny, {
        status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
        transactionHash: `0x${string}` | null;
    }, {
        status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
        transactionHash: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    result: {
        status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
        transactionHash: `0x${string}` | null;
    };
    method: "pimlico_getUserOperationStatus";
}, {
    result: {
        status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
        transactionHash: string | null;
    };
    method: "pimlico_getUserOperationStatus";
}>;
declare const pimlicoGetUserOperationGasPriceResponseSchema: z.ZodObject<{
    method: z.ZodLiteral<"pimlico_getUserOperationGasPrice">;
    result: z.ZodObject<{
        slow: z.ZodObject<{
            maxFeePerGas: z.ZodBigInt;
            maxPriorityFeePerGas: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }>;
        standard: z.ZodObject<{
            maxFeePerGas: z.ZodBigInt;
            maxPriorityFeePerGas: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }>;
        fast: z.ZodObject<{
            maxFeePerGas: z.ZodBigInt;
            maxPriorityFeePerGas: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }>;
    }, "strip", z.ZodTypeAny, {
        standard: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        fast: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        slow: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
    }, {
        standard: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        fast: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        slow: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    result: {
        standard: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        fast: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        slow: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
    };
    method: "pimlico_getUserOperationGasPrice";
}, {
    result: {
        standard: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        fast: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        slow: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
    };
    method: "pimlico_getUserOperationGasPrice";
}>;
declare const bundlerResponseSchema: z.ZodDiscriminatedUnion<"method", [z.ZodObject<{
    method: z.ZodLiteral<"eth_chainId">;
    result: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
}, "strip", z.ZodTypeAny, {
    result: bigint;
    method: "eth_chainId";
}, {
    result: string | number | bigint;
    method: "eth_chainId";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_supportedEntryPoints">;
    result: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
}, "strip", z.ZodTypeAny, {
    result: `0x${string}`[];
    method: "eth_supportedEntryPoints";
}, {
    result: string[];
    method: "eth_supportedEntryPoints";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_estimateUserOperationGas">;
    result: z.ZodUnion<[z.ZodObject<{
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGas: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    }, "strip", z.ZodTypeAny, {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    }, {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    }>, z.ZodObject<{
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterVerificationGasLimit: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterPostOpGasLimit: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    }, "strip", z.ZodTypeAny, {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    }, {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    result: ({
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    } | {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    }) & ({
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    } | {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    } | undefined);
    method: "eth_estimateUserOperationGas";
}, {
    result: ({
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    } | {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    }) & ({
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    } | {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    } | undefined);
    method: "eth_estimateUserOperationGas";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_sendUserOperation">;
    result: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    result: `0x${string}`;
    method: "eth_sendUserOperation";
}, {
    result: string;
    method: "eth_sendUserOperation";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_getUserOperationByHash">;
    result: z.ZodUnion<[z.ZodObject<{
        userOperation: z.ZodUnion<[z.ZodEffects<z.ZodObject<{
            sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        }, "strict", z.ZodTypeAny, {
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        }, {
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        }>, {
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        }, {
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        }>, z.ZodEffects<z.ZodObject<{
            sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
            factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
            callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
            paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
            paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
            paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
            signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        }, "strict", z.ZodTypeAny, {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        }, {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        }>, {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        }, {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        }>]>;
        entryPoint: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strip", z.ZodTypeAny, {
        entryPoint: `0x${string}`;
        userOperation: ({
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        } | {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        }) & ({
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        } | {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        } | undefined);
        blockNumber: bigint;
        blockHash: `0x${string}`;
        transactionHash: `0x${string}`;
    }, {
        entryPoint: string;
        userOperation: ({
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        } | {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        }) & ({
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        } | {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        } | undefined);
        blockNumber: string | number | bigint;
        blockHash: string;
        transactionHash: string;
    }>, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    result: {
        entryPoint: `0x${string}`;
        userOperation: ({
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        } | {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        }) & ({
            sender: `0x${string}`;
            nonce: bigint;
            initCode: `0x${string}`;
            paymasterAndData: `0x${string}`;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
        } | {
            sender: `0x${string}`;
            factory: `0x${string}` | null;
            paymaster: `0x${string}` | null;
            nonce: bigint;
            callData: `0x${string}`;
            callGasLimit: bigint;
            verificationGasLimit: bigint;
            preVerificationGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            signature: `0x${string}`;
            paymasterVerificationGasLimit: bigint | null;
            paymasterPostOpGasLimit: bigint | null;
            factoryData: `0x${string}` | null;
            paymasterData: `0x${string}` | null;
        } | undefined);
        blockNumber: bigint;
        blockHash: `0x${string}`;
        transactionHash: `0x${string}`;
    } | null;
    method: "eth_getUserOperationByHash";
}, {
    result: {
        entryPoint: string;
        userOperation: ({
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        } | {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        }) & ({
            sender: string;
            nonce: string | number | bigint;
            initCode: string;
            paymasterAndData: string;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
        } | {
            sender: string;
            nonce: string | number | bigint;
            callData: string;
            callGasLimit: string | number | bigint;
            verificationGasLimit: string | number | bigint;
            preVerificationGas: string | number | bigint;
            maxFeePerGas: string | number | bigint;
            maxPriorityFeePerGas: string | number | bigint;
            signature: string;
            factory?: string | null | undefined;
            factoryData?: string | null | undefined;
            paymaster?: string | null | undefined;
            paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
            paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
            paymasterData?: string | null | undefined;
        } | undefined);
        blockNumber: string | number | bigint;
        blockHash: string;
        transactionHash: string;
    } | null;
    method: "eth_getUserOperationByHash";
}>, z.ZodObject<{
    method: z.ZodLiteral<"eth_getUserOperationReceipt">;
    result: z.ZodUnion<[z.ZodObject<{
        userOpHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        entryPoint: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        actualGasCost: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        actualGasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        success: z.ZodBoolean;
        reason: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        logs: z.ZodArray<z.ZodObject<{
            logIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            data: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            topics: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        }, "strip", z.ZodTypeAny, {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }, {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }>, "many">;
        receipt: z.ZodObject<{
            transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            from: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            to: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
            cumulativeGasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            gasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            contractAddress: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
            logs: z.ZodArray<z.ZodObject<{
                logIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                data: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                topics: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
            }, "strip", z.ZodTypeAny, {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }, {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }>, "many">;
            logsBloom: z.ZodString;
            status: z.ZodUnion<[z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, z.ZodNull]>;
            effectiveGasPrice: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>;
        }, "strip", z.ZodTypeAny, {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        }, {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        sender: `0x${string}`;
        userOpHash: `0x${string}`;
        nonce: bigint;
        success: boolean;
        actualGasCost: bigint;
        actualGasUsed: bigint;
        entryPoint: `0x${string}`;
        logs: {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }[];
        receipt: {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        };
        paymaster?: `0x${string}` | undefined;
        reason?: `0x${string}` | undefined;
    }, {
        sender: string;
        userOpHash: string;
        nonce: string | number | bigint;
        success: boolean;
        actualGasCost: string | number | bigint;
        actualGasUsed: string | number | bigint;
        entryPoint: string;
        logs: {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }[];
        receipt: {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        };
        paymaster?: string | undefined;
        reason?: string | undefined;
    }>, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    result: {
        sender: `0x${string}`;
        userOpHash: `0x${string}`;
        nonce: bigint;
        success: boolean;
        actualGasCost: bigint;
        actualGasUsed: bigint;
        entryPoint: `0x${string}`;
        logs: {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }[];
        receipt: {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        };
        paymaster?: `0x${string}` | undefined;
        reason?: `0x${string}` | undefined;
    } | null;
    method: "eth_getUserOperationReceipt";
}, {
    result: {
        sender: string;
        userOpHash: string;
        nonce: string | number | bigint;
        success: boolean;
        actualGasCost: string | number | bigint;
        actualGasUsed: string | number | bigint;
        entryPoint: string;
        logs: {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }[];
        receipt: {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        };
        paymaster?: string | undefined;
        reason?: string | undefined;
    } | null;
    method: "eth_getUserOperationReceipt";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_clearState">;
    result: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    result: "ok";
    method: "debug_bundler_clearState";
}, {
    result: "ok";
    method: "debug_bundler_clearState";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_clearMempool">;
    result: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    result: "ok";
    method: "debug_bundler_clearMempool";
}, {
    result: "ok";
    method: "debug_bundler_clearMempool";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_dumpMempool">;
    result: z.ZodArray<z.ZodUnion<[z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        initCode: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterAndData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, {
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    }, {
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    }>, z.ZodEffects<z.ZodObject<{
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        factory: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        factoryData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        callData: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        maxPriorityFeePerGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        paymasterVerificationGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterPostOpGasLimit: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>, bigint | null, string | number | bigint | null | undefined>;
        paymasterData: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, `0x${string}`, string>>>, `0x${string}` | null, string | null | undefined>;
        signature: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    }, "strict", z.ZodTypeAny, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>, {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    }, {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    result: ({
        sender: `0x${string}`;
        nonce: bigint;
        initCode: `0x${string}`;
        paymasterAndData: `0x${string}`;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
    } | {
        sender: `0x${string}`;
        factory: `0x${string}` | null;
        paymaster: `0x${string}` | null;
        nonce: bigint;
        callData: `0x${string}`;
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        signature: `0x${string}`;
        paymasterVerificationGasLimit: bigint | null;
        paymasterPostOpGasLimit: bigint | null;
        factoryData: `0x${string}` | null;
        paymasterData: `0x${string}` | null;
    })[];
    method: "debug_bundler_dumpMempool";
}, {
    result: ({
        sender: string;
        nonce: string | number | bigint;
        initCode: string;
        paymasterAndData: string;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
    } | {
        sender: string;
        nonce: string | number | bigint;
        callData: string;
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        maxFeePerGas: string | number | bigint;
        maxPriorityFeePerGas: string | number | bigint;
        signature: string;
        factory?: string | null | undefined;
        factoryData?: string | null | undefined;
        paymaster?: string | null | undefined;
        paymasterVerificationGasLimit?: string | number | bigint | null | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | null | undefined;
        paymasterData?: string | null | undefined;
    })[];
    method: "debug_bundler_dumpMempool";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_getStakeStatus">;
    result: z.ZodObject<{
        stakeInfo: z.ZodObject<{
            addr: z.ZodString;
            stake: z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, string, string | number | bigint>;
            unstakeDelaySec: z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, string, string | number | bigint>;
        }, "strip", z.ZodTypeAny, {
            stake: string;
            unstakeDelaySec: string;
            addr: string;
        }, {
            stake: string | number | bigint;
            unstakeDelaySec: string | number | bigint;
            addr: string;
        }>;
        isStaked: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        stakeInfo: {
            stake: string;
            unstakeDelaySec: string;
            addr: string;
        };
        isStaked: boolean;
    }, {
        stakeInfo: {
            stake: string | number | bigint;
            unstakeDelaySec: string | number | bigint;
            addr: string;
        };
        isStaked: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    result: {
        stakeInfo: {
            stake: string;
            unstakeDelaySec: string;
            addr: string;
        };
        isStaked: boolean;
    };
    method: "debug_bundler_getStakeStatus";
}, {
    result: {
        stakeInfo: {
            stake: string | number | bigint;
            unstakeDelaySec: string | number | bigint;
            addr: string;
        };
        isStaked: boolean;
    };
    method: "debug_bundler_getStakeStatus";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_sendBundleNow">;
    result: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    result: `0x${string}`;
    method: "debug_bundler_sendBundleNow";
}, {
    result: string;
    method: "debug_bundler_sendBundleNow";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_setBundlingMode">;
    result: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    result: "ok";
    method: "debug_bundler_setBundlingMode";
}, {
    result: "ok";
    method: "debug_bundler_setBundlingMode";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_setReputation">;
    result: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    result: "ok";
    method: "debug_bundler_setReputation";
}, {
    result: "ok";
    method: "debug_bundler_setReputation";
}>, z.ZodObject<{
    method: z.ZodLiteral<"debug_bundler_dumpReputation">;
    result: z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        opsSeen: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        opsIncluded: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        status: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    }, "strip", z.ZodTypeAny, {
        address: `0x${string}`;
        opsSeen: bigint;
        opsIncluded: bigint;
        status?: bigint | undefined;
    }, {
        address: string;
        opsSeen: string | number | bigint;
        opsIncluded: string | number | bigint;
        status?: string | number | bigint | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        address: `0x${string}`;
        opsSeen: bigint;
        opsIncluded: bigint;
        status?: bigint | undefined;
    }[];
    method: "debug_bundler_dumpReputation";
}, {
    result: {
        address: string;
        opsSeen: string | number | bigint;
        opsIncluded: string | number | bigint;
        status?: string | number | bigint | undefined;
    }[];
    method: "debug_bundler_dumpReputation";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_getUserOperationStatus">;
    result: z.ZodObject<{
        status: z.ZodEnum<["not_found", "not_submitted", "submitted", "rejected", "reverted", "included", "failed"]>;
        transactionHash: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
    }, "strip", z.ZodTypeAny, {
        status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
        transactionHash: `0x${string}` | null;
    }, {
        status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
        transactionHash: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    result: {
        status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
        transactionHash: `0x${string}` | null;
    };
    method: "pimlico_getUserOperationStatus";
}, {
    result: {
        status: "not_submitted" | "rejected" | "submitted" | "included" | "not_found" | "reverted" | "failed";
        transactionHash: string | null;
    };
    method: "pimlico_getUserOperationStatus";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_getUserOperationGasPrice">;
    result: z.ZodObject<{
        slow: z.ZodObject<{
            maxFeePerGas: z.ZodBigInt;
            maxPriorityFeePerGas: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }>;
        standard: z.ZodObject<{
            maxFeePerGas: z.ZodBigInt;
            maxPriorityFeePerGas: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }>;
        fast: z.ZodObject<{
            maxFeePerGas: z.ZodBigInt;
            maxPriorityFeePerGas: z.ZodBigInt;
        }, "strip", z.ZodTypeAny, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }, {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        }>;
    }, "strip", z.ZodTypeAny, {
        standard: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        fast: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        slow: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
    }, {
        standard: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        fast: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        slow: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    result: {
        standard: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        fast: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        slow: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
    };
    method: "pimlico_getUserOperationGasPrice";
}, {
    result: {
        standard: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        fast: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
        slow: {
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
        };
    };
    method: "pimlico_getUserOperationGasPrice";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_sendUserOperationNow">;
    result: z.ZodUnion<[z.ZodObject<{
        userOpHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        entryPoint: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        sender: z.ZodEffects<z.ZodString, `0x${string}`, string>;
        nonce: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymaster: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        actualGasCost: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        actualGasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        success: z.ZodBoolean;
        reason: z.ZodOptional<z.ZodEffects<z.ZodString, `0x${string}`, string>>;
        logs: z.ZodArray<z.ZodObject<{
            logIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            data: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            topics: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        }, "strip", z.ZodTypeAny, {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }, {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }>, "many">;
        receipt: z.ZodObject<{
            transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            from: z.ZodEffects<z.ZodString, `0x${string}`, string>;
            to: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
            cumulativeGasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            gasUsed: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
            contractAddress: z.ZodUnion<[z.ZodEffects<z.ZodString, `0x${string}`, string>, z.ZodNull]>;
            logs: z.ZodArray<z.ZodObject<{
                logIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                transactionIndex: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                blockHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                blockNumber: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
                address: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                data: z.ZodEffects<z.ZodString, `0x${string}`, string>;
                topics: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
            }, "strip", z.ZodTypeAny, {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }, {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }>, "many">;
            logsBloom: z.ZodString;
            status: z.ZodUnion<[z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>, z.ZodNull]>;
            effectiveGasPrice: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>>;
        }, "strip", z.ZodTypeAny, {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        }, {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        sender: `0x${string}`;
        userOpHash: `0x${string}`;
        nonce: bigint;
        success: boolean;
        actualGasCost: bigint;
        actualGasUsed: bigint;
        entryPoint: `0x${string}`;
        logs: {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }[];
        receipt: {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        };
        paymaster?: `0x${string}` | undefined;
        reason?: `0x${string}` | undefined;
    }, {
        sender: string;
        userOpHash: string;
        nonce: string | number | bigint;
        success: boolean;
        actualGasCost: string | number | bigint;
        actualGasUsed: string | number | bigint;
        entryPoint: string;
        logs: {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }[];
        receipt: {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        };
        paymaster?: string | undefined;
        reason?: string | undefined;
    }>, z.ZodNull]>;
}, "strip", z.ZodTypeAny, {
    result: {
        sender: `0x${string}`;
        userOpHash: `0x${string}`;
        nonce: bigint;
        success: boolean;
        actualGasCost: bigint;
        actualGasUsed: bigint;
        entryPoint: `0x${string}`;
        logs: {
            address: `0x${string}`;
            data: `0x${string}`;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            logIndex: bigint;
            transactionIndex: bigint;
            topics: `0x${string}`[];
        }[];
        receipt: {
            to: `0x${string}` | null;
            gasUsed: bigint;
            status: bigint | null;
            contractAddress: `0x${string}` | null;
            blockNumber: bigint;
            blockHash: `0x${string}`;
            transactionHash: `0x${string}`;
            transactionIndex: bigint;
            from: `0x${string}`;
            cumulativeGasUsed: bigint;
            logs: {
                address: `0x${string}`;
                data: `0x${string}`;
                blockNumber: bigint;
                blockHash: `0x${string}`;
                transactionHash: `0x${string}`;
                logIndex: bigint;
                transactionIndex: bigint;
                topics: `0x${string}`[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: bigint | null | undefined;
        };
        paymaster?: `0x${string}` | undefined;
        reason?: `0x${string}` | undefined;
    } | null;
    method: "pimlico_sendUserOperationNow";
}, {
    result: {
        sender: string;
        userOpHash: string;
        nonce: string | number | bigint;
        success: boolean;
        actualGasCost: string | number | bigint;
        actualGasUsed: string | number | bigint;
        entryPoint: string;
        logs: {
            address: string;
            data: string;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            logIndex: string | number | bigint;
            transactionIndex: string | number | bigint;
            topics: string[];
        }[];
        receipt: {
            to: string | null;
            gasUsed: string | number | bigint;
            status: string | number | bigint | null;
            contractAddress: string | null;
            blockNumber: string | number | bigint;
            blockHash: string;
            transactionHash: string;
            transactionIndex: string | number | bigint;
            from: string;
            cumulativeGasUsed: string | number | bigint;
            logs: {
                address: string;
                data: string;
                blockNumber: string | number | bigint;
                blockHash: string;
                transactionHash: string;
                logIndex: string | number | bigint;
                transactionIndex: string | number | bigint;
                topics: string[];
            }[];
            logsBloom: string;
            effectiveGasPrice?: string | number | bigint | null | undefined;
        };
        paymaster?: string | undefined;
        reason?: string | undefined;
    } | null;
    method: "pimlico_sendUserOperationNow";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_experimental_sendUserOperation7702">;
    result: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    result: `0x${string}`;
    method: "pimlico_experimental_sendUserOperation7702";
}, {
    result: string;
    method: "pimlico_experimental_sendUserOperation7702";
}>, z.ZodObject<{
    method: z.ZodLiteral<"pimlico_experimental_estimateUserOperationGas7702">;
    result: z.ZodUnion<[z.ZodObject<{
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGas: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    }, "strip", z.ZodTypeAny, {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    }, {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    }>, z.ZodObject<{
        callGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        preVerificationGas: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        verificationGasLimit: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>;
        paymasterVerificationGasLimit: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
        paymasterPostOpGasLimit: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBigInt]>, bigint, string | number | bigint>, bigint, string | number | bigint>>;
    }, "strip", z.ZodTypeAny, {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    }, {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    result: ({
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    } | {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    }) & ({
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        verificationGas?: bigint | undefined;
    } | {
        callGasLimit: bigint;
        verificationGasLimit: bigint;
        preVerificationGas: bigint;
        paymasterVerificationGasLimit?: bigint | undefined;
        paymasterPostOpGasLimit?: bigint | undefined;
    } | undefined);
    method: "pimlico_experimental_estimateUserOperationGas7702";
}, {
    result: ({
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    } | {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    }) & ({
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        verificationGas?: string | number | bigint | undefined;
    } | {
        callGasLimit: string | number | bigint;
        verificationGasLimit: string | number | bigint;
        preVerificationGas: string | number | bigint;
        paymasterVerificationGasLimit?: string | number | bigint | undefined;
        paymasterPostOpGasLimit?: string | number | bigint | undefined;
    } | undefined);
    method: "pimlico_experimental_estimateUserOperationGas7702";
}>]>;
export type BundlingMode = z.infer<typeof bundlerSetBundlingModeRequestSchema>["params"][0];
export type Reputations = z.infer<typeof bundlerSetReputationsRequestSchema>["params"][0];
export type ChainIdResponse = z.infer<typeof chainIdResponseSchema>;
export type SupportedEntryPointsResponse = z.infer<typeof supportedEntryPointsResponseSchema>;
export type EstimateUserOperationGasResponse = z.infer<typeof estimateUserOperationGasResponseSchema>;
export type SendUserOperationResponse = z.infer<typeof sendUserOperationResponseSchema>;
export type GetUserOperationByHashResponse = z.infer<typeof getUserOperationByHashResponseSchema>;
export type GetUserOperationReceiptResponse = z.infer<typeof getUserOperationReceiptResponseSchema>;
export type BundlerClearStateResponse = z.infer<typeof bundlerClearStateResponseSchema>;
export type BundlerClearMempoolResponse = z.infer<typeof bundlerClearMempoolResponseSchema>;
export type BundlerDumpMempoolResponse = z.infer<typeof bundlerDumpMempoolResponseSchema>;
export type BundlerGetStakeStatusResponse = z.infer<typeof bundlerGetStakeStatusResponseSchema>;
export type BundlerSendBundleNowResponse = z.infer<typeof bundlerSendBundleNowResponseSchema>;
export type BundlerSetBundlingModeResponse = z.infer<typeof bundlerSetBundlingModeResponseSchema>;
export type BundlerSetReputationsResponse = z.infer<typeof bundlerSetReputationsResponseSchema>;
export type BundlerDumpReputationsResponse = z.infer<typeof bundlerDumpReputationsResponseSchema>;
export type PimlicoGetUserOperationStatusResponse = z.infer<typeof pimlicoGetUserOperationStatusResponseSchema>;
export type PimlicoGetUserOperationGasPriceResponse = z.infer<typeof pimlicoGetUserOperationGasPriceResponseSchema>;
export type ChainIdResponseResult = z.infer<typeof chainIdResponseSchema>["result"];
export type SupportedEntryPointsResponseResult = z.infer<typeof supportedEntryPointsResponseSchema>["result"];
export type EstimateUserOperationGasResponseResult = z.infer<typeof estimateUserOperationGasResponseSchema>["result"];
export type SendUserOperationResponseResult = z.infer<typeof sendUserOperationResponseSchema>["result"];
export type GetUserOperationByHashResponseResult = z.infer<typeof getUserOperationByHashResponseSchema>["result"];
export type GetUserOperationReceiptResponseResult = z.infer<typeof getUserOperationReceiptResponseSchema>["result"];
export type BundlerClearStateResponseResult = z.infer<typeof bundlerClearStateResponseSchema>["result"];
export type BundlerClearMempoolResponseResult = z.infer<typeof bundlerClearMempoolResponseSchema>["result"];
export type BundlerDumpMempoolResponseResult = z.infer<typeof bundlerDumpMempoolResponseSchema>["result"];
export type BundlerGetStakeStatusResponseResult = z.infer<typeof bundlerGetStakeStatusResponseSchema>["result"];
export type BundlerSendBundleNowResponseResult = z.infer<typeof bundlerSendBundleNowResponseSchema>["result"];
export type BundlerSetBundlingModeResponseResult = z.infer<typeof bundlerSetBundlingModeResponseSchema>["result"];
export type BundlerSetReputationsResponseResult = z.infer<typeof bundlerSetReputationsResponseSchema>["result"];
export type BundlerDumpReputationsResponseResult = z.infer<typeof bundlerDumpReputationsResponseSchema>["result"];
export type PimlicoGetUserOperationStatusResponseResult = z.infer<typeof pimlicoGetUserOperationStatusResponseSchema>["result"];
export type PimlicoGetUserOperationGasPriceResponseResult = z.infer<typeof pimlicoGetUserOperationGasPriceResponseSchema>["result"];
export type BundlerResponse = z.infer<typeof bundlerResponseSchema>;
export type ChainIdRequest = z.infer<typeof chainIdRequestSchema>;
export type SupportedEntryPointsRequest = z.infer<typeof supportedEntryPointsRequestSchema>;
export type EstimateUserOperationGasRequest = z.infer<typeof estimateUserOperationGasRequestSchema>;
export type SendUserOperationRequest = z.infer<typeof sendUserOperationRequestSchema>;
export type GetUserOperationByHashRequest = z.infer<typeof getUserOperationByHashRequestSchema>;
export type GetUserOperationReceiptRequest = z.infer<typeof getUserOperationReceiptRequestSchema>;
export type BundlerClearStateRequest = z.infer<typeof bundlerClearStateRequestSchema>;
export type BundlerClearMempoolRequest = z.infer<typeof bundlerClearMempoolRequestSchema>;
export type BundlerDumpMempoolRequest = z.infer<typeof bundlerDumpMempoolRequestSchema>;
export type BundlerSendBundleNowRequest = z.infer<typeof bundlerSendBundleNowRequestSchema>;
export type BundlerSetBundlingModeRequest = z.infer<typeof bundlerSetBundlingModeRequestSchema>;
export type BundlerSetReputationsRequest = z.infer<typeof bundlerSetReputationsRequestSchema>;
export type BundlerDumpReputationsRequest = z.infer<typeof bundlerDumpReputationsRequestSchema>;
export type BundlerGetStakeStatusRequest = z.infer<typeof pimlicoGetStakeStatusRequestSchema>;
export type PimlicoGetUserOperationStatusRequest = z.infer<typeof pimlicoGetUserOperationStatusRequestSchema>;
export type PimlicoGetUserOperationGasPriceRequest = z.infer<typeof pimlicoGetUserOperationGasPriceRequestSchema>;
export type ChainIdRequestParams = z.infer<typeof chainIdRequestSchema>["params"];
export type SupportedEntryPointsRequestParams = z.infer<typeof supportedEntryPointsRequestSchema>["params"];
export type EstimateUserOperationGasRequestParams = z.infer<typeof estimateUserOperationGasRequestSchema>["params"];
export type SendUserOperationRequestParams = z.infer<typeof sendUserOperationRequestSchema>["params"];
export type GetUserOperationByHashRequestParams = z.infer<typeof getUserOperationByHashRequestSchema>["params"];
export type GetUserOperationReceiptRequestParams = z.infer<typeof getUserOperationReceiptRequestSchema>["params"];
export type BundlerClearStateRequestParams = z.infer<typeof bundlerClearStateRequestSchema>["params"];
export type BundlerClearMempoolRequestParams = z.infer<typeof bundlerClearMempoolRequestSchema>["params"];
export type BundlerDumpMempoolRequestParams = z.infer<typeof bundlerDumpMempoolRequestSchema>["params"];
export type BundlerSendBundleNowRequestParams = z.infer<typeof bundlerSendBundleNowRequestSchema>["params"];
export type BundlerSetBundlingModeRequestParams = z.infer<typeof bundlerSetBundlingModeRequestSchema>["params"];
export type BundlerSetReputationsRequestParams = z.infer<typeof bundlerSetReputationsRequestSchema>["params"];
export type BundlerDumpReputationsRequestParams = z.infer<typeof bundlerDumpReputationsRequestSchema>["params"];
export type BundlerGetStakeStatusRequestParams = z.infer<typeof pimlicoGetStakeStatusRequestSchema>["params"];
export type PimlicoGetUserOperationStatusRequestParams = z.infer<typeof pimlicoGetUserOperationStatusRequestSchema>["params"];
export type PimlicoGetUserOperationGasPriceRequestParams = z.infer<typeof pimlicoGetUserOperationGasPriceRequestSchema>["params"];
export type BundlerRequest = z.infer<typeof bundlerRequestSchema>;
export type JSONRPCRequest = z.infer<typeof jsonRpcSchema>;
export type JSONRPCResponse = z.infer<typeof jsonRpcResultSchema>;
declare const OpEventType: z.ZodUnion<[z.ZodObject<{
    eventType: z.ZodLiteral<"received">;
}, "strip", z.ZodTypeAny, {
    eventType: "received";
}, {
    eventType: "received";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"added_to_mempool">;
}, "strip", z.ZodTypeAny, {
    eventType: "added_to_mempool";
}, {
    eventType: "added_to_mempool";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"queued">;
}, "strip", z.ZodTypeAny, {
    eventType: "queued";
}, {
    eventType: "queued";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"failed_validation">;
    data: z.ZodObject<{
        reason: z.ZodOptional<z.ZodString>;
        aaError: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        reason?: string | undefined;
        aaError?: string | undefined;
    }, {
        reason?: string | undefined;
        aaError?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        reason?: string | undefined;
        aaError?: string | undefined;
    };
    eventType: "failed_validation";
}, {
    data: {
        reason?: string | undefined;
        aaError?: string | undefined;
    };
    eventType: "failed_validation";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"dropped">;
    data: z.ZodObject<{
        reason: z.ZodOptional<z.ZodString>;
        aaError: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        reason?: string | undefined;
        aaError?: string | undefined;
    }, {
        reason?: string | undefined;
        aaError?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        reason?: string | undefined;
        aaError?: string | undefined;
    };
    eventType: "dropped";
}, {
    data: {
        reason?: string | undefined;
        aaError?: string | undefined;
    };
    eventType: "dropped";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"submitted">;
    transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
}, "strip", z.ZodTypeAny, {
    transactionHash: `0x${string}`;
    eventType: "submitted";
}, {
    transactionHash: string;
    eventType: "submitted";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"included_onchain">;
    transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    data: z.ZodObject<{
        blockNumber: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        blockNumber: number;
    }, {
        blockNumber: number;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        blockNumber: number;
    };
    transactionHash: `0x${string}`;
    eventType: "included_onchain";
}, {
    data: {
        blockNumber: number;
    };
    transactionHash: string;
    eventType: "included_onchain";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"frontran_onchain">;
    transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    data: z.ZodObject<{
        blockNumber: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        blockNumber: number;
    }, {
        blockNumber: number;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        blockNumber: number;
    };
    transactionHash: `0x${string}`;
    eventType: "frontran_onchain";
}, {
    data: {
        blockNumber: number;
    };
    transactionHash: string;
    eventType: "frontran_onchain";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"failed_onchain">;
    transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    data: z.ZodObject<{
        blockNumber: z.ZodNumber;
        reason: z.ZodOptional<z.ZodString>;
        aaError: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        blockNumber: number;
        reason?: string | undefined;
        aaError?: string | undefined;
    }, {
        blockNumber: number;
        reason?: string | undefined;
        aaError?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        blockNumber: number;
        reason?: string | undefined;
        aaError?: string | undefined;
    };
    transactionHash: `0x${string}`;
    eventType: "failed_onchain";
}, {
    data: {
        blockNumber: number;
        reason?: string | undefined;
        aaError?: string | undefined;
    };
    transactionHash: string;
    eventType: "failed_onchain";
}>, z.ZodObject<{
    eventType: z.ZodLiteral<"execution_reverted_onchain">;
    transactionHash: z.ZodEffects<z.ZodString, `0x${string}`, string>;
    data: z.ZodObject<{
        blockNumber: z.ZodNumber;
        reason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        blockNumber: number;
        reason?: string | undefined;
    }, {
        blockNumber: number;
        reason?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        blockNumber: number;
        reason?: string | undefined;
    };
    transactionHash: `0x${string}`;
    eventType: "execution_reverted_onchain";
}, {
    data: {
        blockNumber: number;
        reason?: string | undefined;
    };
    transactionHash: string;
    eventType: "execution_reverted_onchain";
}>]>;
export type OpEventType = z.infer<typeof OpEventType>;
export { bundlerClearStateRequestSchema, bundlerClearMempoolRequestSchema, bundlerDumpMempoolRequestSchema, bundlerSendBundleNowRequestSchema, bundlerSetBundlingModeRequestSchema, bundlerSetReputationsRequestSchema, bundlerDumpReputationsRequestSchema, pimlicoGetStakeStatusRequestSchema, pimlicoGetUserOperationStatusRequestSchema, pimlicoGetUserOperationGasPriceRequestSchema, bundlerRequestSchema, jsonRpcSchema, jsonRpcResultSchema, userOperationSchema };
export { bundlerClearStateResponseSchema, bundlerClearMempoolResponseSchema, bundlerDumpMempoolResponseSchema, bundlerGetStakeStatusResponseSchema, bundlerSendBundleNowResponseSchema, bundlerSetBundlingModeResponseSchema, bundlerSetReputationsResponseSchema, bundlerDumpReputationsResponseSchema, pimlicoGetUserOperationStatusResponseSchema, pimlicoGetUserOperationGasPriceResponseSchema, bundlerResponseSchema };
export { addressSchema, hexData32Schema, hexDataSchema, logSchema, receiptSchema };
//# sourceMappingURL=schemas.d.ts.map