import type { Hex, PrivateKeyAccount, PublicClient } from "viem"
import { http, createPublicClient, webSocket } from "viem"
import type {
    GetPaymasterDataParameters,
    GetPaymasterStubDataParameters,
    SmartAccount,
    UserOperation,
    UserOperationReceipt
} from "viem/account-abstraction"
import { generatePrivateKey, privateKeyToAccount, privateKeyToAddress } from "viem/accounts"
import { type SmartAccountClient, createSmartAccountClient, deepHexlify } from "permissionless"
import { toEcdsaKernelSmartAccount } from "permissionless/accounts"
import { type Erc7579Actions, erc7579Actions } from "permissionless/actions/erc7579"
import { deployment as happyTestnetDeployment } from "../deployments/happy-sepolia/aa/abis"
import {defineChain} from "viem"
import { type PimlicoClient, createPimlicoClient } from "permissionless/clients/pimlico"
import { entryPoint07Address } from "viem/account-abstraction"
import { createMintCall } from "./utils/createMintCall"

const bundlerRpc ="http://65.109.162.43:3000"  //"http://localhost:3000"//"https://bundler-staging.happy.tech"
const PAYMASTER_VERIFICATION_GAS_LIMIT_WITH_FACTORY = 45000n
const PAYMASTER_POST_OP_GAS_LIMIT = 1n // Set to 1 since the postOp function is never called
const PAYMASTER_DATA = "0x" as const


function getPimlicoClient(): PimlicoClient {
    return createPimlicoClient({
        chain: happychainTestnet,
        transport: http(bundlerRpc),
        entryPoint: {
            address: entryPoint07Address,
            version: "0.7",
        },
    })
}

const happychainTestnet = defineChain({
    name: "HappyChain",
    id: 216,
    rpcUrls: {
        default: {
            http: ["https://rpc.testnet.happy.tech"],
            ws: ["wss://rpc.testnet.happy.tech"],
        }
    },
    nativeCurrency: {
        name: "Happy",
        symbol: "HAPPY",
        decimals: 18,
    },
})

const publicClient = createPublicClient({
    chain: happychainTestnet,
    transport: http(happychainTestnet.rpcUrls.default.http[0]),
})

async function getKernelAccount(client: PublicClient, account: PrivateKeyAccount): Promise<SmartAccount> {
    return toEcdsaKernelSmartAccount({
        client,
        entryPoint: {
            address: entryPoint07Address,
            version: "0.7",
        },
        owners: [account],
        version: "0.3.1",
        ecdsaValidatorAddress: happyTestnetDeployment.ECDSAValidator,
        accountLogicAddress: happyTestnetDeployment.Kernel,
        factoryAddress: happyTestnetDeployment.KernelFactory,
        metaFactoryAddress: happyTestnetDeployment.FactoryStaker,
    })
}

async function createKernelClient(_privateKey: Hex) : Promise<SmartAccountClient & Erc7579Actions<SmartAccount>>{
    const SCAaccount = privateKeyToAccount(_privateKey)
    const kernelAccount = await getKernelAccount(publicClient, SCAaccount)
    return getKernelClient(kernelAccount)
}

function getKernelClient(kernelAccount: SmartAccount): SmartAccountClient & Erc7579Actions<SmartAccount> {
    const paymasterAddress = happyTestnetDeployment.HappyPaymaster

    const kernelClientBase = createSmartAccountClient({
        account: kernelAccount,
        chain: happychainTestnet,
        bundlerTransport: http(bundlerRpc),
        paymaster: {
            async getPaymasterData(parameters: GetPaymasterDataParameters) {
                
                return {
                    paymaster: paymasterAddress,
                    paymasterData: PAYMASTER_DATA, // Only required for extra context, no need to encode paymaster gas values manually
                    paymasterPostOpGasLimit: PAYMASTER_VERIFICATION_GAS_LIMIT_WITH_FACTORY,
                    paymasterVerificationGasLimit: PAYMASTER_VERIFICATION_GAS_LIMIT_WITH_FACTORY
                }
            },
            async getPaymasterStubData(parameters: GetPaymasterStubDataParameters) {
                return {
                    paymaster: paymasterAddress,
                    paymasterData: PAYMASTER_DATA,
                    paymasterPostOpGasLimit: PAYMASTER_POST_OP_GAS_LIMIT,
                    paymasterVerificationGasLimit: PAYMASTER_VERIFICATION_GAS_LIMIT_WITH_FACTORY,
                }
            },
        },
        userOperation: {
            estimateFeesPerGas: async () => {
                return (await getPimlicoClient().getUserOperationGasPrice()).fast
            },
        },
    })

    const extendedClient = kernelClientBase.extend(erc7579Actions())
    return extendedClient as typeof kernelClientBase & typeof extendedClient
}

