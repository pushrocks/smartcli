/// <reference path="typings/main.d.ts" />
var smartcli = require("../index.js");
var beautylog = require("beautylog");

var commandsString:string = 'You specified the following commands:';
var commands = smartcli.get.commandArray();
for (var key in commands) {
    commandsString = commandsString + ' ' + commands[key];
}
beautylog.log(commandsString);


/* ------------------------------------------------------------------ *
 * ------------------- CHECKS TESTS --------------------------------- *
 * ------------------------------------------------------------------ */


/**
 *
 */
var checkCommandTest = function() {
    if (smartcli.check.command('jazz')) {
        beautylog.success('One of your commands is jazz. It is supposed to be there. Perfect!');
    } else {
        beautylog.error('None of your commands is jazz. You need to check this');
        process.exit(1);
    }
    if (!smartcli.check.command('punk')) {
        beautylog.success('None of your commands is punk. It is not supposed to be there. Perfect!');
    } else {
        beautylog.error('One of your commands seems to be punk. Something is wrong here');
        process.exit(1);
    }
};
checkCommandTest();


var checkCommandPresenceTest = function() {
    if (smartcli.check.commandPresence()) {
        beautylog.success('There are commands present, like supposed to. Perfect!');
    } else {
        beautylog.error('There do not seem to be any commands present... This is wrong');
        process.exit(1);
    }
};
checkCommandPresenceTest();


var checkCommandArgumentTest = function() {
    if (smartcli.check.commandArgument("jam",1)) {
        beautylog.success('There is a level 1 argument! Perfect!');
    } else {
        beautylog.error('There seems to be no level 1 argument... This is wrong');
        process.exit(1);
    }
    if (!smartcli.check.commandArgument("session",2)) {
        beautylog.success('There is no level 2 argument with the name of "session"! Perfect!');
    } else {
        beautylog.error('There seems to be a level 2 argument with the name of "session"! This is wrong');
        process.exit(1);
    }
};
checkCommandArgumentTest();

var checkCommandArgumentPresenceTest = function() {
    if (smartcli.check.commandArgumentPresence(1)) {
        beautylog.success('There is a level 1 argument! Perfect!');
    } else {
        beautylog.error('There seems to be no level 1 argument... This is wrong');
        process.exit(1);
    }
    if (!smartcli.check.commandArgumentPresence(2)) {
        beautylog.success('There is no level 2 argument! Perfect!');
    } else {
        beautylog.error('There seems to be a level 2 argument... This is wrong');
        process.exit(1);
    }
};
checkCommandArgumentPresenceTest();

/* ------------------------------------------------------------------ *
 * ------------------- GETTERS TESTS -------------------------------- *
 * ------------------------------------------------------------------ */
var getCommandTest = function(){
    var cliCommand = smartcli.get.command();
    if(cliCommand.name == "jazz") {
        beautylog.success('The specified command name is "jazz". Perfect!');
    } else {
        beautylog.error('The specified command name is not "jazz". Something is wrong!');
        process.exit(1);
    }

};
getCommandTest();

var getCommandArgumentTest = function() {
    var cliArgument = smartcli.get.commandArgument(1);
    var cliArgument2 = smartcli.get.commandArgument(2);
    if(cliArgument.name == "jam") {
        beautylog.success('The first specified command argument name is "jam". Perfect!');
    } else {
        beautylog.error('The first specified command argument name is not "jam". Something is wrong!');
        process.exit(1);
    }

    if(cliArgument2.name == "undefined") {
        beautylog.success('The second specified command argument name is "undefined". Perfect!');
    } else {
        beautylog.error('The second specified command argument name is not "undefined". Something is wrong!');
        process.exit(1);
    }
};
getCommandArgumentTest();

var getCommandArgsTest = function() {
    var commandArgs = smartcli.get.commandArgs();
    if(commandArgs[0].name == "jam") {
        beautylog.success("first command argument is 'jam'. Perfect!");
    } else {
        beautylog.error("first command argument is not 'jam'. Something is wromg!");
        console.log(commandArgs[0].name);
        process.exit(1);
    }
};
getCommandArgsTest();

var getOptionTest = function() {
    var cliOption = smartcli.get.option("awesome");
    var cliOption2 = smartcli.get.option("terrific");
    if(cliOption.specified){
        beautylog.success("awesome is specified. Perfect!")
    } else {
        beautylog.error("awesome is not specified. Somehthing is wrong");
        process.exit(1);
    }
    if(!cliOption2.specified){
        beautylog.success("terrific is not specified. Perfect!")
    } else {
        beautylog.error("terrific is specified. Somehthing is wrong");
        process.exit(1);
    }
};
getOptionTest();

var getCwdTest = function(){
    beautylog.info('The current directory is: ' + smartcli.get.cwd().path);
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
    beautylog.ok("No more tests!");
    beautylog.success("Tests completed successfully!");
};

if(!smartcli.check.option("silent")){
    interactionGetAnswerTest();
} else {
    beautylog.info("--silent option is specified, thus we are not running interaction tests.");
    endTests();
};



