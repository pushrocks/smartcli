/// <reference path="typings/main.d.ts" />
/// <reference path="./smartcli.interfaces.ts" />
/// <reference path="./smartcli.getters.ts" />
/// <reference path="./smartcli.interaction.ts" />

import plugins = require("./smartcli.plugins");
import SmartcliChecks = require("./smartcli.checks");

/* ------------------------------------------------ *
 * ---------- plugins for direct use -------------- *
 * ------------------------------------------------ */
export let inquirer = plugins.inquirer; //inquirer is for asking questions
export let cliff = plugins.cliff; // formats cli output
export let argv = plugins.argv; //argv gets initial cli commands and options.

/* ------------------------------------------------ *
 * ---------- checks -------------- *
 * ------------------------------------------------ */



//init checks. Checks return boolean. That means they can be used as question with an answer of yes or no.

SmartcliGetters.init(); // is defined in smartcli.getters.ts
SmartcliInteraction.init(); // is defined in smartcli.interaction.ts
