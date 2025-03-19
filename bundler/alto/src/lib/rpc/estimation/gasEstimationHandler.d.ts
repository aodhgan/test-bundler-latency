import type { UserOperation } from "../../types/index.js";
import type { StateOverrides } from "../../types/index.js";
import type { Hex } from "viem";
import { type Address } from "viem";
import { GasEstimatorV06 } from "./gasEstimationsV06.js";
import { GasEstimatorV07 } from "./gasEstimationsV07.js";
import type { SimulateHandleOpResult } from "./types.js";
import type { AltoConfig } from "../../createConfig.js";
import { SignedAuthorizationList } from "viem/experimental";
export declare class GasEstimationHandler {
    gasEstimatorV06: GasEstimatorV06;
    gasEstimatorV07: GasEstimatorV07;
    constructor(config: AltoConfig);
    simulateHandleOp({ userOperation, queuedUserOperations, addSenderBalanceOverride, balanceOverrideEnabled, entryPoint, targetAddress, targetCallData, authorizationList, stateOverrides }: {
        userOperation: UserOperation;
        queuedUserOperations: UserOperation[];
        addSenderBalanceOverride: boolean;
        balanceOverrideEnabled: boolean;
        entryPoint: Address;
        targetAddress: Address;
        targetCallData: Hex;
        authorizationList?: SignedAuthorizationList;
        stateOverrides?: StateOverrides;
    }): Promise<SimulateHandleOpResult>;
}
//# sourceMappingURL=gasEstimationHandler.d.ts.map