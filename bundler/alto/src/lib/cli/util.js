"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommandToYargs = void 0;
/**
 * Register a CliCommand type to yargs. Recursively registers subcommands too.
 * @param yargs
 * @param cliCommand
 */
function registerCommandToYargs(
// biome-ignore lint/suspicious/noExplicitAny: it's a generic type
yargs, 
// biome-ignore lint/suspicious/noExplicitAny: it's a generic type
cliCommand) {
    yargs.command({
        command: cliCommand.command,
        describe: cliCommand.describe,
        builder: (yargsBuilder) => {
            yargsBuilder.options(cliCommand.options || {});
            for (const subcommand of cliCommand.subcommands || []) {
                registerCommandToYargs(yargsBuilder, subcommand);
            }
            if (cliCommand.examples) {
                for (const example of cliCommand.examples) {
                    yargsBuilder.example(`$0 ${example.command}`, example.description);
                }
            }
            return yargs;
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        handler: cliCommand.handler || function emptyHandler() { }
    });
}
exports.registerCommandToYargs = registerCommandToYargs;
//# sourceMappingURL=util.js.map