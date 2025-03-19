import type { Address } from "viem";
import type { SimulateHandleOpResult } from "../rpc/estimation/types.js";
import type { ReferencedCodeHashes } from "./mempool.js";
import type { StateOverrides, UserOperation, UserOperationV06, UserOperationV07 } from "./schemas.js";
import type * as validation from "./validation.js";
import { SignedAuthorizationList } from "viem/experimental";
export interface InterfaceValidator {
    getExecutionResult(args: {
        authorizationList?: SignedAuthorizationList;
        userOperation: UserOperation;
        entryPoint: Address;
        queuedUserOperations: UserOperation[];
        addSenderBalanceOverride: boolean;
        stateOverrides?: StateOverrides;
    }): Promise<SimulateHandleOpResult<"execution">>;
    getValidationResultV06(args: {
        userOperation: UserOperationV06;
        entryPoint: Address;
        codeHashes?: ReferencedCodeHashes;
        authorizationList?: SignedAuthorizationList;
    }): Promise<(validation.ValidationResult | validation.ValidationResultWithAggregation) & {
        storageMap: validation.StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
    getValidationResultV07(args: {
        userOperation: UserOperationV07;
        queuedUserOperations: UserOperation[];
        entryPoint: Address;
        codeHashes?: ReferencedCodeHashes;
        authorizationList?: SignedAuthorizationList;
    }): Promise<(validation.ValidationResult | validation.ValidationResultWithAggregation) & {
        storageMap: validation.StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
    getValidationResult(args: {
        userOperation: UserOperation;
        queuedUserOperations: UserOperation[];
        entryPoint: Address;
        codeHashes?: ReferencedCodeHashes;
        authorizationList?: SignedAuthorizationList;
    }): Promise<(validation.ValidationResult | validation.ValidationResultWithAggregation) & {
        storageMap: validation.StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
    validatePreVerificationGas(args: {
        userOperation: UserOperation;
        entryPoint: Address;
    }): Promise<void>;
    validateUserOperation(args: {
        shouldCheckPrefund: boolean;
        userOperation: UserOperation;
        queuedUserOperations: UserOperation[];
        entryPoint: Address;
        referencedContracts?: ReferencedCodeHashes;
        authorizationList?: SignedAuthorizationList;
    }): Promise<(validation.ValidationResult | validation.ValidationResultWithAggregation) & {
        storageMap: validation.StorageMap;
        referencedContracts?: ReferencedCodeHashes;
    }>;
}
//# sourceMappingURL=interfaces.d.ts.map