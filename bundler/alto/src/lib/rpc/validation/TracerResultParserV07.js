"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tracerResultParserV07 = exports.parseEntitySlots = exports.associatedWith = exports.isStaked = void 0;
const types_1 = require("../../types/index.js");
// This file contains references to validation rules, in the format [xxx-###]
// where xxx is OP/STO/COD/EP/SREP/EREP/UREP/ALT, and ### is a number
// the validation rules are defined in erc-aa-validation.md
const viem_1 = require("viem");
const abi = [...types_1.SenderCreatorAbi, ...types_1.EntryPointV07Abi, ...types_1.PaymasterAbi];
// biome-ignore lint/suspicious/noExplicitAny: it's a generic type
const functionSignatureToMethodName = (hash) => {
    let functionName = undefined;
    for (const item of abi) {
        const signature = (0, viem_1.getFunctionSelector)(item);
        if (signature === hash) {
            functionName = item.name;
        }
    }
    if (functionName === undefined) {
        throw new Error(`Could not find function name for hash ${hash}`);
    }
    return functionName;
};
function isStaked(entStake) {
    return Boolean(entStake && 1n <= entStake.stake && 1n <= entStake.unstakeDelaySec);
}
exports.isStaked = isStaked;
function associatedWith(slot, addr, entitySlots) {
    const addrPadded = (0, viem_1.pad)(addr, {
        size: 32
    }).toLowerCase();
    if (slot.toLowerCase() === addrPadded) {
        return true;
    }
    const k = entitySlots[addr];
    if (!k) {
        return false;
    }
    const slotN = (0, viem_1.hexToBigInt)(slot);
    // scan all slot entries to check of the given slot is within a structure, starting at that offset.
    // assume a maximum size on a (static) structure size.
    for (const k1 of k.keys()) {
        const kn = (0, viem_1.hexToBigInt)(k1);
        if (slotN >= kn && slotN < kn + 128n) {
            return true;
        }
    }
    return false;
}
exports.associatedWith = associatedWith;
/**
 * parse all call operation in the trace.
 * notes:
 * - entries are ordered by the return (so nested call appears before its outer call
 * - last entry is top-level return from "simulateValidation". it as ret and rettype, but no type or address
 * @param tracerResults
 * @param abi
 */
function parseCallStack(tracerResults) {
    function callCatch(x, def) {
        try {
            return x();
        }
        catch (_) {
            return def;
        }
    }
    const out = [];
    const stack = [];
    const filteredTracerResultCalls = tracerResults.calls.filter((x) => !x.type.startsWith("depth"));
    for (const c of filteredTracerResultCalls) {
        if (c.type.match(/REVERT|RETURN/) !== null) {
            const top = stack.splice(-1)[0] ?? {
                type: "top",
                method: "validateUserOp"
            };
            // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
            const returnData = c.data;
            if (top.type.match(/CREATE/) !== null) {
                out.push({
                    to: top.to,
                    from: top.from,
                    type: top.type,
                    method: "",
                    return: `len=${returnData.length}`
                });
            }
            else {
                const method = callCatch(() => functionSignatureToMethodName(top.method), top.method);
                if (c.type === "REVERT") {
                    const parsedError = callCatch(() => (0, viem_1.decodeErrorResult)({ abi: abi, data: returnData }), returnData);
                    out.push({
                        to: top.to,
                        from: top.from,
                        type: top.type,
                        method: method,
                        value: top.value,
                        revert: parsedError
                    });
                }
                else {
                    const ret = callCatch(() => (0, viem_1.decodeFunctionResult)({
                        abi: abi,
                        functionName: method,
                        data: returnData
                    }), returnData);
                    out.push({
                        to: top.to,
                        from: top.from,
                        type: top.type,
                        value: top.value,
                        method: method,
                        return: ret
                    });
                }
            }
        }
        else {
            stack.push(c);
        }
    }
    // TODO: verify that stack is empty at the end.
    return out;
}
/**
 * slots associated with each entity.
 * keccak( A || ...) is associated with "A"
 * removed rule: keccak( ... || ASSOC ) (for a previously associated hash) is also associated with "A"
 *
 * @param stakeInfoEntities stake info for (factory, account, paymaster). factory and paymaster can be null.
 * @param keccak array of buffers that were given to keccak in the transaction
 */
