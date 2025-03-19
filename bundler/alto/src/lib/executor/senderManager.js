"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderManager = void 0;
const types_1 = require("../types/index.js");
const async_mutex_1 = require("async-mutex");
const viem_1 = require("viem");
const waitForTransactionReceipt = async (publicClient, tx) => {
    try {
        return await publicClient.waitForTransactionReceipt({ hash: tx });
    }
    catch {
        return await waitForTransactionReceipt(publicClient, tx);
    }
};
class SenderManager {
    config;
    wallets;
    utilityAccount;
    availableWallets;
    metrics;
    semaphore;
    gasPriceManager;
    logger;
    walletProcessingTime = new Map();
    constructor({ config, metrics, gasPriceManager }) {
        this.config = config;
        this.logger = config.getLogger({ module: "executor" }, {
            level: config.executorLogLevel || config.logLevel
        });
        const maxSigners = config.maxExecutors;
        const wallets = config.executorPrivateKeys;
        if (maxSigners !== undefined && wallets.length > maxSigners) {
            this.wallets = wallets.slice(0, maxSigners);
            this.availableWallets = wallets.slice(0, maxSigners);
        }
        else {
            this.wallets = wallets;
            this.availableWallets = wallets;
        }
        this.utilityAccount = this.config.utilityPrivateKey;
        this.metrics = metrics;
        metrics.walletsAvailable.set(this.availableWallets.length);
        metrics.walletsTotal.set(this.wallets.length);
        this.semaphore = new async_mutex_1.Semaphore(this.availableWallets.length);
        this.gasPriceManager = gasPriceManager;
    }
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
    async validateAndRefillWallets() {
        const minBalance = this.config.minExecutorBalance;
        if (!(minBalance && this.utilityAccount)) {
            return;
        }
        const utilityWalletBalance = await this.config.publicClient.getBalance({
            address: this.utilityAccount.address
        });
        const balancesMissing = {};
        const balanceRequestPromises = this.availableWallets.map(async (wallet) => {
            const balance = await this.config.publicClient.getBalance({
                address: wallet.address
            });
            this.metrics.executorWalletsBalances.set({
                wallet: wallet.address
            }, Number.parseFloat((0, viem_1.formatEther)(balance)));
            if (balance < minBalance) {
                const missingBalance = (minBalance * 6n) / 5n - balance;
                balancesMissing[wallet.address] = missingBalance;
            }
        });
        await Promise.all(balanceRequestPromises);
        const totalBalanceMissing = Object.values(balancesMissing).reduce((a, b) => a + b, 0n);
        if (utilityWalletBalance < (totalBalanceMissing * 11n) / 10n) {
            this.logger.info({ balancesMissing, totalBalanceMissing }, "balances missing");
            this.metrics.utilityWalletInsufficientBalance.set(1);
            this.logger.error({
                minBalance: (0, viem_1.formatEther)(minBalance),
                utilityWalletBalance: (0, viem_1.formatEther)(utilityWalletBalance),
                totalBalanceMissing: (0, viem_1.formatEther)(totalBalanceMissing),
                minRefillAmount: (0, viem_1.formatEther)(totalBalanceMissing - utilityWalletBalance),
                utilityAccount: this.utilityAccount.address
            }, "utility wallet has insufficient balance to refill wallets");
            return;
            // throw new Error(
            //     `utility wallet ${
            //         this.utilityAccount.address
            //     } has insufficient balance ${formatEther(
            //         utilityWalletBalance
            //     )} < ${formatEther(totalBalanceMissing)}`
            // )
        }
        this.metrics.utilityWalletInsufficientBalance.set(0);
        if (Object.keys(balancesMissing).length > 0) {
            const { maxFeePerGas, maxPriorityFeePerGas } = await this.gasPriceManager.tryGetNetworkGasPrice();
            if (this.config.refillHelperContract) {
                const instructions = [];
                for (const [address, missingBalance] of Object.entries(balancesMissing)) {
                    instructions.push({
                        to: address,
                        value: missingBalance,
                        data: "0x"
                    });
                }
                const callEngine = (0, viem_1.getContract)({
                    abi: types_1.CallEngineAbi,
                    address: this.config.refillHelperContract,
                    client: {
                        public: this.config.publicClient,
                        wallet: this.config.walletClient
                    }
                });
                const tx = await callEngine.write.execute([instructions], {
                    account: this.utilityAccount,
                    value: totalBalanceMissing,
                    maxFeePerGas: maxFeePerGas * 2n,
                    maxPriorityFeePerGas: maxPriorityFeePerGas * 2n
                });
                await waitForTransactionReceipt(this.config.publicClient, tx);
                for (const [address, missingBalance] of Object.entries(balancesMissing)) {
                    this.logger.info({ tx, executor: address, missingBalance }, "refilled wallet");
                }
            }
            else {
                for (const [address, missingBalance] of Object.entries(balancesMissing)) {
                    const tx = await this.config.walletClient.sendTransaction({
                        account: this.utilityAccount,
                        // @ts-ignore
                        to: address,
                        value: missingBalance,
                        maxFeePerGas: this.config.legacyTransactions
                            ? undefined
                            : maxFeePerGas,
                        maxPriorityFeePerGas: this.config.legacyTransactions
                            ? undefined
                            : maxPriorityFeePerGas,
                        gasPrice: this.config.legacyTransactions
                            ? maxFeePerGas
                            : undefined
                    });
                    await waitForTransactionReceipt(this.config.publicClient, tx);
                    this.logger.info({ tx, executor: address, missingBalance }, "refilled wallet");
                }
            }
        }
        else {
            this.logger.info("no wallets need to be refilled");
        }
    }
    async getWallet() {
        this.logger.trace(`waiting for semaphore with count ${this.semaphore.getValue()}`);
        await this.semaphore.waitForUnlock();
        await this.semaphore.acquire();
        const wallet = this.availableWallets.shift();
        // should never happen because of semaphore
        if (!wallet) {
            this.semaphore.release();
            this.logger.error("no more wallets");
            throw new Error("no more wallets");
        }
        this.logger.trace({ executor: wallet.address }, "got wallet from sender manager");
        this.metrics.walletsAvailable.set(this.availableWallets.length);
        this.walletProcessingTime.set(wallet.address, new Date());
        return wallet;
    }
    pushWallet(wallet) {
        this.availableWallets.push(wallet);
        this.semaphore.release();
        this.logger.trace({ executor: wallet.address }, "pushed wallet to sender manager");
        const processingTime = this.walletProcessingTime.get(wallet.address);
        if (processingTime) {
            const time = Date.now() - processingTime.getTime();
            this.metrics.walletsProcessingTime.observe(time / 1000);
            this.walletProcessingTime.delete(wallet.address);
        }
        this.metrics.walletsAvailable.set(this.availableWallets.length);
        return;
    }
}
exports.SenderManager = SenderManager;
//# sourceMappingURL=senderManager.js.map