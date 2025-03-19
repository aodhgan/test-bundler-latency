"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = void 0;
function createConfig(config) {
    const { logger, ...rest } = config;
    return {
        ...rest,
        getLogger: (bindings, options) => logger.child(bindings, options)
    };
}
exports.createConfig = createConfig;
//# sourceMappingURL=createConfig.js.map