"use strict";
require("typings-global");
var plugins = require("./smartcli.plugins");
var SmartcliChecks = require("./smartcli.checks");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDUSxXQUFHLEdBQUc7SUFDYixNQUFNLENBQUM7UUFDSCxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtLQUN0QixDQUFBO0FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0Y2xpLmdldHRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLWdsb2JhbFwiO1xuXG5pbXBvcnQgKiBhcyBpbnRlcmZhY2VzIGZyb20gXCIuL3NtYXJ0Y2xpLmludGVyZmFjZXNcIjtcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRjbGkucGx1Z2luc1wiKTtcbmltcG9ydCBTbWFydGNsaUNoZWNrcyA9IHJlcXVpcmUoXCIuL3NtYXJ0Y2xpLmNoZWNrc1wiKTtcblxuXG4vKipcbiAqIGdldHMgdGhlIHNlY29uZCBvciBoaWdoZXIgdmFsdWUgb2YgcGx1Z2lucy5hcmd2Ll8gaWYgc3BlY2lmaWVkIGFuZCByZXR1cm5zIGl0IGFzIGNvbW1hbmRBcmd1bWVudFxuICogQHBhcmFtIGFyZ3VtZW50TGV2ZWxcbiAqIEByZXR1cm5zIHt7c3BlY2lmaWVkOiAoYm9vbGVhbnxib29sZWFuKSwgbmFtZX19XG4gKi9cbmV4cG9ydCBsZXQgY29tbWFuZEFyZ3VtZW50ID0gZnVuY3Rpb24oYXJndW1lbnRMZXZlbCk6aW50ZXJmYWNlcy5DbGlDb21tYW5kQXJndW1lbnQge1xuICAgIHZhciBjb21tYW5kQXJndW1lbnQ6aW50ZXJmYWNlcy5DbGlDb21tYW5kQXJndW1lbnQgPSB7XG4gICAgICAgIHNwZWNpZmllZDogZmFsc2UsXG4gICAgICAgIG5hbWU6IFwidW5kZWZpbmVkXCIsXG4gICAgICAgIGxldmVsOmFyZ3VtZW50TGV2ZWxcbiAgICB9O1xuICAgIGlmKGFyZ3VtZW50TGV2ZWwgPCAxKSB7XG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLmVycm9yKFwic21hcnRjbGkuZ2V0LmFyZ3VtZW50IGNhbm5vdCBiZSBpbnZva2VkIHdpdGggYW4gYXJndW1lbnRMZXZlbCBzbWFsbGVyIHRoYW4gMVwiKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmRBcmd1bWVudDtcbiAgICB9XG4gICAgaWYoU21hcnRjbGlDaGVja3MuY29tbWFuZEFyZ3VtZW50UHJlc2VuY2UoYXJndW1lbnRMZXZlbCkpIHtcbiAgICAgICAgY29tbWFuZEFyZ3VtZW50LnNwZWNpZmllZCA9IHRydWU7XG4gICAgICAgIGNvbW1hbmRBcmd1bWVudC5uYW1lID0gcGx1Z2lucy5hcmd2Ll9bYXJndW1lbnRMZXZlbF07XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kQXJndW1lbnQ7XG59O1xuXG4vKipcbiAqIHJldHVybnMgYXJyYXkgd2l0aCBjb21tYW5kQXJnc1xuICogQHJldHVybnMge0NsaUNvbW1hbmRBcmd1bWVudFtdfVxuICovXG5leHBvcnQgbGV0IGNvbW1hbmRBcmdzID0gZnVuY3Rpb24oKTppbnRlcmZhY2VzLkNsaUNvbW1hbmRBcmd1bWVudFtdIHtcbiAgICB2YXIgY29tbWFuZEFyZ3M6aW50ZXJmYWNlcy5DbGlDb21tYW5kQXJndW1lbnRbXSA9IFtdO1xuICAgIHZhciBhcmdzQXJyYXkgPSBjb21tYW5kQXJyYXkoKS5zbGljZSgwKTtcbiAgICBhcmdzQXJyYXkuc2hpZnQoKTtcbiAgICBmb3IgKGxldCBpdGVtIGluIGFyZ3NBcnJheSl7XG4gICAgICAgIGxldCBjb21tYW5kQXJndW1lbnQ6aW50ZXJmYWNlcy5DbGlDb21tYW5kQXJndW1lbnQgPSB7XG4gICAgICAgICAgICBzcGVjaWZpZWQ6dHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6YXJnc0FycmF5W2l0ZW1dLFxuICAgICAgICAgICAgbGV2ZWw6IHBhcnNlSW50KGl0ZW0pICsgMVxuICAgICAgICB9XG4gICAgICAgIGNvbW1hbmRBcmdzLnB1c2goY29tbWFuZEFyZ3VtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbW1hbmRBcmdzO1xufTtcblxuLyoqXG4gKiByZXR1cm5zIGNvbXBsZXRlIGNvbW1hbmQgYXJyYXlcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmV4cG9ydCBsZXQgY29tbWFuZEFycmF5ID0gZnVuY3Rpb24gKCk6c3RyaW5nW10ge1xuICAgIHZhciBjb21tYW5kQXJyYXkgPSBwbHVnaW5zLmFyZ3YuXztcbiAgICByZXR1cm4gY29tbWFuZEFycmF5O1xufTtcblxuXG4vKipcbiAqIHJldHVybnMgYSBjbGkgb3B0aW9uXG4gKiBAcGFyYW0gb3B0aW9uTmFtZVxuICogQHJldHVybnMge0NsaU9wdGlvbn1cbiAqL1xuZXhwb3J0IGxldCBvcHRpb24gPSBmdW5jdGlvbihvcHRpb25OYW1lOnN0cmluZyk6aW50ZXJmYWNlcy5DbGlPcHRpb24ge1xuICAgIHZhciBjbGlPcHRpb246aW50ZXJmYWNlcy5DbGlPcHRpb24gPSB7XG4gICAgICAgIG5hbWU6b3B0aW9uTmFtZSxcbiAgICAgICAgc3BlY2lmaWVkOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfTtcbiAgICBpZiAocGx1Z2lucy5zbWFydHBhcmFtLmV4aXN0cyhwbHVnaW5zLmFyZ3Ysb3B0aW9uTmFtZSkpIHtcbiAgICAgICAgY2xpT3B0aW9uLm5hbWUgPSBvcHRpb25OYW1lO1xuICAgICAgICBjbGlPcHRpb24uc3BlY2lmaWVkID0gdHJ1ZTtcbiAgICAgICAgY2xpT3B0aW9uLnZhbHVlID0gcGx1Z2lucy5hcmd2W29wdGlvbk5hbWVdIC8vd2UgYWxyZWFkeSBrbm93IGZyb20gdGhlIFwiaWZcIiBhYm92ZSB0aGF0IHRoZSB2YWx1ZSBpcyBhdmFpbGFibGUuXG4gICAgfVxuICAgIHJldHVybiBjbGlPcHRpb247XG59O1xuXG5cbmV4cG9ydCBsZXQgb3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcHRpb25zID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHBsdWdpbnMuYXJndikge1xuICAgICAgICBpZiAoa2V5ICE9IFwiX1wiKSB7XG4gICAgICAgICAgICBvcHRpb25zWydrZXknXSA9IHBsdWdpbnMuYXJndlsna2V5J107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59O1xuXG4vKipcbiAqIHJldHVybnMgRGlyZWN0b3J5IG9mIGN3ZFxuICogQHJldHVybnMge3twYXRoOiBzdHJpbmd9fVxuICovXG5leHBvcnQgbGV0IGN3ZCA9IGZ1bmN0aW9uKCk6aW50ZXJmYWNlcy5EaXJlY3Rvcnkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGg6IHByb2Nlc3MuY3dkKClcbiAgICB9XG59OyJdfQ==
