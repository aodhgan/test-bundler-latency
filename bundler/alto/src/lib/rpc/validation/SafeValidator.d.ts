import type { SenderManager } from "../../executor/index.js";
import type { GasPriceManager } from "../../handlers/index.js";
import type { InterfaceValidator, UserOperationV06, UserOperationV07, ValidationResult, ValidationResultV06, ValidationResultV07, ValidationResultWithAggregationV06, ValidationResultWithAggregationV07 } from "../../types/index.js";
import { type Address, type ReferencedCodeHashes, type StorageMap, type UserOperation, type ValidationResultWithAggregation } from "../../types/index.js";
import type { Metrics } from "../../utils/index.js";
import { type BundlerTracerResult } from "./BundlerCollectorTracerV07.js";
import { UnsafeValidator } from "./UnsafeValidator.js";
import type { AltoConfig } from "../../createConfig.js";
export declare class SafeValidator extends UnsafeValidator implements InterfaceValidator {
    private senderManager;
    constructor({ config, senderManager, metrics, gasPriceManager }: {
        config: AltoConfig;
        senderManager: SenderManager;
        metrics: Metrics;
        gasPriceManager: GasPriceManager;
    });
    validateUserOperation({ shouldCheckPrefund, userOperation, queuedUserOperations, entryPoint, referencedContracts }: {
        shouldCheckPrefund: boolean;
        userOperation: UserOperation;
        queuedUserOperations: UserOperation[];
        entryPoint: Address;
        referencedContracts?: ReferencedCodeHashes;
    }): Promise<(ValidationResult | ValidationResultWithAggregation) & {
        storageMap: StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
    getCodeHashes(addresses: string[]): Promise<ReferencedCodeHashes>;
    getValidationResultV07({ userOperation, queuedUserOperations, entryPoint, preCodeHashes }: {
        userOperation: UserOperationV07;
        queuedUserOperations: UserOperationV07[];
        entryPoint: Address;
        preCodeHashes?: ReferencedCodeHashes;
    }): Promise<(ValidationResultV07 | ValidationResultWithAggregationV07) & {
        storageMap: StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
    getValidationResultV06({ userOperation, entryPoint, preCodeHashes }: {
        userOperation: UserOperationV06;
        entryPoint: Address;
        preCodeHashes?: ReferencedCodeHashes;
    }): Promise<(ValidationResultV06 | ValidationResultWithAggregationV06) & {
        referencedContracts?: ReferencedCodeHashes;
        storageMap: StorageMap;
    }>;
    getValidationResultWithTracerV06(userOperation: UserOperationV06, entryPoint: Address): Promise<[ValidationResultV06, BundlerTracerResult]>;
    parseErrorResultV06(userOperation: UserOperationV06, errorResult: {
        errorName: string;
        errorArgs: any;
    }): ValidationResult | ValidationResultWithAggregation;
    getValidationResultWithTracerV07(userOperation: UserOperationV07, entryPoint: Address): Promise<[ValidationResultV07, BundlerTracerResult]>;
}
//# sourceMappingURL=SafeValidator.d.ts.map