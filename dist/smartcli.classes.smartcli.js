"use strict";
const q = require("q");
const rxjs_1 = require("rxjs");
const plugins = require("./smartcli.plugins");
// import classes
const lik_1 = require("lik");
class Smartcli {
    constructor() {
        /**
         * map of all Command/Promise objects to keep track
         */
        this.allCommandPromisesMap = new lik_1.Objectmap();
        /**
         * map of all Trigger/Observable objects to keep track
         */
        this.allTriggerObservablesMap = new lik_1.Objectmap();
        this.argv = plugins.yargs;
        this.questionsDone = q.defer();
        this.parseStarted = q.defer();
    }
    /**
     * adds an alias, meaning one equals the other in terms of command execution.
     */
    addCommandAlias(keyArg, aliasArg) {
        this.argv = this.argv.alias(keyArg, aliasArg);
        return;
    }
    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(commandNameArg) {
        let done = q.defer();
        this.allCommandPromisesMap.add({
            commandName: commandNameArg,
            promise: done.promise
        });
        this.parseStarted.promise
            .then(() => {
            if (this.argv._.indexOf(commandNameArg) === 0) {
                done.resolve(this.argv);
            }
            else {
                done.reject(this.argv);
            }
        });
        return done.promise;
    }
    /**
     * gets a Promise for a command word
     */
    getCommandPromiseByName(commandNameArg) {
        return this.allCommandPromisesMap.find(commandDeferredObjectArg => {
            return commandDeferredObjectArg.commandName === commandNameArg;
        }).promise;
    }
    /**
     * adds a Trigger. Like addCommand(), but returns an subscribable observable
     */
    addTrigger(triggerNameArg) {
        let triggerSubject = new rxjs_1.Subject();
        this.allTriggerObservablesMap.add({
            triggerName: triggerNameArg,
            subject: triggerSubject
        });
        this.addCommand(triggerNameArg).then(() => {
            triggerSubject.next();
        });
        return triggerSubject;
    }
    /**
     * execute trigger by name
     * @param commandNameArg - the name of the command to trigger
     */
    trigger(triggerName) {
        let triggerSubject = this.allTriggerObservablesMap.find(triggerObservableObjectArg => {
            return triggerObservableObjectArg.triggerName === triggerName;
        }).subject;
        triggerSubject.next();
        return triggerSubject;
    }
    /**
     * allows to specify help text to be printed above the rest of the help text
     */
    addHelp(optionsArg) {
        this.addCommand('help').then(argvArg => {
            plugins.beautylog.log(optionsArg.helpText);
        });
    }
    /**
     * specify version to be printed for -v --version
     */
    addVersion(versionArg) {
        this.version = versionArg;
        this.addCommandAlias('v', 'version');
        this.parseStarted.promise
            .then(() => {
            if (this.argv.v) {
                console.log(this.version);
            }
        });
    }
    /**
     * returns promise that is resolved when no commands are specified
     */
    standardTask() {
        let done = q.defer();
        this.allCommandPromisesMap.add({
            commandName: 'standard',
            promise: done.promise
        });
        this.parseStarted.promise
            .then(() => {
            if (this.argv._.length === 0 && !this.argv.v) {
                done.resolve(this.argv);
            }
            else {
                done.reject(this.argv);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5zbWFydGNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUN0QiwrQkFBOEI7QUFFOUIsOENBQTZDO0FBRTdDLGlCQUFpQjtBQUNqQiw2QkFBK0I7QUFhL0I7SUFrQkk7UUFWQTs7V0FFRztRQUNILDBCQUFxQixHQUFHLElBQUksZUFBUyxFQUF5QixDQUFBO1FBRTlEOztXQUVHO1FBQ0gsNkJBQXdCLEdBQUcsSUFBSSxlQUFTLEVBQTRCLENBQUE7UUFHaEUsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWUsQ0FBQyxNQUFNLEVBQUMsUUFBUTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxRQUFRLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQUE7SUFDVixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLGNBQXNCO1FBQzdCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQU8sQ0FBQTtRQUN6QixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDO1lBQzNCLFdBQVcsRUFBRSxjQUFjO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN4QixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87YUFDcEIsSUFBSSxDQUFDO1lBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENB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