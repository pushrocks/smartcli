import "typings-global";

import "./smartcli.interfaces";
import plugins = require("./smartcli.plugins");


/**
 * checks for an special command argument at a certain position, returns true if matches, returns false if not
 * @param level
 * @returns {boolean}
 */
export let commandArgument = function(commandArgumentString:string,level:number = 1):boolean {
    if(commandArgumentPresence(level) && (plugins.argv._[level] == commandArgumentString )) {
        return true;
    }
    return false;
};

export let commandArgumentPresence = function(level:number = 1) {
    if(plugins.argv._.length >= (level + 1)) {
        return true;
    }
    return false;
};

/**
 * checks for a specific option string, returns true if yes, returns false if no
 * @returns {boolean}
 */
export let option = function(optionString):boolean {
    if(plugins.smartparam.exists(plugins.argv, optionString)) {
        return true;
    }
    return false;
};

export let optionPresence = function():boolean {
    if (plugins.argv.indexOf() != -1) {
        return true
    }
    return false;
};