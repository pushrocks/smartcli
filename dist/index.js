/// <reference path="typings/main.d.ts" />
/// <reference path="./smartcli.interfaces.ts" />
"use strict";
var plugins = require("./smartcli.plugins");
var SmartcliChecks = require("./smartcli.checks");
var SmartcliGetters = require("./smartcli.getters");
var SmartcliInteractions = require("./smartcli.interaction");
/* ------------------------------------------------ *
 * ---------- plugins for direct use -------------- *
 * ------------------------------------------------ */
exports.inquirer = plugins.inquirer; //inquirer is for asking questions
exports.cliff = plugins.cliff; // formats cli output
exports.argv = plugins.argv; //argv gets initial cli commands and options.
/* ------------------------------------------------ *
 * ---------- checks ------------------------------ *
 * ------------------------------------------------ */
exports.check = SmartcliChecks;
/* ------------------------------------------------ *
 * ---------- getters ----------------------------- *
 * ------------------------------------------------ */
exports.get = SmartcliGetters;
/* ------------------------------------------------ *
 * ---------- interaction ----------------------------- *
 * ------------------------------------------------ */
exports.interaction = SmartcliInteractions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQyxpREFBaUQ7O0FBRWpELElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsSUFBTyxjQUFjLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUNyRCxJQUFPLGVBQWUsV0FBVyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZELElBQU8sb0JBQW9CLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUVoRTs7c0RBRXNEO0FBQzNDLGdCQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtDQUFrQztBQUMvRCxhQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLHFCQUFxQjtBQUM1QyxZQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLDZDQUE2QztBQUU3RTs7c0RBRXNEO0FBQzNDLGFBQUssR0FBRyxjQUFjLENBQUM7QUFFbEM7O3NEQUVzRDtBQUMzQyxXQUFHLEdBQUcsZUFBZSxDQUFDO0FBRWpDOztzREFFc0Q7QUFDM0MsbUJBQVcsR0FBRyxvQkFBb0IsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL21haW4uZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9zbWFydGNsaS5pbnRlcmZhY2VzLnRzXCIgLz5cblxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9zbWFydGNsaS5wbHVnaW5zXCIpO1xuaW1wb3J0IFNtYXJ0Y2xpQ2hlY2tzID0gcmVxdWlyZShcIi4vc21hcnRjbGkuY2hlY2tzXCIpO1xuaW1wb3J0IFNtYXJ0Y2xpR2V0dGVycyA9IHJlcXVpcmUoXCIuL3NtYXJ0Y2xpLmdldHRlcnNcIik7XG5pbXBvcnQgU21hcnRjbGlJbnRlcmFjdGlvbnMgPSByZXF1aXJlKFwiLi9zbWFydGNsaS5pbnRlcmFjdGlvblwiKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0gcGx1Z2lucyBmb3IgZGlyZWN0IHVzZSAtLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmV4cG9ydCBsZXQgaW5xdWlyZXIgPSBwbHVnaW5zLmlucXVpcmVyOyAvL2lucXVpcmVyIGlzIGZvciBhc2tpbmcgcXVlc3Rpb25zXG5leHBvcnQgbGV0IGNsaWZmID0gcGx1Z2lucy5jbGlmZjsgLy8gZm9ybWF0cyBjbGkgb3V0cHV0XG5leHBvcnQgbGV0IGFyZ3YgPSBwbHVnaW5zLmFyZ3Y7IC8vYXJndiBnZXRzIGluaXRpYWwgY2xpIGNvbW1hbmRzIGFuZCBvcHRpb25zLlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLSBjaGVja3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZXhwb3J0IGxldCBjaGVjayA9IFNtYXJ0Y2xpQ2hlY2tzO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLSBnZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZXhwb3J0IGxldCBnZXQgPSBTbWFydGNsaUdldHRlcnM7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZXhwb3J0IGxldCBpbnRlcmFjdGlvbiA9IFNtYXJ0Y2xpSW50ZXJhY3Rpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
