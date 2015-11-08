/// <reference path="./index.ts" />
module SmartcliChecks {
    export function init() {
        /**
         * all functions in smartcli.check return a boolean
         * @type {{}}
         */
        smartcli.check = {};

        /**
         * checks for a special command string and returns true if found.
         * @param commandString
         * @returns {boolean}
         */
        smartcli.check.command = function(commandString:string):boolean {
            if (plugins.argv._.indexOf(commandString) == 0) {
                return true
            }
            return false;
        };

        /**
         * checks if a command is present, returns true if yes, false if no.
         * @returns {boolean}
         */
        smartcli.check.commandPresence = function():boolean {
            if(plugins.argv._.length > 0){
                return true;
            }
            return false;
        };

        /**
         * checks for an special command argument at a certain position, returns true if matches, returns false if not
         * @param level
         * @returns {boolean}
         */
        smartcli.check.commandArgument = function(commandArgumentString:string,level:number = 1):boolean {
            if(smartcli.check.commandArgumentPresence(level) && (plugins.argv._[level] == commandArgumentString )) {
                return true;
            }
            return false;
        };

        smartcli.check.commandArgumentPresence = function(level:number = 1) {
            if(plugins.argv._.length >= (level + 1)) {
                return true;
            }
            return false;
        };

        /**
         * checks for a specific option string, returns true if yes, returns false if no
         * @returns {boolean}
         */
        smartcli.check.option = function(optionString):boolean {
            if(plugins.smartparam.exists(plugins.argv, optionString)) {
                return true;
            }
            return false;
        };

        smartcli.check.optionPresence = function():boolean {
            if (plugins.argv.indexOf() != -1) {
                return true
            }
            return false;
        };
    }
}