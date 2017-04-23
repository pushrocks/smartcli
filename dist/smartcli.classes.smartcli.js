"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartq = require("smartq");
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
        this.questionsDone = smartq.defer();
        this.parseStarted = smartq.defer();
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
        let done = smartq.defer();
        this.allCommandPromisesMap.add({
            commandName: commandNameArg,
            promise: done.promise
        });
        this.parseStarted.promise
            .then(() => {
            if (this.argv._.indexOf(commandNameArg) === 0) {
                done.resolve(this.argv);
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
            triggerSubject.next(this.argv);
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
        triggerSubject.next(this.argv);
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
        let done = smartq.defer();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5zbWFydGNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0M7QUFDaEMsK0JBQThCO0FBRTlCLDhDQUE2QztBQUU3QyxpQkFBaUI7QUFDakIsNkJBQStCO0FBYS9CO0lBa0JFO1FBVkE7O1dBRUc7UUFDSCwwQkFBcUIsR0FBRyxJQUFJLGVBQVMsRUFBeUIsQ0FBQTtRQUU5RDs7V0FFRztRQUNILDZCQUF3QixHQUFHLElBQUksZUFBUyxFQUE0QixDQUFBO1FBR2xFLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNwQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVE7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDN0MsTUFBTSxDQUFBO0lBQ1IsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxjQUFzQjtRQUMvQixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFPLENBQUE7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQztZQUM3QixXQUFXLEVBQUUsY0FBYztZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPO2FBQ3RCLElBQUksQ0FBQztZQUNKLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxD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