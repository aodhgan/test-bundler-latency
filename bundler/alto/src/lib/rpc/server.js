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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const types_1 = require("../types/index.js");
const cors_1 = __importDefault(require("@fastify/cors"));
const websocket_1 = __importDefault(require("@fastify/websocket"));
const sentry = __importStar(require("@sentry/node"));
const fastify_1 = __importDefault(require("fastify"));
const viem_1 = require("viem");
const zod_validation_error_1 = require("zod-validation-error");
const rpc_reply_1 = __importDefault(require("../utils/rpc-reply.js"));
// jsonBigIntOverride.ts
const originalJsonStringify = JSON.stringify;
JSON.stringify = (
// biome-ignore lint/suspicious/noExplicitAny: it's a generic type
value, replacer, space) => {
    // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
    const bigintReplacer = (_key, value) => {
        if (typeof value === "bigint") {
            return (0, viem_1.toHex)(value);
        }
        return value;
    };
    // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
    const wrapperReplacer = (key, value) => {
        if (typeof replacer === "function") {
            // biome-ignore lint: no other way to do this
            value = replacer(key, value);
        }
        else if (Array.isArray(replacer)) {
            if (!replacer.includes(key)) {
                return;
            }
        }
        return bigintReplacer(key, value);
    };
    return originalJsonStringify(value, wrapperReplacer, space);
};
class Server {
    config;
    fastify;
    rpcEndpoint;
    registry;
    metrics;
    constructor({ config, rpcEndpoint, registry, metrics }) {
        this.config = config;
        const logger = config.getLogger({ module: "rpc" }, {
            level: config.rpcLogLevel || config.logLevel
        });
        this.fastify = (0, fastify_1.default)({
            logger: logger, // workaround for https://github.com/fastify/fastify/issues/4960
            requestTimeout: config.timeout,
            disableRequestLogging: true
        });
        this.fastify.register(websocket_1.default, {
            options: {
                maxPayload: config.websocketMaxPayloadSize
            }
        });
        this.fastify.register(cors_1.default, {
            origin: "*",
            methods: ["POST", "GET", "OPTIONS"]
        });
        this.fastify.decorateRequest("rpcMethod", null);
        this.fastify.decorateReply("rpcStatus", null);
        this.fastify.addHook("onResponse", (request, reply) => {
            const ignoredRoutes = ["/health", "/metrics"];
            if (ignoredRoutes.includes(request.routeOptions.url)) {
                return;
            }
            const labels = {
                route: request.routeOptions.url,
                code: reply.statusCode,
                method: request.method,
                rpc_method: request.rpcMethod,
                rpc_status: reply.rpcStatus
            };
            this.metrics.httpRequests.labels(labels).inc();
            const durationMs = reply.elapsedTime;
            const durationSeconds = durationMs / 1000;
            this.metrics.httpRequestsDuration
                .labels(labels)
                .observe(durationSeconds);
        });
        this.fastify.post("/rpc", this.rpcHttp.bind(this));
        this.fastify.post("/:version/rpc", this.rpcHttp.bind(this));
        this.fastify.post("/", this.rpcHttp.bind(this));
        if (config.websocket) {
            this.fastify.register((fastify) => {
                fastify.route({
                    method: "GET",
                    url: "/:version/rpc",
                    handler: async (request, reply) => {
                        const version = request.params.version;
                        await reply
                            .status(404)
                            .send(`GET request to /${version}/rpc is not supported, use POST isntead`);
                    },
                    wsHandler: (socket, request) => {
                        socket.on("message", async (msgBuffer) => this.rpcSocket(request, msgBuffer, socket));
                    }
                });
            });
        }
        this.fastify.get("/health", this.healthCheck.bind(this));
        this.fastify.get("/metrics", this.serveMetrics.bind(this));
        this.rpcEndpoint = rpcEndpoint;
        this.registry = registry;
        this.metrics = metrics;
    }
    start() {
        this.fastify.listen({ port: this.config.port, host: "0.0.0.0" });
    }
    async stop() {
        await this.fastify.close();
    }
    async healthCheck(_request, reply) {
        await reply.status(200).send("OK");
    }
    async rpcSocket(request, msgBuffer, socket) {
        try {
            request.body = JSON.parse(msgBuffer.toString());
        }
        catch (err) {
            socket.send(JSON.stringify({
                jsonrpc: "2.0",
                id: null,
                error: {
                    message: "invalid JSON-RPC request",
                    data: msgBuffer.toString(),
                    code: types_1.ValidationErrors.InvalidFields
                }
            }));
            return;
        }
        await this.rpc(request, rpc_reply_1.default.fromSocket(socket));
    }
    async rpcHttp(request, reply) {
        await this.rpc(request, rpc_reply_1.default.fromHttpReply(reply));
    }
    async rpc(request, reply) {
        reply.rpcStatus = "failed"; // default to failed
        let requestId = null;
        const versionParsingResult = types_1.altoVersions.safeParse(request.params?.version ?? this.config.defaultApiVersion);
        if (!versionParsingResult.success) {
            const error = (0, zod_validation_error_1.fromZodError)(versionParsingResult.error);
            throw new types_1.RpcError(`invalid version ${error.message}`, types_1.ValidationErrors.InvalidFields);
        }
        const apiVersion = versionParsingResult.data;
        if (this.config.apiVersion.indexOf(apiVersion) === -1) {
            throw new types_1.RpcError(`unsupported version ${apiVersion}`, types_1.ValidationErrors.InvalidFields);
        }
        try {
            const contentTypeHeader = request.headers["content-type"];
            // Common browser websocket API does not allow setting custom headers
            if (contentTypeHeader !== "application/json" &&
                request.ws === false) {
                throw new types_1.RpcError("invalid content-type, content-type must be application/json", types_1.ValidationErrors.InvalidFields);
            }
            this.fastify.log.trace({ body: JSON.stringify(request.body) }, "received request");
            const jsonRpcParsing = types_1.jsonRpcSchema.safeParse(request.body);
            if (!jsonRpcParsing.success) {
                const validationError = (0, zod_validation_error_1.fromZodError)(jsonRpcParsing.error);
                throw new types_1.RpcError(`invalid JSON-RPC request ${validationError.message}`, types_1.ValidationErrors.InvalidFields);
            }
            const jsonRpcRequest = jsonRpcParsing.data;
            requestId = jsonRpcRequest.id;
            const bundlerRequestParsing = types_1.bundlerRequestSchema.safeParse(jsonRpcRequest);
            if (!bundlerRequestParsing.success) {
                const validationError = (0, zod_validation_error_1.fromZodError)(bundlerRequestParsing.error);
                //
                if (validationError.message.includes("Missing/invalid userOpHash")) {
                    throw new types_1.RpcError("Missing/invalid userOpHash", types_1.ValidationErrors.InvalidFields);
                }
                throw new types_1.RpcError(validationError.message, types_1.ValidationErrors.InvalidRequest);
            }
            const bundlerRequest = bundlerRequestParsing.data;
            request.rpcMethod = bundlerRequest.method;
            if (this.config.rpcMethods !== null &&
                !this.config.rpcMethods.includes(bundlerRequest.method)) {
                throw new types_1.RpcError(`Method not supported: ${bundlerRequest.method}`, types_1.ValidationErrors.InvalidRequest);
            }
            this.fastify.log.info({
                data: JSON.stringify(bundlerRequest, null),
                method: bundlerRequest.method
            }, "incoming request");
            const result = await this.rpcEndpoint.handleMethod(bundlerRequest, apiVersion);
            const jsonRpcResponse = {
                jsonrpc: "2.0",
                id: jsonRpcRequest.id,
                result: result.result
            };
            await reply.status(200).send(jsonRpcResponse);
            reply.rpcStatus = "success";
            this.fastify.log.info({
                data: bundlerRequest.method ===
                    "eth_getUserOperationReceipt" &&
                    jsonRpcResponse.result
                    ? {
                        ...jsonRpcResponse,
                        result: "<reduced>"
                    }
                    : jsonRpcResponse, // do not log the full result for eth_getUserOperationReceipt to reduce log size
                method: bundlerRequest.method
            }, "sent reply");
        }
        catch (err) {
            if (err instanceof types_1.RpcError) {
                const rpcError = {
                    jsonrpc: "2.0",
                    id: requestId,
                    error: {
                        message: err.message,
                        data: err.data,
                        code: err.code
                    }
                };
                await reply.status(200).send(rpcError);
                this.fastify.log.info(rpcError, "error reply");
            }
            else if (err instanceof Error) {
                sentry.captureException(err);
                const rpcError = {
                    jsonrpc: "2.0",
                    id: requestId,
                    error: {
                        message: err.message
                    }
                };
                await reply.status(500).send(rpcError);
                this.fastify.log.error(err, "error reply (non-rpc)");
            }
            else {
                const rpcError = {
                    jsonrpc: "2.0",
                    id: requestId,
                    error: {
                        message: "Unknown error"
                    }
                };
                await reply.status(500).send(rpcError);
                this.fastify.log.error({ err }, "error reply (unhandled error type)");
            }
        }
    }
    async serveMetrics(_request, reply) {
        reply.headers({ "Content-Type": this.registry.contentType });
        const metrics = await this.registry.metrics();
        await reply.send(metrics);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map