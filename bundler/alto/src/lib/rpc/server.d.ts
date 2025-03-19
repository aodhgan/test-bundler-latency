import type { Metrics } from "../utils/index.js";
import { type FastifyReply, type FastifyRequest } from "fastify";
import type { Registry } from "prom-client";
import type { IRpcEndpoint } from "./rpcHandler.js";
import type { AltoConfig } from "../createConfig.js";
declare module "fastify" {
    interface FastifyRequest {
        rpcMethod: string;
    }
    interface FastifyReply {
        rpcStatus: "failed" | "success";
    }
}
export declare class Server {
    private config;
    private fastify;
    private rpcEndpoint;
    private registry;
    private metrics;
    constructor({ config, rpcEndpoint, registry, metrics }: {
        config: AltoConfig;
        rpcEndpoint: IRpcEndpoint;
        registry: Registry;
        metrics: Metrics;
    });
    start(): void;
    stop(): Promise<void>;
    healthCheck(_request: FastifyRequest, reply: FastifyReply): Promise<void>;
    private rpcSocket;
    private rpcHttp;
    private rpc;
    serveMetrics(_request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
//# sourceMappingURL=server.d.ts.map