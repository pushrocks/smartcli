"use strict";
const q = require("q");
const plugins = require("./smartcli.plugins");
// import classes
const lik_1 = require("lik");
class Smartcli {
    constructor() {
        // maps
        this.allCommandPromises = new lik_1.Objectmap();
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
        return this.allCommandPromises.find(commandPromiseObjectArg => {
            return commandPromiseObjectArg.commandName === commandNameArg;
        }).promise;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5zbWFydGNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuc21hcnRjbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUFzQjtBQUV0Qiw4Q0FBNkM7QUFHN0MsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQVE3QjtJQVVJO1FBRkEsT0FBTztRQUNQLHVCQUFrQixHQUFHLElBQUksZUFBUyxFQUF5QixDQUFBO1FBRXZELElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsTUFBTSxFQUFDLFFBQVE7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsUUFBUSxDQUFDLENBQUE7UUFDNUMsTUFBTSxDQUFBO0lBQ1YsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxhQUFvQztRQUMzQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFPLENBQUE7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPO2FBQ3BCLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDM0IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUF1QixDQUFDLGNBQXNCO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHVCQUF1QjtZQUN2RCxNQUFNLENBQUMsdUJBQXVCLENBQUMsV0FBVyxLQUFLLGNBQWMsQ0FBQTtRQUNqRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsVUFFUDtRQUNHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDWixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUMsU0FBUyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPO2FBQ3BCLElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM3QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZO1FBQ1IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBTyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTzthQUNwQixJQUFJLENBQUM7WUFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMzQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUMzQixNQUFNLENBQUE7SUFDVixDQUFDO0NBRUo7QUF0R0QsNEJBc0dDIn0=