import type { HexData32, SubmittedUserOperation, UserOperationInfo } from "../types/index.js";
import type { Metrics } from "../utils/index.js";
import type { Logger } from "../utils/index.js";
export declare class MemoryStore {
    private outstandingUserOperations;
    private processingUserOperations;
    private submittedUserOperations;
    private logger;
    private metrics;
    constructor(logger: Logger, metrics: Metrics);
    addOutstanding(op: UserOperationInfo): void;
    addProcessing(op: UserOperationInfo): void;
    addSubmitted(op: SubmittedUserOperation): void;
    removeOutstanding(userOpHash: HexData32): void;
    removeProcessing(userOpHash: HexData32): void;
    removeSubmitted(userOpHash: HexData32): void;
    dumpOutstanding(): UserOperationInfo[];
    dumpProcessing(): UserOperationInfo[];
    dumpSubmitted(): SubmittedUserOperation[];
    clear(from: "outstanding" | "processing" | "submitted"): void;
}
//# sourceMappingURL=store.d.ts.map