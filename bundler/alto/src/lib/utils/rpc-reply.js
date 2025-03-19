"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RpcReply {
    http;
    websocket;
    // Used only for HTTP response status code
    _status;
    _rpcStatus;
    constructor(http, websocket) {
        this.http = http;
        this.websocket = websocket;
        this._status = 200;
        this._rpcStatus = "failed";
    }
    status(status) {
        this._status = status;
        return this;
    }
    // biome-ignore lint/suspicious/useAwait:
    async send(data) {
        if (this.http) {
            return this.http.status(this._status).send(data);
        }
        if (this.websocket) {
            return this.websocket.send(JSON.stringify(data));
        }
    }
    static fromHttpReply(reply) {
        const rpcReply = new RpcReply(reply, null);
        return rpcReply;
    }
    static fromSocket(socket) {
        const rpcReply = new RpcReply(null, socket);
        return rpcReply;
    }
    set rpcStatus(status) {
        this._rpcStatus = status;
    }
    get rpcStatus() {
        return this._rpcStatus;
    }
}
exports.default = RpcReply;
//# sourceMappingURL=rpc-reply.js.map