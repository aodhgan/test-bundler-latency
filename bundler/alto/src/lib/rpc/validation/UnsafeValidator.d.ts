import type { GasPriceManager } from "../../handlers/index.js";
import type { InterfaceValidator, StateOverrides, UserOperationV06, UserOperationV07, ValidationResult, ValidationResultV06, ValidationResultV07, ValidationResultWithAggregationV06, ValidationResultWithAggregationV07 } from "../../types/index.js";
import { type Address, type ExecutionResult, type ReferencedCodeHashes, type StorageMap, type UserOperation, type ValidationResultWithAggregation } from "../../types/index.js";
import type { Logger, Metrics } from "../../utils/index.js";
import { GasEstimationHandler } from "../estimation/gasEstimationHandler.js";
import type { SimulateHandleOpResult } from "../estimation/types.js";
import type { AltoConfig } from "../../createConfig.js";
import { SignedAuthorizationList } from "viem/experimental";
export declare class UnsafeValidator implements InterfaceValidator {
    config: AltoConfig;
    metrics: Metrics;
    gasPriceManager: GasPriceManager;
    logger: Logger;
    gasEstimationHandler: GasEstimationHandler;
    constructor({ config, metrics, gasPriceManager }: {
        config: AltoConfig;
        metrics: Metrics;
        gasPriceManager: GasPriceManager;
    });
    getSimulationResult(isVersion06: boolean, errorResult: unknown, logger: Logger, simulationType: "validation" | "execution", usingTenderly?: boolean): Promise<ValidationResult | ValidationResultWithAggregation | ExecutionResult>;
    getExecutionResult({ userOperation, entryPoint, queuedUserOperations, addSenderBalanceOverride, authorizationList, stateOverrides }: {
        userOperation: UserOperation;
        entryPoint: Address;
        queuedUserOperations: UserOperation[];
        addSenderBalanceOverride: boolean;
        authorizationList?: SignedAuthorizationList;
        stateOverrides?: StateOverrides;
    }): Promise<SimulateHandleOpResult<"execution">>;
    getValidationResultV06({ userOperation, entryPoint, authorizationList }: {
        userOperation: UserOperationV06;
        entryPoint: Address;
        authorizationList?: SignedAuthorizationList;
        codeHashes?: ReferencedCodeHashes;
    }): Promise<(ValidationResultV06 | ValidationResultWithAggregationV06) & {
        storageMap: StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
    parseValidationData(validationData: bigint): {
        aggregator: string;
        validAfter: number;
        validUntil: number;
    };
    mergeValidationData(accountValidationData: {
        aggregator: string;
        validAfter: number;
        validUntil: number;
    }, paymasterValidationData: {
        aggregator: string;
        validAfter: number;
        validUntil: number;
    }): {
        paymasterSigFailed: boolean;
        accountSigFailed: boolean;
        validAfter: number;
        validUntil: number;
    };
    mergeValidationDataValues(accountValidationData: bigint, paymasterValidationData: bigint): {
        paymasterSigFailed: boolean;
        accountSigFailed: boolean;
        validAfter: number;
        validUntil: number;
    };
    getValidationResultV07({ userOperation, queuedUserOperations, entryPoint, authorizationList }: {
        userOperation: UserOperationV07;
        queuedUserOperations: UserOperationV07[];
        entryPoint: Address;
        codeHashes?: ReferencedCodeHashes;
        authorizationList?: SignedAuthorizationList;
    }): Promise<(ValidationResultV07 | ValidationResultWithAggregationV07) & {
        storageMap: StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
    getValidationResult({ userOperation, queuedUserOperations, entryPoint, codeHashes, authorizationList }: {
        userOperation: UserOperation;
        queuedUserOperations: UserOperation[];
        entryPoint: Address;
        codeHashes?: ReferencedCodeHashes;
        authorizationList?: SignedAuthorizationList;
    }): Promise<(ValidationResult | ValidationResultWithAggregation) & {
        storageMap: StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
    validatePreVerificationGas({ userOperation, entryPoint }: {
        userOperation: UserOperation;
        entryPoint: Address;
    }): Promise<void>;
    validateUserOperation({ shouldCheckPrefund, userOperation, queuedUserOperations, entryPoint, authorizationList }: {
        shouldCheckPrefund: boolean;
        userOperation: UserOperation;
        queuedUserOperations: UserOperation[];
        entryPoint: Address;
        authorizationList?: SignedAuthorizationList;
        _referencedContracts?: ReferencedCodeHashes;
    }): Promise<(ValidationResult | ValidationResultWithAggregation) & {
        storageMap: StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
}
//# sourceMappingURL=UnsafeValidator.d.ts.map