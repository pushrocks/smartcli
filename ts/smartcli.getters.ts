/// <reference path="./index.ts" />
module smartcliGetters {
    export function init() {
        smartcli.getCommand = function(commandString):CliCommand {
            var cliCommand = {
                specified: smartcli.checkCommand(commandString),
                name: commandString,
                arguments: smartcli.getCommandArgument(1)
            }
            return cliCommand;
        };

        smartcli.getCommandArgument = function(argumentLevel):CommandArgument {
            var commandArgument = {
                specified
            };
            return commandArgument;
        };

        /**
         * returns complete command object
         * @returns {any}
         */
        smartcli.getCommands = function ():string[] {
            return plugins.argv._;
        };


// options
        smartcli.getOption = function(optionName:string):CliOption {
            if (plugins.argv.hasOwnProperty(optionName)) {
                return {
                    name:optionName,
                    specified: true,
                    value: plugins.argv[optionName] //we already know from the "if" above that the value is available.
                };

            }
            return {
                name:optionName,
                specified: false,
                value: false
            }
        };


        smartcli.getOptions = function() {
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
        smartcli.getCwd = function():Directory {
            return {
                path: process.cwd()
            }
        };
    }
}