function parseEntitySlots(stakeInfoEntities, keccak) {
    // for each entity (sender, factory, paymaster), hold the valid slot addresses
    // valid: the slot was generated by keccak(entity || ...)
    const entitySlots = {};
    for (const k of keccak) {
        const values = Object.values(stakeInfoEntities);
        for (const info of values) {
            const addr = info?.addr?.toLowerCase();
            if (!addr) {
                continue;
            }
            const addrPadded = (0, viem_1.pad)(addr).toLowerCase();
            if (!entitySlots[addr]) {
                entitySlots[addr] = new Set();
            }
            const currentEntitySlots = entitySlots[addr];
            // valid slot: the slot was generated by keccak(entityAddr || ...)
            if (k.startsWith(addrPadded)) {
                currentEntitySlots.add((0, viem_1.keccak256)(k));
            }
            // disabled 2nd rule: .. or by keccak( ... || OWN) where OWN is previous allowed slot
            // if (k.length === 130 && currentEntitySlots.has(k.slice(-64))) {
            //   currentEntitySlots.add(value)
            // }
        }
    }
    return entitySlots;
}
exports.parseEntitySlots = parseEntitySlots;
// method-signature for calls from entryPoint
const callsFromEntryPointMethodSigs = {
    factory: (0, viem_1.getFunctionSelector)({
        inputs: [
            {
                internalType: "bytes",
                name: "initCode",
                type: "bytes"
            }
        ],
        name: "createSender",
        outputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }),
    account: (0, viem_1.getFunctionSelector)({
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256"
            }
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }),
    paymaster: (0, viem_1.getFunctionSelector)({
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes32",
                        name: "accountGasLimits",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes32",
                        name: "gasFees",
                        type: "bytes32"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct PackedUserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "maxCost",
                type: "uint256"
            }
        ],
        name: "validatePaymasterUserOp",
        outputs: [
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    })
};
/**
 * parse collected simulation traces and revert if they break our rules
 * @param userOperation the userOperation that was used in this simulation
 * @param tracerResults the tracer return value
 * @param validationResult output from simulateValidation
 * @param entryPoint the entryPoint that hosted the "simulatedValidation" traced call.
 * @return list of contract addresses referenced by this UserOp
 */
