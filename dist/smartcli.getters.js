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

//# sourceMappingURL=data:application/json;base64,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a0VBQWtFO0lBQ2pILENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUdTLGVBQU8sR0FBRztJQUNqQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1EsV0FBRyxHQUFHO0lBQ2IsTUFBTSxDQUFDO1FBQ0gsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUU7S0FDdEIsQ0FBQTtBQUNMLENBQUMsQ0FBQyIsImZpbGUiOiJzbWFydGNsaS5nZXR0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3NtYXJ0Y2xpLmludGVyZmFjZXMudHNcIiAvPlxuXG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0Y2xpLnBsdWdpbnNcIik7XG5pbXBvcnQgU21hcnRjbGlDaGVja3MgPSByZXF1aXJlKFwiLi9zbWFydGNsaS5jaGVja3NcIik7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjb21tYW5kU3RyaW5nXG4gKiBAcmV0dXJucyB7e3NwZWNpZmllZDogYm9vbGVhbiwgbmFtZTogYW55LCBhcmd1bWVudHM6IENsaUNvbW1hbmRBcmd1bWVudH19XG4gKi9cbmV4cG9ydCBsZXQgY29tbWFuZCA9IGZ1bmN0aW9uKCk6Q2xpQ29tbWFuZCB7XG4gICAgdmFyIGNsaUNvbW1hbmQgPSB7XG4gICAgICAgIHNwZWNpZmllZDogU21hcnRjbGlDaGVja3MuY29tbWFuZFByZXNlbmNlKCksXG4gICAgICAgIG5hbWU6IHBsdWdpbnMuYXJndi5fWzBdLFxuICAgICAgICBhcmd1bWVudHM6IGNvbW1hbmRBcmdzKClcbiAgICB9XG4gICAgcmV0dXJuIGNsaUNvbW1hbmQ7XG59O1xuXG4vKipcbiAqIGdldHMgdGhlIHNlY29uZCBvciBoaWdoZXIgdmFsdWUgb2YgcGx1Z2lucy5hcmd2Ll8gaWYgc3BlY2lmaWVkIGFuZCByZXR1cm5zIGl0IGFzIGNvbW1hbmRBcmd1bWVudFxuICogQHBhcmFtIGFyZ3VtZW50TGV2ZWxcbiAqIEByZXR1cm5zIHt7c3BlY2lmaWVkOiAoYm9vbGVhbnxib29sZWFuKSwgbmFtZX19XG4gKi9cbmV4cG9ydCBsZXQgY29tbWFuZEFyZ3VtZW50ID0gZnVuY3Rpb24oYXJndW1lbnRMZXZlbCk6Q2xpQ29tbWFuZEFyZ3VtZW50IHtcbiAgICB2YXIgY29tbWFuZEFyZ3VtZW50OkNsaUNvbW1hbmRBcmd1bWVudCA9IHtcbiAgICAgICAgc3BlY2lmaWVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogXCJ1bmRlZmluZWRcIixcbiAgICAgICAgbGV2ZWw6YXJndW1lbnRMZXZlbFxuICAgIH07XG4gICAgaWYoYXJndW1lbnRMZXZlbCA8IDEpIHtcbiAgICAgICAgcGx1Z2lucy5iZWF1dHlsb2cuZXJyb3IoXCJzbWFydGNsaS5nZXQuYXJndW1lbnQgY2Fubm90IGJlIGludm9rZWQgd2l0aCBhbiBhcmd1bWVudExldmVsIHNtYWxsZXIgdGhhbiAxXCIpO1xuICAgICAgICByZXR1cm4gY29tbWFuZEFyZ3VtZW50O1xuICAgIH1cbiAgICBpZihTbWFydGNsaUNoZWNrcy5jb21tYW5kQXJndW1lbnRQcmVzZW5jZShhcmd1bWVudExldmVsKSkge1xuICAgICAgICBjb21tYW5kQXJndW1lbnQuc3BlY2lmaWVkID0gdHJ1ZTtcbiAgICAgICAgY29tbWFuZEFyZ3VtZW50Lm5hbWUgPSBwbHVnaW5zLmFyZ3YuX1thcmd1bWVudExldmVsXTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbW1hbmRBcmd1bWVudDtcbn07XG5cbi8qKlxuICogcmV0dXJucyBhcnJheSB3aXRoIGNvbW1hbmRBcmdzXG4gKiBAcmV0dXJucyB7Q2xpQ29tbWFuZEFyZ3VtZW50W119XG4gKi9cbmV4cG9ydCBsZXQgY29tbWFuZEFyZ3MgPSBmdW5jdGlvbigpOkNsaUNvbW1hbmRBcmd1bWVudFtdIHtcbiAgICB2YXIgY29tbWFuZEFyZ3M6Q2xpQ29tbWFuZEFyZ3VtZW50W10gPSBbXTtcbiAgICB2YXIgYXJnc0FycmF5ID0gY29tbWFuZEFycmF5KCkuc2xpY2UoMCk7XG4gICAgYXJnc0FycmF5LnNoaWZ0KCk7XG4gICAgZm9yICh2YXIgaXRlbSBpbiBhcmdzQXJyYXkpe1xuICAgICAgICB2YXIgY29tbWFuZEFyZ3VtZW50OkNsaUNvbW1hbmRBcmd1bWVudCA9IHtcbiAgICAgICAgICAgIHNwZWNpZmllZDp0cnVlLFxuICAgICAgICAgICAgbmFtZTphcmdzQXJyYXlbaXRlbV0sXG4gICAgICAgICAgICBsZXZlbDogaXRlbSArIDFcbiAgICAgICAgfVxuICAgICAgICBjb21tYW5kQXJncy5wdXNoKGNvbW1hbmRBcmd1bWVudCk7XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kQXJncztcbn07XG5cbi8qKlxuICogcmV0dXJucyBjb21wbGV0ZSBjb21tYW5kIGFycmF5XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5leHBvcnQgbGV0IGNvbW1hbmRBcnJheSA9IGZ1bmN0aW9uICgpOnN0cmluZ1tdIHtcbiAgICB2YXIgY29tbWFuZEFycmF5ID0gcGx1Z2lucy5hcmd2Ll87XG4gICAgcmV0dXJuIGNvbW1hbmRBcnJheTtcbn07XG5cblxuLyoqXG4gKiByZXR1cm5zIGEgY2xpIG9wdGlvblxuICogQHBhcmFtIG9wdGlvbk5hbWVcbiAqIEByZXR1cm5zIHtDbGlPcHRpb259XG4gKi9cbmV4cG9ydCBsZXQgb3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uTmFtZTpzdHJpbmcpOkNsaU9wdGlvbiB7XG4gICAgdmFyIGNsaU9wdGlvbjpDbGlPcHRpb24gPSB7XG4gICAgICAgIG5hbWU6b3B0aW9uTmFtZSxcbiAgICAgICAgc3BlY2lmaWVkOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfTtcbiAgICBpZiAocGx1Z2lucy5zbWFydHBhcmFtLmV4aXN0cyhwbHVnaW5zLmFyZ3Ysb3B0aW9uTmFtZSkpIHtcbiAgICAgICAgY2xpT3B0aW9uLm5hbWUgPSBvcHRpb25OYW1lO1xuICAgICAgICBjbGlPcHRpb24uc3BlY2lmaWVkID0gdHJ1ZTtcbiAgICAgICAgY2xpT3B0aW9uLnZhbHVlID0gcGx1Z2lucy5hcmd2W29wdGlvbk5hbWVdIC8vd2UgYWxyZWFkeSBrbm93IGZyb20gdGhlIFwiaWZcIiBhYm92ZSB0aGF0IHRoZSB2YWx1ZSBpcyBhdmFpbGFibGUuXG4gICAgfVxuICAgIHJldHVybiBjbGlPcHRpb247XG59O1xuXG5cbmV4cG9ydCBsZXQgb3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcHRpb25zID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHBsdWdpbnMuYXJndikge1xuICAgICAgICBpZiAoa2V5ICE9IFwiX1wiKSB7XG4gICAgICAgICAgICBvcHRpb25zWydrZXknXSA9IHBsdWdpbnMuYXJndlsna2V5J107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG4vKipcbiAqIHJldHVybnMgRGlyZWN0b3J5IG9mIGN3ZFxuICogQHJldHVybnMge3twYXRoOiBzdHJpbmd9fVxuICovXG5leHBvcnQgbGV0IGN3ZCA9IGZ1bmN0aW9uKCk6RGlyZWN0b3J5IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRoOiBwcm9jZXNzLmN3ZCgpXG4gICAgfVxufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
