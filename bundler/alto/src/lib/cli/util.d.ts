import type { Argv, Options } from "yargs";
export type CliCommandOptions<OwnArgs> = Required<{
    [key in keyof OwnArgs]: Options;
}>;
export interface CliCommand<OwnArgs = Record<never, never>, ParentArgs = Record<never, never>, R = any> {
    command: string;
    describe: string;
    examples?: {
        command: string;
        description: string;
    }[];
    options?: CliCommandOptions<OwnArgs>;
    subcommands?: CliCommand<any, OwnArgs & ParentArgs>[];
    handler?: (args: OwnArgs & ParentArgs) => Promise<R>;
}
/**
 * Register a CliCommand type to yargs. Recursively registers subcommands too.
 * @param yargs
 * @param cliCommand
 */
export declare function registerCommandToYargs(yargs: Argv<any>, cliCommand: CliCommand<any, any>): void;
//# sourceMappingURL=util.d.ts.map