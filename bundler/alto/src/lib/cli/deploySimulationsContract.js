"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploySimulationsContract = void 0;
const types_1 = require("../types/index.js");
const viem_1 = require("viem");
const isContractDeployed = async ({ publicClient, address }) => {
    const code = await publicClient.getCode({
        address
    });
    return code !== undefined && code !== "0x";
};
const deploySimulationsContract = async ({ args, publicClient }) => {
    const utilityPrivateKey = args.utilityPrivateKey;
    if (!utilityPrivateKey) {
        throw new Error("Cannot deploy entryPoint simulations without utility-private-key");
    }
    // if (args.entrypointSimulationContract) {
    //     if (
    //         await isContractDeployed({
    //             publicClient,
    //             address: args.entrypointSimulationContract
    //         })
    //     ) {
    //         return args.entrypointSimulationContract
    //     }
    // }
    const walletClient = (0, viem_1.createWalletClient)({
        transport: (0, viem_1.http)(args.rpcUrl),
        account: utilityPrivateKey
    });
    if (!(await isContractDeployed({
        publicClient,
        address: args.deterministicDeployerAddress
    }))) {
        const deterministicDeployHash = await walletClient.sendRawTransaction({
            serializedTransaction: types_1.DETERMINISTIC_DEPLOYER_TRANSACTION
        });
        await publicClient.waitForTransactionReceipt({
            hash: deterministicDeployHash
        });
    }
    const contractAddress = (0, viem_1.getContractAddress)({
        opcode: "CREATE2",
        bytecode: types_1.pimlicoEntrypointSimulationsDeployBytecode,
        salt: types_1.pimlicoEntrypointSimulationsSalt,
        from: args.deterministicDeployerAddress
    });
    if (await isContractDeployed({ publicClient, address: contractAddress })) {
        return contractAddress;
    }
    const deployHash = await walletClient.sendTransaction({
        chain: publicClient.chain,
        to: args.deterministicDeployerAddress,
        data: (0, viem_1.concat)([
            types_1.pimlicoEntrypointSimulationsSalt,
            types_1.pimlicoEntrypointSimulationsDeployBytecode
        ])
    });
    await publicClient.waitForTransactionReceipt({
        hash: deployHash
    });
    if (await isContractDeployed({ publicClient, address: contractAddress })) {
        return contractAddress;
    }
    throw new Error("Failed to deploy simulationsContract");
};
exports.deploySimulationsContract = deploySimulationsContract;
//# sourceMappingURL=deploySimulationsContract.js.map