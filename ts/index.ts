import "typings-global";

import * as interfaces from "./smartcli.interfaces"
import * as plugins from "./smartcli.plugins"
import * as SmartcliChecks from "./smartcli.checks";
import * as SmartcliGetters from "./smartcli.getters";
import * as SmartcliInteractions from "./smartcli.interaction";

import {Smartcli} from "./smartcli.classes.smartcli";
export {Smartcli} from "./smartcli.classes.smartcli";

/* ------------------------------------------------ *
 * ---------- plugins for direct use -------------- *
 * ------------------------------------------------ */
export let commander = plugins.commander; //commander allows cool chaining of cli actions
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
