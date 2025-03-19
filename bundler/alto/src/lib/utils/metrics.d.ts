import { Counter, Gauge, Histogram, type Registry } from "prom-client";
export type Metrics = ReturnType<typeof createMetrics>;
export declare function createMetrics(registry: Registry, register?: boolean): {
    httpRequests: Counter<"code" | "method" | "chainId" | "route" | "network" | "rpc_method" | "rpc_status">;
    httpRequestsDuration: Histogram<"code" | "method" | "chainId" | "route" | "network" | "rpc_method" | "rpc_status" | "api_version">;
    userOperationsInMempool: Gauge<"status" | "chainId" | "network">;
    walletsAvailable: Gauge<never>;
    walletsTotal: Gauge<never>;
    userOperationsOnChain: Counter<"status">;
    userOperationsSubmitted: Counter<"status">;
    bundlesIncluded: Counter<never>;
    bundlesSubmitted: Counter<"status">;
    userOperationsReceived: Counter<"type" | "status">;
    userOperationsValidationSuccess: Counter<never>;
    userOperationsValidationFailure: Counter<never>;
    userOperationInclusionDuration: Histogram<never>;
    verificationGasLimitEstimationTime: Histogram<never>;
    verificationGasLimitEstimationCount: Histogram<never>;
    replacedTransactions: Counter<"reason" | "status">;
    userOperationsResubmitted: Counter<never>;
    utilityWalletBalance: Gauge<never>;
    utilityWalletInsufficientBalance: Gauge<never>;
    executorWalletsBalances: Gauge<"wallet">;
    executorWalletsMinBalance: Gauge<never>;
    emittedOpEvents: Counter<"status" | "event_type">;
    walletsProcessingTime: Histogram<never>;
};
//# sourceMappingURL=metrics.d.ts.map