import type { IOptions } from "./cli/index.js";
import type { CamelCasedProperties } from "./cli/parseArgs.js";
import type { Bindings, ChildLoggerOptions, Logger } from "pino";
import type { Chain, PublicClient, Transport, WalletClient } from "viem";
export type AltoConfig = Readonly<CamelCasedProperties<IOptions>> & {
    getLogger: <ChildCustomLevels extends string = never>(bindings: Bindings, options?: ChildLoggerOptions<ChildCustomLevels>) => Logger<ChildCustomLevels>;
    readonly publicClient: PublicClient<Transport, Chain>;
    readonly walletClient: WalletClient<Transport, Chain>;
};
export declare function createConfig(config: CamelCasedProperties<IOptions> & {
    logger: Logger;
    publicClient: PublicClient<Transport, Chain>;
    walletClient: WalletClient<Transport, Chain>;
}): AltoConfig;
//# sourceMappingURL=createConfig.d.ts.map