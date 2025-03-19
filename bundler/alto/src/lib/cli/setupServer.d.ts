import type { SenderManager } from "../executor/index.js";
import { type GasPriceManager } from "../handlers/index.js";
import type { Metrics } from "../utils/index.js";
import type { Registry } from "prom-client";
import type { AltoConfig } from "../createConfig.js";
export declare const setupServer: ({ config, registry, metrics, senderManager, gasPriceManager }: {
    config: AltoConfig;
    registry: Registry;
    metrics: Metrics;
    senderManager: SenderManager;
    gasPriceManager: GasPriceManager;
}) => Promise<void>;
//# sourceMappingURL=setupServer.d.ts.map