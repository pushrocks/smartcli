/// <reference path="typings/main.d.ts" />
/// <reference path="./smartcli.interfaces.ts" />

import plugins = require("./smartcli.plugins");
import SmartcliChecks = require("./smartcli.checks");

/**
 *
 * @param commandString
 * @returns {{specified: boolean, name: any, arguments: CliCommandArgument}}
 */
export let command = function():CliCommand {
    var cliCommand = {
        specified: SmartcliChecks.commandPresence(),
        name: plugins.argv._[0],
        arguments: commandArgs()
    }
    return cliCommand;
};

/**
 * gets the second or higher value of plugins.argv._ if specified and returns it as commandArgument
 * @param argumentLevel
 * @returns {{specified: (boolean|boolean), name}}
 */
export let commandArgument = function(argumentLevel):CliCommandArgument {
    var commandArgument:CliCommandArgument = {
        specified: false,
        name: "undefined",
        level:argumentLevel
    };
    if(argumentLevel < 1) {
        plugins.beautylog.error("smartcli.get.argument cannot be invoked with an argumentLevel smaller than 1");
        return commandArgument;
    }
    if(SmartcliChecks.commandArgumentPresence(argumentLevel)) {
        commandArgument.specified = true;
        commandArgument.name = plugins.argv._[argumentLevel];
    }
    return commandArgument;
};

/**
 * returns array with commandArgs
 * @returns {CliCommandArgument[]}
 */
export let commandArgs = function():CliCommandArgument[] {
    var commandArgs:CliCommandArgument[] = [];
    var argsArray = commandArray().slice(0);
    argsArray.shift();
    for (var item in argsArray){
        var commandArgument:CliCommandArgument = {
            specified:true,
            name:argsArray[item],
            level: item + 1
        }
        commandArgs.push(commandArgument);
    }
    return commandArgs;
};

/**
 * returns complete command array
 * @returns {any}
 */
export let commandArray = function ():string[] {
    var commandArray = plugins.argv._;
    return commandArray;
};


/**
 * returns a cli option
 * @param optionName
 * @returns {CliOption}
 */
export let option = function(optionName:string):CliOption {
    var cliOption:CliOption = {
        name:optionName,
        specified: false,
        value: false
    };
    if (plugins.smartparam.exists(plugins.argv,optionName)) {
        cliOption.name = optionName;
        cliOption.specified = true;
        cliOption.value = plugins.argv[optionName] //we already know from the "if" above that the value is available.
    }
    return cliOption;
};


export let options = function() {
    var options = {};
    for (var key in plugins.argv) {
        if (key != "_") {
            options['key'] = plugins.argv['key'];
        }
    }
    return options;
};

/**
 * returns Directory of cwd
 * @returns {{path: string}}
 */
export let cwd = function():Directory {
    return {
        path: process.cwd()
    }
};