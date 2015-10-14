/// <reference path="index.ts" />
/// <reference path="typings/tsd.d.ts" />
/// <reference path="./interfaces.ts" />
var path = require("path");
var beautylog = require("beautylog");
var cliff = require("cliff");
var inquirer = require("inquirer");
var argv = require('yargs').argv;
//define the smartcli object
var smartcli = {};
//add plugins from above for direct use
smartcli.inquirer = inquirer;
smartcli.cliff = cliff;
smartcli.argv = argv;
/* ------------------------------------------------------------------------------
 *----------------------- initial call CLI args -----------------------------
 *----------------------------------------------------------------------------- */
// commands
smartcli.checkCommand = function (commandString) {
    if (argv._.indexOf(commandString) != -1) {
        return true;
    }
    return false;
};
smartcli.getCommands = function () {
    return argv._;
};
// options
smartcli.getOption = function (optionName) {
    if (argv.hasOwnProperty(optionName)) {
        return {
            name: optionName,
            specified: true,
            value: argv[optionName] //we already know from the "if" above that the value is available.
        };
    }
    return {
        name: optionName,
        specified: false,
        value: false
    };
};
smartcli.getOptions = function () {
    var options = {};
    for (var key in argv) {
        if (key != "_") {
            options['key'] = argv['key'];
        }
    }
    return options;
};
/**
 * returns Directory of cwd
 * @returns {{path: string}}
 */
smartcli.getCwd = function () {
    return {
        path: process.cwd()
    };
};
/* ------------------------------------------------------------------------------
*----------------------- in program CLI interaction -----------------------------
*----------------------------------------------------------------------------- */
/**
 * executes callback with answer to question as argument
 * @param questionString the question you want to ask the user
 * @param cb the function to execute with answer as param
 * @returns {null}
 */
smartcli.getAnswer = function (questionString, cb) {
    if (typeof questionString != 'string') {
        beautylog.error('no question specified');
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
    inquirer.prompt([question], function (answers) {
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
smartcli.getChoice = function (questionString, choiceOptions, cb) {
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
    inquirer.prompt(question, function (answers) {
        var answer = answers.userFeedback;
        cb(answer);
    });
};
module.exports = smartcli;
