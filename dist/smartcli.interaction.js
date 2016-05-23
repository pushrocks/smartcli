/// <reference path="typings/index.d.ts" />
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Y2xpLmludGVyYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQzs7QUFFM0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFFL0M7Ozs7O0dBS0c7QUFDUSxpQkFBUyxHQUFHLFVBQVMsY0FBcUIsRUFBRSxFQUFFO0lBQ3JELEVBQUUsQ0FBQyxDQUFDLE9BQU8sY0FBYyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCwwQ0FBMEM7SUFDMUMsSUFBSSxRQUFRLEdBQUc7UUFDWCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxjQUFjO1FBQ3BCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxVQUFVLEtBQUs7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQ0osQ0FBQztJQUVGLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsVUFBUyxPQUFPO1FBQy9DLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDbEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDUSxpQkFBUyxHQUFHLFVBQVMsY0FBcUIsRUFBRSxhQUFzQixFQUFFLEVBQUU7SUFDN0UsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsSUFBSSxRQUFRLEdBQUc7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxjQUFjO1FBQ3BCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLE1BQU0sRUFBRSxVQUFVLEdBQUcsSUFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4RCxDQUFDO0lBRUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLFVBQVMsT0FBTztRQUM3QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0Y2xpLmludGVyYWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgXCIuL3NtYXJ0Y2xpLmludGVyZmFjZXNcIjtcclxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9zbWFydGNsaS5wbHVnaW5zXCIpO1xyXG5cclxuLyoqXHJcbiAqIGV4ZWN1dGVzIGNhbGxiYWNrIHdpdGggYW5zd2VyIHRvIHF1ZXN0aW9uIGFzIGFyZ3VtZW50XHJcbiAqIEBwYXJhbSBxdWVzdGlvblN0cmluZyB0aGUgcXVlc3Rpb24geW91IHdhbnQgdG8gYXNrIHRoZSB1c2VyXHJcbiAqIEBwYXJhbSBjYiB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aXRoIGFuc3dlciBhcyBwYXJhbVxyXG4gKiBAcmV0dXJucyB7bnVsbH1cclxuICovXHJcbmV4cG9ydCBsZXQgZ2V0QW5zd2VyID0gZnVuY3Rpb24ocXVlc3Rpb25TdHJpbmc6c3RyaW5nLCBjYikge1xyXG4gICAgaWYgKHR5cGVvZiBxdWVzdGlvblN0cmluZyAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLmVycm9yKCdubyBxdWVzdGlvbiBzcGVjaWZpZWQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vbWFrZSBpbnF1aXJlciBjb21wYXRpYmxlIHF1ZXN0aW9uIG9iamVjdFxyXG4gICAgdmFyIHF1ZXN0aW9uID0ge1xyXG4gICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICBuYW1lOiBcInVzZXJGZWVkYmFja1wiLFxyXG4gICAgICAgIG1lc3NhZ2U6IHF1ZXN0aW9uU3RyaW5nLFxyXG4gICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcGx1Z2lucy5pbnF1aXJlci5wcm9tcHQoW3F1ZXN0aW9uXSxmdW5jdGlvbihhbnN3ZXJzKXtcclxuICAgICAgICB2YXIgYW5zd2VyID0gYW5zd2Vycy51c2VyRmVlZGJhY2s7XHJcbiAgICAgICAgY2IoYW5zd2VyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBxdWVzdGlvblN0cmluZ1xyXG4gKiBAcGFyYW0gY2hvaWNlT3B0aW9uc1xyXG4gKiBAcGFyYW0gY2JcclxuICogQHJldHVybnMge251bGx9XHJcbiAqL1xyXG5leHBvcnQgbGV0IGdldENob2ljZSA9IGZ1bmN0aW9uKHF1ZXN0aW9uU3RyaW5nOnN0cmluZywgY2hvaWNlT3B0aW9uczpzdHJpbmdbXSwgY2IpIHtcclxuICAgIGlmKCFBcnJheS5pc0FycmF5KGNob2ljZU9wdGlvbnMpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tYWtlIGlucXVpcmVyIGNvbXBhdGlibGUgcXVlc3Rpb24gb2JqZWN0XHJcbiAgICB2YXIgcXVlc3Rpb24gPSB7XHJcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXHJcbiAgICAgICAgbmFtZTogXCJ1c2VyRmVlZGJhY2tcIixcclxuICAgICAgICBtZXNzYWdlOiBxdWVzdGlvblN0cmluZyxcclxuICAgICAgICBjaG9pY2VzOiBjaG9pY2VPcHRpb25zLFxyXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24oIHZhbCApIHsgcmV0dXJuIHZhbC50b0xvd2VyQ2FzZSgpOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIHBsdWdpbnMuaW5xdWlyZXIucHJvbXB0KHF1ZXN0aW9uLGZ1bmN0aW9uKGFuc3dlcnMpe1xyXG4gICAgICAgIHZhciBhbnN3ZXIgPSBhbnN3ZXJzLnVzZXJGZWVkYmFjaztcclxuICAgICAgICBjYihhbnN3ZXIpO1xyXG4gICAgfSk7XHJcblxyXG59OyJdfQ==
