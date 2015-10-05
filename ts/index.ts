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

/**
 * returns the current working directory
 * @returns {string}
 */
smartcli.getCwd = function () {
    return process.cwd();
};

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
