/// <reference path="typings/main.d.ts" />
"use strict";
require("./smartcli.interfaces");
var plugins = require("./smartcli.plugins");
/**
 * executes callback with answer to question as argument
 * @param questionString the question you want to ask the user
 * @param cb the function to execute with answer as param
 * @returns {null}
 */
exports.getAnswer = function (questionString, cb) {
    if (typeof questionString != 'string') {
        plugins.beautylog.error('no question specified');
        return null;
    }
    //make inquirer compatible question object
    var question = {
        type: "input",
        name: "userFeedback",
        message: questionString,
        validate: function (value) {
            return true;
        }
    };
    plugins.inquirer.prompt([question], function (answers) {
        var answer = answers.userFeedback;
        cb(answer);
    });
};
/**
 *
 * @param questionString
 * @param choiceOptions
 * @param cb
 * @returns {null}
 */
exports.getChoice = function (questionString, choiceOptions, cb) {
    if (!Array.isArray(choiceOptions)) {
        return null;
    }
    //make inquirer compatible question object
    var question = {
        type: "list",
        name: "userFeedback",
        message: questionString,
        choices: choiceOptions,
        filter: function (val) { return val.toLowerCase(); }
    };
    plugins.inquirer.prompt(question, function (answers) {
        var answer = answers.userFeedback;
        cb(answer);
    });
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Y2xpLmludGVyYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQzs7QUFFMUMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFFL0M7Ozs7O0dBS0c7QUFDUSxpQkFBUyxHQUFHLFVBQVMsY0FBcUIsRUFBRSxFQUFFO0lBQ3JELEVBQUUsQ0FBQyxDQUFDLE9BQU8sY0FBYyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCwwQ0FBMEM7SUFDMUMsSUFBSSxRQUFRLEdBQUc7UUFDWCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxjQUFjO1FBQ3BCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxVQUFVLEtBQUs7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQ0osQ0FBQztJQUVGLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBUyxPQUFPO1FBQy9DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDUSxpQkFBUyxHQUFHLFVBQVMsY0FBcUIsRUFBRSxhQUFzQixFQUFFLEVBQUU7SUFDN0UsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsSUFBSSxRQUFRLEdBQUc7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxjQUFjO1FBQ3BCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLE1BQU0sRUFBRSxVQUFVLEdBQUcsSUFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4RCxDQUFDO0lBRUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLFVBQVMsT0FBTztRQUM3QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0Y2xpLmludGVyYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBcIi4vc21hcnRjbGkuaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0Y2xpLnBsdWdpbnNcIik7XHJcblxyXG4vKipcclxuICogZXhlY3V0ZXMgY2FsbGJhY2sgd2l0aCBhbnN3ZXIgdG8gcXVlc3Rpb24gYXMgYXJndW1lbnRcclxuICogQHBhcmFtIHF1ZXN0aW9uU3RyaW5nIHRoZSBxdWVzdGlvbiB5b3Ugd2FudCB0byBhc2sgdGhlIHVzZXJcclxuICogQHBhcmFtIGNiIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIHdpdGggYW5zd2VyIGFzIHBhcmFtXHJcbiAqIEByZXR1cm5zIHtudWxsfVxyXG4gKi9cclxuZXhwb3J0IGxldCBnZXRBbnN3ZXIgPSBmdW5jdGlvbihxdWVzdGlvblN0cmluZzpzdHJpbmcsIGNiKSB7XHJcbiAgICBpZiAodHlwZW9mIHF1ZXN0aW9uU3RyaW5nICE9ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcGx1Z2lucy5iZWF1dHlsb2cuZXJyb3IoJ25vIHF1ZXN0aW9uIHNwZWNpZmllZCcpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgLy9tYWtlIGlucXVpcmVyIGNvbXBhdGlibGUgcXVlc3Rpb24gb2JqZWN0XHJcbiAgICB2YXIgcXVlc3Rpb24gPSB7XHJcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIG5hbWU6IFwidXNlckZlZWRiYWNrXCIsXHJcbiAgICAgICAgbWVzc2FnZTogcXVlc3Rpb25TdHJpbmcsXHJcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwbHVnaW5zLmlucXVpcmVyLnByb21wdChbcXVlc3Rpb25dLGZ1bmN0aW9uKGFuc3dlcnMpe1xyXG4gICAgICAgIHZhciBhbnN3ZXIgPSBhbnN3ZXJzLnVzZXJGZWVkYmFjaztcclxuICAgICAgICBjYihhbnN3ZXIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHF1ZXN0aW9uU3RyaW5nXHJcbiAqIEBwYXJhbSBjaG9pY2VPcHRpb25zXHJcbiAqIEBwYXJhbSBjYlxyXG4gKiBAcmV0dXJucyB7bnVsbH1cclxuICovXHJcbmV4cG9ydCBsZXQgZ2V0Q2hvaWNlID0gZnVuY3Rpb24ocXVlc3Rpb25TdHJpbmc6c3RyaW5nLCBjaG9pY2VPcHRpb25zOnN0cmluZ1tdLCBjYikge1xyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2hvaWNlT3B0aW9ucykpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvL21ha2UgaW5xdWlyZXIgY29tcGF0aWJsZSBxdWVzdGlvbiBvYmplY3RcclxuICAgIHZhciBxdWVzdGlvbiA9IHtcclxuICAgICAgICB0eXBlOiBcImxpc3RcIixcclxuICAgICAgICBuYW1lOiBcInVzZXJGZWVkYmFja1wiLFxyXG4gICAgICAgIG1lc3NhZ2U6IHF1ZXN0aW9uU3RyaW5nLFxyXG4gICAgICAgIGNob2ljZXM6IGNob2ljZU9wdGlvbnMsXHJcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiggdmFsICkgeyByZXR1cm4gdmFsLnRvTG93ZXJDYXNlKCk7IH1cclxuICAgIH07XHJcblxyXG4gICAgcGx1Z2lucy5pbnF1aXJlci5wcm9tcHQocXVlc3Rpb24sZnVuY3Rpb24oYW5zd2Vycyl7XHJcbiAgICAgICAgdmFyIGFuc3dlciA9IGFuc3dlcnMudXNlckZlZWRiYWNrO1xyXG4gICAgICAgIGNiKGFuc3dlcik7XHJcbiAgICB9KTtcclxuXHJcbn07Il19
