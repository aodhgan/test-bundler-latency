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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTracerBodyString = exports.debug_traceTransaction = exports.execAndTrace = exports.debug_traceCall = void 0;
// biome-ignore lint/style/noNamespaceImport: explicitly make it clear when sentry is used
const sentry = __importStar(require("@sentry/node"));
const viem_1 = require("viem");
// eslint-disable-next-line @typescript-eslint/naming-convention
async function debug_traceCall(client, tx, options
// biome-ignore lint/suspicious/noExplicitAny: it's a generic type
) {
    const traceOptions = tracer2string(options);
    const ret = await client
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .request({
        method: "debug_traceCall",
        params: [(0, viem_1.formatTransactionRequest)(tx), "latest", traceOptions]
    })
        .catch((e) => {
        if (e instanceof Error) {
            // console.log("ex=", e.message)
            // console.log(
            //     "tracer=",
            //     traceOptions.tracer
            //         ?.toString()
            //         .split("\n")
            //         .map((line, index) => `${index + 1}: ${line}`)
            //         .join("\n")
            // )
            throw e;
        }
        sentry.captureException(e);
    });
    // console.log("ret=", ret)
    return ret;
}
exports.debug_traceCall = debug_traceCall;
// a hack for network that doesn't have traceCall: mine the transaction, and use debug_traceTransaction
function execAndTrace(_walletClient, _tx, _options) {
    //const hash = await walletClient.sendTransaction(tx)
    throw new Error("not implemented");
    //return await debug_traceTransaction(walletClient, hash, options)
}
exports.execAndTrace = execAndTrace;
// eslint-disable-next-line @typescript-eslint/naming-convention
async function debug_traceTransaction(client, hash, options) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ret = await client.request({
        method: "debug_traceTransaction",
        params: [hash, tracer2string(options)]
    });
    // const tx = await provider.getTransaction(hash)
    // return applyTracer(tx, ret, options)
    return ret;
}
exports.debug_traceTransaction = debug_traceTransaction;
/**
 * extract the body of "LogTracerFunc".
 * note that we extract the javascript body, even if the function was created as typescript
 * @param func
 */
function getTracerBodyString(func) {
    const tracerFunc = func.toString();
    // function must return a plain object:
    //  function xyz() { return {...}; }
    const regexp = /function \w+\s*\(\s*\)\s*{\s*return\s*(\{[\s\S]+\});?\s*\}\s*$/; // (\{[\s\S]+\}); \} $/
    const match = tracerFunc.match(regexp);
    if (match === null) {
        throw new Error("Not a simple method returning value");
    }
    let ret = match[1];
    ret = ret
        // .replace(/\/\/.*\n/g,'\n')
        // .replace(/\n\s*\n/g, '\n')
        .replace(/\b(?:const|let)\b/g, "");
    // console.log('== tracer source',ret.split('\n').map((line,index)=>`${index}: ${line}`).join('\n'))
    return ret;
}
exports.getTracerBodyString = getTracerBodyString;
function tracer2string(options) {
    if (typeof options.tracer === "function") {
        return {
            ...options,
            tracer: getTracerBodyString(options.tracer)
        };
    }
    return options;
}
//# sourceMappingURL=tracer.js.map