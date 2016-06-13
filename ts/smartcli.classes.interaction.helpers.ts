import "typings-global";

import "./smartcli.interfaces";
import plugins = require("./smartcli.plugins");

/**
 * executes callback with answer to question as argument
 * @param questionString the question you want to ask the user
 * @param cb the function to execute with answer as param
 * @returns {null}
 */
export let getAnswer = function(questionString:string, cb) {
    if (typeof questionString != 'string') {
        plugins.beautylog.error('no question specified');
        return null;
    }
    //make inquirer compatible question object
    let question = {
        type: "input",
        name: "userFeedback",
        message: questionString,
        validate: function( value ) {
            return true;
        }
    };

    plugins.inquirer.prompt([question],function(answers){
        let answer = answers.userFeedback;
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
export let getChoice = function(questionString:string, choiceOptions:string[], cb) {
    if(!Array.isArray(choiceOptions)) {
        return null;
    }

    //make inquirer compatible question object
    let question = {
        type: "list",
        name: "userFeedback",
        message: questionString,
        choices: choiceOptions,
        filter: function( val ) { return val.toLowerCase(); }
    };

    plugins.inquirer.prompt(question,function(answers){
        let answer = answers.userFeedback;
        cb(answer);
    });

};