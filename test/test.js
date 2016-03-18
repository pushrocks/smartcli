/// <reference path="../ts/typings/main.d.ts" />
var smartcli = require("../dist/index.js");
var beautylog = require("beautylog");
var commandsString = 'You specified the following commands:';
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
var checkCommandTest = function () {
    if (smartcli.check.command('jazz')) {
        beautylog.success('One of your commands is jazz. It is supposed to be there. Perfect!');
    }
    else {
        beautylog.error('None of your commands is jazz. You need to check this');
        process.exit(1);
    }
    if (!smartcli.check.command('punk')) {
        beautylog.success('None of your commands is punk. It is not supposed to be there. Perfect!');
    }
    else {
        beautylog.error('One of your commands seems to be punk. Something is wrong here');
        process.exit(1);
    }
};
checkCommandTest();
var checkCommandPresenceTest = function () {
    if (smartcli.check.commandPresence()) {
        beautylog.success('There are commands present, like supposed to. Perfect!');
    }
    else {
        beautylog.error('There do not seem to be any commands present... This is wrong');
        process.exit(1);
    }
};
checkCommandPresenceTest();
var checkCommandArgumentTest = function () {
    if (smartcli.check.commandArgument("jam", 1)) {
        beautylog.success('There is a level 1 argument! Perfect!');
    }
    else {
        beautylog.error('There seems to be no level 1 argument... This is wrong');
        process.exit(1);
    }
    if (!smartcli.check.commandArgument("session", 2)) {
        beautylog.success('There is no level 2 argument with the name of "session"! Perfect!');
    }
    else {
        beautylog.error('There seems to be a level 2 argument with the name of "session"! This is wrong');
        process.exit(1);
    }
};
checkCommandArgumentTest();
var checkCommandArgumentPresenceTest = function () {
    if (smartcli.check.commandArgumentPresence(1)) {
        beautylog.success('There is a level 1 argument! Perfect!');
    }
    else {
        beautylog.error('There seems to be no level 1 argument... This is wrong');
        process.exit(1);
    }
    if (!smartcli.check.commandArgumentPresence(2)) {
        beautylog.success('There is no level 2 argument! Perfect!');
    }
    else {
        beautylog.error('There seems to be a level 2 argument... This is wrong');
        process.exit(1);
    }
};
checkCommandArgumentPresenceTest();
/* ------------------------------------------------------------------ *
 * ------------------- GETTERS TESTS -------------------------------- *
 * ------------------------------------------------------------------ */
var getCommandTest = function () {
    var cliCommand = smartcli.get.command();
    if (cliCommand.name == "jazz") {
        beautylog.success('The specified command name is "jazz". Perfect!');
    }
    else {
        beautylog.error('The specified command name is not "jazz". Something is wrong!');
        process.exit(1);
    }
};
getCommandTest();
var getCommandArgumentTest = function () {
    var cliArgument = smartcli.get.commandArgument(1);
    var cliArgument2 = smartcli.get.commandArgument(2);
    if (cliArgument.name == "jam") {
        beautylog.success('The first specified command argument name is "jam". Perfect!');
    }
    else {
        beautylog.error('The first specified command argument name is not "jam". Something is wrong!');
        process.exit(1);
    }
    if (cliArgument2.name == "undefined") {
        beautylog.success('The second specified command argument name is "undefined". Perfect!');
    }
    else {
        beautylog.error('The second specified command argument name is not "undefined". Something is wrong!');
        process.exit(1);
    }
};
getCommandArgumentTest();
var getCommandArgsTest = function () {
    var commandArgs = smartcli.get.commandArgs();
    if (commandArgs[0].name == "jam") {
        beautylog.success("first command argument is 'jam'. Perfect!");
    }
    else {
        beautylog.error("first command argument is not 'jam'. Something is wromg!");
        console.log(commandArgs[0].name);
        process.exit(1);
    }
};
getCommandArgsTest();
var getOptionTest = function () {
    var cliOption = smartcli.get.option("awesome");
    var cliOption2 = smartcli.get.option("terrific");
    if (cliOption.specified) {
        beautylog.success("awesome is specified. Perfect!");
    }
    else {
        beautylog.error("awesome is not specified. Somehthing is wrong");
        process.exit(1);
    }
    if (!cliOption2.specified) {
        beautylog.success("terrific is not specified. Perfect!");
    }
    else {
        beautylog.error("terrific is specified. Somehthing is wrong");
        process.exit(1);
    }
};
getOptionTest();
var getCwdTest = function () {
    beautylog.info('The current directory is: ' + smartcli.get.cwd().path);
};
getCwdTest();
/* ------------------------------------------------------------------ *
 * ------------------- INTERACTION TESTS ---------------------------- *
 * ------------------------------------------------------------------ */
