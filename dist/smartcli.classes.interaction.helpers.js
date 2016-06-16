"use strict";
require("typings-global");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Y2xpLmNsYXNzZXMuaW50ZXJhY3Rpb24uaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRXhCLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixJQUFPLE9BQU8sV0FBVyxvQkFBb0IsQ0FBQyxDQUFDO0FBRS9DOzs7OztHQUtHO0FBQ1EsaUJBQVMsR0FBRyxVQUFTLGNBQXFCLEVBQUUsRUFBRTtJQUNyRCxFQUFFLENBQUMsQ0FBQyxPQUFPLGNBQWMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsMENBQTBDO0lBQzFDLElBQUksUUFBUSxHQUFHO1FBQ1gsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsY0FBYztRQUNwQixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsVUFBVSxLQUFLO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUNKLENBQUM7SUFFRixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVMsT0FBTztRQUMvQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ1EsaUJBQVMsR0FBRyxVQUFTLGNBQXFCLEVBQUUsYUFBc0IsRUFBRSxFQUFFO0lBQzdFLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsMENBQTBDO0lBQzFDLElBQUksUUFBUSxHQUFHO1FBQ1gsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsY0FBYztRQUNwQixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsYUFBYTtRQUN0QixNQUFNLEVBQUUsVUFBVSxHQUFHLElBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEQsQ0FBQztJQUVGLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxVQUFTLE9BQU87UUFDN0MsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNsQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyIsImZpbGUiOiJzbWFydGNsaS5jbGFzc2VzLmludGVyYWN0aW9uLmhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLWdsb2JhbFwiO1xuXG5pbXBvcnQgXCIuL3NtYXJ0Y2xpLmludGVyZmFjZXNcIjtcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRjbGkucGx1Z2luc1wiKTtcblxuLyoqXG4gKiBleGVjdXRlcyBjYWxsYmFjayB3aXRoIGFuc3dlciB0byBxdWVzdGlvbiBhcyBhcmd1bWVudFxuICogQHBhcmFtIHF1ZXN0aW9uU3RyaW5nIHRoZSBxdWVzdGlvbiB5b3Ugd2FudCB0byBhc2sgdGhlIHVzZXJcbiAqIEBwYXJhbSBjYiB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aXRoIGFuc3dlciBhcyBwYXJhbVxuICogQHJldHVybnMge251bGx9XG4gKi9cbmV4cG9ydCBsZXQgZ2V0QW5zd2VyID0gZnVuY3Rpb24ocXVlc3Rpb25TdHJpbmc6c3RyaW5nLCBjYikge1xuICAgIGlmICh0eXBlb2YgcXVlc3Rpb25TdHJpbmcgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGx1Z2lucy5iZWF1dHlsb2cuZXJyb3IoJ25vIHF1ZXN0aW9uIHNwZWNpZmllZCcpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy9tYWtlIGlucXVpcmVyIGNvbXBhdGlibGUgcXVlc3Rpb24gb2JqZWN0XG4gICAgbGV0IHF1ZXN0aW9uID0ge1xuICAgICAgICB0eXBlOiBcImlucHV0XCIsXG4gICAgICAgIG5hbWU6IFwidXNlckZlZWRiYWNrXCIsXG4gICAgICAgIG1lc3NhZ2U6IHF1ZXN0aW9uU3RyaW5nLFxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcGx1Z2lucy5pbnF1aXJlci5wcm9tcHQoW3F1ZXN0aW9uXSxmdW5jdGlvbihhbnN3ZXJzKXtcbiAgICAgICAgbGV0IGFuc3dlciA9IGFuc3dlcnMudXNlckZlZWRiYWNrO1xuICAgICAgICBjYihhbnN3ZXIpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHF1ZXN0aW9uU3RyaW5nXG4gKiBAcGFyYW0gY2hvaWNlT3B0aW9uc1xuICogQHBhcmFtIGNiXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuZXhwb3J0IGxldCBnZXRDaG9pY2UgPSBmdW5jdGlvbihxdWVzdGlvblN0cmluZzpzdHJpbmcsIGNob2ljZU9wdGlvbnM6c3RyaW5nW10sIGNiKSB7XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoY2hvaWNlT3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy9tYWtlIGlucXVpcmVyIGNvbXBhdGlibGUgcXVlc3Rpb24gb2JqZWN0XG4gICAgbGV0IHF1ZXN0aW9uID0ge1xuICAgICAgICB0eXBlOiBcImxpc3RcIixcbiAgICAgICAgbmFtZTogXCJ1c2VyRmVlZGJhY2tcIixcbiAgICAgICAgbWVzc2FnZTogcXVlc3Rpb25TdHJpbmcsXG4gICAgICAgIGNob2ljZXM6IGNob2ljZU9wdGlvbnMsXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24oIHZhbCApIHsgcmV0dXJuIHZhbC50b0xvd2VyQ2FzZSgpOyB9XG4gICAgfTtcblxuICAgIHBsdWdpbnMuaW5xdWlyZXIucHJvbXB0KHF1ZXN0aW9uLGZ1bmN0aW9uKGFuc3dlcnMpe1xuICAgICAgICBsZXQgYW5zd2VyID0gYW5zd2Vycy51c2VyRmVlZGJhY2s7XG4gICAgICAgIGNiKGFuc3dlcik7XG4gICAgfSk7XG5cbn07Il19
