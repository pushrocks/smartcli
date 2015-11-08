/// <reference path="./index.ts" />
module SmartcliGetters {
    export function init() {
        smartcli.get = {};
        /**
         *
         * @param commandString
         * @returns {{specified: boolean, name: any, arguments: CliCommandArgument}}
         */
        smartcli.get.command = function():CliCommand {
            var cliCommand = {
                specified: smartcli.check.commandPresence(),
                name: plugins.argv._[1],
                arguments: smartcli.get.commandArguments(1)
            }
            return cliCommand;
        };

        /**
         * gets the second or higher value of plugins.argv._ if specified and returns it as commandArgument
         * @param argumentLevel
         * @returns {{specified: (boolean|boolean), name}}
         */
        smartcli.get.commandArgument = function(argumentLevel):CliCommandArgument {
            var commandArgument:CliCommandArgument = {
                specified: false,
                name: "undefined",
                level:argumentLevel
            };
            if(argumentLevel < 1) {
                plugins.beautylog.error("smartcli.get.argument cannot be invoked with an argumentLevel smaller than 1");
                return commandArgument;
            }
            if(smartcli.check.commandArgumentPresence(argumentLevel)) {
                commandArgument.specified = true;
                commandArgument.name = plugins.argv._[argumentLevel];
            }
            return commandArgument;
        };

        /**
         *
         * @returns {CliCommandArgument[]}
         */
        smartcli.get.commandArgs = function():CliCommandArgument[] {
            var commandArgs:CliCommandArgument[] = [];
            for (var command in plugins.argv._)
            return commandArgs;
        };

        /**
         * returns complete command array
         * @returns {any}
         */
        smartcli.get.commandArray = function ():string[] {
            return plugins.argv._;
        };


        /**
         * returns a cli option
         * @param optionName
         * @returns {CliOption}
         */
        smartcli.get.option = function(optionName:string):CliOption {
            var cliOption:CliOption = {
                name:optionName,
                specified: false,
                value: false
            };
            if (plugins.argv.hasOwnProperty(optionName)) {
                cliOption.name = optionName;
                cliOption.specified = true;
                cliOption.value = plugins.argv[optionName] //we already know from the "if" above that the value is available.
            }
            return cliOption;
        };


        smartcli.get.options = function() {
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
        smartcli.get.cwd = function():Directory {
            return {
                path: process.cwd()
            }
        };
    }
}