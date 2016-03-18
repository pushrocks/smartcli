/// <reference path="typings/main.d.ts" />
/// <reference path="./smartcli.interfaces.ts" />
"use strict";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Y2xpLmludGVyYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQyxpREFBaUQ7O0FBRWpELElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFFL0M7Ozs7O0dBS0c7QUFDUSxpQkFBUyxHQUFHLFVBQVMsY0FBcUIsRUFBRSxFQUFFO0lBQ3JELEVBQUUsQ0FBQyxDQUFDLE9BQU8sY0FBYyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCwwQ0FBMEM7SUFDMUMsSUFBSSxRQUFRLEdBQUc7UUFDWCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxjQUFjO1FBQ3BCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxVQUFVLEtBQUs7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQ0osQ0FBQztJQUVGLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBUyxPQUFPO1FBQy9DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDUSxpQkFBUyxHQUFHLFVBQVMsY0FBcUIsRUFBRSxhQUFzQixFQUFFLEVBQUU7SUFDN0UsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsSUFBSSxRQUFRLEdBQUc7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxjQUFjO1FBQ3BCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLE1BQU0sRUFBRSxVQUFVLEdBQUcsSUFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4RCxDQUFDO0lBRUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLFVBQVMsT0FBTztRQUM3QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0Y2xpLmludGVyYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3NtYXJ0Y2xpLmludGVyZmFjZXMudHNcIiAvPlxuXG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0Y2xpLnBsdWdpbnNcIik7XG5cbi8qKlxuICogZXhlY3V0ZXMgY2FsbGJhY2sgd2l0aCBhbnN3ZXIgdG8gcXVlc3Rpb24gYXMgYXJndW1lbnRcbiAqIEBwYXJhbSBxdWVzdGlvblN0cmluZyB0aGUgcXVlc3Rpb24geW91IHdhbnQgdG8gYXNrIHRoZSB1c2VyXG4gKiBAcGFyYW0gY2IgdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2l0aCBhbnN3ZXIgYXMgcGFyYW1cbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5leHBvcnQgbGV0IGdldEFuc3dlciA9IGZ1bmN0aW9uKHF1ZXN0aW9uU3RyaW5nOnN0cmluZywgY2IpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXN0aW9uU3RyaW5nICE9ICdzdHJpbmcnKSB7XG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLmVycm9yKCdubyBxdWVzdGlvbiBzcGVjaWZpZWQnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vbWFrZSBpbnF1aXJlciBjb21wYXRpYmxlIHF1ZXN0aW9uIG9iamVjdFxuICAgIHZhciBxdWVzdGlvbiA9IHtcbiAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxuICAgICAgICBuYW1lOiBcInVzZXJGZWVkYmFja1wiLFxuICAgICAgICBtZXNzYWdlOiBxdWVzdGlvblN0cmluZyxcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHBsdWdpbnMuaW5xdWlyZXIucHJvbXB0KFtxdWVzdGlvbl0sZnVuY3Rpb24oYW5zd2Vycyl7XG4gICAgICAgIHZhciBhbnN3ZXIgPSBhbnN3ZXJzLnVzZXJGZWVkYmFjaztcbiAgICAgICAgY2IoYW5zd2VyKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBxdWVzdGlvblN0cmluZ1xuICogQHBhcmFtIGNob2ljZU9wdGlvbnNcbiAqIEBwYXJhbSBjYlxuICogQHJldHVybnMge251bGx9XG4gKi9cbmV4cG9ydCBsZXQgZ2V0Q2hvaWNlID0gZnVuY3Rpb24ocXVlc3Rpb25TdHJpbmc6c3RyaW5nLCBjaG9pY2VPcHRpb25zOnN0cmluZ1tdLCBjYikge1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGNob2ljZU9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vbWFrZSBpbnF1aXJlciBjb21wYXRpYmxlIHF1ZXN0aW9uIG9iamVjdFxuICAgIHZhciBxdWVzdGlvbiA9IHtcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgICAgIG5hbWU6IFwidXNlckZlZWRiYWNrXCIsXG4gICAgICAgIG1lc3NhZ2U6IHF1ZXN0aW9uU3RyaW5nLFxuICAgICAgICBjaG9pY2VzOiBjaG9pY2VPcHRpb25zLFxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKCB2YWwgKSB7IHJldHVybiB2YWwudG9Mb3dlckNhc2UoKTsgfVxuICAgIH07XG5cbiAgICBwbHVnaW5zLmlucXVpcmVyLnByb21wdChxdWVzdGlvbixmdW5jdGlvbihhbnN3ZXJzKXtcbiAgICAgICAgdmFyIGFuc3dlciA9IGFuc3dlcnMudXNlckZlZWRiYWNrO1xuICAgICAgICBjYihhbnN3ZXIpO1xuICAgIH0pO1xuXG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
