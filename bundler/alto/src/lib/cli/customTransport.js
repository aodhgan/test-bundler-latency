"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customTransport = void 0;
const viem_1 = require("viem");
const utils_1 = require("viem/utils");
const contracts_1 = require("../types/contracts/index.js");
const EXECUTION_RESULT_SELECTOR = (0, viem_1.toFunctionSelector)((0, utils_1.formatAbiItem)((0, viem_1.getAbiItem)({
    abi: contracts_1.EntryPointV06Abi,
    name: "ExecutionResult"
})));
const VALIDATION_RESULT_SELECTOR = (0, viem_1.toFunctionSelector)((0, utils_1.formatAbiItem)((0, viem_1.getAbiItem)({
    abi: contracts_1.EntryPointV06Abi,
    name: "ValidationResult"
})));
const FAILED_OP_SELECTOR = (0, viem_1.toFunctionSelector)((0, utils_1.formatAbiItem)((0, viem_1.getAbiItem)({
    abi: contracts_1.EntryPointV06Abi,
    name: "FailedOp"
})));
// custom selector for when code overrides are used.
const CALLPHASE_REVERTED_SELECTOR = (0, viem_1.toFunctionSelector)((0, utils_1.formatAbiItem)((0, viem_1.getAbiItem)({
    abi: contracts_1.EntryPointV06SimulationsAbi,
    name: "CallPhaseReverted"
})));
function customTransport(
/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */
url_, config) {
    const { fetchOptions, key = "http", name = "HTTP JSON-RPC", retryDelay, logger } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url = url_ || chain?.rpcUrls.default.http[0];
        if (!url) {
            throw new viem_1.UrlRequiredError();
        }
        return (0, viem_1.createTransport)({
            key,
            name,
            async request({ method, params }) {
                const body = { method, params };
                const fn = async (body) => {
                    return [
                        await utils_1.rpc.http(url, {
                            body,
                            fetchOptions,
                            timeout
                        })
                    ];
                };
                const [{ error, result }] = await fn(body);
                if (error) {
                    let loggerFn = logger.error.bind(logger);
                    if ((0, viem_1.isHex)(error?.data) && error?.data?.length > 10) {
                        const errorSelector = (0, viem_1.slice)(error?.data, 0, 4);
                        if ([
                            EXECUTION_RESULT_SELECTOR,
                            VALIDATION_RESULT_SELECTOR,
                            FAILED_OP_SELECTOR,
                            CALLPHASE_REVERTED_SELECTOR
                        ].includes(errorSelector)) {
                            loggerFn = logger.info.bind(logger);
                        }
                    }
                    loggerFn({
                        err: error,
                        body
                    }, "received error response");
                    throw new viem_1.RpcRequestError({
                        body,
                        error: {
                            ...error,
                            // 24 Aug 2024, etherlink throws -32003 error code for eth_call
                            code: method === "eth_call" &&
                                error.code === -32003
                                ? 3
                                : error.code
                        },
                        url: url
                    });
                }
                logger.info({ body, result }, "received response");
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: "http"
        }, {
            fetchOptions,
            url
        });
    };
}
exports.customTransport = customTransport;
//# sourceMappingURL=customTransport.js.map