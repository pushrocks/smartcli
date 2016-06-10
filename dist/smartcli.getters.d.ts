import "typings-global";
import * as interfaces from "./smartcli.interfaces";
/**
 * gets the second or higher value of plugins.argv._ if specified and returns it as commandArgument
 * @param argumentLevel
 * @returns {{specified: (boolean|boolean), name}}
 */
export declare let commandArgument: (argumentLevel: any) => interfaces.CliCommandArgument;
/**
 * returns array with commandArgs
 * @returns {CliCommandArgument[]}
 */
export declare let commandArgs: () => interfaces.CliCommandArgument[];
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
export declare let option: (optionName: string) => interfaces.CliOption;
export declare let options: () => {};
/**
 * returns Directory of cwd
 * @returns {{path: string}}
 */
export declare let cwd: () => interfaces.Directory;
