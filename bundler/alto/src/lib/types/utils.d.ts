export declare enum ValidationErrors {
    InvalidRequest = -32601,
    InvalidFields = -32602,
    SimulateValidation = -32500,
    SimulatePaymasterValidation = -32501,
    OpcodeValidation = -32502,
    ExpiresShortly = -32503,
    Reputation = -32504,
    InsufficientStake = -32505,
    UnsupportedSignatureAggregator = -32506,
    InvalidSignature = -32507
}
export declare enum ExecutionErrors {
    UserOperationReverted = -32521
}
export declare class RpcError extends Error {
    code?: number;
    data?: any;
    constructor(msg: string, code?: number, data?: any);
}
export type Environment = "production" | "staging" | "development";
export type ApiVersion = "v1" | "v2";
export type ChainType = "default" | "op-stack" | "arbitrum" | "hedera" | "mantle" | "skale";
//# sourceMappingURL=utils.d.ts.map