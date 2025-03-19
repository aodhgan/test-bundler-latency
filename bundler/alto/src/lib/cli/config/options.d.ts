import type { CliCommand, CliCommandOptions } from "../util.js";
import type { IBundlerArgsInput, ICompatibilityArgsInput, IDebugArgsInput, IGasEstimationArgsInput, ILogArgsInput, IOptionsInput, IRpcArgsInput, IServerArgsInput } from "./bundler.js";
export declare const bundlerOptions: CliCommandOptions<IBundlerArgsInput>;
export declare const gasEstimationOptions: CliCommandOptions<IGasEstimationArgsInput>;
export declare const compatibilityOptions: CliCommandOptions<ICompatibilityArgsInput>;
export declare const serverOptions: CliCommandOptions<IServerArgsInput>;
export declare const rpcOptions: CliCommandOptions<IRpcArgsInput>;
export declare const logOptions: CliCommandOptions<ILogArgsInput>;
export declare const debugOptions: CliCommandOptions<IDebugArgsInput>;
export declare const bundlerCommand: CliCommand<IOptionsInput>;
//# sourceMappingURL=options.d.ts.map