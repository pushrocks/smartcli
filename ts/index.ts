/// <reference path="typings/tsd.d.ts" />

var path = require("path");
var beautylog = require("beautylog");
var cliff = require("cliff");
var inquirer = require("inquirer");
var argv = require('yargs').argv;

//define the smartcli object
var smartcli:any = {};

//add plugins from above for direct use
smartcli.inquirer = inquirer;
smartcli.cliff = cliff;
smartcli.argv = argv;

/* ------------------------------------------------------------------------------
 *----------------------- initial call CLI args -----------------------------
 *----------------------------------------------------------------------------- */

// commands


smartcli.checkCommand = function(commandString:string):boolean {
    if (argv._.indexOf(commandString) != -1) {
        return true
    }
    return false;
};

smartcli.getCommands = function ():string[] {
    return argv._;
};


// options
smartcli.checkOption = function(optionParam:string):boolean {
    if (argv.hasOwnProperty(optionParam)) {
        return true;
    }
    return false
};

smartcli.getOptionValue = function(optionParam:string):any {
    if (smartcli.checkOption(optionParam)) {
        return argv[optionParam]
    }
    return false;
};

smartcli.getOptions = function() {
    var options = {};
    for (var key in argv) {
        if (key != "_") {
            options['key'] = argv['key'];
        }
    }
    return options;
};

/**
 * returns the current working directory
 * @returns {string}
 */
smartcli.getCwd = function () {
    return process.cwd();
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
smartcli.getAnswer = function(questionString:string, cb) {
    if (typeof questionString != 'string') {
        beautylog.error('no question specified');
        return null;
    }
    //make inquirer compatible question object
    var question = {
        type: "input",
        name: "userFeedback",
        message: questionString,
        validate: function( value ) {
            return true;
        }
    };

    inquirer.prompt([question],function(answers){
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
smartcli.getChoice = function(questionString:string, choiceOptions:string[], cb) {
    if(!Array.isArray(choiceOptions)) {
        return null;
    }

    //make inquirer compatible question object
    var question = {
        type: "list",
        name: "userFeedback",
        message: questionString,
        choices: choiceOptions,
        filter: function( val ) { return val.toLowerCase(); }
    };

    inquirer.prompt(question,function(answers){
        var answer = answers.userFeedback;
        cb(answer);
    });

};


module.exports = smartcli;