async function sendUserOpNow(kernelAccount: SmartAccount, kernelClient: SmartAccountClient, nonce: bigint){
    const userOp: UserOperation<"0.7"> = await kernelClient.prepareUserOperation({
        account: kernelAccount,
        calls: [createMintCall()],
    })
    const strippedUserOp = {
        sender: userOp.sender,
        nonce: userOp.nonce,
        factory: userOp.factory,
        factoryData: userOp.factoryData,
        callData: userOp.callData,
        callGasLimit: userOp.callGasLimit,
        verificationGasLimit: userOp.verificationGasLimit,
        preVerificationGas: userOp.preVerificationGas,
        maxFeePerGas: userOp.maxFeePerGas,
        maxPriorityFeePerGas: userOp.maxPriorityFeePerGas,
        paymaster: userOp.paymaster,
        paymasterVerificationGasLimit: userOp.paymasterVerificationGasLimit,
        paymasterPostOpGasLimit: userOp.paymasterPostOpGasLimit,
        paymasterData: userOp.paymasterData,
        signature: userOp.signature
    }
    userOp.nonce = nonce
    userOp.signature = await kernelAccount.signUserOperation({
        ...userOp,
        chainId: happychainTestnet.id,
        signature: "0x", // empty signature
    })
    strippedUserOp.nonce = nonce
    strippedUserOp.signature = userOp.signature
    const receipt = (await kernelClient.request({
        // @ts-ignore
        method: "pimlico_sendUserOperationNow",
        params: [deepHexlify(strippedUserOp), entryPoint07Address]
    })) as UserOperationReceipt
    
    // console.log("Sent: sender",receipt.sender , "\n", 
    //     "UserOp with hash:", receipt.userOpHash,  "\n", 
    //      "& nonceHex:", nonce.toString(16),  "\n", 
    //       "nonceDec", nonce,  "\n")
    return receipt
}

async function sendNow(kernelClient: SmartAccountClient, nonce: bigint){
    console.log("sending user op from ", kernelClient.account?.address)
    const now = Date.now()
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const receipt = await sendUserOpNow(kernelClient.account!, kernelClient, nonce)
    console.log(`UserOp ${receipt.userOpHash} took ${Date.now() - now}ms, included in block ${receipt.receipt.blockNumber}`)   
    return receipt
}

function generatePrivateKeys(num) {
    const keys: any[] = []
    for(let i = 0; i < num; i++){
        keys.push(generatePrivateKey())
    }
    return keys
}

async function attemptMultipleUserOps() {
    const privateKeys = generatePrivateKeys(1)
    const clients: any[] = []
    for(let i = 0; i < privateKeys.length; i++){
        clients.push(await createKernelClient(privateKeys[i]))
    }
    
    for(let userOpAttempts = 0 ; userOpAttempts < 10; userOpAttempts++){
        const nonces = await Promise.all(clients.map(client => client.account?.getNonce()))
        // now in parallel run the sendUserOpNow function
        const promises = clients.map((client, index) => sendNow(client, nonces[index]!))
        await Promise.all(promises)
    }
}

attemptMultipleUserOps().then(() => {
    console.log("Test completed successfully");
    setTimeout(() => process.exit(0), 100);
}).catch((error) => {   
    console.error(error);
    process.exit(1);
})
