/// <reference path="smartcli.interfaces.d.ts" />
/**
 *
 * @param commandString
 * @returns {{specified: boolean, name: any, arguments: CliCommandArgument}}
 */
export declare let command: () => CliCommand;
/**
 * gets the second or higher value of plugins.argv._ if specified and returns it as commandArgument
 * @param argumentLevel
 * @returns {{specified: (boolean|boolean), name}}
 */
export declare let commandArgument: (argumentLevel: any) => CliCommandArgument;
/**
 * returns array with commandArgs
 * @returns {CliCommandArgument[]}
 */
export declare let commandArgs: () => CliCommandArgument[];
/**
 * returns complete command array
 * @returns {any}
 */
export declare let commandArray: () => string[];
/**
 * returns a cli option
 * @param optionName
 * @returns {CliOption}
 */
export declare let option: (optionName: string) => CliOption;
export declare let options: () => {};
/**
 * returns Directory of cwd
 * @returns {{path: string}}
 */
export declare let cwd: () => Directory;
