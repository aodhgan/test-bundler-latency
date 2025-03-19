"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionArgsSchema = exports.gasEstimationArgsSchema = exports.debugArgsSchema = exports.logArgsSchema = exports.rpcArgsSchema = exports.serverArgsSchema = exports.compatibilityArgsSchema = exports.bundlerArgsSchema = void 0;
const types_1 = require("../../types/index.js");
const accounts_1 = require("viem/accounts");
const zod_1 = require("zod");
const logLevel = zod_1.z.enum(["trace", "debug", "info", "warn", "error", "fatal"]);
const rpcMethodNames = types_1.bundlerRequestSchema.options.map((s) => s.shape.method._def.value);
exports.bundlerArgsSchema = zod_1.z.object({
    entrypoints: zod_1.z
        .string()
        .regex(types_1.commaSeperatedAddressPattern)
        .transform((val) => {
        const addresses = val.split(",");
        const validatedAddresses = addresses.map((address) => types_1.addressSchema.parse(address.trim()) // Trimming to handle spaces after commas
        );
        return validatedAddresses;
    }),
    "deterministic-deployer-address": types_1.addressSchema,
    "entrypoint-simulation-contract": zod_1.z.preprocess((v) => (v === "" ? undefined : v), types_1.addressSchema.optional()),
    "refill-helper-contract": types_1.addressSchema.optional(),
    "no-profit-bundling": zod_1.z.boolean(),
    "safe-mode": zod_1.z.boolean(),
    "utility-private-key": types_1.hexData32Schema
        .transform((val) => (0, accounts_1.privateKeyToAccount)(val))
        .optional(),
    "utility-wallet-monitor": zod_1.z.boolean(),
    "utility-wallet-monitor-interval": zod_1.z.number(),
    "executor-private-keys": zod_1.z.union([
        zod_1.z
            .array(types_1.hexData32Schema)
            .transform((vals) => vals.map((val) => (0, accounts_1.privateKeyToAccount)(val))),
        zod_1.z
            .string()
            .regex(/^0x(?:[0-9a-f]{2}){32}(?:,0x(?:[0-9a-f]{2}){32})*$/)
            .transform((val) => val
            .split(",")
            .map((val) => (0, accounts_1.privateKeyToAccount)(val)))
    ]),
    "max-executors": zod_1.z.number().int().min(0).optional(),
    "min-executor-balance": zod_1.z
        .string()
        .transform((val) => BigInt(val))
        .optional(),
    "executor-refill-interval": zod_1.z.number().int().min(0),
    "executor-gas-multiplier": zod_1.z.string().transform((val) => BigInt(val)),
    "min-entity-stake": zod_1.z.number().int().min(0),
    "min-entity-unstake-delay": zod_1.z.number().int().min(0),
    "max-bundle-wait": zod_1.z.number().int().min(0),
    "max-bundle-size": zod_1.z.number().int().min(0),
    "gas-price-bump": zod_1.z
        .string()
        .transform((val) => BigInt(val))
        .default("100"),
    "gas-price-floor-percent": zod_1.z.number().int().min(0),
    "gas-price-expiry": zod_1.z.number().int().min(0),
    "gas-price-multipliers": zod_1.z
        .string()
        .transform((value) => value.split(",").map(BigInt))
        .refine((values) => values.length === 3, "Must contain 3 comma seperated items in format: slow,standard,fast")
        .transform(([slow, standard, fast]) => ({ slow, standard, fast })),
    "gas-price-refresh-interval": zod_1.z.number().int().min(0),
    "mempool-max-parallel-ops": zod_1.z.number().int().min(0).default(10),
    "mempool-max-queued-ops": zod_1.z.number().int().min(0).default(0),
    "enforce-unique-senders-per-bundle": zod_1.z.boolean().default(true),
    "max-gas-per-bundle": zod_1.z
        .string()
        .transform((val) => BigInt(val))
        .default("20000000"),
    "rpc-methods": zod_1.z
        .string()
        .nullable()
        .transform((val) => {
        if (val === null)
            return null;
        return val.split(",");
    })
        .refine((values) => {
        if (values === null)
            return true;
        return values.length > 0;
    }, "Must contain at least one method if specified")
        .refine((values) => {
        if (values === null)
            return true;
        return values.every((value) => rpcMethodNames.includes(value));
    }, `Unknown method specified, available methods: ${rpcMethodNames.join(",")}`),
    "refilling-wallets": zod_1.z.boolean().default(true),
    "aa95-gas-multiplier": zod_1.z.string().transform((val) => BigInt(val)),
    "enable-instant-bundling-endpoint": zod_1.z.boolean(),
    "enable-experimental-7702-endpoints": zod_1.z.boolean()
});
exports.compatibilityArgsSchema = zod_1.z.object({
    "chain-type": zod_1.z.enum([
        "default",
        "op-stack",
        "arbitrum",
        "hedera",
        "mantle",
        "skale"
    ]),
    "legacy-transactions": zod_1.z.boolean(),
    "api-version": zod_1.z
        .string()
        .regex(/^(v1,v2|v2,v1|v1|v2)$/)
        .optional()
        .default("v1,v2")
        .transform((val) => val.split(",")),
    "default-api-version": zod_1.z
        .enum(["v1", "v2"])
        .optional()
        .transform((val) => val),
    "balance-override": zod_1.z.boolean(),
    "local-gas-limit-calculation": zod_1.z.boolean(),
    "flush-stuck-transactions-during-startup": zod_1.z.boolean(),
    "fixed-gas-limit-for-estimation": zod_1.z
        .string()
        .transform((val) => BigInt(val))
        .optional()
});
exports.serverArgsSchema = zod_1.z.object({
    port: zod_1.z.number().int().min(0),
    timeout: zod_1.z.number().int().min(0).optional(),
    websocket: zod_1.z.boolean().default(false),
    "websocket-max-payload-size": zod_1.z
        .number()
        .int()
        .min(1024)
        .default(1024 * 1024) // 1 mb
});
exports.rpcArgsSchema = zod_1.z.object({
    "rpc-url": zod_1.z.string().url(),
    "send-transaction-rpc-url": zod_1.z.string().url().optional(),
    "polling-interval": zod_1.z.number().int().min(0),
    "max-block-range": zod_1.z.number().int().min(0).optional(),
    "block-tag-support": zod_1.z.boolean().optional().default(true),
    "code-override-support": zod_1.z.boolean().optional().default(false)
});
exports.logArgsSchema = zod_1.z.object({
    "redis-queue-endpoint": zod_1.z.string().optional(),
    "redis-event-manager-queue-name": zod_1.z.string().optional(),
    json: zod_1.z.boolean(),
    "network-name": zod_1.z.string(),
    "log-level": logLevel,
    "public-client-log-level": logLevel.optional(),
    "wallet-client-log-level": logLevel.optional(),
    "rpc-log-level": logLevel.optional(),
    "mempool-log-level": logLevel.optional(),
    "executor-log-level": logLevel.optional(),
    "reputation-manager-log-level": logLevel.optional(),
    "nonce-queuer-log-level": logLevel.optional()
});
exports.debugArgsSchema = zod_1.z.object({
    "bundle-mode": zod_1.z.enum(["auto", "manual"]),
    "enable-debug-endpoints": zod_1.z.boolean(),
    "expiration-check": zod_1.z.boolean(),
    "dangerous-skip-user-operation-validation": zod_1.z.boolean(),
    "deploy-simulations-contract": zod_1.z.boolean(),
    tenderly: zod_1.z.boolean()
});
exports.gasEstimationArgsSchema = zod_1.z.object({
    "binary-search-tolerance-delta": zod_1.z
        .string()
        .transform((val) => BigInt(val))
        .default("1000"),
    "binary-search-gas-allowance": zod_1.z
        .string()
        .transform((val) => BigInt(val))
        .default("1000000"),
    "v6-call-gas-limit-multiplier": zod_1.z.string().transform((val) => BigInt(val)),
    "v7-call-gas-limit-multiplier": zod_1.z.string().transform((val) => BigInt(val)),
    "v7-verification-gas-limit-multiplier": zod_1.z
        .string()
        .transform((val) => BigInt(val)),
    "v7-paymaster-verification-gas-limit-multiplier": zod_1.z
        .string()
        .transform((val) => BigInt(val)),
    "simulation-call-gas-limit": zod_1.z.string().transform((val) => BigInt(val)),
    "simulation-verification-gas-limit": zod_1.z
        .string()
        .transform((val) => BigInt(val)),
    "simulation-paymaster-verification-gas-limit": zod_1.z
        .string()
        .transform((val) => BigInt(val)),
    "simulation-paymaster-post-op-gas-limit": zod_1.z
        .string()
        .transform((val) => BigInt(val)),
    "paymaster-gas-limit-multiplier": zod_1.z.string().transform((val) => BigInt(val))
});
exports.optionArgsSchema = zod_1.z.object({
    ...exports.bundlerArgsSchema.shape,
    ...exports.compatibilityArgsSchema.shape,
    ...exports.logArgsSchema.shape,
    ...exports.serverArgsSchema.shape,
    ...exports.rpcArgsSchema.shape,
    ...exports.debugArgsSchema.shape,
    ...exports.gasEstimationArgsSchema.shape
});
//# sourceMappingURL=bundler.js.map