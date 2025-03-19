import type { GasPriceManager } from "../handlers/index.js";
import type { Metrics } from "../utils/index.js";
import { type Account } from "viem";
import type { AltoConfig } from "../createConfig.js";
export declare class SenderManager {
    private config;
    wallets: Account[];
    utilityAccount: Account | undefined;
    availableWallets: Account[];
    private metrics;
    private semaphore;
    private gasPriceManager;
    private logger;
    private walletProcessingTime;
    constructor({ config, metrics, gasPriceManager }: {
        config: AltoConfig;
        metrics: Metrics;
        gasPriceManager: GasPriceManager;
    });
    validateAndRefillWallets(): Promise<void>;
    getWallet(): Promise<Account>;
    pushWallet(wallet: Account): void;
}
//# sourceMappingURL=senderManager.d.ts.map