var interactionGetAnswerTest = function () {
    smartcli.interaction.getAnswer('How do you feel?', function (answer) {
        console.log('The answer is: ' + answer);
        interactionGetChoiceTest();
    });
};
var interactionGetChoiceTest = function () {
    smartcli.interaction.getChoice('What music do you like to hear?', ['Jazz', 'Blues', 'Classical'], function (answer) {
        console.log('The answer is: ' + answer);
        endTests();
    });
};
var endTests = function () {
    beautylog.ok("No more tests!");
    beautylog.success("Tests completed successfully!");
};
if (!smartcli.check.option("silent")) {
    interactionGetAnswerTest();
}
else {
    beautylog.info("--silent option is specified, thus we are not running interaction tests.");
    endTests();
}
;

//# sourceMappingURL=data:application/json;base64,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aWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG52YXIgc21hcnRjbGkgPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcbnZhciBiZWF1dHlsb2cgPSByZXF1aXJlKFwiYmVhdXR5bG9nXCIpO1xuXG52YXIgY29tbWFuZHNTdHJpbmc6c3RyaW5nID0gJ1lvdSBzcGVjaWZpZWQgdGhlIGZvbGxvd2luZyBjb21tYW5kczonO1xudmFyIGNvbW1hbmRzID0gc21hcnRjbGkuZ2V0LmNvbW1hbmRBcnJheSgpO1xuZm9yICh2YXIga2V5IGluIGNvbW1hbmRzKSB7XG4gICAgY29tbWFuZHNTdHJpbmcgPSBjb21tYW5kc1N0cmluZyArICcgJyArIGNvbW1hbmRzW2tleV07XG59XG5iZWF1dHlsb2cubG9nKGNvbW1hbmRzU3RyaW5nKTtcblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLSBDSEVDS1MgVEVTVFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cbi8qKlxuICpcbiAqL1xudmFyIGNoZWNrQ29tbWFuZFRlc3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoc21hcnRjbGkuY2hlY2suY29tbWFuZCgnamF6eicpKSB7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKCdPbmUgb2YgeW91ciBjb21tYW5kcyBpcyBqYXp6LiBJdCBpcyBzdXBwb3NlZCB0byBiZSB0aGVyZS4gUGVyZmVjdCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBiZWF1dHlsb2cuZXJyb3IoJ05vbmUgb2YgeW91ciBjb21tYW5kcyBpcyBqYXp6LiBZb3UgbmVlZCB0byBjaGVjayB0aGlzJyk7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9XG4gICAgaWYgKCFzbWFydGNsaS5jaGVjay5jb21tYW5kKCdwdW5rJykpIHtcbiAgICAgICAgYmVhdXR5bG9nLnN1Y2Nlc3MoJ05vbmUgb2YgeW91ciBjb21tYW5kcyBpcyBwdW5rLiBJdCBpcyBub3Qgc3VwcG9zZWQgdG8gYmUgdGhlcmUuIFBlcmZlY3QhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmVhdXR5bG9nLmVycm9yKCdPbmUgb2YgeW91ciBjb21tYW5kcyBzZWVtcyB0byBiZSBwdW5rLiBTb21ldGhpbmcgaXMgd3JvbmcgaGVyZScpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxufTtcbmNoZWNrQ29tbWFuZFRlc3QoKTtcblxuXG52YXIgY2hlY2tDb21tYW5kUHJlc2VuY2VUZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHNtYXJ0Y2xpLmNoZWNrLmNvbW1hbmRQcmVzZW5jZSgpKSB7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKCdUaGVyZSBhcmUgY29tbWFuZHMgcHJlc2VudCwgbGlrZSBzdXBwb3NlZCB0by4gUGVyZmVjdCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBiZWF1dHlsb2cuZXJyb3IoJ1RoZXJlIGRvIG5vdCBzZWVtIHRvIGJlIGFueSBjb21tYW5kcyBwcmVzZW50Li4uIFRoaXMgaXMgd3JvbmcnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbn07XG5jaGVja0NvbW1hbmRQcmVzZW5jZVRlc3QoKTtcblxuXG52YXIgY2hlY2tDb21tYW5kQXJndW1lbnRUZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHNtYXJ0Y2xpLmNoZWNrLmNvbW1hbmRBcmd1bWVudChcImphbVwiLDEpKSB7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKCdUaGVyZSBpcyBhIGxldmVsIDEgYXJndW1lbnQhIFBlcmZlY3QhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmVhdXR5bG9nLmVycm9yKCdUaGVyZSBzZWVtcyB0byBiZSBubyBsZXZlbCAxIGFyZ3VtZW50Li4uIFRoaXMgaXMgd3JvbmcnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbiAgICBpZiAoIXNtYXJ0Y2xpLmNoZWNrLmNvbW1hbmRBcmd1bWVudChcInNlc3Npb25cIiwyKSkge1xuICAgICAgICBiZWF1dHlsb2cuc3VjY2VzcygnVGhlcmUgaXMgbm8gbGV2ZWwgMiBhcmd1bWVudCB3aXRoIHRoZSBuYW1lIG9mIFwic2Vzc2lvblwiISBQZXJmZWN0IScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJlYXV0eWxvZy5lcnJvcignVGhlcmUgc2VlbXMgdG8gYmUgYSBsZXZlbCAyIGFyZ3VtZW50IHdpdGggdGhlIG5hbWUgb2YgXCJzZXNzaW9uXCIhIFRoaXMgaXMgd3JvbmcnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbn07XG5jaGVja0NvbW1hbmRBcmd1bWVudFRlc3QoKTtcblxudmFyIGNoZWNrQ29tbWFuZEFyZ3VtZW50UHJlc2VuY2VUZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHNtYXJ0Y2xpLmNoZWNrLmNvbW1hbmRBcmd1bWVudFByZXNlbmNlKDEpKSB7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKCdUaGVyZSBpcyBhIGxldmVsIDEgYXJndW1lbnQhIFBlcmZlY3QhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmVhdXR5bG9nLmVycm9yKCdUaGVyZSBzZWVtcyB0byBiZSBubyBsZXZlbCAxIGFyZ3VtZW50Li4uIFRoaXMgaXMgd3JvbmcnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbiAgICBpZiAoIXNtYXJ0Y2xpLmNoZWNrLmNvbW1hbmRBcmd1bWVudFByZXNlbmNlKDIpKSB7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKCdUaGVyZSBpcyBubyBsZXZlbCAyIGFyZ3VtZW50ISBQZXJmZWN0IScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJlYXV0eWxvZy5lcnJvcignVGhlcmUgc2VlbXMgdG8gYmUgYSBsZXZlbCAyIGFyZ3VtZW50Li4uIFRoaXMgaXMgd3JvbmcnKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbn07XG5jaGVja0NvbW1hbmRBcmd1bWVudFByZXNlbmNlVGVzdCgpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLSBHRVRURVJTIFRFU1RTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xudmFyIGdldENvbW1hbmRUZXN0ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgY2xpQ29tbWFuZCA9IHNtYXJ0Y2xpLmdldC5jb21tYW5kKCk7XG4gICAgaWYoY2xpQ29tbWFuZC5uYW1lID09IFwiamF6elwiKSB7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKCdUaGUgc3BlY2lmaWVkIGNvbW1hbmQgbmFtZSBpcyBcImphenpcIi4gUGVyZmVjdCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBiZWF1dHlsb2cuZXJyb3IoJ1RoZSBzcGVjaWZpZWQgY29tbWFuZCBuYW1lIGlzIG5vdCBcImphenpcIi4gU29tZXRoaW5nIGlzIHdyb25nIScpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxuXG59O1xuZ2V0Q29tbWFuZFRlc3QoKTtcblxudmFyIGdldENvbW1hbmRBcmd1bWVudFRlc3QgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2xpQXJndW1lbnQgPSBzbWFydGNsaS5nZXQuY29tbWFuZEFyZ3VtZW50KDEpO1xuICAgIHZhciBjbGlBcmd1bWVudDIgPSBzbWFydGNsaS5nZXQuY29tbWFuZEFyZ3VtZW50KDIpO1xuICAgIGlmKGNsaUFyZ3VtZW50Lm5hbWUgPT0gXCJqYW1cIikge1xuICAgICAgICBiZWF1dHlsb2cuc3VjY2VzcygnVGhlIGZpcnN0IHNwZWNpZmllZCBjb21tYW5kIGFyZ3VtZW50IG5hbWUgaXMgXCJqYW1cIi4gUGVyZmVjdCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBiZWF1dHlsb2cuZXJyb3IoJ1RoZSBmaXJzdCBzcGVjaWZpZWQgY29tbWFuZCBhcmd1bWVudCBuYW1lIGlzIG5vdCBcImphbVwiLiBTb21ldGhpbmcgaXMgd3JvbmchJyk7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9XG5cbiAgICBpZihjbGlBcmd1bWVudDIubmFtZSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKCdUaGUgc2Vjb25kIHNwZWNpZmllZCBjb21tYW5kIGFyZ3VtZW50IG5hbWUgaXMgXCJ1bmRlZmluZWRcIi4gUGVyZmVjdCEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBiZWF1dHlsb2cuZXJyb3IoJ1RoZSBzZWNvbmQgc3BlY2lmaWVkIGNvbW1hbmQgYXJndW1lbnQgbmFtZSBpcyBub3QgXCJ1bmRlZmluZWRcIi4gU29tZXRoaW5nIGlzIHdyb25nIScpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxufTtcbmdldENvbW1hbmRBcmd1bWVudFRlc3QoKTtcblxudmFyIGdldENvbW1hbmRBcmdzVGVzdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21tYW5kQXJncyA9IHNtYXJ0Y2xpLmdldC5jb21tYW5kQXJncygpO1xuICAgIGlmKGNvbW1hbmRBcmdzWzBdLm5hbWUgPT0gXCJqYW1cIikge1xuICAgICAgICBiZWF1dHlsb2cuc3VjY2VzcyhcImZpcnN0IGNvbW1hbmQgYXJndW1lbnQgaXMgJ2phbScuIFBlcmZlY3QhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJlYXV0eWxvZy5lcnJvcihcImZpcnN0IGNvbW1hbmQgYXJndW1lbnQgaXMgbm90ICdqYW0nLiBTb21ldGhpbmcgaXMgd3JvbWchXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb21tYW5kQXJnc1swXS5uYW1lKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbn07XG5nZXRDb21tYW5kQXJnc1Rlc3QoKTtcblxudmFyIGdldE9wdGlvblRlc3QgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2xpT3B0aW9uID0gc21hcnRjbGkuZ2V0Lm9wdGlvbihcImF3ZXNvbWVcIik7XG4gICAgdmFyIGNsaU9wdGlvbjIgPSBzbWFydGNsaS5nZXQub3B0aW9uKFwidGVycmlmaWNcIik7XG4gICAgaWYoY2xpT3B0aW9uLnNwZWNpZmllZCl7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKFwiYXdlc29tZSBpcyBzcGVjaWZpZWQuIFBlcmZlY3QhXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmVhdXR5bG9nLmVycm9yKFwiYXdlc29tZSBpcyBub3Qgc3BlY2lmaWVkLiBTb21laHRoaW5nIGlzIHdyb25nXCIpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxuICAgIGlmKCFjbGlPcHRpb24yLnNwZWNpZmllZCl7XG4gICAgICAgIGJlYXV0eWxvZy5zdWNjZXNzKFwidGVycmlmaWMgaXMgbm90IHNwZWNpZmllZC4gUGVyZmVjdCFcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBiZWF1dHlsb2cuZXJyb3IoXCJ0ZXJyaWZpYyBpcyBzcGVjaWZpZWQuIFNvbWVodGhpbmcgaXMgd3JvbmdcIik7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9XG59O1xuZ2V0T3B0aW9uVGVzdCgpO1xuXG52YXIgZ2V0Q3dkVGVzdCA9IGZ1bmN0aW9uKCl7XG4gICAgYmVhdXR5bG9nLmluZm8oJ1RoZSBjdXJyZW50IGRpcmVjdG9yeSBpczogJyArIHNtYXJ0Y2xpLmdldC5jd2QoKS5wYXRoKTtcbn07XG5nZXRDd2RUZXN0KCk7XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0gSU5URVJBQ1RJT04gVEVTVFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG52YXIgaW50ZXJhY3Rpb25HZXRBbnN3ZXJUZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgc21hcnRjbGkuaW50ZXJhY3Rpb24uZ2V0QW5zd2VyKCdIb3cgZG8geW91IGZlZWw/JyxmdW5jdGlvbihhbnN3ZXIpe1xuICAgICAgICBjb25zb2xlLmxvZygnVGhlIGFuc3dlciBpczogJyArIGFuc3dlcik7XG4gICAgICAgIGludGVyYWN0aW9uR2V0Q2hvaWNlVGVzdCgpO1xuICAgIH0pO1xufTtcblxuXG5cbnZhciBpbnRlcmFjdGlvbkdldENob2ljZVRlc3QgPSBmdW5jdGlvbigpIHtcbiAgICBzbWFydGNsaS5pbnRlcmFjdGlvbi5nZXRDaG9pY2UoJ1doYXQgbXVzaWMgZG8geW91IGxpa2UgdG8gaGVhcj8nLFsnSmF6eicsJ0JsdWVzJywnQ2xhc3NpY2FsJ10sZnVuY3Rpb24oYW5zd2VyKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSBhbnN3ZXIgaXM6ICcgKyBhbnN3ZXIpO1xuICAgICAgICBlbmRUZXN0cygpO1xuICAgIH0pO1xufTtcblxudmFyIGVuZFRlc3RzID0gZnVuY3Rpb24oKSB7XG4gICAgYmVhdXR5bG9nLm9rKFwiTm8gbW9yZSB0ZXN0cyFcIik7XG4gICAgYmVhdXR5bG9nLnN1Y2Nlc3MoXCJUZXN0cyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbn07XG5cbmlmKCFzbWFydGNsaS5jaGVjay5vcHRpb24oXCJzaWxlbnRcIikpe1xuICAgIGludGVyYWN0aW9uR2V0QW5zd2VyVGVzdCgpO1xufSBlbHNlIHtcbiAgICBiZWF1dHlsb2cuaW5mbyhcIi0tc2lsZW50IG9wdGlvbiBpcyBzcGVjaWZpZWQsIHRodXMgd2UgYXJlIG5vdCBydW5uaW5nIGludGVyYWN0aW9uIHRlc3RzLlwiKTtcbiAgICBlbmRUZXN0cygpO1xufTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
