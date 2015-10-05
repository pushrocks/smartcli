/// <reference path="typings/tsd.d.ts" />
var smartcli = require("./index.js");
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
