import type { Logger } from "../utils/index.js";
import { type HttpTransport, type HttpTransportConfig } from "viem";
export type RpcRequest = {
    jsonrpc?: "2.0" | undefined;
    method: string;
    params?: any | undefined;
    id?: number | undefined;
};
export declare function customTransport(
/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */
url_: string, config: HttpTransportConfig & {
    logger: Logger;
}): HttpTransport;
//# sourceMappingURL=customTransport.d.ts.map