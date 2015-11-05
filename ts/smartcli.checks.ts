/// <reference path="./index.ts" />
module smartcliChecks {
    export function init() {
        /**
         * checks for a special command string and returns true if found.
         * @param commandString
         * @returns {boolean}
         */
        smartcli.checkCommand = function(commandString:string):boolean {
            if (plugins.argv._.indexOf(commandString) == 0) {
                return true
            }
            return false;
        };

        smartcli.checkCommandArgument = function(level:number):boolean {
            if(plugins.argv._.length == (level + 1)) {
                return true;
            }
            return false;
        };

        /**
         * checks if a command is present, returns true if yes, false if no.
         * @returns {boolean}
         */
        smartcli.checkCommandPresence = function():boolean {
            if(plugins.argv._.length < 0){
                return true;
            }
            return false;
        }

        /**
         * checks for a specific option string, returns true if yes, returns false if no
         * @returns {boolean}
         */
        smartcli.checkOption = function(optionString):boolean {
            if(plugins.smartparam.exists(plugins.argv, optionString)) {
                return true;
            }
            return false;
        };

        smartcli.checkOptionsPresence = function():boolean {
            if (plugins.argv.indexOf() != -1) {
                return true
            }
            return false;
        };
    }
}