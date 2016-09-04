"use strict";
require("typings-global");
const plugins = require("./smartcli.plugins");
// import classes
const lik_1 = require("lik");
;
class Smartcli {
    constructor() {
        // maps
        this.allCommandPromises = new lik_1.Objectmap();
        this.argv = plugins.yargs;
        this.questionsDone = plugins.q.defer();
        this.parseStarted = plugins.q.defer();
    }
    ;
    /**
     * adds an alias, meaning one equals the other in terms of triggering associated commands
     */
    addAlias(keyArg, aliasArg) {
        this.argv = this.argv.alias(keyArg, aliasArg);
        return;
    }
    ;
    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     *
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(definitionArg) {
        let done = plugins.q.defer();
        this.parseStarted.promise
            .then(() => {
            if (this.argv._.indexOf(definitionArg.commandName) == 0) {
                done.resolve(this.argv);
            }
            else {
                done.reject(this.argv);
            }
        });
        return done.promise;
    }
    ;
    /**
     * gets a Promise for a command word
     */
    getCommandPromiseByName(commandNameArg) {
        return this.allCommandPromises.find(commandPromiseObjectArg => {
            return commandPromiseObjectArg.commandName === commandNameArg;
        }).promise;
    }
    ;
    /**
     * allows to specify help text to be printed above the rest of the help text
     */
    addHelp(optionsArg) {
        this.addCommand({
            commandName: "help"
        }).then(argvArg => {
            plugins.beautylog.log(optionsArg.helpText);
        });
    }
    ;
    /**
     * specify version to be printed for -v --version
     */
    addVersion(versionArg) {
        this.version = versionArg;
        this.addAlias("v", "version");
        this.parseStarted.promise
            .then(() => {
            if (this.argv.v) {
                console.log(this.version);
            }
        });
    }
    ;
    /**
     * returns promise that is resolved when no commands are specified
     */
    standardTask() {
        let done = plugins.q.defer();
        this.parseStarted.promise
            .then(() => {
            if (this.argv._.length == 0 && !this.argv.v) {
                done.resolve(this.argv);
            }
            else {
                done.reject(this.argv);
            }
            ;
        });
        return done.promise;
    }
    /**
     * start the process of evaluating commands
     */
    startParse() {
        this.argv = this.argv.argv;
        this.parseStarted.resolve();
        return;
    }
}
exports.Smartcli = Smartcli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5zbWFydGNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QixNQUFZLE9BQU8sV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBRzlDLGlCQUFpQjtBQUNqQixzQkFBd0IsS0FBSyxDQUFDLENBQUE7QUFNN0IsQ0FBQztBQUVGO0lBVUk7UUFGQSxPQUFPO1FBQ1AsdUJBQWtCLEdBQUcsSUFBSSxlQUFTLEVBQXdCLENBQUM7UUFFdkQsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7SUFFRDs7T0FFRztJQUNILFFBQVEsQ0FBQyxNQUFNLEVBQUMsUUFBUTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUM7SUFDWCxDQUFDOztJQUVEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsYUFBa0M7UUFDekMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87YUFDcEIsSUFBSSxDQUFDO1lBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENB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