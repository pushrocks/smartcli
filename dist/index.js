/// <reference path="typings/main.d.ts" />
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQzs7QUFHMUMsSUFBTyxPQUFPLFdBQVcsb0JBQW9CLENBQUMsQ0FBQztBQUMvQyxJQUFPLGNBQWMsV0FBVyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELElBQU8sZUFBZSxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDdkQsSUFBTyxvQkFBb0IsV0FBVyx3QkFBd0IsQ0FBQyxDQUFDO0FBRWhFOztzREFFc0Q7QUFDM0MsZ0JBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsa0NBQWtDO0FBQy9ELGFBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMscUJBQXFCO0FBQzVDLFlBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsNkNBQTZDO0FBRTdFOztzREFFc0Q7QUFDM0MsYUFBSyxHQUFHLGNBQWMsQ0FBQztBQUVsQzs7c0RBRXNEO0FBQzNDLFdBQUcsR0FBRyxlQUFlLENBQUM7QUFFakM7O3NEQUVzRDtBQUMzQyxtQkFBVyxHQUFHLG9CQUFvQixDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSBcIi4vc21hcnRjbGkuaW50ZXJmYWNlc1wiXHJcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRjbGkucGx1Z2luc1wiKTtcclxuaW1wb3J0IFNtYXJ0Y2xpQ2hlY2tzID0gcmVxdWlyZShcIi4vc21hcnRjbGkuY2hlY2tzXCIpO1xyXG5pbXBvcnQgU21hcnRjbGlHZXR0ZXJzID0gcmVxdWlyZShcIi4vc21hcnRjbGkuZ2V0dGVyc1wiKTtcclxuaW1wb3J0IFNtYXJ0Y2xpSW50ZXJhY3Rpb25zID0gcmVxdWlyZShcIi4vc21hcnRjbGkuaW50ZXJhY3Rpb25cIik7XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tIHBsdWdpbnMgZm9yIGRpcmVjdCB1c2UgLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuZXhwb3J0IGxldCBpbnF1aXJlciA9IHBsdWdpbnMuaW5xdWlyZXI7IC8vaW5xdWlyZXIgaXMgZm9yIGFza2luZyBxdWVzdGlvbnNcclxuZXhwb3J0IGxldCBjbGlmZiA9IHBsdWdpbnMuY2xpZmY7IC8vIGZvcm1hdHMgY2xpIG91dHB1dFxyXG5leHBvcnQgbGV0IGFyZ3YgPSBwbHVnaW5zLmFyZ3Y7IC8vYXJndiBnZXRzIGluaXRpYWwgY2xpIGNvbW1hbmRzIGFuZCBvcHRpb25zLlxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLSBjaGVja3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbmV4cG9ydCBsZXQgY2hlY2sgPSBTbWFydGNsaUNoZWNrcztcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0gZ2V0dGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5leHBvcnQgbGV0IGdldCA9IFNtYXJ0Y2xpR2V0dGVycztcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0gaW50ZXJhY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuZXhwb3J0IGxldCBpbnRlcmFjdGlvbiA9IFNtYXJ0Y2xpSW50ZXJhY3Rpb25zO1xyXG4iXX0=
