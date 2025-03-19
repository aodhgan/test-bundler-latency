import { type IOptions, type IOptionsInput } from "./index.js";
type CamelCase<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}` ? `${P1}${Uppercase<P2>}${CamelCase<P3>}` : S extends `${infer P1}_${infer P2}${infer P3}` ? `${P1}${Uppercase<P2>}${CamelCase<P3>}` : S;
export type CamelCasedProperties<T> = {
    [K in keyof T as CamelCase<Extract<K, string>>]: T[K];
};
export declare const parseArgs: (args: IOptionsInput) => CamelCasedProperties<IOptions>;
export {};
//# sourceMappingURL=parseArgs.d.ts.map