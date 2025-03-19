import type { FastifyReply } from "fastify";
import type * as WebSocket from "ws";
declare class RpcReply {
    private http;
    private websocket;
    private _status;
    private _rpcStatus;
    constructor(http: FastifyReply | null, websocket: WebSocket.WebSocket | null);
    status(status: number): this;
    send(data: any): Promise<void>;
    static fromHttpReply(reply: FastifyReply): RpcReply;
    static fromSocket(socket: WebSocket.WebSocket): RpcReply;
    set rpcStatus(status: "failed" | "success");
    get rpcStatus(): "failed" | "success";
}
export default RpcReply;
//# sourceMappingURL=rpc-reply.d.ts.map