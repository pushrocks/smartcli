"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartq = require("smartq");
const rxjs_1 = require("rxjs");
const plugins = require("./smartcli.plugins");
// import classes
const lik_1 = require("lik");
/**
 * class to create a new instance of Smartcli. Handles parsing of command line arguments.
 */
class Smartcli {
    /**
     * The constructor of Smartcli
     */
    constructor() {
        this.onlyOnProcessEnvCliCall = false;
        /**
         * map of all Trigger/Observable objects to keep track
         */
        this.allTriggerObservablesMap = new lik_1.Objectmap();
        this.argv = plugins.yargs;
        this.questionsDone = smartq.defer();
        this.parseStarted = smartq.defer();
    }
    /**
     * halts any execution of commands if (process.env.CLI_CALL === false)
     */
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
        let triggerSubject = this.addTrigger(commandNameArg);
        this.parseStarted.promise.then(() => {
            if (this.argv._.indexOf(commandNameArg) === 0) {
                this.trigger(commandNameArg);
            }
        });
        return triggerSubject;
    }
    /**
     * adds a Trigger. Like addCommand(), but returns an subscribable observable
     */
    addTrigger(triggerNameArg) {
        let triggerSubject = new rxjs_1.Subject();
        if (!this.getTriggerSubject(triggerNameArg)) {
            this.allTriggerObservablesMap.add({
                triggerName: triggerNameArg,
                subject: triggerSubject
            });
        }
        else {
            throw new Error(`you can't add a trigger twice`);
        }
        return triggerSubject;
    }
    /**
     * execute trigger by name
     * @param commandNameArg - the name of the command to trigger
     */
    trigger(triggerName) {
        let triggerSubject = this.getTriggerSubject(triggerName);
        triggerSubject.next(this.argv);
        return triggerSubject;
    }
    getTriggerSubject(triggerName) {
        const triggerObservableObject = this.allTriggerObservablesMap.find(triggerObservableObjectArg => {
            return triggerObservableObjectArg.triggerName === triggerName;
        });
        if (triggerObservableObject) {
            return triggerObservableObject.subject;
        }
        else {
            return null;
        }
    }
    /**
     * allows to specify help text to be printed above the rest of the help text
     */
    addHelp(optionsArg) {
        this.addCommand('help').subscribe(argvArg => {
            plugins.beautylog.log(optionsArg.helpText);
        });
    }
    /**
     * specify version to be printed for -v --version
     */
    addVersion(versionArg) {
        this.version = versionArg;
        this.addCommandAlias('v', 'version');
        this.parseStarted.promise.then(() => {
            if (this.argv.v) {
                console.log(this.version);
            }
        });
    }
    /**
     * adds a trigger that is called when no command is specified
     */
    standardTask() {
        let standardSubject = this.addTrigger('standardTask');
        this.parseStarted.promise.then(() => {
            if (this.argv._.length === 0 && !this.argv.v) {
                if (this.onlyOnProcessEnvCliCall) {
                    if (process.env.CLI_CALL === 'true') {
                        this.trigger('standardTask');
                    }
                    else {
                        return;
                    }
                }
                else {
                    this.trigger('standardTask');
                }
            }
        });
        return standardSubject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5zbWFydGNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBaUM7QUFDakMsK0JBQStCO0FBRS9CLDhDQUE4QztBQUU5QyxpQkFBaUI7QUFDakIsNkJBQWdDO0FBYWhDOztHQUVHO0FBQ0g7SUFjRTs7T0FFRztJQUNIO1FBVlEsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBRXhDOztXQUVHO1FBQ0gsNkJBQXdCLEdBQUcsSUFBSSxlQUFTLEVBQTRCLENBQUM7UUFNbkUsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNILDhCQUE4QjtRQUM1QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWUsQ0FBQyxNQUFNLEVBQUUsUUFBUTtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxPQUFPO0lBQ1QsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxjQUFzQjtRQUMvQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUss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