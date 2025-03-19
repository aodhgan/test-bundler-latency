import type { Metrics } from "../utils/index.js";
import type { AltoConfig } from "../createConfig.js";
import type { Address } from "abitype";
export declare class UtilityWalletMonitor {
    private config;
    private utilityWalletAddress;
    private timer;
    private metrics;
    private logger;
    constructor({ config, metrics, utilityWalletAddress }: {
        config: AltoConfig;
        metrics: Metrics;
        utilityWalletAddress: Address;
    });
    private updateMetrics;
    start(): Promise<void>;
    stop(): void;
}
//# sourceMappingURL=utilityWalletMonitor.d.ts.map