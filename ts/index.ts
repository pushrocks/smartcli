/// <reference path="typings/main.d.ts" />
/// <reference path="./smartcli.interfaces.ts" />

import plugins = require("./smartcli.plugins");
import SmartcliChecks = require("./smartcli.checks");
import SmartcliGetters = require("./smartcli.getters");
import SmartcliInteractions = require("./smartcli.interaction");

/* ------------------------------------------------ *
 * ---------- plugins for direct use -------------- *
 * ------------------------------------------------ */
export let inquirer = plugins.inquirer; //inquirer is for asking questions
export let cliff = plugins.cliff; // formats cli output
export let argv = plugins.argv; //argv gets initial cli commands and options.

/* ------------------------------------------------ *
 * ---------- checks ------------------------------ *
 * ------------------------------------------------ */
export let check = SmartcliChecks;

/* ------------------------------------------------ *
 * ---------- getters ----------------------------- *
 * ------------------------------------------------ */
export let get = SmartcliGetters;

/* ------------------------------------------------ *
 * ---------- interaction ----------------------------- *
 * ------------------------------------------------ */
export let interaction = SmartcliInteractions;
