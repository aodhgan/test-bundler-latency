import type { Logger } from "./index.js";
import { type SerializerFn } from "pino";
export declare const customSerializer: SerializerFn;
export declare const initDebugLogger: (level?: string) => Logger;
export declare const initProductionLogger: (level: string) => Logger;
//# sourceMappingURL=logger.d.ts.map