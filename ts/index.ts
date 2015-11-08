/// <reference path="typings/tsd.d.ts" />
/// <reference path="./smartcli.plugins.ts" />
/// <reference path="./smartcli.interfaces.ts" />
/// <reference path="./smartcli.checks.ts" />
/// <reference path="./smartcli.getters.ts" />
/// <reference path="./smartcli.interaction.ts" />

var plugins = smartcliPlugins.init(); //get all the required npm modules under plugins

//define the smartcli object
var smartcli:any = {};

//add plugins from above for direct use
smartcli.inquirer = plugins.inquirer; //inquirer is for asking questions
smartcli.cliff = plugins.cliff; // formats cli output
smartcli.argv = plugins.argv; //argv gets initial cli commands and options.

//init checks. Checks return boolean. That means they can be used as question with an answer of yes or no.

SmartcliChecks.init(); // is defined in smartcli.checks.ts
SmartcliGetters.init(); // is defined in smartcli.getters.ts
SmartcliInteraction.init(); // is defined in smartcli.interaction.ts


module.exports = smartcli; // expose smartcli to outside world
