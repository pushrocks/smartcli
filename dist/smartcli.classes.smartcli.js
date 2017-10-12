"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartq = require("smartq");
const rxjs_1 = require("rxjs");
const plugins = require("./smartcli.plugins");
// import classes
const lik_1 = require("lik");
class Smartcli {
    constructor() {
        this.onlyOnProcessEnvCliCall = false;
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
    onlyTriggerOnProcessEnvCliCall() {
        this.onlyOnProcessEnvCliCall = true;
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
                if (this.onlyOnProcessEnvCliCall) {
                    if (process.env.CLI_CALL === 'true') {
                        done.resolve(this.argv);
                    }
                    else {
                        return;
                    }
                }
                else {
                    done.resolve(this.argv);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5zbWFydGNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0M7QUFDaEMsK0JBQThCO0FBRTlCLDhDQUE2QztBQUU3QyxpQkFBaUI7QUFDakIsNkJBQStCO0FBYS9CO0lBbUJFO1FBWlEsNEJBQXVCLEdBQUcsS0FBSyxDQUFBO1FBRXZDOztXQUVHO1FBQ0gsMEJBQXFCLEdBQUcsSUFBSSxlQUFTLEVBQXlCLENBQUE7UUFFOUQ7O1dBRUc7UUFDSCw2QkFBd0IsR0FBRyxJQUFJLGVBQVMsRUFBNEIsQ0FBQTtRQUdsRSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDcEMsQ0FBQztJQUVELDhCQUE4QjtRQUM1QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFBO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWUsQ0FBRSxNQUFNLEVBQUUsUUFBUTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUM3QyxNQUFNLENBQUE7SUFDUixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFFLGNBQXNCO1FBQ2hDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQU8sQ0FBQTtRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDO1lBQzdCLFdBQVcsRUFBRSxjQUFjO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUE7UUFD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