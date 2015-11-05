/// <reference path="typings/tsd.d.ts" />
/// <reference path="./smartcli.plugins.ts" />
/// <reference path="./smartcli.interfaces.ts" />
/// <reference path="./smartcli.checks.ts" />
/// <reference path="./smartcli.getters.ts" />

var plugins = smartcliPlugins.init(); //get all the required npm modules under plugins

//define the smartcli object
var smartcli:any = {};

//add plugins from above for direct use
smartcli.inquirer = plugins.inquirer; //inquirer is for asking questions
smartcli.cliff = plugins.cliff; // formats cli output
smartcli.argv = plugins.argv; //argv gets initial cli commands and options.

//init checks. Checks return boolean. That means they can be used as question with an answer of yes or no.

smartcliChecks.init(); // is defined in smartcli.checks.ts










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
        plugins.beautylog.error('no question specified');
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

    plugins.inquirer.prompt([question],function(answers){
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

    plugins.inquirer.prompt(question,function(answers){
        var answer = answers.userFeedback;
        cb(answer);
    });

};


module.exports = smartcli;
