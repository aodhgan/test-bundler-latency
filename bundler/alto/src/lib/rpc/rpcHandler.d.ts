import type { Executor, ExecutorManager } from "../executor/index.js";
import type { EventManager, GasPriceManager } from "../handlers/index.js";
import type { InterfaceReputationManager, MemoryMempool, Monitor } from "../mempool/index.js";
import type { ApiVersion, StateOverrides } from "../types/index.js";
import { type Address, type BundlerClearMempoolResponseResult, type BundlerClearStateResponseResult, type BundlerDumpMempoolResponseResult, type BundlerDumpReputationsResponseResult, type BundlerGetStakeStatusResponseResult, type BundlerRequest, type BundlerResponse, type BundlerSendBundleNowResponseResult, type BundlerSetBundlingModeResponseResult, type BundlerSetReputationsRequestParams, type BundlingMode, type ChainIdResponseResult, type EstimateUserOperationGasResponseResult, type GetUserOperationByHashResponseResult, type GetUserOperationReceiptResponseResult, type HexData32, type InterfaceValidator, type MempoolUserOperation, type PimlicoGetUserOperationGasPriceResponseResult, type PimlicoGetUserOperationStatusResponseResult, type SendUserOperationResponseResult, type SupportedEntryPointsResponseResult, type UserOperation } from "../types/index.js";
import type { Logger, Metrics } from "../utils/index.js";
import { type Hex } from "viem";
import type { NonceQueuer } from "./nonceQueuer.js";
import type { AltoConfig } from "../createConfig.js";
import type { SignedAuthorization } from "viem/experimental";
export interface IRpcEndpoint {
    handleMethod(request: BundlerRequest, apiVersion: ApiVersion): Promise<BundlerResponse>;
    eth_chainId(): ChainIdResponseResult;
    eth_supportedEntryPoints(): SupportedEntryPointsResponseResult;
    eth_estimateUserOperationGas(apiVersion: ApiVersion, userOperation: UserOperation, entryPoint: Address, stateOverrides?: StateOverrides): Promise<EstimateUserOperationGasResponseResult>;
    eth_sendUserOperation(apiVersion: ApiVersion, userOperation: UserOperation, entryPoint: Address): Promise<SendUserOperationResponseResult>;
    eth_getUserOperationByHash(userOperationHash: HexData32): Promise<GetUserOperationByHashResponseResult>;
    eth_getUserOperationReceipt(userOperationHash: HexData32): Promise<GetUserOperationReceiptResponseResult>;
}
export declare class RpcHandler implements IRpcEndpoint {
    config: AltoConfig;
    validator: InterfaceValidator;
    mempool: MemoryMempool;
    executor: Executor;
    monitor: Monitor;
    nonceQueuer: NonceQueuer;
    logger: Logger;
    metrics: Metrics;
    executorManager: ExecutorManager;
    reputationManager: InterfaceReputationManager;
    gasPriceManager: GasPriceManager;
    eventManager: EventManager;
    constructor({ config, validator, mempool, executor, monitor, nonceQueuer, executorManager, reputationManager, metrics, gasPriceManager, eventManager }: {
        config: AltoConfig;
        validator: InterfaceValidator;
        mempool: MemoryMempool;
        executor: Executor;
        monitor: Monitor;
        nonceQueuer: NonceQueuer;
        executorManager: ExecutorManager;
        reputationManager: InterfaceReputationManager;
        metrics: Metrics;
        eventManager: EventManager;
        gasPriceManager: GasPriceManager;
    });
    handleMethod(request: BundlerRequest, apiVersion: ApiVersion): Promise<BundlerResponse>;
    ensureEntryPointIsSupported(entryPoint: Address): void;
    ensureDebugEndpointsAreEnabled(methodName: string): void;
    preMempoolChecks(opHash: Hex, userOperation: UserOperation, apiVersion: ApiVersion, entryPoint: Address): Promise<void>;
    eth_chainId(): ChainIdResponseResult;
    eth_supportedEntryPoints(): SupportedEntryPointsResponseResult;
    eth_estimateUserOperationGas(apiVersion: ApiVersion, userOperation: UserOperation, entryPoint: Address, stateOverrides?: StateOverrides): Promise<EstimateUserOperationGasResponseResult>;
    eth_sendUserOperation(apiVersion: ApiVersion, userOperation: UserOperation, entryPoint: Address): Promise<SendUserOperationResponseResult>;
    eth_getUserOperationByHash(userOperationHash: HexData32): Promise<GetUserOperationByHashResponseResult>;
    eth_getUserOperationReceipt(userOperationHash: HexData32): Promise<GetUserOperationReceiptResponseResult>;
    debug_bundler_clearState(): BundlerClearStateResponseResult;
    debug_bundler_clearMempool(): BundlerClearMempoolResponseResult;
    debug_bundler_dumpMempool(entryPoint: Address): Promise<BundlerDumpMempoolResponseResult>;
    debug_bundler_sendBundleNow(): Promise<BundlerSendBundleNowResponseResult>;
    debug_bundler_setBundlingMode(bundlingMode: BundlingMode): Promise<BundlerSetBundlingModeResponseResult>;
    debug_bundler_dumpReputation(entryPoint: Address): BundlerDumpReputationsResponseResult;
    debug_bundler_getStakeStatus(address: Address, entryPoint: Address): Promise<BundlerGetStakeStatusResponseResult>;
    debug_bundler_setReputation(args: BundlerSetReputationsRequestParams): BundlerSetBundlingModeResponseResult;
    pimlico_getUserOperationStatus(userOperationHash: HexData32): PimlicoGetUserOperationStatusResponseResult;
    pimlico_getUserOperationGasPrice(): Promise<PimlicoGetUserOperationGasPriceResponseResult>;
    addToMempoolIfValid(op: MempoolUserOperation, entryPoint: Address, apiVersion: ApiVersion): Promise<"added" | "queued">;
    pimlico_experimental_estimateUserOperationGas7702(apiVersion: ApiVersion, userOperation: UserOperation, entryPoint: Address, authorization: SignedAuthorization, stateOverrides?: StateOverrides): Promise<{
        preVerificationGas: bigint;
        verificationGasLimit: bigint;
        callGasLimit: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        verificationGas?: undefined;
    } | {
        preVerificationGas: bigint;
        verificationGasLimit: bigint;
        callGasLimit: bigint;
        paymasterVerificationGasLimit?: undefined;
        paymasterPostOpGasLimit?: undefined;
        verificationGas?: undefined;
    } | {
        preVerificationGas: bigint;
        verificationGas: bigint;
        verificationGasLimit: bigint;
        callGasLimit: bigint;
        paymasterVerificationGasLimit?: undefined;
        paymasterPostOpGasLimit?: undefined;
    }>;
    pimlico_experimental_sendUserOperation7702(apiVersion: ApiVersion, userOperation: UserOperation, entryPoint: Address, authorizationSignature: SignedAuthorization): Promise<`0x${string}`>;
    pimlico_sendUserOperationNow(apiVersion: ApiVersion, userOperation: UserOperation, entryPoint: Address): Promise<{
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
    }>;
    getNonceValue(userOperation: UserOperation, entryPoint: Address): Promise<bigint>;
    estimateGas({ apiVersion, userOperation, entryPoint, stateOverrides, authorization }: {
        apiVersion: ApiVersion;
        userOperation: UserOperation;
        entryPoint: Address;
        stateOverrides?: StateOverrides;
        authorization?: SignedAuthorization;
    }): Promise<{
        preVerificationGas: bigint;
        verificationGasLimit: bigint;
        callGasLimit: bigint;
        paymasterVerificationGasLimit: bigint;
        paymasterPostOpGasLimit: bigint;
        verificationGas?: undefined;
    } | {
        preVerificationGas: bigint;
        verificationGasLimit: bigint;
        callGasLimit: bigint;
        paymasterVerificationGasLimit?: undefined;
        paymasterPostOpGasLimit?: undefined;
        verificationGas?: undefined;
    } | {
        preVerificationGas: bigint;
        verificationGas: bigint;
        verificationGasLimit: bigint;
        callGasLimit: bigint;
        paymasterVerificationGasLimit?: undefined;
        paymasterPostOpGasLimit?: undefined;
    }>;
}
//# sourceMappingURL=rpcHandler.d.ts.map