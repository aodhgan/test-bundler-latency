"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArgs = void 0;
const cli_1 = require("./index.js");
const zod_validation_error_1 = require("zod-validation-error");
function toCamelCase(str) {
    return str.replace(/([-_][a-z0-9])/g, (group) => group.toUpperCase().replace("-", "").replace("_", ""));
}
function convertKeysToCamelCase(obj) {
    return Object.keys(obj).reduce((acc, key) => {
        const camelCaseKey = toCamelCase(key);
        acc[camelCaseKey] = obj[key];
        return acc;
    }, {});
}
const parseArgs = (args) => {
    const parsing = cli_1.optionArgsSchema.safeParse(args);
    if (!parsing.success) {
        const error = (0, zod_validation_error_1.fromZodError)(parsing.error);
        throw new Error(error.message);
    }
    return convertKeysToCamelCase(parsing.data);
};
exports.parseArgs = parseArgs;
//# sourceMappingURL=parseArgs.js.map