"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAuthorizationStateOverrides = exports.getAAError = exports.getRevertErrorData = exports.areAddressesEqual = void 0;
const viem_1 = require("viem");
const experimental_1 = require("viem/experimental");
/// Ensure proper equality by converting both addresses into their checksum type
const areAddressesEqual = (a, b) => {
    return (0, viem_1.getAddress)(a) === (0, viem_1.getAddress)(b);
};
exports.areAddressesEqual = areAddressesEqual;
function getRevertErrorData(err) {
    // biome-ignore lint/style/useBlockStatements:
    if (!(err instanceof viem_1.BaseError))
        return undefined;
    const error = err.walk();
    return typeof error?.data === "object" ? error.data?.data : error.data;
}
exports.getRevertErrorData = getRevertErrorData;
// biome-ignore lint/style/useNamingConvention:
function getAAError(errorMsg) {
    const uppercase = errorMsg.toUpperCase();
    const match = uppercase.match(/AA\d{2}/);
    return match ? match[0] : undefined;
}
exports.getAAError = getAAError;
// authorizationList is not currently supported in viem's sendTransaction, this is a temporary solution
async function addAuthorizationStateOverrides({ publicClient, authorizationList, stateOverrides }) {
    if (!stateOverrides)
        stateOverrides = {};
    for (const authorization of authorizationList) {
        const sender = await (0, experimental_1.recoverAuthorizationAddress)({ authorization });
        const code = await publicClient.getCode({
            address: authorization.contractAddress
        });
        stateOverrides[sender] = { ...stateOverrides?.[sender], code };
    }
    return stateOverrides;
}
exports.addAuthorizationStateOverrides = addAuthorizationStateOverrides;
//# sourceMappingURL=helpers.js.map