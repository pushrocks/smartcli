import "./smartcli.interfaces";
/**
 * checks for a special command string and returns true if found.
 * @param commandString
 * @returns {boolean}
 */
export declare let command: (commandString: string) => boolean;
/**
 * checks if a command is present, returns true if yes, false if no.
 * @returns {boolean}
 */
export declare let commandPresence: () => boolean;
/**
 * checks for an special command argument at a certain position, returns true if matches, returns false if not
 * @param level
 * @returns {boolean}
 */
export declare let commandArgument: (commandArgumentString: string, level?: number) => boolean;
export declare let commandArgumentPresence: (level?: number) => boolean;
/**
 * checks for a specific option string, returns true if yes, returns false if no
 * @returns {boolean}
 */
export declare let option: (optionString: any) => boolean;
export declare let optionPresence: () => boolean;
