/// <reference path="typings/main.d.ts" />
/// <reference path="./smartcli.interfaces.ts" />
"use strict";
var plugins = require("./smartcli.plugins");
var SmartcliChecks = require("./smartcli.checks");
/**
 *
 * @param commandString
 * @returns {{specified: boolean, name: any, arguments: CliCommandArgument}}
 */
exports.command = function () {
    var cliCommand = {
        specified: SmartcliChecks.commandPresence(),
        name: plugins.argv._[0],
        arguments: exports.commandArgs()
    };
    return cliCommand;
};
/**
 * gets the second or higher value of plugins.argv._ if specified and returns it as commandArgument
 * @param argumentLevel
 * @returns {{specified: (boolean|boolean), name}}
 */
exports.commandArgument = function (argumentLevel) {
    var commandArgument = {
        specified: false,
        name: "undefined",
        level: argumentLevel
    };
    if (argumentLevel < 1) {
        plugins.beautylog.error("smartcli.get.argument cannot be invoked with an argumentLevel smaller than 1");
        return commandArgument;
    }
    if (SmartcliChecks.commandArgumentPresence(argumentLevel)) {
        commandArgument.specified = true;
        commandArgument.name = plugins.argv._[argumentLevel];
    }
    return commandArgument;
};
/**
 * returns array with commandArgs
 * @returns {CliCommandArgument[]}
 */
exports.commandArgs = function () {
    var commandArgs = [];
    var argsArray = exports.commandArray().slice(0);
    argsArray.shift();
    for (var item in argsArray) {
        var commandArgument = {
            specified: true,
            name: argsArray[item],
            level: item + 1
        };
        commandArgs.push(commandArgument);
    }
    return commandArgs;
};
/**
 * returns complete command array
 * @returns {any}
 */
exports.commandArray = function () {
    var commandArray = plugins.argv._;
    return commandArray;
};
/**
 * returns a cli option
 * @param optionName
 * @returns {CliOption}
 */
exports.option = function (optionName) {
    var cliOption = {
        name: optionName,
        specified: false,
        value: false
    };
    if (plugins.smartparam.exists(plugins.argv, optionName)) {
        cliOption.name = optionName;
        cliOption.specified = true;
        cliOption.value = plugins.argv[optionName]; //we already know from the "if" above that the value is available.
    }
    return cliOption;
};
exports.options = function () {
    var options = {};
    for (var key in plugins.argv) {
        if (key != "_") {
            options['key'] = plugins.argv['key'];
        }
    }
    return options;
};
/**
 * returns Directory of cwd
 * @returns {{path: string}}
 */
