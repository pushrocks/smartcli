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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQyxpREFBaUQ7O0FBRWpELElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsSUFBTyxjQUFjLFdBQVcsbUJBQW1CLENBQUMsQ0FBQztBQUNyRCxJQUFPLGVBQWUsV0FBVyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZELElBQU8sb0JBQW9CLFdBQVcsd0JBQXdCLENBQUMsQ0FBQztBQUVoRTs7c0RBRXNEO0FBQzNDLGdCQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtDQUFrQztBQUMvRCxhQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLHFCQUFxQjtBQUM1QyxZQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLDZDQUE2QztBQUU3RTs7c0RBRXNEO0FBQzNDLGFBQUssR0FBRyxjQUFjLENBQUM7QUFFbEM7O3NEQUVzRDtBQUMzQyxXQUFHLEdBQUcsZUFBZSxDQUFDO0FBRWpDOztzREFFc0Q7QUFDM0MsbUJBQVcsR0FBRyxvQkFBb0IsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL21haW4uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3NtYXJ0Y2xpLmludGVyZmFjZXMudHNcIiAvPlxyXG5cclxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9zbWFydGNsaS5wbHVnaW5zXCIpO1xyXG5pbXBvcnQgU21hcnRjbGlDaGVja3MgPSByZXF1aXJlKFwiLi9zbWFydGNsaS5jaGVja3NcIik7XHJcbmltcG9ydCBTbWFydGNsaUdldHRlcnMgPSByZXF1aXJlKFwiLi9zbWFydGNsaS5nZXR0ZXJzXCIpO1xyXG5pbXBvcnQgU21hcnRjbGlJbnRlcmFjdGlvbnMgPSByZXF1aXJlKFwiLi9zbWFydGNsaS5pbnRlcmFjdGlvblwiKTtcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0gcGx1Z2lucyBmb3IgZGlyZWN0IHVzZSAtLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5leHBvcnQgbGV0IGlucXVpcmVyID0gcGx1Z2lucy5pbnF1aXJlcjsgLy9pbnF1aXJlciBpcyBmb3IgYXNraW5nIHF1ZXN0aW9uc1xyXG5leHBvcnQgbGV0IGNsaWZmID0gcGx1Z2lucy5jbGlmZjsgLy8gZm9ybWF0cyBjbGkgb3V0cHV0XHJcbmV4cG9ydCBsZXQgYXJndiA9IHBsdWdpbnMuYXJndjsgLy9hcmd2IGdldHMgaW5pdGlhbCBjbGkgY29tbWFuZHMgYW5kIG9wdGlvbnMuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tIGNoZWNrcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuZXhwb3J0IGxldCBjaGVjayA9IFNtYXJ0Y2xpQ2hlY2tzO1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLSBnZXR0ZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbmV4cG9ydCBsZXQgZ2V0ID0gU21hcnRjbGlHZXR0ZXJzO1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLSBpbnRlcmFjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5leHBvcnQgbGV0IGludGVyYWN0aW9uID0gU21hcnRjbGlJbnRlcmFjdGlvbnM7XHJcbiJdfQ==
