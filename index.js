/// <reference path="./index.ts" />
var smartcliPlugins;
(function (smartcliPlugins) {
    var plugins = {};
    function init() {
        plugins.path = require("path");
        plugins.beautylog = require("beautylog")("os");
        plugins.cliff = require("cliff");
        plugins.inquirer = require("inquirer");
        plugins.smartparam = require("smartparam");
        plugins.argv = require('yargs').argv;
        return plugins;
    }
    smartcliPlugins.init = init;
})(smartcliPlugins || (smartcliPlugins = {}));
/// <reference path="index.ts" />
/// <reference path="./index.ts" />
var SmartcliChecks;
(function (SmartcliChecks) {
    function init() {
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
        smartcli.check.command = function (commandString) {
            if (plugins.argv._.indexOf(commandString) == 0) {
                return true;
            }
            return false;
        };
        /**
         * checks if a command is present, returns true if yes, false if no.
         * @returns {boolean}
         */
        smartcli.check.commandPresence = function () {
            if (plugins.argv._.length > 0) {
                return true;
            }
            return false;
        };
        /**
         * checks for an special command argument at a certain position, returns true if matches, returns false if not
         * @param level
         * @returns {boolean}
         */
        smartcli.check.commandArgument = function (commandArgumentString, level) {
            if (level === void 0) { level = 1; }
            if (smartcli.check.commandArgumentPresence(level) && (plugins.argv._[level] == commandArgumentString)) {
                return true;
            }
            return false;
        };
        smartcli.check.commandArgumentPresence = function (level) {
            if (level === void 0) { level = 1; }
            if (plugins.argv._.length >= (level + 1)) {
                return true;
            }
            return false;
        };
        /**
         * checks for a specific option string, returns true if yes, returns false if no
         * @returns {boolean}
         */
        smartcli.check.option = function (optionString) {
            if (plugins.smartparam.exists(plugins.argv, optionString)) {
                return true;
            }
            return false;
        };
        smartcli.check.optionPresence = function () {
            if (plugins.argv.indexOf() != -1) {
                return true;
            }
            return false;
        };
    }
    SmartcliChecks.init = init;
})(SmartcliChecks || (SmartcliChecks = {}));
/// <reference path="./index.ts" />
var SmartcliGetters;
(function (SmartcliGetters) {
    function init() {
        smartcli.get = {};
        /**
         *
         * @param commandString
         * @returns {{specified: boolean, name: any, arguments: CliCommandArgument}}
         */
        smartcli.get.command = function () {
            var cliCommand = {
                specified: smartcli.check.commandPresence(),
                name: plugins.argv._[1],
                arguments: smartcli.get.commandArguments(1)
            };
            return cliCommand;
        };
        /**
         * gets the second or higher value of plugins.argv._ if specified and returns it as commandArgument
         * @param argumentLevel
         * @returns {{specified: (boolean|boolean), name}}
         */
        smartcli.get.commandArgument = function (argumentLevel) {
            var commandArgument = {
                specified: false,
                name: "undefined",
                level: argumentLevel
            };
            if (argumentLevel < 1) {
                plugins.beautylog.error("smartcli.get.argument cannot be invoked with an argumentLevel smaller than 1");
                return commandArgument;
            }
            if (smartcli.check.commandArgumentPresence(argumentLevel)) {
                commandArgument.specified = true;
                commandArgument.name = plugins.argv._[argumentLevel];
            }
            return commandArgument;
        };
        /**
         *
         * @returns {CliCommandArgument[]}
         */
        smartcli.get.commandArgs = function () {
            var commandArgs = [];
            for (var command in plugins.argv._)
                return commandArgs;
        };
        /**
         * returns complete command array
         * @returns {any}
         */
        smartcli.get.commandArray = function () {
            return plugins.argv._;
        };
        /**
         * returns a cli option
         * @param optionName
         * @returns {CliOption}
         */
        smartcli.get.option = function (optionName) {
            var cliOption = {
                name: optionName,
                specified: false,
                value: false
            };
            if (plugins.argv.hasOwnProperty(optionName)) {
                cliOption.name = optionName;
                cliOption.specified = true;
                cliOption.value = plugins.argv[optionName]; //we already know from the "if" above that the value is available.
            }
            return cliOption;
        };
        smartcli.get.options = function () {
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
        smartcli.get.cwd = function () {
            return {
                path: process.cwd()
            };
        };
    }
    SmartcliGetters.init = init;
})(SmartcliGetters || (SmartcliGetters = {}));
/// <reference path="./index.ts" />
var SmartcliInteraction;
(function (SmartcliInteraction) {
    function init() {
        smartcli.interaction = {};
        /**
         * executes callback with answer to question as argument
         * @param questionString the question you want to ask the user
         * @param cb the function to execute with answer as param
         * @returns {null}
         */
        smartcli.interaction.getAnswer = function (questionString, cb) {
            if (typeof questionString != 'string') {
                plugins.beautylog.error('no question specified');
                return null;
            }
            //make inquirer compatible question object
            var question = {
                type: "input",
                name: "userFeedback",
                message: questionString,
                validate: function (value) {
                    return true;
                }
            };
            plugins.inquirer.prompt([question], function (answers) {
                var answer = answers.userFeedback;
                cb(answer);
            });
        };
        /**
         *
         * @param questionString
         * @param choiceOptions
         * @param cb
         * @returns {null}
         */
        smartcli.interaction.getChoice = function (questionString, choiceOptions, cb) {
            if (!Array.isArray(choiceOptions)) {
                return null;
            }
            //make inquirer compatible question object
            var question = {
                type: "list",
                name: "userFeedback",
                message: questionString,
                choices: choiceOptions,
                filter: function (val) { return val.toLowerCase(); }
            };
            plugins.inquirer.prompt(question, function (answers) {
                var answer = answers.userFeedback;
                cb(answer);
            });
        };
    }
    SmartcliInteraction.init = init;
})(SmartcliInteraction || (SmartcliInteraction = {}));
/// <reference path="typings/tsd.d.ts" />
/// <reference path="./smartcli.plugins.ts" />
/// <reference path="./smartcli.interfaces.ts" />
/// <reference path="./smartcli.checks.ts" />
/// <reference path="./smartcli.getters.ts" />
/// <reference path="./smartcli.interaction.ts" />
var plugins = smartcliPlugins.init(); //get all the required npm modules under plugins
//define the smartcli object
var smartcli = {};
//add plugins from above for direct use
smartcli.inquirer = plugins.inquirer; //inquirer is for asking questions
smartcli.cliff = plugins.cliff; // formats cli output
smartcli.argv = plugins.argv; //argv gets initial cli commands and options.
//init checks. Checks return boolean. That means they can be used as question with an answer of yes or no.
SmartcliChecks.init(); // is defined in smartcli.checks.ts
SmartcliGetters.init(); // is defined in smartcli.getters.ts
SmartcliInteraction.init(); // is defined in smartcli.interaction.ts
module.exports = smartcli; // expose smartcli to outside world
