"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleBigIntByPercent = exports.maxBigInt = exports.minBigInt = void 0;
/// Resturns the bigger of two BigInts.
const minBigInt = (a, b) => {
    return a < b ? a : b;
};
exports.minBigInt = minBigInt;
/// Returns the smaller of two BigInts.
const maxBigInt = (a, b) => {
    return a > b ? a : b;
};
exports.maxBigInt = maxBigInt;
/// Scale a BigInt by a certain percentage.
const scaleBigIntByPercent = (value, percent) => {
    return (value * percent) / 100n;
};
exports.scaleBigIntByPercent = scaleBigIntByPercent;
//# sourceMappingURL=bigInt.js.map