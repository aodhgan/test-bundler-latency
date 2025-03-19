import { type StakeInfo, type StorageMap, type UserOperationV07, type ValidationResultV07 } from "../../types/index.js";
import { type Address, type Hex } from "viem";
import type { BundlerTracerResult } from "./BundlerCollectorTracerV07.js";
export type StakeInfoEntities = {
    factory?: StakeInfo;
    account?: StakeInfo;
    paymaster?: StakeInfo;
};
export declare function isStaked(entStake?: StakeInfo): boolean;
export declare function associatedWith(slot: string, addr: string, entitySlots: {
    [addr: string]: Set<string>;
}): boolean;
/**
 * slots associated with each entity.
 * keccak( A || ...) is associated with "A"
 * removed rule: keccak( ... || ASSOC ) (for a previously associated hash) is also associated with "A"
 *
 * @param stakeInfoEntities stake info for (factory, account, paymaster). factory and paymaster can be null.
 * @param keccak array of buffers that were given to keccak in the transaction
 */
export declare function parseEntitySlots(stakeInfoEntities: StakeInfoEntities, keccak: Hex[]): {
    [addr: string]: Set<string>;
};
/**
 * parse collected simulation traces and revert if they break our rules
 * @param userOperation the userOperation that was used in this simulation
 * @param tracerResults the tracer return value
 * @param validationResult output from simulateValidation
 * @param entryPoint the entryPoint that hosted the "simulatedValidation" traced call.
 * @return list of contract addresses referenced by this UserOp
 */
export declare function tracerResultParserV07(userOperation: UserOperationV07, tracerResults: BundlerTracerResult, validationResult: ValidationResultV07, entryPointAddress: Address): [string[], StorageMap];
//# sourceMappingURL=TracerResultParserV07.d.ts.map