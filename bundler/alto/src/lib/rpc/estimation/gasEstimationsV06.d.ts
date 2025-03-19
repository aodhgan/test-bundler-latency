import type { StateOverrides, UserOperationV06 } from "../../types/index.js";
import type { Hex } from "viem";
import { type Address } from "viem";
import type { SimulateHandleOpResult } from "./types.js";
import type { AltoConfig } from "../../createConfig.js";
import { SignedAuthorizationList } from "viem/experimental";
export declare class GasEstimatorV06 {
    private config;
    constructor(config: AltoConfig);
    decodeSimulateHandleOpResult(data: Hex): SimulateHandleOpResult;
    simulateHandleOpV06({ userOperation, targetAddress, targetCallData, entryPoint, useCodeOverride, authorizationList, stateOverrides }: {
        userOperation: UserOperationV06;
        targetAddress: Address;
        targetCallData: Hex;
        entryPoint: Address;
        authorizationList?: SignedAuthorizationList;
        useCodeOverride?: boolean;
        stateOverrides?: StateOverrides | undefined;
    }): Promise<SimulateHandleOpResult>;
}
//# sourceMappingURL=gasEstimationsV06.d.ts.map