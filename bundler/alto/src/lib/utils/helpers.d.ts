import { StateOverrides } from "../types/index.js";
import { type Address, PublicClient } from "viem";
import { SignedAuthorizationList } from "viem/experimental";
export declare const areAddressesEqual: (a: Address, b: Address) => boolean;
export declare function getRevertErrorData(err: unknown): `0x${string}` | undefined;
export declare function getAAError(errorMsg: string): string | undefined;
export declare function addAuthorizationStateOverrides({ publicClient, authorizationList, stateOverrides }: {
    publicClient: PublicClient;
    authorizationList: SignedAuthorizationList;
    stateOverrides?: StateOverrides;
}): Promise<Partial<Record<`0x${string}`, {
    balance?: bigint | undefined;
    nonce?: bigint | undefined;
    code?: `0x${string}` | undefined;
    state?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
    stateDiff?: Partial<Record<`0x${string}`, `0x${string}`>> | undefined;
}>>>;
//# sourceMappingURL=helpers.d.ts.map