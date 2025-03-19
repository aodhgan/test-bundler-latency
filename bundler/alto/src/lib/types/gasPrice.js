"use strict";
// {"safeLow":{"maxPriorityFee":32.70666665266667,"maxFee":32.70666666866667},"standard":{"maxPriorityFee":33.10666665266667,"maxFee":33.10666666866667},"fast":{"maxPriorityFee":34.54799998386667,"maxFee":34.54799999986667},"estimatedBaseFee":1.6e-8,"blockTime":2,"blockNumber":36422482}
Object.defineProperty(exports, "__esModule", { value: true });
exports.gasPriceMultipliers = exports.gasStationResult = void 0;
// {
//     "safeLow": {
//       "maxPriorityFee": 10.474218399333333,
//       "maxFee": 10.474218415333333
//     },
//     "standard": {
//       "maxPriorityFee": 10.674218398266666,
//       "maxFee": 10.674218414266665
//     },
//     "fast": {
//       "maxPriorityFee": 15.771550529,
//       "maxFee": 15.771550545
//     },
//     "estimatedBaseFee": 1.6e-08,
//     "blockTime": 2,
//     "blockNumber": 36422513
//   }
const viem_1 = require("viem");
const zod_1 = require("zod");
const gasPrice = zod_1.z
    .object({
    // @ts-ignore
    maxFee: zod_1.z
        .union([zod_1.z.number(), zod_1.z.string()])
        .transform((val) => (0, viem_1.parseGwei)(`${val}`)),
    // @ts-ignore
    maxPriorityFee: zod_1.z
        .union([zod_1.z.number(), zod_1.z.string()])
        .transform((val) => (0, viem_1.parseGwei)(`${val}`))
})
    .transform((val) => {
    return {
        maxFeePerGas: val.maxFee,
        maxPriorityFeePerGas: val.maxPriorityFee
    };
});
exports.gasStationResult = zod_1.z.object({
    safeLow: gasPrice,
    standard: gasPrice,
    fast: gasPrice
    // @ts-ignore
    // estimatedBaseFee: z.union([z.number(), z.string()]).transform((val) => parseGwei(`${val}`)),
    // blockTime: z.number(),
    // blockNumber: z.number()
});
exports.gasPriceMultipliers = zod_1.z.object({
    slow: (0, zod_1.bigint)(),
    standard: (0, zod_1.bigint)(),
    fast: (0, zod_1.bigint)()
});
//# sourceMappingURL=gasPrice.js.map