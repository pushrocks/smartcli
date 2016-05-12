/// <reference path="typings/main.d.ts" />
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Y2xpLmdldHRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDOztBQUcxQyxJQUFPLE9BQU8sV0FBVyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9DLElBQU8sY0FBYyxXQUFXLG1CQUFtQixDQUFDLENBQUM7QUFFckQ7Ozs7R0FJRztBQUNRLGVBQU8sR0FBRztJQUNqQixJQUFJLFVBQVUsR0FBRztRQUNiLFNBQVMsRUFBRSxjQUFjLENBQUMsZUFBZSxFQUFFO1FBQzNDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsU0FBUyxFQUFFLG1CQUFXLEVBQUU7S0FDM0IsQ0FBQTtJQUNELE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNRLHVCQUFlLEdBQUcsVUFBUyxhQUFhO0lBQy9DLElBQUksZUFBZSxHQUFpQztRQUNoRCxTQUFTLEVBQUUsS0FBSztRQUNoQixJQUFJLEVBQUUsV0FBVztRQUNqQixLQUFLLEVBQUMsYUFBYTtLQUN0QixDQUFDO0lBQ0YsRUFBRSxDQUFBLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsOEVBQThFLENBQUMsQ0FBQztRQUN4RyxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFDRCxFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELE1BQU0sQ0FBQyxlQUFlLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1EsbUJBQVcsR0FBRztJQUNyQixJQUFJLFdBQVcsR0FBbUMsRUFBRSxDQUFDO0lBQ3JELElBQUksU0FBUyxHQUFHLG9CQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7UUFDeEIsSUFBSSxpQkFBZSxHQUFpQztZQUNoRCxTQUFTLEVBQUMsSUFBSTtZQUNkLElBQUksRUFBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUM1QixDQUFBO1FBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBZSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1Esb0JBQVksR0FBRztJQUN0QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUdGOzs7O0dBSUc7QUFDUSxjQUFNLEdBQUcsVUFBUyxVQUFpQjtJQUMxQyxJQUFJLFNBQVMsR0FBd0I7UUFDakMsSUFBSSxFQUFDLFVBQVU7UUFDZixTQUFTLEVBQUUsS0FBSztRQUNoQixLQUFLLEVBQUUsS0FBSztLQUNmLENBQUM7SUFDRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxTQUFTLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUM1QixTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMzQixTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQyxrRUFBa0U7SUFDakgsQ0FBQztJQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBR1MsZUFBTyxHQUFHO0lBQ2pCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDUSxXQUFHLEdBQUc7SUFDYixNQUFNLENBQUM7UUFDSCxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtLQUN0QixDQUFBO0FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0Y2xpLmdldHRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9tYWluLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0ICogYXMgaW50ZXJmYWNlcyBmcm9tIFwiLi9zbWFydGNsaS5pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRjbGkucGx1Z2luc1wiKTtcclxuaW1wb3J0IFNtYXJ0Y2xpQ2hlY2tzID0gcmVxdWlyZShcIi4vc21hcnRjbGkuY2hlY2tzXCIpO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBjb21tYW5kU3RyaW5nXHJcbiAqIEByZXR1cm5zIHt7c3BlY2lmaWVkOiBib29sZWFuLCBuYW1lOiBhbnksIGFyZ3VtZW50czogQ2xpQ29tbWFuZEFyZ3VtZW50fX1cclxuICovXHJcbmV4cG9ydCBsZXQgY29tbWFuZCA9IGZ1bmN0aW9uKCk6aW50ZXJmYWNlcy5DbGlDb21tYW5kIHtcclxuICAgIHZhciBjbGlDb21tYW5kID0ge1xyXG4gICAgICAgIHNwZWNpZmllZDogU21hcnRjbGlDaGVja3MuY29tbWFuZFByZXNlbmNlKCksXHJcbiAgICAgICAgbmFtZTogcGx1Z2lucy5hcmd2Ll9bMF0sXHJcbiAgICAgICAgYXJndW1lbnRzOiBjb21tYW5kQXJncygpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xpQ29tbWFuZDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBnZXRzIHRoZSBzZWNvbmQgb3IgaGlnaGVyIHZhbHVlIG9mIHBsdWdpbnMuYXJndi5fIGlmIHNwZWNpZmllZCBhbmQgcmV0dXJucyBpdCBhcyBjb21tYW5kQXJndW1lbnRcclxuICogQHBhcmFtIGFyZ3VtZW50TGV2ZWxcclxuICogQHJldHVybnMge3tzcGVjaWZpZWQ6IChib29sZWFufGJvb2xlYW4pLCBuYW1lfX1cclxuICovXHJcbmV4cG9ydCBsZXQgY29tbWFuZEFyZ3VtZW50ID0gZnVuY3Rpb24oYXJndW1lbnRMZXZlbCk6aW50ZXJmYWNlcy5DbGlDb21tYW5kQXJndW1lbnQge1xyXG4gICAgdmFyIGNvbW1hbmRBcmd1bWVudDppbnRlcmZhY2VzLkNsaUNvbW1hbmRBcmd1bWVudCA9IHtcclxuICAgICAgICBzcGVjaWZpZWQ6IGZhbHNlLFxyXG4gICAgICAgIG5hbWU6IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgbGV2ZWw6YXJndW1lbnRMZXZlbFxyXG4gICAgfTtcclxuICAgIGlmKGFyZ3VtZW50TGV2ZWwgPCAxKSB7XHJcbiAgICAgICAgcGx1Z2lucy5iZWF1dHlsb2cuZXJyb3IoXCJzbWFydGNsaS5nZXQuYXJndW1lbnQgY2Fubm90IGJlIGludm9rZWQgd2l0aCBhbiBhcmd1bWVudExldmVsIHNtYWxsZXIgdGhhbiAxXCIpO1xyXG4gICAgICAgIHJldHVybiBjb21tYW5kQXJndW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZihTbWFydGNsaUNoZWNrcy5jb21tYW5kQXJndW1lbnRQcmVzZW5jZShhcmd1bWVudExldmVsKSkge1xyXG4gICAgICAgIGNvbW1hbmRBcmd1bWVudC5zcGVjaWZpZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbW1hbmRBcmd1bWVudC5uYW1lID0gcGx1Z2lucy5hcmd2Ll9bYXJndW1lbnRMZXZlbF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tbWFuZEFyZ3VtZW50O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybnMgYXJyYXkgd2l0aCBjb21tYW5kQXJnc1xyXG4gKiBAcmV0dXJucyB7Q2xpQ29tbWFuZEFyZ3VtZW50W119XHJcbiAqL1xyXG5leHBvcnQgbGV0IGNvbW1hbmRBcmdzID0gZnVuY3Rpb24oKTppbnRlcmZhY2VzLkNsaUNvbW1hbmRBcmd1bWVudFtdIHtcclxuICAgIHZhciBjb21tYW5kQXJnczppbnRlcmZhY2VzLkNsaUNvbW1hbmRBcmd1bWVudFtdID0gW107XHJcbiAgICB2YXIgYXJnc0FycmF5ID0gY29tbWFuZEFycmF5KCkuc2xpY2UoMCk7XHJcbiAgICBhcmdzQXJyYXkuc2hpZnQoKTtcclxuICAgIGZvciAobGV0IGl0ZW0gaW4gYXJnc0FycmF5KXtcclxuICAgICAgICBsZXQgY29tbWFuZEFyZ3VtZW50OmludGVyZmFjZXMuQ2xpQ29tbWFuZEFyZ3VtZW50ID0ge1xyXG4gICAgICAgICAgICBzcGVjaWZpZWQ6dHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTphcmdzQXJyYXlbaXRlbV0sXHJcbiAgICAgICAgICAgIGxldmVsOiBwYXJzZUludChpdGVtKSArIDFcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tbWFuZEFyZ3MucHVzaChjb21tYW5kQXJndW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbW1hbmRBcmdzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJldHVybnMgY29tcGxldGUgY29tbWFuZCBhcnJheVxyXG4gKiBAcmV0dXJucyB7YW55fVxyXG4gKi9cclxuZXhwb3J0IGxldCBjb21tYW5kQXJyYXkgPSBmdW5jdGlvbiAoKTpzdHJpbmdbXSB7XHJcbiAgICB2YXIgY29tbWFuZEFycmF5ID0gcGx1Z2lucy5hcmd2Ll87XHJcbiAgICByZXR1cm4gY29tbWFuZEFycmF5O1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIGEgY2xpIG9wdGlvblxyXG4gKiBAcGFyYW0gb3B0aW9uTmFtZVxyXG4gKiBAcmV0dXJucyB7Q2xpT3B0aW9ufVxyXG4gKi9cclxuZXhwb3J0IGxldCBvcHRpb24gPSBmdW5jdGlvbihvcHRpb25OYW1lOnN0cmluZyk6aW50ZXJmYWNlcy5DbGlPcHRpb24ge1xyXG4gICAgdmFyIGNsaU9wdGlvbjppbnRlcmZhY2VzLkNsaU9wdGlvbiA9IHtcclxuICAgICAgICBuYW1lOm9wdGlvbk5hbWUsXHJcbiAgICAgICAgc3BlY2lmaWVkOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH07XHJcbiAgICBpZiAocGx1Z2lucy5zbWFydHBhcmFtLmV4aXN0cyhwbHVnaW5zLmFyZ3Ysb3B0aW9uTmFtZSkpIHtcclxuICAgICAgICBjbGlPcHRpb24ubmFtZSA9IG9wdGlvbk5hbWU7XHJcbiAgICAgICAgY2xpT3B0aW9uLnNwZWNpZmllZCA9IHRydWU7XHJcbiAgICAgICAgY2xpT3B0aW9uLnZhbHVlID0gcGx1Z2lucy5hcmd2W29wdGlvbk5hbWVdIC8vd2UgYWxyZWFkeSBrbm93IGZyb20gdGhlIFwiaWZcIiBhYm92ZSB0aGF0IHRoZSB2YWx1ZSBpcyBhdmFpbGFibGUuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xpT3B0aW9uO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgb3B0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiBwbHVnaW5zLmFyZ3YpIHtcclxuICAgICAgICBpZiAoa2V5ICE9IFwiX1wiKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnNbJ2tleSddID0gcGx1Z2lucy5hcmd2WydrZXknXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxufTtcclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIERpcmVjdG9yeSBvZiBjd2RcclxuICogQHJldHVybnMge3twYXRoOiBzdHJpbmd9fVxyXG4gKi9cclxuZXhwb3J0IGxldCBjd2QgPSBmdW5jdGlvbigpOmludGVyZmFjZXMuRGlyZWN0b3J5IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogcHJvY2Vzcy5jd2QoKVxyXG4gICAgfVxyXG59OyJdfQ==
