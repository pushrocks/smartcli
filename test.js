/// <reference path="typings/tsd.d.ts" />
var smartcli = require("./index.js");
var bl = require("beautylog");
bl.log('now starting Test');
bl.log('starting with initial CLI commands and options');
var commandsString = 'You specified the following commands:';
var commands = smartcli.getCommands();
for (var key in commands) {
    commandsString = commandsString + ' ' + commands[key];
}
bl.log(commandsString);
if (smartcli.checkCommand('jazz')) {
    bl.log('One of your commands is jazz');
}
else {
    bl.log('None of your commands is jazz');
}
var getAnswerTest = function () {
    smartcli.getAnswer('How do you feel?', function (answer) {
        console.log('The answer is: ' + answer);
        getChoiceTest();
    });
};
var getChoiceTest = function () {
    smartcli.getChoice('What music do you like to hear?', ['Jazz', 'Blues', 'Classical'], function (answer) {
        console.log('The answer is: ' + answer);
        getCwdTest();
    });
};
var getCwdTest = function () {
    console.log('The current directory is: ' + smartcli.getCwd());
};
getAnswerTest();