function tracerResultParserV07(userOperation, tracerResults, validationResult, entryPointAddress) {
    // todo: block access to no-code addresses (might need update to tracer)
    // opcodes from [OP-011]
    const bannedOpCodes = new Set([
        "GASPRICE",
        "GASLIMIT",
        "DIFFICULTY",
        "TIMESTAMP",
        "BASEFEE",
        "BLOCKHASH",
        "NUMBER",
        "SELFBALANCE",
        "BALANCE",
        "ORIGIN",
        "GAS",
        "CREATE",
        "COINBASE",
        "SELFDESTRUCT",
        "RANDOM",
        "PREVRANDAO",
        "INVALID",
        "TSTORE",
        "TLOAD"
    ]);
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (Object.values(tracerResults.callsFromEntryPoint).length < 1) {
        throw new Error("Unexpected traceCall result: no calls from entrypoint.");
    }
    const callStack = parseCallStack(tracerResults);
    // [OP-052], [OP-053]
    const callInfoEntryPoint = callStack.find((call) => call.to === entryPointAddress &&
        call.from !== entryPointAddress &&
        call.method !== "0x" &&
        call.method !== "depositTo");
    // [OP-054]
    if (callInfoEntryPoint &&
        callInfoEntryPoint?.method !== "delegateAndRevert") {
        throw new types_1.RpcError(`illegal call into EntryPoint during validation ${callInfoEntryPoint?.method}`, types_1.ValidationErrors.OpcodeValidation);
    }
    // [OP-061]
    const illegalNonZeroValueCall = callStack.find((call) => call.to !== entryPointAddress &&
        (0, viem_1.hexToBigInt)(call.value ?? "0x0") !== 0n);
    if (illegalNonZeroValueCall) {
        throw new types_1.RpcError("May not may CALL with value", types_1.ValidationErrors.OpcodeValidation);
    }
    const sender = userOperation.sender.toLowerCase();
    // stake info per "number" level (factory, sender, paymaster)
    // we only use stake info if we notice a memory reference that require stake
    const stakeInfoEntities = {
        factory: validationResult.factoryInfo,
        account: validationResult.senderInfo,
        paymaster: validationResult.paymasterInfo
    };
    const entitySlots = parseEntitySlots(stakeInfoEntities, tracerResults.keccak);
    for (const [title, entStakes] of Object.entries(stakeInfoEntities)) {
        const entityTitle = title;
        const entityAddr = (entStakes?.addr ?? "").toLowerCase();
        const currentNumLevel = tracerResults.callsFromEntryPoint.find((info) => info.topLevelMethodSig ===
            callsFromEntryPointMethodSigs[entityTitle]);
        if (!currentNumLevel) {
            if (entityTitle === "account") {
                // should never happen... only factory, paymaster are optional.
                throw new Error("missing trace into validateUserOp");
            }
            continue;
        }
        const opcodes = currentNumLevel.opcodes;
        const access = currentNumLevel.access; // address => { reads, writes }
        // [OP-020]
        if (currentNumLevel.oog ?? false) {
            throw new types_1.RpcError(`${entityTitle} internally reverts on oog`, types_1.ValidationErrors.OpcodeValidation);
        }
        // opcodes from [OP-011]
        for (const opcode of Object.keys(opcodes)) {
            if (bannedOpCodes.has(opcode) &&
                !((opcode === "BALANCE" || opcode === "SELFBALANCE") &&
                    isStaked(entStakes))) {
                throw new types_1.RpcError(`${entityTitle} uses banned opcode: ${opcode}`, types_1.ValidationErrors.OpcodeValidation);
            }
        }
        // [OP-031]
        if (entityTitle === "factory") {
            if ((opcodes.CREATE2 ?? 0) > 1) {
                throw new types_1.RpcError(`${entityTitle} with too many CREATE2`, types_1.ValidationErrors.OpcodeValidation);
            }
        }
        else if (opcodes.CREATE2) {
            throw new types_1.RpcError(`${entityTitle} uses banned opcode: CREATE2`, types_1.ValidationErrors.OpcodeValidation);
        }
        for (const [addr, { reads, writes }] of Object.entries(access)) {
            // testing read/write access on contract "addr"
            if (addr === sender) {
                // allowed to access sender's storage
                // [STO-010]
                continue;
            }
            if (addr === entryPointAddress) {
                // ignore storage access on entryPoint (balance/deposit of entities.
                // we block them on method calls: only allowed to deposit, never to read
                continue;
            }
            // return true if the given slot is associated with the given address, given the known keccak operations:
            // @param slot the SLOAD/SSTORE slot address we're testing
            // @param addr - the address we try to check for association with
            // @param reverseKeccak - a mapping we built for keccak values that contained the address
            // scan all slots. find a referenced slot
            // at the end of the scan, we will check if the entity has stake, and report that slot if not.
            let requireStakeSlot;
            const slots = [...Object.keys(writes), ...Object.keys(reads)];
            for (const slot of slots) {
                // slot associated with sender is allowed (e.g. token.balanceOf(sender)
                // but during initial UserOp (where there is an initCode), it is allowed only for staked entity
                if (associatedWith(slot, sender, entitySlots)) {
                    if (userOperation.factory) {
                        // special case: account.validateUserOp is allowed to use assoc storage if factory is staked.
                        // [STO-022], [STO-021]
                        if (!(entityAddr === sender &&
                            isStaked(stakeInfoEntities.factory))) {
                            requireStakeSlot = slot;
                        }
                    }
                }
                else if (associatedWith(slot, entityAddr, entitySlots)) {
                    // [STO-032]
                    // accessing a slot associated with entityAddr (e.g. token.balanceOf(paymaster)
                    requireStakeSlot = slot;
                }
                else if (addr === entityAddr) {
                    // [STO-031]
                    // accessing storage member of entity itself requires stake.
                    requireStakeSlot = slot;
                }
                else if (writes[slot] === undefined) {
                    // [STO-033]: staked entity have read-only access to any storage in non-entity contract.
                    requireStakeSlot = slot;
                }
                else {
                    // accessing arbitrary storage of another contract is not allowed
                    const readWrite = Object.keys(writes).includes(addr)
                        ? "write to"
                        : "read from";
                    const message = `${entityTitle} has forbidden ${readWrite} ${nameAddr(addr, entityTitle)} slot ${slot}`;
                    throw new types_1.RpcError(message, types_1.ValidationErrors.OpcodeValidation, {
                        [entityTitle]: entStakes?.addr
                    });
                }
            }
            // if addr is current account/paymaster/factory, then return that title
            // otherwise, return addr as-is
            function nameAddr(addr, _currentEntity) {
                const [title] = Object.entries(stakeInfoEntities).find(([_title, info]) => info?.addr?.toLowerCase() === addr.toLowerCase()) ?? [];
                return title ?? addr;
            }
            requireCondAndStake(requireStakeSlot !== undefined, entStakes, `unstaked ${entityTitle} accessed ${nameAddr(addr, entityTitle)} slot ${requireStakeSlot}`);
        }
        // [EREP-050]
        if (entityTitle === "paymaster") {
            const validatePaymasterUserOp = callStack.find((call) => call.method === "validatePaymasterUserOp" &&
                call.to === entityAddr);
            const context = validatePaymasterUserOp?.return
                ? validatePaymasterUserOp?.return[0]
                : undefined;
            requireCondAndStake(context && context !== "0x", entStakes, "unstaked paymaster must not return context");
        }
        // check if the given entity is staked
        // helper method: if condition is true, then entity must be staked.
        function requireCondAndStake(cond, entStake, failureMessage) {
            if (!cond) {
                return;
            }
            if (!entStake) {
                throw new Error(`internal: ${entityTitle} not in userOp, but has storage accesses in ${JSON.stringify(access)}`);
            }
            if (!isStaked(entStake)) {
                throw new types_1.RpcError(failureMessage, types_1.ValidationErrors.OpcodeValidation, {
                    [entityTitle]: entStakes?.addr
                });
            }
            // TODO: check real minimum stake values
        }
        // the only contract we allow to access before its deployment is the "sender" itself, which gets created.
        // biome-ignore lint/suspicious/noExplicitAny: it's a generic type
        let illegalZeroCodeAccess;
        for (const addr of Object.keys(currentNumLevel.contractSize)) {
            // [OP-042]
            if (addr !== sender &&
                currentNumLevel.contractSize[addr].contractSize <= 2) {
                illegalZeroCodeAccess = currentNumLevel.contractSize[addr];
                illegalZeroCodeAccess.address = addr;
                break;
            }
        }
        // [OP-041]
        if (illegalZeroCodeAccess) {
            throw new types_1.RpcError(`${entityTitle} accesses un-deployed contract address ${illegalZeroCodeAccess?.address} with opcode ${illegalZeroCodeAccess?.opcode}`, types_1.ValidationErrors.OpcodeValidation);
        }
        let illegalEntryPointCodeAccess = undefined;
        for (const addr of Object.keys(currentNumLevel.extCodeAccessInfo)) {
            if (addr === entryPointAddress) {
                illegalEntryPointCodeAccess =
                    currentNumLevel.extCodeAccessInfo[addr];
                break;
            }
        }
        if (illegalEntryPointCodeAccess) {
            throw new types_1.RpcError(`${entityTitle} accesses EntryPoint contract address ${entryPointAddress} with opcode ${illegalEntryPointCodeAccess}`, types_1.ValidationErrors.OpcodeValidation);
        }
    }
    // return list of contract addresses by this UserOp. already known not to contain zero-sized addresses.
    const addresses = tracerResults.callsFromEntryPoint.flatMap((level) => Object.keys(level.contractSize));
    const storageMap = {};
    for (const level of tracerResults.callsFromEntryPoint) {
        for (const addr of Object.keys(level.access)) {
            storageMap[addr] = storageMap[addr] ?? level.access[addr].reads;
        }
    }
    return [addresses, storageMap];
}
exports.tracerResultParserV07 = tracerResultParserV07;
//# sourceMappingURL=TracerResultParserV07.js.map