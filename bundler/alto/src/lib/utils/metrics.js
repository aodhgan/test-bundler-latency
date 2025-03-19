"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMetrics = void 0;
const prom_client_1 = require("prom-client");
function createMetrics(registry, register = true) {
    (0, prom_client_1.collectDefaultMetrics)({ register: registry });
    const registers = register ? [registry] : [];
    const httpRequests = new prom_client_1.Counter({
        name: "alto_requests_total",
        help: "Total number of requests",
        labelNames: [
            "route",
            "network",
            "chainId",
            "rpc_method",
            "rpc_status",
            "code",
            "method"
        ],
        registers
    });
    const httpRequestsDuration = new prom_client_1.Histogram({
        name: "alto_requests_duration_seconds",
        help: "Duration of requests in seconds",
        labelNames: [
            "route",
            "network",
            "chainId",
            "rpc_method",
            "rpc_status",
            "code",
            "method",
            "api_version"
        ],
        registers
    });
    const userOperationsInMempool = new prom_client_1.Gauge({
        name: "alto_user_operations_in_mempool_count",
        help: "Number of user operations in mempool",
        labelNames: ["network", "chainId", "status"],
        registers
    });
    const walletsAvailable = new prom_client_1.Gauge({
        name: "alto_executor_wallets_available_count",
        help: "Number of available executor wallets used to bundle",
        labelNames: [],
        registers
    });
    const walletsTotal = new prom_client_1.Gauge({
        name: "alto_executor_wallets_total_count",
        help: "Number of total executor wallets used to bundle",
        labelNames: [],
        registers
    });
    const userOperationsOnChain = new prom_client_1.Counter({
        name: "alto_user_operations_on_chain_total",
        help: "Number of user operations on-chain by status",
        labelNames: ["status"],
        registers
    });
    const userOperationsSubmitted = new prom_client_1.Counter({
        name: "alto_user_operations_submitted_total",
        help: "Number of user operations bundles submitted on-chain",
        labelNames: ["status"],
        registers
    });
    const bundlesIncluded = new prom_client_1.Counter({
        name: "alto_bundles_included_total",
        help: "Number of user operations bundles included on-chain",
        labelNames: [],
        registers
    });
    const bundlesSubmitted = new prom_client_1.Counter({
        name: "alto_bundles_submitted_total",
        help: "Number of user operations bundles submitted on-chain",
        labelNames: ["status"],
        registers
    });
    const userOperationsReceived = new prom_client_1.Counter({
        name: "alto_user_operations_received_total",
        help: "Number of user operations received",
        labelNames: ["status", "type"],
        registers
    });
    const userOperationsValidationSuccess = new prom_client_1.Counter({
        name: "alto_user_operations_validation_success_total",
        help: "Number of user operations successfully validated",
        labelNames: [],
        registers
    });
    const userOperationsValidationFailure = new prom_client_1.Counter({
        name: "alto_user_operations_validation_failure_total",
        help: "Number of user operations failed to validate",
        labelNames: [],
        registers
    });
    const userOperationInclusionDuration = new prom_client_1.Histogram({
        name: "alto_user_operation_inclusion_duration_seconds",
        help: "Duration of user operation inclusion from first submission to inclusion on-chain",
        labelNames: [],
        registers,
        buckets: [
            0.5, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30, 40, 50, 60, 120,
            180, 240, 300, 600, 900, 1200
        ]
    });
    const verificationGasLimitEstimationTime = new prom_client_1.Histogram({
        name: "alto_verification_gas_limit_estimation_time_seconds",
        help: "Total duration of verification gas limit estimation",
        labelNames: [],
        registers,
        buckets: [0.1, 0.2, 0.3, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5]
    });
    const verificationGasLimitEstimationCount = new prom_client_1.Histogram({
        name: "alto_verification_gas_limit_estimation_count",
        help: "Number of verification gas limit estimation calls",
        labelNames: [],
        registers,
        buckets: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });
    const replacedTransactions = new prom_client_1.Counter({
        name: "alto_replaced_transactions_total",
        help: "Number of replaced transactions",
        labelNames: ["reason", "status"],
        registers
    });
    const userOperationsResubmitted = new prom_client_1.Counter({
        name: "alto_user_operations_resubmitted_total",
        help: "Number of user operations resubmitted",
        labelNames: [],
        registers
    });
    const utilityWalletBalance = new prom_client_1.Gauge({
        name: "alto_utility_wallet_balance",
        help: "Balance of the utility wallet",
        labelNames: [],
        registers
    });
    const utilityWalletInsufficientBalance = new prom_client_1.Gauge({
        name: "alto_utility_wallet_insufficient_balance",
        help: "Indicates if utility wallet has insufficient balance (0=OK, 1=insufficient)",
        labelNames: [],
        registers
    });
    const executorWalletsBalances = new prom_client_1.Gauge({
        name: "alto_executor_wallet_balance",
        help: "Balance of the executor wallet",
        labelNames: ["wallet"],
        registers
    });
    const executorWalletsMinBalance = new prom_client_1.Gauge({
        name: "alto_executor_wallets_min_balance",
        help: "Minimum balance of the executor wallets",
        labelNames: [],
        registers
    });
    const emittedOpEvents = new prom_client_1.Counter({
        name: "alto_emitted_user_operation_events",
        help: "Total number of emitted UserOperation status events",
        labelNames: ["event_type", "status"],
        registers
    });
    const walletsProcessingTime = new prom_client_1.Histogram({
        name: "alto_executor_wallets_processing_duration_seconds",
        help: "Time spent processing user operations by executor wallets",
        labelNames: [],
        registers
    });
    return {
        httpRequests,
        httpRequestsDuration,
        userOperationsInMempool,
        walletsAvailable,
        walletsTotal,
        userOperationsOnChain,
        userOperationsSubmitted,
        bundlesIncluded,
        bundlesSubmitted,
        userOperationsReceived,
        userOperationsValidationSuccess,
        userOperationsValidationFailure,
        userOperationInclusionDuration,
        verificationGasLimitEstimationTime,
        verificationGasLimitEstimationCount,
        replacedTransactions,
        userOperationsResubmitted,
        utilityWalletBalance,
        utilityWalletInsufficientBalance,
        executorWalletsBalances,
        executorWalletsMinBalance,
        emittedOpEvents,
        walletsProcessingTime
    };
}
exports.createMetrics = createMetrics;
//# sourceMappingURL=metrics.js.map