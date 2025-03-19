import type { HexData32, UserOperationStatus } from "../types/index.js";
export declare class Monitor {
    private userOperationToStatus;
    private userOperationTimeouts;
    private timeout;
    constructor(timeout?: number);
    setUserOperationStatus(userOperation: HexData32, status: UserOperationStatus): void;
    getUserOperationStatus(userOperation: HexData32): UserOperationStatus;
}
//# sourceMappingURL=monitoring.d.ts.map