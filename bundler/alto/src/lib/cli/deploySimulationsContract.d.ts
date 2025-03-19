import { type Chain, type Hex, type PublicClient, type Transport } from "viem";
import type { CamelCasedProperties } from "./parseArgs.js";
import type { IOptions } from "./index.js";
export declare const deploySimulationsContract: ({ args, publicClient }: {
    args: CamelCasedProperties<IOptions>;
    publicClient: PublicClient<Transport, Chain>;
}) => Promise<Hex>;
//# sourceMappingURL=deploySimulationsContract.d.ts.map