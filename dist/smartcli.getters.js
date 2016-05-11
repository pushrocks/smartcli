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
        var commandArgument_1 = {
            specified: true,
            name: argsArray[item],
            level: parseInt(item) + 1
        };
        commandArgs.push(commandArgument_1);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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VSxDQUFDLENBQUEsQ0FBQyxrRUFBa0U7SUFDakgsQ0FBQztJQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBR1MsZUFBTyxHQUFHO0lBQ2pCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDUSxXQUFHLEdBQUc7SUFDYixNQUFNLENBQUM7UUFDSCxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtLQUN0QixDQUFBO0FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0Y2xpLmdldHRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9tYWluLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9zbWFydGNsaS5pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRjbGkucGx1Z2luc1wiKTtcclxuaW1wb3J0IFNtYXJ0Y2xpQ2hlY2tzID0gcmVxdWlyZShcIi4vc21hcnRjbGkuY2hlY2tzXCIpO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBjb21tYW5kU3RyaW5nXHJcbiAqIEByZXR1cm5zIHt7c3BlY2lmaWVkOiBib29sZWFuLCBuYW1lOiBhbnksIGFyZ3VtZW50czogQ2xpQ29tbWFuZEFyZ3VtZW50fX1cclxuICovXHJcbmV4cG9ydCBsZXQgY29tbWFuZCA9IGZ1bmN0aW9uKCk6Q2xpQ29tbWFuZCB7XHJcbiAgICB2YXIgY2xpQ29tbWFuZCA9IHtcclxuICAgICAgICBzcGVjaWZpZWQ6IFNtYXJ0Y2xpQ2hlY2tzLmNvbW1hbmRQcmVzZW5jZSgpLFxyXG4gICAgICAgIG5hbWU6IHBsdWdpbnMuYXJndi5fWzBdLFxyXG4gICAgICAgIGFyZ3VtZW50czogY29tbWFuZEFyZ3MoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsaUNvbW1hbmQ7XHJcbn07XHJcblxyXG4vKipcclxuICogZ2V0cyB0aGUgc2Vjb25kIG9yIGhpZ2hlciB2YWx1ZSBvZiBwbHVnaW5zLmFyZ3YuXyBpZiBzcGVjaWZpZWQgYW5kIHJldHVybnMgaXQgYXMgY29tbWFuZEFyZ3VtZW50XHJcbiAqIEBwYXJhbSBhcmd1bWVudExldmVsXHJcbiAqIEByZXR1cm5zIHt7c3BlY2lmaWVkOiAoYm9vbGVhbnxib29sZWFuKSwgbmFtZX19XHJcbiAqL1xyXG5leHBvcnQgbGV0IGNvbW1hbmRBcmd1bWVudCA9IGZ1bmN0aW9uKGFyZ3VtZW50TGV2ZWwpOkNsaUNvbW1hbmRBcmd1bWVudCB7XHJcbiAgICB2YXIgY29tbWFuZEFyZ3VtZW50OkNsaUNvbW1hbmRBcmd1bWVudCA9IHtcclxuICAgICAgICBzcGVjaWZpZWQ6IGZhbHNlLFxyXG4gICAgICAgIG5hbWU6IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgbGV2ZWw6YXJndW1lbnRMZXZlbFxyXG4gICAgfTtcclxuICAgIGlmKGFyZ3VtZW50TGV2ZWwgPCAxKSB7XHJcbiAgICAgICAgcGx1Z2lucy5iZWF1dHlsb2cuZXJyb3IoXCJzbWFydGNsaS5nZXQuYXJndW1lbnQgY2Fubm90IGJlIGludm9rZWQgd2l0aCBhbiBhcmd1bWVudExldmVsIHNtYWxsZXIgdGhhbiAxXCIpO1xyXG4gICAgICAgIHJldHVybiBjb21tYW5kQXJndW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZihTbWFydGNsaUNoZWNrcy5jb21tYW5kQXJndW1lbnRQcmVzZW5jZShhcmd1bWVudExldmVsKSkge1xyXG4gICAgICAgIGNvbW1hbmRBcmd1bWVudC5zcGVjaWZpZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbW1hbmRBcmd1bWVudC5uYW1lID0gcGx1Z2lucy5hcmd2Ll9bYXJndW1lbnRMZXZlbF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tbWFuZEFyZ3VtZW50O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybnMgYXJyYXkgd2l0aCBjb21tYW5kQXJnc1xyXG4gKiBAcmV0dXJucyB7Q2xpQ29tbWFuZEFyZ3VtZW50W119XHJcbiAqL1xyXG5leHBvcnQgbGV0IGNvbW1hbmRBcmdzID0gZnVuY3Rpb24oKTpDbGlDb21tYW5kQXJndW1lbnRbXSB7XHJcbiAgICB2YXIgY29tbWFuZEFyZ3M6Q2xpQ29tbWFuZEFyZ3VtZW50W10gPSBbXTtcclxuICAgIHZhciBhcmdzQXJyYXkgPSBjb21tYW5kQXJyYXkoKS5zbGljZSgwKTtcclxuICAgIGFyZ3NBcnJheS5zaGlmdCgpO1xyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBhcmdzQXJyYXkpe1xyXG4gICAgICAgIGxldCBjb21tYW5kQXJndW1lbnQ6Q2xpQ29tbWFuZEFyZ3VtZW50ID0ge1xyXG4gICAgICAgICAgICBzcGVjaWZpZWQ6dHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTphcmdzQXJyYXlbaXRlbV0sXHJcbiAgICAgICAgICAgIGxldmVsOiBwYXJzZUludChpdGVtKSArIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tbWFuZEFyZ3MucHVzaChjb21tYW5kQXJndW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbW1hbmRBcmdzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybnMgY29tcGxldGUgY29tbWFuZCBhcnJheVxyXG4gKiBAcmV0dXJucyB7YW55fVxyXG4gKi9cclxuZXhwb3J0IGxldCBjb21tYW5kQXJyYXkgPSBmdW5jdGlvbiAoKTpzdHJpbmdbXSB7XHJcbiAgICB2YXIgY29tbWFuZEFycmF5ID0gcGx1Z2lucy5hcmd2Ll87XHJcbiAgICByZXR1cm4gY29tbWFuZEFycmF5O1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIGEgY2xpIG9wdGlvblxyXG4gKiBAcGFyYW0gb3B0aW9uTmFtZVxyXG4gKiBAcmV0dXJucyB7Q2xpT3B0aW9ufVxyXG4gKi9cclxuZXhwb3J0IGxldCBvcHRpb24gPSBmdW5jdGlvbihvcHRpb25OYW1lOnN0cmluZyk6Q2xpT3B0aW9uIHtcclxuICAgIHZhciBjbGlPcHRpb246Q2xpT3B0aW9uID0ge1xyXG4gICAgICAgIG5hbWU6b3B0aW9uTmFtZSxcclxuICAgICAgICBzcGVjaWZpZWQ6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGlmIChwbHVnaW5zLnNtYXJ0cGFyYW0uZXhpc3RzKHBsdWdpbnMuYXJndixvcHRpb25OYW1lKSkge1xyXG4gICAgICAgIGNsaU9wdGlvbi5uYW1lID0gb3B0aW9uTmFtZTtcclxuICAgICAgICBjbGlPcHRpb24uc3BlY2lmaWVkID0gdHJ1ZTtcclxuICAgICAgICBjbGlPcHRpb24udmFsdWUgPSBwbHVnaW5zLmFyZ3Zbb3B0aW9uTmFtZV0gLy93ZSBhbHJlYWR5IGtub3cgZnJvbSB0aGUgXCJpZlwiIGFib3ZlIHRoYXQgdGhlIHZhbHVlIGlzIGF2YWlsYWJsZS5cclxuICAgIH1cclxuICAgIHJldHVybiBjbGlPcHRpb247XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGxldCBvcHRpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHBsdWdpbnMuYXJndikge1xyXG4gICAgICAgIGlmIChrZXkgIT0gXCJfXCIpIHtcclxuICAgICAgICAgICAgb3B0aW9uc1sna2V5J10gPSBwbHVnaW5zLmFyZ3ZbJ2tleSddO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25zO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybnMgRGlyZWN0b3J5IG9mIGN3ZFxyXG4gKiBAcmV0dXJucyB7e3BhdGg6IHN0cmluZ319XHJcbiAqL1xyXG5leHBvcnQgbGV0IGN3ZCA9IGZ1bmN0aW9uKCk6RGlyZWN0b3J5IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogcHJvY2Vzcy5jd2QoKVxyXG4gICAgfVxyXG59OyJdfQ==
