import { type GasPriceParameters } from "../types/index.js";
import type { AltoConfig } from "../createConfig.js";
import { ArbitrumManager } from "./arbitrumGasPriceManager.js";
import { MantleManager } from "./mantleGasPriceManager.js";
import { OptimismManager } from "./optimismManager.js";
export declare class GasPriceManager {
    private readonly config;
    private baseFeePerGasQueue;
    private maxFeePerGasQueue;
    private maxPriorityFeePerGasQueue;
    private logger;
    arbitrumManager: ArbitrumManager;
    mantleManager: MantleManager;
    optimismManager: OptimismManager;
    constructor(config: AltoConfig);
    init(): Promise<[{
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
    }, bigint | void]>;
    private getDefaultGasFee;
    private getPolygonGasPriceParameters;
    private bumpTheGasPrice;
    private getFallBackMaxPriorityFeePerGas;
    private getLegacyTransactionGasPrice;
    private estimateGasPrice;
    private innerGetGasPrice;
    private updateBaseFee;
    getBaseFee(): Promise<bigint>;
    private tryUpdateGasPrice;
    getGasPrice(): Promise<GasPriceParameters>;
    tryGetNetworkGasPrice(): Promise<GasPriceParameters>;
    getMaxBaseFeePerGas(): Promise<bigint>;
    getHighestMaxFeePerGas(): Promise<bigint>;
    getHighestMaxPriorityFeePerGas(): Promise<bigint>;
    private getMinMaxFeePerGas;
    private getMinMaxPriorityFeePerGas;
    validateGasPrice(gasPrice: GasPriceParameters): Promise<void>;
}
//# sourceMappingURL=gasPriceManager.d.ts.map