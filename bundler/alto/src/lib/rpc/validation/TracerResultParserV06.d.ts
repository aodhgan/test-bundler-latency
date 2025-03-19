import { type StorageMap, type UserOperationV06, type ValidationResult } from "../../types/index.js";
import { type Address } from "viem";
import type { BundlerTracerResult } from "./BundlerCollectorTracerV06.js";
/**
 * parse collected simulation traces and revert if they break our rules
 * @param userOperation the userOperation that was used in this simulation
 * @param tracerResults the tracer return value
 * @param validationResult output from simulateValidation
 * @param entryPoint the entryPoint that hosted the "simulatedValidation" traced call.
 * @return list of contract addresses referenced by this UserOp
 */
export declare function tracerResultParserV06(userOperation: UserOperationV06, tracerResults: BundlerTracerResult, validationResult: ValidationResult, entryPointAddress: Address): [string[], StorageMap];
//# sourceMappingURL=TracerResultParserV06.d.ts.map