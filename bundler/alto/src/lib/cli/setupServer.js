"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupServer = void 0;
const executor_1 = require("../executor/index.js");
const handlers_1 = require("../handlers/index.js");
const mempool_1 = require("../mempool/index.js");
const rpc_1 = require("../rpc/index.js");
const getReputationManager = (config) => {
    if (config.safeMode) {
        return new mempool_1.ReputationManager(config);
    }
    return new mempool_1.NullReputationManager();
};
const getValidator = ({ config, senderManager, metrics, gasPriceManager }) => {
    if (config.safeMode) {
        return new rpc_1.SafeValidator({
            config,
            senderManager,
            metrics,
            gasPriceManager
        });
    }
    return new rpc_1.UnsafeValidator({
        config,
        metrics,
        gasPriceManager
    });
};
const getMonitor = () => {
    return new mempool_1.Monitor();
};
const getMempool = ({ config, monitor, reputationManager, validator, metrics, eventManager }) => {
    return new mempool_1.MemoryMempool({
        config,
        monitor,
        reputationManager,
        validator,
        metrics,
        eventManager
    });
};
const getEventManager = ({ config, metrics }) => {
    return new handlers_1.EventManager({ config, metrics });
};
const getExecutor = ({ mempool, config, senderManager, reputationManager, metrics, gasPriceManager, eventManager }) => {
    return new executor_1.Executor({
        mempool,
        config,
        senderManager,
        reputationManager,
        metrics,
        gasPriceManager,
        eventManager
    });
};
const getExecutorManager = ({ config, executor, mempool, monitor, reputationManager, metrics, gasPriceManager, eventManager }) => {
    return new executor_1.ExecutorManager({
        config,
        executor,
        mempool,
        monitor,
        reputationManager,
        metrics,
        gasPriceManager,
        eventManager
    });
};
const getNonceQueuer = ({ config, mempool, eventManager }) => {
    return new rpc_1.NonceQueuer({
        config,
        mempool,
        eventManager
    });
};
const getRpcHandler = ({ config, validator, mempool, executor, monitor, nonceQueuer, executorManager, reputationManager, metrics, gasPriceManager, eventManager }) => {
    return new rpc_1.RpcHandler({
        config,
        validator,
        mempool,
        executor,
        monitor,
        nonceQueuer,
        executorManager,
        reputationManager,
        metrics,
        gasPriceManager,
        eventManager
    });
};
const getServer = ({ config, rpcEndpoint, registry, metrics }) => {
    return new rpc_1.Server({
        config,
        rpcEndpoint,
        registry,
        metrics
    });
};
const setupServer = async ({ config, registry, metrics, senderManager, gasPriceManager }) => {
    const validator = getValidator({
        config,
        senderManager,
        metrics,
        gasPriceManager
    });
    const reputationManager = getReputationManager(config);
    const eventManager = getEventManager({
        config,
        metrics
    });
    if (config.refillingWallets) {
        await senderManager.validateAndRefillWallets();
        setInterval(async () => {
            await senderManager.validateAndRefillWallets();
        }, config.executorRefillInterval * 1000);
    }
    const monitor = getMonitor();
    const mempool = getMempool({
        config,
        monitor,
        reputationManager,
        validator,
        metrics,
        eventManager
    });
    const executor = getExecutor({
        mempool,
        config,
        senderManager,
        reputationManager,
        metrics,
        gasPriceManager,
        eventManager
    });
    const executorManager = getExecutorManager({
        config,
        executor,
        mempool,
        monitor,
        reputationManager,
        metrics,
        gasPriceManager,
        eventManager
    });
    const nonceQueuer = getNonceQueuer({
        config,
        mempool,
        eventManager
    });
    const rpcEndpoint = getRpcHandler({
        config,
        validator,
        mempool,
        executor,
        monitor,
        nonceQueuer,
        executorManager,
        reputationManager,
        metrics,
        gasPriceManager,
        eventManager
    });
    if (config.flushStuckTransactionsDuringStartup) {
        executor.flushStuckTransactions();
    }
    const rootLogger = config.getLogger({ module: "root" }, { level: config.logLevel });
    rootLogger.info(`Initialized ${senderManager.wallets.length} executor wallets`);
    const server = getServer({
        config,
        rpcEndpoint,
        registry,
        metrics
    });
    server.start();
    const gracefulShutdown = async (signal) => {
        rootLogger.info(`${signal} received, shutting down`);
        await server.stop();
        rootLogger.info("server stopped");
        const outstanding = mempool.dumpOutstanding().length;
        const submitted = mempool.dumpSubmittedOps().length;
        const processing = mempool.dumpProcessing().length;
        rootLogger.info({ outstanding, submitted, processing }, "dumping mempool before shutdown");
        process.exit(0);
    };
    process.on("SIGINT", gracefulShutdown);
    process.on("SIGTERM", gracefulShutdown);
};
exports.setupServer = setupServer;
//# sourceMappingURL=setupServer.js.map