exports.cwd = function () {
    return {
        path: process.cwd()
    };
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,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a0VBQWtFO0lBQ2pILENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUdTLGVBQU8sR0FBRztJQUNqQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1EsV0FBRyxHQUFHO0lBQ2IsTUFBTSxDQUFDO1FBQ0gsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUU7S0FDdEIsQ0FBQTtBQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJzbWFydGNsaS5nZXR0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc21hcnRjbGkuaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0Y2xpLnBsdWdpbnNcIik7XHJcbmltcG9ydCBTbWFydGNsaUNoZWNrcyA9IHJlcXVpcmUoXCIuL3NtYXJ0Y2xpLmNoZWNrc1wiKTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gY29tbWFuZFN0cmluZ1xyXG4gKiBAcmV0dXJucyB7e3NwZWNpZmllZDogYm9vbGVhbiwgbmFtZTogYW55LCBhcmd1bWVudHM6IENsaUNvbW1hbmRBcmd1bWVudH19XHJcbiAqL1xyXG5leHBvcnQgbGV0IGNvbW1hbmQgPSBmdW5jdGlvbigpOkNsaUNvbW1hbmQge1xyXG4gICAgdmFyIGNsaUNvbW1hbmQgPSB7XHJcbiAgICAgICAgc3BlY2lmaWVkOiBTbWFydGNsaUNoZWNrcy5jb21tYW5kUHJlc2VuY2UoKSxcclxuICAgICAgICBuYW1lOiBwbHVnaW5zLmFyZ3YuX1swXSxcclxuICAgICAgICBhcmd1bWVudHM6IGNvbW1hbmRBcmdzKClcclxuICAgIH1cclxuICAgIHJldHVybiBjbGlDb21tYW5kO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGdldHMgdGhlIHNlY29uZCBvciBoaWdoZXIgdmFsdWUgb2YgcGx1Z2lucy5hcmd2Ll8gaWYgc3BlY2lmaWVkIGFuZCByZXR1cm5zIGl0IGFzIGNvbW1hbmRBcmd1bWVudFxyXG4gKiBAcGFyYW0gYXJndW1lbnRMZXZlbFxyXG4gKiBAcmV0dXJucyB7e3NwZWNpZmllZDogKGJvb2xlYW58Ym9vbGVhbiksIG5hbWV9fVxyXG4gKi9cclxuZXhwb3J0IGxldCBjb21tYW5kQXJndW1lbnQgPSBmdW5jdGlvbihhcmd1bWVudExldmVsKTpDbGlDb21tYW5kQXJndW1lbnQge1xyXG4gICAgdmFyIGNvbW1hbmRBcmd1bWVudDpDbGlDb21tYW5kQXJndW1lbnQgPSB7XHJcbiAgICAgICAgc3BlY2lmaWVkOiBmYWxzZSxcclxuICAgICAgICBuYW1lOiBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgIGxldmVsOmFyZ3VtZW50TGV2ZWxcclxuICAgIH07XHJcbiAgICBpZihhcmd1bWVudExldmVsIDwgMSkge1xyXG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLmVycm9yKFwic21hcnRjbGkuZ2V0LmFyZ3VtZW50IGNhbm5vdCBiZSBpbnZva2VkIHdpdGggYW4gYXJndW1lbnRMZXZlbCBzbWFsbGVyIHRoYW4gMVwiKTtcclxuICAgICAgICByZXR1cm4gY29tbWFuZEFyZ3VtZW50O1xyXG4gICAgfVxyXG4gICAgaWYoU21hcnRjbGlDaGVja3MuY29tbWFuZEFyZ3VtZW50UHJlc2VuY2UoYXJndW1lbnRMZXZlbCkpIHtcclxuICAgICAgICBjb21tYW5kQXJndW1lbnQuc3BlY2lmaWVkID0gdHJ1ZTtcclxuICAgICAgICBjb21tYW5kQXJndW1lbnQubmFtZSA9IHBsdWdpbnMuYXJndi5fW2FyZ3VtZW50TGV2ZWxdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbW1hbmRBcmd1bWVudDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIGFycmF5IHdpdGggY29tbWFuZEFyZ3NcclxuICogQHJldHVybnMge0NsaUNvbW1hbmRBcmd1bWVudFtdfVxyXG4gKi9cclxuZXhwb3J0IGxldCBjb21tYW5kQXJncyA9IGZ1bmN0aW9uKCk6Q2xpQ29tbWFuZEFyZ3VtZW50W10ge1xyXG4gICAgdmFyIGNvbW1hbmRBcmdzOkNsaUNvbW1hbmRBcmd1bWVudFtdID0gW107XHJcbiAgICB2YXIgYXJnc0FycmF5ID0gY29tbWFuZEFycmF5KCkuc2xpY2UoMCk7XHJcbiAgICBhcmdzQXJyYXkuc2hpZnQoKTtcclxuICAgIGZvciAodmFyIGl0ZW0gaW4gYXJnc0FycmF5KXtcclxuICAgICAgICB2YXIgY29tbWFuZEFyZ3VtZW50OkNsaUNvbW1hbmRBcmd1bWVudCA9IHtcclxuICAgICAgICAgICAgc3BlY2lmaWVkOnRydWUsXHJcbiAgICAgICAgICAgIG5hbWU6YXJnc0FycmF5W2l0ZW1dLFxyXG4gICAgICAgICAgICBsZXZlbDogaXRlbSArIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tbWFuZEFyZ3MucHVzaChjb21tYW5kQXJndW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbW1hbmRBcmdzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybnMgY29tcGxldGUgY29tbWFuZCBhcnJheVxyXG4gKiBAcmV0dXJucyB7YW55fVxyXG4gKi9cclxuZXhwb3J0IGxldCBjb21tYW5kQXJyYXkgPSBmdW5jdGlvbiAoKTpzdHJpbmdbXSB7XHJcbiAgICB2YXIgY29tbWFuZEFycmF5ID0gcGx1Z2lucy5hcmd2Ll87XHJcbiAgICByZXR1cm4gY29tbWFuZEFycmF5O1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIGEgY2xpIG9wdGlvblxyXG4gKiBAcGFyYW0gb3B0aW9uTmFtZVxyXG4gKiBAcmV0dXJucyB7Q2xpT3B0aW9ufVxyXG4gKi9cclxuZXhwb3J0IGxldCBvcHRpb24gPSBmdW5jdGlvbihvcHRpb25OYW1lOnN0cmluZyk6Q2xpT3B0aW9uIHtcclxuICAgIHZhciBjbGlPcHRpb246Q2xpT3B0aW9uID0ge1xyXG4gICAgICAgIG5hbWU6b3B0aW9uTmFtZSxcclxuICAgICAgICBzcGVjaWZpZWQ6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGlmIChwbHVnaW5zLnNtYXJ0cGFyYW0uZXhpc3RzKHBsdWdpbnMuYXJndixvcHRpb25OYW1lKSkge1xyXG4gICAgICAgIGNsaU9wdGlvbi5uYW1lID0gb3B0aW9uTmFtZTtcclxuICAgICAgICBjbGlPcHRpb24uc3BlY2lmaWVkID0gdHJ1ZTtcclxuICAgICAgICBjbGlPcHRpb24udmFsdWUgPSBwbHVnaW5zLmFyZ3Zbb3B0aW9uTmFtZV0gLy93ZSBhbHJlYWR5IGtub3cgZnJvbSB0aGUgXCJpZlwiIGFib3ZlIHRoYXQgdGhlIHZhbHVlIGlzIGF2YWlsYWJsZS5cclxuICAgIH1cclxuICAgIHJldHVybiBjbGlPcHRpb247XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGxldCBvcHRpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHBsdWdpbnMuYXJndikge1xyXG4gICAgICAgIGlmIChrZXkgIT0gXCJfXCIpIHtcclxuICAgICAgICAgICAgb3B0aW9uc1sna2V5J10gPSBwbHVnaW5zLmFyZ3ZbJ2tleSddO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybnMgRGlyZWN0b3J5IG9mIGN3ZFxyXG4gKiBAcmV0dXJucyB7e3BhdGg6IHN0cmluZ319XHJcbiAqL1xyXG5leHBvcnQgbGV0IGN3ZCA9IGZ1bmN0aW9uKCk6RGlyZWN0b3J5IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogcHJvY2Vzcy5jd2QoKVxyXG4gICAgfVxyXG59OyJdfQ==
