/// <reference path="typings/tsd.d.ts" />
var smartcli = require("./index.js");
var bl = require("beautylog");

bl.log('now starting Test');
bl.log('starting with initial CLI commands and options');

var commandsString:string = 'You specified the following commands:';
var commands = smartcli.getCommands();
for (var key in commands) {
    commandsString = commandsString + ' ' + commands[key];
}
bl.log(commandsString);


var getCwdTest = function(){
    console.log('The current directory is: ' + smartcli.getCwd().path);
};

var checkCommandTest = function() {
    if (smartcli.checkCommand('jazz')) {
        bl.log('One of your commands is jazz');
    } else {
        bl.log('None of your commands is jazz');
    }
};

var getOptionTest = function() {
    console.log('We now test for option --test')
    console.log(smartcli.getOption('test'));
}

var checkOptionTest = function() {

};

var getAnswerTest = function() {
    smartcli.getAnswer('How do you feel?',function(answer){
        console.log('The answer is: ' + answer);
        getChoiceTest();
    });
};

var getChoiceTest = function() {
    smartcli.getChoice('What music do you like to hear?',['Jazz','Blues','Classical'],function(answer){
        console.log('The answer is: ' + answer);
    });
};



//starting command tests
getCwdTest();
checkCommandTest();
getOptionTest();

//starting first interaction test (the other tests are then started via callbacks)
getAnswerTest();