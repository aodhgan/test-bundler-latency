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
exports.YargsError = exports.getAltoCli = exports.yarg = void 0;
const sentry = __importStar(require("@sentry/node"));
const dotenv_1 = __importDefault(require("dotenv"));
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const config_1 = require("./config/index.js");
const util_1 = require("./util.js");
const viem_1 = require("viem");
// Load environment variables from .env file
if (process.env.DOTENV_CONFIG_PATH) {
    dotenv_1.default.config({ path: process.env.DOTENV_CONFIG_PATH });
}
else {
    dotenv_1.default.config();
}
if (process.env.SENTRY_DSN) {
    const SENTRY_IGNORE_ERRORS = [
        viem_1.InternalRpcError,
        viem_1.HttpRequestError,
        viem_1.TimeoutError
    ];
    sentry.init({
        dsn: process.env.SENTRY_DSN,
        environment: process.env.ENVIRONMENT,
        beforeSend(event, hint) {
            if (SENTRY_IGNORE_ERRORS.some((error) => hint.originalException instanceof error)) {
                return null;
            }
            return event;
        }
    });
}
exports.yarg = (0, yargs_1.default)(helpers_1.hideBin(process.argv));
const topBanner = `🏔 Alto: TypeScript ERC-4337 Bundler.
  * by Pimlico, 2024`;
const bottomBanner = `📖 For more information, check the our docs:
  * https://docs.pimlico.io/
`;
function getAltoCli() {
    const alto = exports.yarg
        .wrap(null)
        .env("ALTO")
        .parserConfiguration({
        // As of yargs v16.1.0 dot-notation breaks strictOptions()
        // Manually processing options is typesafe tho more verbose
        "dot-notation": true
    })
        .options(config_1.bundlerOptions)
        .group(Object.keys(config_1.bundlerOptions), "Options:")
        .options(config_1.compatibilityOptions)
        .group(Object.keys(config_1.compatibilityOptions), "Compatibility Options:")
        .options(config_1.serverOptions)
        .group(Object.keys(config_1.serverOptions), "Server Options:")
        .options(config_1.rpcOptions)
        .group(Object.keys(config_1.rpcOptions), "RPC Options:")
        .options(config_1.logOptions)
        .group(Object.keys(config_1.logOptions), "Logging Options:")
        .options(config_1.debugOptions)
        .group(Object.keys(config_1.debugOptions), "Debug Options:")
        .options(config_1.gasEstimationOptions)
        .group(Object.keys(config_1.gasEstimationOptions), "Gas Estimation Options:")
        // blank scriptName so that help text doesn't display the cli name before each command
        .scriptName("")
        .demandCommand(1)
        .usage(topBanner)
        .epilogue(bottomBanner)
        // Control show help behaviour below on .fail()
        .showHelpOnFail(false)
        .alias("h", "help")
        .alias("v", "version")
        .recommendCommands();
    // throw an error if we see an unrecognized cmd
    alto.recommendCommands(); //.strict()
    alto.config();
    // yargs.command and all ./cmds
    (0, util_1.registerCommandToYargs)(alto, config_1.bundlerCommand);
    return alto;
}
exports.getAltoCli = getAltoCli;
class YargsError extends Error {
}
exports.YargsError = YargsError;
const alto = getAltoCli();
// eslint-disable-next-line @typescript-eslint/no-floating-promises
alto.fail((msg, err) => {
    if (msg) {
        // Show command help message when no command is provided
        if (msg.includes("Not enough non-option arguments")) {
            exports.yarg.showHelp();
            // eslint-disable-next-line no-console
            console.log("\n");
        }
    }
    const errorMessage = err !== undefined
        ? err instanceof YargsError
            ? err.message
            : err.stack
        : msg || "Unknown error";
    // eslint-disable-next-line no-console
    console.error(` × ${errorMessage}\n`);
    process.exit(1);
}).parse();
//# sourceMappingURL=alto.js.map