/// <reference path="typings/tsd.d.ts" />
var smartcli = require("./index.js");
var bl = require("beautylog")("os");

bl.log('now starting Test');
bl.log('starting with initial CLI commands and options');

var commandsString:string = 'You specified the following commands:';
var commands = smartcli.get.commandArray();
for (var key in commands) {
    commandsString = commandsString + ' ' + commands[key];
}
bl.log(commandsString);


/* ------------------------------------------------------------------ *
 * ------------------- CHECKS TESTS --------------------------------- *
 * ------------------------------------------------------------------ */


/**
 *
 */
var checkCommandTest = function() {
    if (smartcli.check.command('jazz')) {
        bl.success('One of your commands is jazz. It is supposed to be there. Perfect!');
    } else {
        bl.error('None of your commands is jazz. You need to check this');
        process.exit(1);
    }
    if (!smartcli.check.command('punk')) {
        bl.success('None of your commands is punk. It is not supposed to be there. Perfect!');
    } else {
        bl.error('One of your commands seems to be punk. Something is wrong here');
        process.exit(1);
    }
};
checkCommandTest();


var checkCommandPresenceTest = function() {
    if (smartcli.check.commandPresence()) {
        bl.success('There are commands present, like supposed to. Perfect!');
    } else {
        bl.error('There do not seem to be any commands present... This is wrong');
        process.exit(1);
    }
};
checkCommandPresenceTest();


var checkCommandArgumentTest = function() {
    if (smartcli.check.commandArgument("jam",1)) {
        bl.success('There is a level 1 argument! Perfect!');
    } else {
        bl.error('There seems to be no level 1 argument... This is wrong');
        process.exit(1);
    }
    if (!smartcli.check.commandArgument("session",2)) {
        bl.success('There is no level 2 argument with the name of "session"! Perfect!');
    } else {
        bl.error('There seems to be a level 2 argument with the name of "session"! This is wrong');
        process.exit(1);
    }
};
checkCommandArgumentTest();

var checkCommandArgumentPresenceTest = function() {
    if (smartcli.check.commandArgumentPresence(1)) {
        bl.success('There is a level 1 argument! Perfect!');
    } else {
        bl.error('There seems to be no level 1 argument... This is wrong');
        process.exit(1);
    }
    if (!smartcli.check.commandArgumentPresence(2)) {
        bl.success('There is no level 2 argument! Perfect!');
    } else {
        bl.error('There seems to be a level 2 argument... This is wrong');
        process.exit(1);
    }
};
checkCommandArgumentPresenceTest();

/* ------------------------------------------------------------------ *
 * ------------------- GETTERS TESTS -------------------------------- *
 * ------------------------------------------------------------------ */
var getCwdTest = function(){
    bl.info('The current directory is: ' + smartcli.get.cwd().path);
};
getCwdTest();


/* ------------------------------------------------------------------ *
 * ------------------- INTERACTION TESTS ---------------------------- *
 * ------------------------------------------------------------------ */


var interactionGetAnswerTest = function() {
    smartcli.interaction.getAnswer('How do you feel?',function(answer){
        console.log('The answer is: ' + answer);
        interactionGetChoiceTest();
    });
};



var interactionGetChoiceTest = function() {
    smartcli.interaction.getChoice('What music do you like to hear?',['Jazz','Blues','Classical'],function(answer){
        console.log('The answer is: ' + answer);
        endTests();
    });
};

var endTests = function() {
    bl.ok("No more tests!");
    bl.success("Tests completed successfully!");
};

if(!smartcli.check.option("silent")){
    interactionGetAnswerTest();
} else {
    bl.info("--silent option is specified, thus we are not running interaction tests.");
    endTests();
};



