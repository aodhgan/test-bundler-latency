"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initProductionLogger = exports.initDebugLogger = exports.customSerializer = void 0;
const pino_1 = __importDefault(require("pino"));
const viem_1 = require("viem");
// biome-ignore lint/suspicious/noExplicitAny: it's a generic type
function bigintToJson(_key, value) {
    if (typeof value === "bigint") {
        return (0, viem_1.toHex)(value);
    }
    return value;
}
function logLevel(label) {
    return {
        level: label
    };
}
function stringifyWithCircularHandling(obj, 
// biome-ignore lint/suspicious/noExplicitAny: it's a generic type
replacer) {
    // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
    const cache = new Set();
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (cache.has(value)) {
                return; // Circular reference found, discard the key
            }
            cache.add(value);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return replacer ? replacer(key, value) : value;
    });
}
const customSerializer = (input) => {
    const output = {};
    for (const key in input) {
        if (Object.prototype.hasOwnProperty.call(input, key)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const value = input[key];
            if (typeof value === "object" && value !== null) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
                output[key] = JSON.parse(stringifyWithCircularHandling(value, bigintToJson));
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                output[key] = bigintToJson(key, value);
            }
        }
    }
    return output;
};
exports.customSerializer = customSerializer;
const initDebugLogger = (level = "debug") => {
    const l = (0, pino_1.default)({
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true
            }
        },
        formatters: {
            level: logLevel,
            log: exports.customSerializer
        }
    });
    l.level = level;
    return l;
};
exports.initDebugLogger = initDebugLogger;
const initProductionLogger = (level) => {
    const l = (0, pino_1.default)({
        base: undefined, // do not log pid and hostname, we don't need it
        formatters: {
            level: logLevel,
            log: exports.customSerializer
        }
    });
    l.level = level;
    return l;
};
exports.initProductionLogger = initProductionLogger;
//# sourceMappingURL=logger.js.map