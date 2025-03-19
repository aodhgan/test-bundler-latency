import type { Hex, PrivateKeyAccount, PublicClient } from "viem"
import { createSmartAccountClient, deepHexlify } from "permissionless"
import type {
    GetPaymasterDataParameters,
    GetPaymasterStubDataParameters,
    SmartAccount,
    UserOperation,
    UserOperationReceipt
} from "viem/account-abstraction"
import {anvil} from "viem/chains"
import type { SmartAccountClient } from "permissionless"
import { createMintCall } from "./utils/createMintCall"
import { generatePrivateKey, privateKeyToAddress } from "viem/accounts"
import { type PimlicoClient, createPimlicoClient } from "permissionless/clients/pimlico"
import { createPublicClient, http } from "viem"
import { entryPoint07Address } from "viem/account-abstraction"
import { toEcdsaKernelSmartAccount } from "permissionless/accounts"
import { privateKeyToAccount } from "viem/accounts"
import { deployment as happyAnvilDeployment } from "../deployments/anvil/aa/abis"

const PAYMASTER_VERIFICATION_GAS_LIMIT_WITH_FACTORY = 45000n
const PAYMASTER_POST_OP_GAS_LIMIT = 1n // Set to 1 since the postOp function is never called
const PAYMASTER_DATA = "0x" as const
const bundlerRpc = "http://localhost:3000"

const publicClient = createPublicClient({
    chain: anvil,
    transport: http(anvil.rpcUrls.default.http[0]),
})

function getPimlicoClient(): PimlicoClient {
    return createPimlicoClient({
        chain: anvil,
        transport: http(bundlerRpc),
        entryPoint: {
            address: entryPoint07Address,
            version: "0.7",
        },
    })
}

function getKernelClient(kernelAccount: SmartAccount): SmartAccountClient{
    const paymasterAddress = happyAnvilDeployment.HappyPaymaster

    const kernelClientBase = createSmartAccountClient({
        account: kernelAccount,
        chain: anvil,
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
    return kernelClientBase
}

async function getKernelAccount(client: PublicClient, account: PrivateKeyAccount): Promise<SmartAccount> {
    return toEcdsaKernelSmartAccount({
        client,
        entryPoint: {
            address: entryPoint07Address,
            version: "0.7",
        },
        owners: [account],
        version: "0.3.1",
        ecdsaValidatorAddress: happyAnvilDeployment.ECDSAValidator,
        accountLogicAddress: happyAnvilDeployment.Kernel,
        factoryAddress: happyAnvilDeployment.KernelFactory,
        metaFactoryAddress: happyAnvilDeployment.FactoryStaker,
    })
}

async function createKernelClient(_privateKey: Hex) : Promise<SmartAccountClient>{
    const SCAaccount = privateKeyToAccount(_privateKey)
    const kernelAccount = await getKernelAccount(publicClient, SCAaccount)
    const kernelClient = getKernelClient(kernelAccount)
    const kernelAddress = kernelAccount.address
    console.log(`Kernel account address: ${kernelAddress}`)
    return kernelClient
}

async function sendNow(kernelClient: SmartAccountClient, nonce: bigint){
    const now = Date.now()
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const receipt = await sendUserOpNow(kernelClient.account!, kernelClient, nonce)
    console.log(`UserOp ${receipt.userOpHash} took ${Date.now() - now}ms, included in block ${receipt.receipt.blockNumber}`)   
    return receipt
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
        chainId: 1337,
        signature: "0x", // empty signature
    })
    strippedUserOp.nonce = nonce
    strippedUserOp.signature = userOp.signature
    const receipt = (await kernelClient.request({
        // @ts-ignore
        method: "pimlico_sendUserOperationNow",
        params: [deepHexlify(strippedUserOp), entryPoint07Address]
    })) as UserOperationReceipt
    
    console.log("Sent: sender",receipt.sender , "\n", 
        "UserOp with hash:", receipt.userOpHash,  "\n", 
         "& nonceHex:", nonce.toString(16),  "\n", 
          "nonceDec", nonce,  "\n")
    return receipt
}

async function sendUserOps(kernelClient: SmartAccountClient, numberOfUserOps = 10) {
    
    const currentNonce = await kernelClient.account?.getNonce()
    if(!currentNonce){
        throw new Error("Failed to get nonce")
    }
    for(let i = 0; i < numberOfUserOps; i++){
        const receipt = await sendNow(kernelClient, currentNonce + BigInt(i))
        console.log(`included in block ${(receipt.receipt.blockNumber)}`)
    }

}

async function main(){
    const privateKey = generatePrivateKey()
    const client = await createKernelClient(privateKey)
    await sendUserOps(client,1)
}

main().then(()=> console.log("done"))