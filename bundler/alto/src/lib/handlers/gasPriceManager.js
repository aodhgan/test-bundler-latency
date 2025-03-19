"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasPriceManager = void 0;
const types_1 = require("../types/index.js");
const utils_1 = require("../utils/index.js");
const sentry = __importStar(require("@sentry/node"));
const viem_1 = require("viem");
const chains_1 = require("viem/chains");
const slidingWindowTimedQueue_1 = require("../utils/slidingWindowTimedQueue.js");
const arbitrumGasPriceManager_1 = require("./arbitrumGasPriceManager.js");
const mantleGasPriceManager_1 = require("./mantleGasPriceManager.js");
const optimismManager_1 = require("./optimismManager.js");
var ChainId;
(function (ChainId) {
    ChainId[ChainId["Goerli"] = 5] = "Goerli";
    ChainId[ChainId["Polygon"] = 137] = "Polygon";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId["LineaTestnet"] = 59140] = "LineaTestnet";
    ChainId[ChainId["Linea"] = 59144] = "Linea";
})(ChainId || (ChainId = {}));
const MIN_POLYGON_GAS_PRICE = (0, viem_1.parseGwei)("31");
const MIN_MUMBAI_GAS_PRICE = (0, viem_1.parseGwei)("1");
function getGasStationUrl(chainId) {
    switch (chainId) {
        case ChainId.Polygon:
            return "https://gasstation.polygon.technology/v2";
        case ChainId.Mumbai:
            return "https://gasstation-testnet.polygon.technology/v2";
    }
}
class GasPriceManager {
    config;
    baseFeePerGasQueue;
    maxFeePerGasQueue;
    maxPriorityFeePerGasQueue;
    logger;
    arbitrumManager;
    mantleManager;
    optimismManager;
    constructor(config) {
        this.config = config;
        this.logger = config.getLogger({ module: "gas_price_manager" }, {
            level: config.publicClientLogLevel || config.logLevel
        });
        const queueValidity = this.config.gasPriceExpiry * 1_000;
        this.baseFeePerGasQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
        this.maxFeePerGasQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
        this.maxPriorityFeePerGasQueue = new slidingWindowTimedQueue_1.SlidingWindowTimedQueue(queueValidity);
        // Periodically update gas prices if specified
        if (this.config.gasPriceRefreshInterval > 0) {
            setInterval(() => {
                if (this.config.legacyTransactions === false) {
                    this.updateBaseFee();
                }
                this.tryUpdateGasPrice();
            }, this.config.gasPriceRefreshInterval * 1000);
        }
        this.arbitrumManager = new arbitrumGasPriceManager_1.ArbitrumManager(queueValidity);
        this.mantleManager = new mantleGasPriceManager_1.MantleManager(queueValidity);
        this.optimismManager = new optimismManager_1.OptimismManager(queueValidity);
    }
    init() {
        return Promise.all([
            this.tryUpdateGasPrice(),
            this.config.legacyTransactions === false
                ? this.updateBaseFee()
                : Promise.resolve()
        ]);
    }
    getDefaultGasFee(chainId) {
        switch (chainId) {
            case ChainId.Polygon:
                return MIN_POLYGON_GAS_PRICE;
            case ChainId.Mumbai:
                return MIN_MUMBAI_GAS_PRICE;
            default:
                return 0n;
        }
    }
    async getPolygonGasPriceParameters() {
        const gasStationUrl = getGasStationUrl(this.config.publicClient.chain.id);
        try {
            const data = await (await fetch(gasStationUrl)).json();
            // take the standard speed here, SDK options will define the extra tip
            const parsedData = types_1.gasStationResult.parse(data);
            return parsedData.fast;
        }
        catch (e) {
            this.logger.error({ error: e }, "failed to get gas price from gas station, using default");
            return null;
        }
    }
    bumpTheGasPrice(gasPriceParameters) {
        const bumpAmount = this.config.gasPriceBump;
        const maxPriorityFeePerGas = (0, utils_1.maxBigInt)(gasPriceParameters.maxPriorityFeePerGas, this.getDefaultGasFee(this.config.publicClient.chain.id));
        const maxFeePerGas = (0, utils_1.maxBigInt)(gasPriceParameters.maxFeePerGas, maxPriorityFeePerGas);
        const result = {
            maxFeePerGas: (maxFeePerGas * bumpAmount) / 100n,
            maxPriorityFeePerGas: (maxPriorityFeePerGas * bumpAmount) / 100n
        };
        if (this.config.publicClient.chain.id === chains_1.celo.id ||
            this.config.publicClient.chain.id === chains_1.celoAlfajores.id) {
            const maxFee = (0, utils_1.maxBigInt)(result.maxFeePerGas, result.maxPriorityFeePerGas);
            return {
                maxFeePerGas: maxFee,
                maxPriorityFeePerGas: maxFee
            };
        }
        if (this.config.publicClient.chain.id === chains_1.dfk.id) {
            const maxFeePerGas = (0, utils_1.maxBigInt)(5000000000n, result.maxFeePerGas);
            const maxPriorityFeePerGas = (0, utils_1.maxBigInt)(5000000000n, result.maxPriorityFeePerGas);
            return {
                maxFeePerGas,
                maxPriorityFeePerGas
            };
        }
        // set a minimum maxPriorityFee & maxFee to 1.5gwei on avalanche (because eth_maxPriorityFeePerGas returns 0)
        if (this.config.publicClient.chain.id === chains_1.avalanche.id) {
            const maxFeePerGas = (0, utils_1.maxBigInt)((0, viem_1.parseGwei)("1.5"), result.maxFeePerGas);
            const maxPriorityFeePerGas = (0, utils_1.maxBigInt)((0, viem_1.parseGwei)("1.5"), result.maxPriorityFeePerGas);
            return {
                maxFeePerGas,
                maxPriorityFeePerGas
            };
        }
        return result;
    }
    async getFallBackMaxPriorityFeePerGas(publicClient, gasPrice) {
        const feeHistory = await publicClient.getFeeHistory({
            blockCount: 10,
            rewardPercentiles: [20],
            blockTag: "latest"
        });
        if (feeHistory.reward === undefined || feeHistory.reward === null) {
            return gasPrice;
        }
        const feeAverage = feeHistory.reward.reduce((acc, cur) => cur[0] + acc, 0n) / 10n;
        return (0, utils_1.minBigInt)(feeAverage, gasPrice);
    }
    async getLegacyTransactionGasPrice() {
        let gasPrice;
        try {
            const gasInfo = await this.config.publicClient.estimateFeesPerGas({
                chain: this.config.publicClient.chain,
                type: "legacy"
            });
            gasPrice = gasInfo.gasPrice;
        }
        catch (e) {
            sentry.captureException(e);
            this.logger.error("failed to fetch legacy gasPrices from estimateFeesPerGas", { error: e });
            gasPrice = undefined;
        }
        if (gasPrice === undefined) {
            this.logger.warn("gasPrice is undefined, using fallback value");
            try {
                gasPrice = await this.config.publicClient.getGasPrice();
            }
            catch (e) {
                this.logger.error("failed to get fallback gasPrice");
                sentry.captureException(e);
                throw e;
            }
        }
        return {
            maxFeePerGas: gasPrice,
            maxPriorityFeePerGas: gasPrice
        };
    }
    async estimateGasPrice() {
        let maxFeePerGas;
        let maxPriorityFeePerGas;
        try {
            const fees = await this.config.publicClient.estimateFeesPerGas({
                chain: this.config.publicClient.chain
            });
            maxFeePerGas = fees.maxFeePerGas;
            maxPriorityFeePerGas = fees.maxPriorityFeePerGas;
        }
        catch (e) {
            sentry.captureException(e);
            this.logger.error("failed to fetch eip-1559 gasPrices from estimateFeesPerGas", { error: e });
            maxFeePerGas = undefined;
            maxPriorityFeePerGas = undefined;
        }
        if (maxPriorityFeePerGas === undefined) {
            this.logger.warn("maxPriorityFeePerGas is undefined, using fallback value");
            try {
                maxPriorityFeePerGas =
                    await this.getFallBackMaxPriorityFeePerGas(this.config.publicClient, maxFeePerGas ?? 0n);
            }
            catch (e) {
                this.logger.error("failed to get fallback maxPriorityFeePerGas");
                sentry.captureException(e);
                throw e;
            }
        }
        if (maxFeePerGas === undefined) {
            this.logger.warn("maxFeePerGas is undefined, using fallback value");
            try {
                maxFeePerGas =
                    (await this.config.publicClient.getGasPrice()) +
                        maxPriorityFeePerGas;
            }
            catch (e) {
                this.logger.error("failed to get fallback maxFeePerGas");
                sentry.captureException(e);
                throw e;
            }
        }
        if (maxPriorityFeePerGas === 0n) {
            maxPriorityFeePerGas = maxFeePerGas / 200n;
        }
        return { maxFeePerGas, maxPriorityFeePerGas };
    }
    // This method throws if it can't get a valid RPC response.
    async innerGetGasPrice() {
        let maxFeePerGas = 0n;
        let maxPriorityFeePerGas = 0n;
        if (this.config.publicClient.chain.id === chains_1.polygon.id ||
            this.config.publicClient.chain.id === chains_1.polygonMumbai.id) {
            const polygonEstimate = await this.getPolygonGasPriceParameters();
            if (polygonEstimate) {
                const gasPrice = this.bumpTheGasPrice({
                    maxFeePerGas: polygonEstimate.maxFeePerGas,
                    maxPriorityFeePerGas: polygonEstimate.maxPriorityFeePerGas
                });
                return {
                    maxFeePerGas: (0, utils_1.maxBigInt)(gasPrice.maxFeePerGas, maxFeePerGas),
                    maxPriorityFeePerGas: (0, utils_1.maxBigInt)(gasPrice.maxPriorityFeePerGas, maxPriorityFeePerGas)
                };
            }
        }
        if (this.config.legacyTransactions) {
            const gasPrice = this.bumpTheGasPrice(await this.getLegacyTransactionGasPrice());
            return {
                maxFeePerGas: (0, utils_1.maxBigInt)(gasPrice.maxFeePerGas, maxFeePerGas),
                maxPriorityFeePerGas: (0, utils_1.maxBigInt)(gasPrice.maxPriorityFeePerGas, maxPriorityFeePerGas)
            };
        }
        const estimatedPrice = await this.estimateGasPrice();
        maxFeePerGas = estimatedPrice.maxFeePerGas;
        maxPriorityFeePerGas = estimatedPrice.maxPriorityFeePerGas;
        const gasPrice = this.bumpTheGasPrice({
            maxFeePerGas,
            maxPriorityFeePerGas
        });
        return {
            maxFeePerGas: (0, utils_1.maxBigInt)(gasPrice.maxFeePerGas, maxFeePerGas),
            maxPriorityFeePerGas: (0, utils_1.maxBigInt)(gasPrice.maxPriorityFeePerGas, maxPriorityFeePerGas)
        };
    }
    async updateBaseFee() {
        const latestBlock = await this.config.publicClient.getBlock();
        if (latestBlock.baseFeePerGas === null) {
            throw new types_1.RpcError("block does not have baseFeePerGas");
        }
        const baseFee = latestBlock.baseFeePerGas;
        this.baseFeePerGasQueue.saveValue(baseFee);
        return baseFee;
    }
    async getBaseFee() {
        if (this.config.legacyTransactions) {
            throw new types_1.RpcError("baseFee is not available for legacy transactions");
        }
        if (this.config.gasPriceRefreshInterval === 0) {
            return await this.updateBaseFee();
        }
        let baseFee = this.baseFeePerGasQueue.getLatestValue();
        if (!baseFee) {
            baseFee = await this.updateBaseFee();
        }
        return baseFee;
    }
    // This method throws if it can't get a valid RPC response.
    async tryUpdateGasPrice() {
        const gasPrice = await this.innerGetGasPrice();
        this.maxFeePerGasQueue.saveValue(gasPrice.maxFeePerGas);
        this.maxPriorityFeePerGasQueue.saveValue(gasPrice.maxPriorityFeePerGas);
        return gasPrice;
    }
    async getGasPrice() {
        if (this.config.gasPriceRefreshInterval === 0) {
            return await this.tryUpdateGasPrice();
        }
        const maxFeePerGas = this.maxFeePerGasQueue.getLatestValue();
        const maxPriorityFeePerGas = this.maxPriorityFeePerGasQueue.getLatestValue();
        if (!maxFeePerGas || !maxPriorityFeePerGas) {
            throw new types_1.RpcError("No gas price available");
        }
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
    // This method throws if it can't get a valid RPC response.
    async tryGetNetworkGasPrice() {
        return await this.innerGetGasPrice();
    }
    async getMaxBaseFeePerGas() {
        let maxBaseFeePerGas = this.baseFeePerGasQueue.getMaxValue();
        if (!maxBaseFeePerGas) {
            maxBaseFeePerGas = await this.getBaseFee();
        }
        return maxBaseFeePerGas;
    }
    async getHighestMaxFeePerGas() {
        let highestMaxFeePerGas = this.maxFeePerGasQueue.getMaxValue();
        if (!highestMaxFeePerGas) {
            const gasPrice = await this.getGasPrice();
            highestMaxFeePerGas = gasPrice.maxFeePerGas;
        }
        return highestMaxFeePerGas;
    }
    async getHighestMaxPriorityFeePerGas() {
        let highestMaxPriorityFeePerGas = this.maxPriorityFeePerGasQueue.getMaxValue();
        if (!highestMaxPriorityFeePerGas) {
            const gasPrice = await this.getGasPrice();
            highestMaxPriorityFeePerGas = gasPrice.maxPriorityFeePerGas;
        }
        return highestMaxPriorityFeePerGas;
    }
    async getMinMaxFeePerGas() {
        let minMaxFeePerGas = this.maxFeePerGasQueue.getMinValue();
        if (!minMaxFeePerGas) {
            const gasPrice = await this.getGasPrice();
            minMaxFeePerGas = gasPrice.maxFeePerGas;
        }
        return minMaxFeePerGas;
    }
    async getMinMaxPriorityFeePerGas() {
        let minMaxPriorityFeePerGas = this.maxPriorityFeePerGasQueue.getMinValue();
        if (!minMaxPriorityFeePerGas) {
            const gasPrices = await this.getGasPrice();
            minMaxPriorityFeePerGas = gasPrices.maxPriorityFeePerGas;
        }
        return minMaxPriorityFeePerGas;
    }
    async validateGasPrice(gasPrice) {
        let lowestMaxFeePerGas = await this.getMinMaxFeePerGas();
        let lowestMaxPriorityFeePerGas = await this.getMinMaxPriorityFeePerGas();
        if (this.config.chainType === "hedera") {
            lowestMaxFeePerGas /= 10n ** 9n;
            lowestMaxPriorityFeePerGas /= 10n ** 9n;
        }
        if (gasPrice.maxFeePerGas < lowestMaxFeePerGas) {
            throw new types_1.RpcError(`maxFeePerGas must be at least ${lowestMaxFeePerGas} (current maxFeePerGas: ${gasPrice.maxFeePerGas}) - use pimlico_getUserOperationGasPrice to get the current gas price`);
        }
        if (gasPrice.maxPriorityFeePerGas < lowestMaxPriorityFeePerGas) {
            throw new types_1.RpcError(`maxPriorityFeePerGas must be at least ${lowestMaxPriorityFeePerGas} (current maxPriorityFeePerGas: ${gasPrice.maxPriorityFeePerGas}) - use pimlico_getUserOperationGasPrice to get the current gas price`);
        }
    }
}
exports.GasPriceManager = GasPriceManager;
//# sourceMappingURL=gasPriceManager.js.map