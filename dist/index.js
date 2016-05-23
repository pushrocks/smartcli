/// <reference path="typings/index.d.ts" />
"use strict";
var plugins = require("./smartcli.plugins");
var SmartcliChecks = require("./smartcli.checks");
var SmartcliGetters = require("./smartcli.getters");
var SmartcliInteractions = require("./smartcli.interaction");
/* ------------------------------------------------ *
 * ---------- plugins for direct use -------------- *
 * ------------------------------------------------ */
exports.commander = plugins.commander; //commander allows cool chaining of cli actions
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQzs7QUFHM0MsSUFBWSxPQUFPLFdBQU0sb0JBQ3pCLENBQUMsQ0FENEM7QUFDN0MsSUFBWSxjQUFjLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUNwRCxJQUFZLGVBQWUsV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELElBQVksb0JBQW9CLFdBQU0sd0JBQXdCLENBQUMsQ0FBQTtBQUUvRDs7c0RBRXNEO0FBQzNDLGlCQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLCtDQUErQztBQUM5RSxnQkFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQ0FBa0M7QUFDL0QsYUFBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUI7QUFDNUMsWUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyw2Q0FBNkM7QUFFN0U7O3NEQUVzRDtBQUMzQyxhQUFLLEdBQUcsY0FBYyxDQUFDO0FBRWxDOztzREFFc0Q7QUFDM0MsV0FBRyxHQUFHLGVBQWUsQ0FBQztBQUVqQzs7c0RBRXNEO0FBQzNDLG1CQUFXLEdBQUcsb0JBQW9CLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIGludGVyZmFjZXMgZnJvbSBcIi4vc21hcnRjbGkuaW50ZXJmYWNlc1wiXHJcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vc21hcnRjbGkucGx1Z2luc1wiXHJcbmltcG9ydCAqIGFzIFNtYXJ0Y2xpQ2hlY2tzIGZyb20gXCIuL3NtYXJ0Y2xpLmNoZWNrc1wiO1xyXG5pbXBvcnQgKiBhcyBTbWFydGNsaUdldHRlcnMgZnJvbSBcIi4vc21hcnRjbGkuZ2V0dGVyc1wiO1xyXG5pbXBvcnQgKiBhcyBTbWFydGNsaUludGVyYWN0aW9ucyBmcm9tIFwiLi9zbWFydGNsaS5pbnRlcmFjdGlvblwiO1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLSBwbHVnaW5zIGZvciBkaXJlY3QgdXNlIC0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbmV4cG9ydCBsZXQgY29tbWFuZGVyID0gcGx1Z2lucy5jb21tYW5kZXI7IC8vY29tbWFuZGVyIGFsbG93cyBjb29sIGNoYWluaW5nIG9mIGNsaSBhY3Rpb25zXHJcbmV4cG9ydCBsZXQgaW5xdWlyZXIgPSBwbHVnaW5zLmlucXVpcmVyOyAvL2lucXVpcmVyIGlzIGZvciBhc2tpbmcgcXVlc3Rpb25zXHJcbmV4cG9ydCBsZXQgY2xpZmYgPSBwbHVnaW5zLmNsaWZmOyAvLyBmb3JtYXRzIGNsaSBvdXRwdXRcclxuZXhwb3J0IGxldCBhcmd2ID0gcGx1Z2lucy5hcmd2OyAvL2FyZ3YgZ2V0cyBpbml0aWFsIGNsaSBjb21tYW5kcyBhbmQgb3B0aW9ucy5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0gY2hlY2tzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5leHBvcnQgbGV0IGNoZWNrID0gU21hcnRjbGlDaGVja3M7XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tIGdldHRlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuZXhwb3J0IGxldCBnZXQgPSBTbWFydGNsaUdldHRlcnM7XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tIGludGVyYWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbmV4cG9ydCBsZXQgaW50ZXJhY3Rpb24gPSBTbWFydGNsaUludGVyYWN0aW9ucztcclxuIl19
