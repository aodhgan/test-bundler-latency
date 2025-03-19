"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityWalletMonitor = void 0;
const viem_1 = require("viem");
class UtilityWalletMonitor {
    config;
    utilityWalletAddress;
    timer;
    metrics;
    logger;
    constructor({ config, metrics, utilityWalletAddress }) {
        this.config = config;
        this.utilityWalletAddress = utilityWalletAddress;
        this.metrics = metrics;
        this.logger = config.getLogger({ module: "utility_wallet_monitor" }, {
            level: config.logLevel
        });
    }
    async updateMetrics() {
        try {
            const balance = await this.config.publicClient.getBalance({
                address: this.utilityWalletAddress
            });
            this.metrics.utilityWalletBalance.set(Number.parseFloat((0, viem_1.formatEther)(balance)));
        }
        catch (error) {
            this.logger.error(error, "Failed to update utility wallet balance metrics");
        }
    }
    async start() {
        if (this.timer) {
            throw new Error("UtilityWalletMonitor already started");
        }
        await this.updateMetrics();
        this.timer = setInterval(this.updateMetrics.bind(this), this.config.utilityWalletMonitorInterval);
    }
    stop() {
        clearInterval(this.timer);
    }
}
exports.UtilityWalletMonitor = UtilityWalletMonitor;
//# sourceMappingURL=utilityWalletMonitor.js.map