import * as smartq from 'smartq';
import { Subject } from 'rxjs';
import * as plugins from './smartcli.plugins';
export interface ICommandPromiseObject {
    commandName: string;
    promise: Promise<void>;
}
export interface ITriggerObservableObject {
    triggerName: string;
    subject: Subject<any>;
}
/**
 * class to create a new instance of Smartcli. Handles parsing of command line arguments.
 */
export declare class Smartcli {
    argv: any;
    questionsDone: any;
    parseStarted: smartq.Deferred<any>;
    commands: any;
    questions: any;
    version: string;
    private onlyOnProcessEnvCliCall;
    /**
     * map of all Trigger/Observable objects to keep track
     */
    allTriggerObservablesMap: plugins.lik.Objectmap<ITriggerObservableObject>;
    /**
     * The constructor of Smartcli
     */
    constructor();
    /**
     * halts any execution of commands if (process.env.CLI_CALL === false)
     */
    onlyTriggerOnProcessEnvCliCall(): void;
    /**
     * adds an alias, meaning one equals the other in terms of command execution.
     */
    addCommandAlias(keyArg: any, aliasArg: any): void;
    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(commandNameArg: string): Subject<any>;
    /**
     * adds a Trigger. Like addCommand(), but returns an subscribable observable
     */
    addTrigger(triggerNameArg: string): Subject<any>;
    /**
     * execute trigger by name
     * @param commandNameArg - the name of the command to trigger
     */
    trigger(triggerName: string): Subject<any>;
    getTriggerSubject(triggerName: string): Subject<any>;
    /**
     * allows to specify help text to be printed above the rest of the help text
     */
    addHelp(optionsArg: {
        helpText: string;
    }): void;
    /**
     * specify version to be printed for -v --version
     */
    addVersion(versionArg: string): void;
    /**
     * adds a trigger that is called when no command is specified
     */
    standardTask(): Subject<any>;
    /**
     * start the process of evaluating commands
     */
    startParse(): void;
}
