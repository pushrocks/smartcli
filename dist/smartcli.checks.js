/// <reference path="typings/main.d.ts" />
/// <reference path="./smartcli.interfaces.ts" />
"use strict";
var plugins = require("./smartcli.plugins");
/**
 * checks for a special command string and returns true if found.
 * @param commandString
 * @returns {boolean}
 */
exports.command = function (commandString) {
    if (plugins.argv._.indexOf(commandString) == 0) {
        return true;
    }
    return false;
};
/**
 * checks if a command is present, returns true if yes, false if no.
 * @returns {boolean}
 */
exports.commandPresence = function () {
    if (plugins.argv._.length > 0) {
        return true;
    }
    return false;
};
/**
 * checks for an special command argument at a certain position, returns true if matches, returns false if not
 * @param level
 * @returns {boolean}
 */
exports.commandArgument = function (commandArgumentString, level) {
    if (level === void 0) { level = 1; }
    if (exports.commandArgumentPresence(level) && (plugins.argv._[level] == commandArgumentString)) {
        return true;
    }
    return false;
};
exports.commandArgumentPresence = function (level) {
    if (level === void 0) { level = 1; }
    if (plugins.argv._.length >= (level + 1)) {
        return true;
    }
    return false;
};
/**
 * checks for a specific option string, returns true if yes, returns false if no
 * @returns {boolean}
 */
exports.option = function (optionString) {
    if (plugins.smartparam.exists(plugins.argv, optionString)) {
        return true;
    }
    return false;
};
exports.optionPresence = function () {
    if (plugins.argv.indexOf() != -1) {
        return true;
    }
    return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Y2xpLmNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFDMUMsaURBQWlEOztBQUVqRCxJQUFPLE9BQU8sV0FBVyxvQkFBb0IsQ0FBQyxDQUFDO0FBRS9DOzs7O0dBSUc7QUFDUSxlQUFPLEdBQUcsVUFBUyxhQUFvQjtJQUM5QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1EsdUJBQWUsR0FBRztJQUN6QixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDUSx1QkFBZSxHQUFHLFVBQVMscUJBQTRCLEVBQUMsS0FBZ0I7SUFBaEIscUJBQWdCLEdBQWhCLFNBQWdCO0lBQy9FLEVBQUUsQ0FBQSxDQUFDLCtCQUF1QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUkscUJBQXFCLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckYsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFUywrQkFBdUIsR0FBRyxVQUFTLEtBQWdCO0lBQWhCLHFCQUFnQixHQUFoQixTQUFnQjtJQUMxRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1EsY0FBTSxHQUFHLFVBQVMsWUFBWTtJQUNyQyxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVTLHNCQUFjLEdBQUc7SUFDeEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyIsImZpbGUiOiJzbWFydGNsaS5jaGVja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9tYWluLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vc21hcnRjbGkuaW50ZXJmYWNlcy50c1wiIC8+XG5cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRjbGkucGx1Z2luc1wiKTtcblxuLyoqXG4gKiBjaGVja3MgZm9yIGEgc3BlY2lhbCBjb21tYW5kIHN0cmluZyBhbmQgcmV0dXJucyB0cnVlIGlmIGZvdW5kLlxuICogQHBhcmFtIGNvbW1hbmRTdHJpbmdcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgbGV0IGNvbW1hbmQgPSBmdW5jdGlvbihjb21tYW5kU3RyaW5nOnN0cmluZyk6Ym9vbGVhbiB7XG4gICAgaWYgKHBsdWdpbnMuYXJndi5fLmluZGV4T2YoY29tbWFuZFN0cmluZykgPT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIGNoZWNrcyBpZiBhIGNvbW1hbmQgaXMgcHJlc2VudCwgcmV0dXJucyB0cnVlIGlmIHllcywgZmFsc2UgaWYgbm8uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBjb21tYW5kUHJlc2VuY2UgPSBmdW5jdGlvbigpOmJvb2xlYW4ge1xuICAgIGlmKHBsdWdpbnMuYXJndi5fLmxlbmd0aCA+IDApe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBjaGVja3MgZm9yIGFuIHNwZWNpYWwgY29tbWFuZCBhcmd1bWVudCBhdCBhIGNlcnRhaW4gcG9zaXRpb24sIHJldHVybnMgdHJ1ZSBpZiBtYXRjaGVzLCByZXR1cm5zIGZhbHNlIGlmIG5vdFxuICogQHBhcmFtIGxldmVsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGxldCBjb21tYW5kQXJndW1lbnQgPSBmdW5jdGlvbihjb21tYW5kQXJndW1lbnRTdHJpbmc6c3RyaW5nLGxldmVsOm51bWJlciA9IDEpOmJvb2xlYW4ge1xuICAgIGlmKGNvbW1hbmRBcmd1bWVudFByZXNlbmNlKGxldmVsKSAmJiAocGx1Z2lucy5hcmd2Ll9bbGV2ZWxdID09IGNvbW1hbmRBcmd1bWVudFN0cmluZyApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgbGV0IGNvbW1hbmRBcmd1bWVudFByZXNlbmNlID0gZnVuY3Rpb24obGV2ZWw6bnVtYmVyID0gMSkge1xuICAgIGlmKHBsdWdpbnMuYXJndi5fLmxlbmd0aCA+PSAobGV2ZWwgKyAxKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBjaGVja3MgZm9yIGEgc3BlY2lmaWMgb3B0aW9uIHN0cmluZywgcmV0dXJucyB0cnVlIGlmIHllcywgcmV0dXJucyBmYWxzZSBpZiBub1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBsZXQgb3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uU3RyaW5nKTpib29sZWFuIHtcbiAgICBpZihwbHVnaW5zLnNtYXJ0cGFyYW0uZXhpc3RzKHBsdWdpbnMuYXJndiwgb3B0aW9uU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGxldCBvcHRpb25QcmVzZW5jZSA9IGZ1bmN0aW9uKCk6Ym9vbGVhbiB7XG4gICAgaWYgKHBsdWdpbnMuYXJndi5pbmRleE9mKCkgIT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
