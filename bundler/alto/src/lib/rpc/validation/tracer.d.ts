/// <reference types="node" />
import { type Account, type Chain, type PublicClient, type TransactionRequest, type Transport, type WalletClient } from "viem";
/**
 * a function returning a LogTracer.
 * the function's body must be "{ return {...} }"
 * the body is executed as "geth" tracer, and thus must be self-contained (no external functions or references)
 * may only reference external functions defined by geth (see go-ethereum/eth/tracers/js): toHex, toWord, isPrecompiled, slice, toString(16)
 * (its OK if original function was in typescript: we extract its value as javascript
 */
type LogTracerFunc = () => LogTracer;
export declare function debug_traceCall(client: PublicClient | WalletClient, tx: TransactionRequest, options: TraceOptions): Promise<any>;
export declare function execAndTrace(_walletClient: WalletClient<Transport, Chain, Account>, _tx: TransactionRequest, _options: TraceOptions): TraceResult;
export declare function debug_traceTransaction(client: PublicClient | WalletClient, hash: string, options: TraceOptions): Promise<TraceResult>;
/**
 * extract the body of "LogTracerFunc".
 * note that we extract the javascript body, even if the function was created as typescript
 * @param func
 */
export declare function getTracerBodyString(func: LogTracerFunc): string;
export interface TraceOptions {
    disableStorage?: boolean;
    disableStack?: boolean;
    enableMemory?: boolean;
    enableReturnData?: boolean;
    tracer?: LogTracerFunc | string;
    timeout?: string;
}
export interface TraceResult {
    gas: number;
    returnValue: string;
    structLogs: [TraceResultEntry];
}
export interface TraceResultEntry {
    depth: number;
    error: string;
    gas: number;
    gasCost: number;
    memory?: [string];
    op: string;
    pc: number;
    stack: [string];
    storage?: [string];
}
export interface LogContext {
    type: string;
    from: string;
    to: string;
    input: Buffer;
    gas: number;
    gasUsed: number;
    gasPrice: number;
    intrinsicGas: number;
    value: bigint;
    block: number;
    output: Buffer;
    time: string;
    blockHash?: Buffer;
    txIndex?: number;
    txHash?: Buffer;
}
export interface LogTracer {
    result: (ctx: LogContext, db: LogDb) => any;
    fault: (log: LogStep, db: LogDb) => void;
    setup?: (config: any) => any;
    step?: (log: LogStep, db: LogDb) => any;
    enter?: (frame: LogCallFrame) => void;
    exit?: (frame: LogFrameResult) => void;
}
export interface LogCallFrame {
    getType: () => string;
    getFrom: () => string;
    getTo: () => string;
    getInput: () => string;
    getGas: () => number;
    getValue: () => bigint;
}
export interface LogFrameResult {
    getGasUsed: () => number;
    getOutput: () => Buffer;
    getError: () => any;
}
export interface LogOpCode {
    isPush: () => boolean;
    toString: () => string;
    toNumber: () => number;
}
export interface LogMemory {
    slice: (start: number, stop: number) => any;
    getUint: (offset: number) => any;
    length: () => number;
}
export interface LogStack {
    peek: (idx: number) => any;
    length: () => number;
}
export interface LogContract {
    getCaller: () => any;
    getAddress: () => string;
    getValue: () => bigint;
    getInput: () => any;
}
export interface LogStep {
    op: LogOpCode;
    stack: LogStack;
    memory: LogMemory;
    contract: LogContract;
    getPC: () => number;
    getGas: () => number;
    getCost: () => number;
    getDepth: () => number;
    getRefund: () => number;
    getError: () => string | undefined;
}
export interface LogDb {
    getBalance: (address: string) => bigint;
    getNonce: (address: string) => number;
    getCode: (address: string) => any;
    getState: (address: string, hash: string) => any;
    exists: (address: string) => boolean;
}
export {};
//# sourceMappingURL=tracer.d.ts.map