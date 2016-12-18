"use strict";
const q = require("q");
const plugins = require("./smartcli.plugins");
// import classes
const lik_1 = require("lik");
class Smartcli {
    constructor() {
        /**
         * map of all Command/Promise objects to keep track
         */
        this.allCommandDeferredsMap = new lik_1.Objectmap();
        this.argv = plugins.yargs;
        this.questionsDone = q.defer();
        this.parseStarted = q.defer();
    }
    /**
     * adds an alias, meaning one equals the other in terms of triggering associated commands
     */
    addAlias(keyArg, aliasArg) {
        this.argv = this.argv.alias(keyArg, aliasArg);
        return;
    }
    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(definitionArg) {
        let done = q.defer();
        this.allCommandDeferredsMap.add({
            commandName: definitionArg.commandName,
            deferred: done
        });
        this.parseStarted.promise
            .then(() => {
            if (this.argv._.indexOf(definitionArg.commandName) === 0) {
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
        return this.allCommandDeferredsMap.find(commandDeferredObjectArg => {
            return commandDeferredObjectArg.commandName === commandNameArg;
        }).deferred.promise;
    }
    /**
     * triggers a command by name
     * @param commandNameArg - the name of the command to trigger
     */
    triggerCommandByName(commandNameArg) {
        let commandDeferred = this.allCommandDeferredsMap.find(commandDeferredObjectArg => {
            return commandDeferredObjectArg.commandName === commandNameArg;
        }).deferred;
        commandDeferred.resolve();
        return commandDeferred.promise;
    }
    /**
     * allows to specify help text to be printed above the rest of the help text
     */
    addHelp(optionsArg) {
        this.addCommand({
            commandName: 'help'
        }).then(argvArg => {
            plugins.beautylog.log(optionsArg.helpText);
        });
    }
    /**
     * specify version to be printed for -v --version
     */
    addVersion(versionArg) {
        this.version = versionArg;
        this.addAlias('v', 'version');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5zbWFydGNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUV0Qiw4Q0FBNkM7QUFFN0MsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQVE3QjtJQWFJO1FBTEE7O1dBRUc7UUFDSCwyQkFBc0IsR0FBRyxJQUFJLGVBQVMsRUFBMEIsQ0FBQTtRQUc1RCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFDLE1BQU0sRUFBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVDLE1BQU0sQ0FBQTtJQUNWLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsYUFBb0M7UUFDM0MsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBTyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUM7WUFDNUIsV0FBVyxFQUFFLGFBQWEsQ0FBQyxXQUFXO1lBQ3RDLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzthQUNwQixJQUFJLENBQUM7WUFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZE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