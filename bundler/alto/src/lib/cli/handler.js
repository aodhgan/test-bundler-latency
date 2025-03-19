"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundlerHandler = void 0;
const executor_1 = require("../executor/index.js");
const handlers_1 = require("../handlers/index.js");
const utils_1 = require("../utils/index.js");
const prom_client_1 = require("prom-client");
const viem_1 = require("viem");
const utilityWalletMonitor_1 = require("../executor/utilityWalletMonitor.js");
const customTransport_1 = require("./customTransport.js");
const setupServer_1 = require("./setupServer.js");
const createConfig_1 = require("../createConfig.js");
const parseArgs_1 = require("./parseArgs.js");
const deploySimulationsContract_1 = require("./deploySimulationsContract.js");
const experimental_1 = require("viem/experimental");
const preFlightChecks = async (config) => {
    for (const entrypoint of config.entrypoints) {
        const entryPointCode = await config.publicClient.getCode({
            address: entrypoint
        });
        if (entryPointCode === undefined || entryPointCode === "0x") {
            throw new Error(`entry point ${entrypoint} does not exist`);
        }
    }
    if (config.entrypointSimulationContract) {
        const simulations = config.entrypointSimulationContract;
        const simulationsCode = await config.publicClient.getCode({
            address: simulations
        });
        if (simulationsCode === undefined || simulationsCode === "0x") {
            throw new Error(`EntryPointSimulations contract ${simulations} does not exist`);
        }
    }
    if (config.refillHelperContract) {
        const refillHelper = config.refillHelperContract;
        const refillHelperCode = await config.publicClient.getCode({
            address: refillHelper
        });
        if (refillHelperCode === undefined || refillHelperCode === "0x") {
            throw new Error(`RefillHelper contract ${refillHelper} does not exist`);
        }
    }
};
async function bundlerHandler(args_) {
    const args = (0, parseArgs_1.parseArgs)(args_);
    const logger = args.json
        ? (0, utils_1.initProductionLogger)(args.logLevel)
        : (0, utils_1.initDebugLogger)(args.logLevel);
    const getChainId = async () => {
        const client = (0, viem_1.createPublicClient)({
            transport: (0, customTransport_1.customTransport)(args.rpcUrl, {
                logger: logger.child({ module: "public_client" }, {
                    level: args.publicClientLogLevel || args.logLevel
                })
            })
        });
        return await client.getChainId();
    };
    const chainId = await getChainId();
    const chain = {
        id: chainId,
        name: args.networkName,
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: {
            default: { http: [args.rpcUrl] },
            public: { http: [args.rpcUrl] }
        }
    };
    let publicClient = (0, viem_1.createPublicClient)({
        transport: (0, customTransport_1.customTransport)(args.rpcUrl, {
            logger: logger.child({ module: "public_client" }, {
                level: args.publicClientLogLevel || args.logLevel
            })
        }),
        chain
    });
    if (args.chainType === "skale") {
        // SKALE only allows white listed addresses to deploy contracts.
        publicClient = publicClient
            .extend((client) => ({
            async call(args) {
                args.account = "0x4337000c2828F5260d8921fD25829F606b9E8680";
                return await client.call(args);
            }
        }))
            .extend(viem_1.publicActions);
    }
    const createWalletTransport = (url) => (0, customTransport_1.customTransport)(url, {
        logger: logger.child({ module: "wallet_client" }, { level: args.walletClientLogLevel || args.logLevel })
    });
    const walletClient = (0, viem_1.createWalletClient)({
        transport: args.sendTransactionRpcUrl
            ? (0, viem_1.fallback)([
                createWalletTransport(args.sendTransactionRpcUrl),
                createWalletTransport(args.rpcUrl)
            ], { rank: false })
            : createWalletTransport(args.rpcUrl),
        chain
    }).extend((0, experimental_1.eip7702Actions)());
    // if flag is set, use utility wallet to deploy the simulations contract
    if (args.deploySimulationsContract) {
        args.entrypointSimulationContract = await (0, deploySimulationsContract_1.deploySimulationsContract)({
            args,
            publicClient
        });
    }
    const config = (0, createConfig_1.createConfig)({ ...args, logger, publicClient, walletClient });
    const gasPriceManager = new handlers_1.GasPriceManager(config);
    await gasPriceManager.init();
    const registry = new prom_client_1.Registry();
    registry.setDefaultLabels({
        network: chain.name,
        chainId
    });
    const metrics = (0, utils_1.createMetrics)(registry);
    await preFlightChecks(config);
    const senderManager = new executor_1.SenderManager({
        config,
        metrics,
        gasPriceManager
    });
    const utilityWalletAddress = config.utilityPrivateKey?.address;
    if (utilityWalletAddress && config.utilityWalletMonitor) {
        const utilityWalletMonitor = new utilityWalletMonitor_1.UtilityWalletMonitor({
            config,
            metrics,
            utilityWalletAddress
        });
        await utilityWalletMonitor.start();
    }
    metrics.executorWalletsMinBalance.set(Number.parseFloat((0, viem_1.formatEther)(config.minExecutorBalance || 0n)));
    await (0, setupServer_1.setupServer)({
        config,
        registry,
        metrics,
        senderManager,
        gasPriceManager
    });
}
exports.bundlerHandler = bundlerHandler;
//# sourceMappingURL=handler.js.map