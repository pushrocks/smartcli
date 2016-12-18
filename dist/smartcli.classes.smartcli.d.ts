/// <reference types="q" />
import * as q from 'q';
import { Subject } from 'rxjs';
import { Objectmap } from 'lik';
export interface ICommandPromiseObject {
    commandName: string;
    promise: q.Promise<void>;
}
export interface ITriggerObservableObject {
    triggerName: string;
    subject: Subject<void>;
}
export declare class Smartcli {
    argv: any;
    questionsDone: any;
    parseStarted: any;
    commands: any;
    questions: any;
    version: string;
    /**
     * map of all Command/Promise objects to keep track
     */
    allCommandPromisesMap: Objectmap<ICommandPromiseObject>;
    /**
     * map of all Trigger/Observable objects to keep track
     */
    allTriggerObservablesMap: Objectmap<ITriggerObservableObject>;
    constructor();
    /**
     * adds an alias, meaning one equals the other in terms of command execution.
     */
    addCommandAlias(keyArg: any, aliasArg: any): void;
    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(commandNameArg: string): q.Promise<any>;
    /**
     * gets a Promise for a command word
     */
    getCommandPromiseByName(commandNameArg: string): q.Promise<void>;
    /**
     * adds a Trigger. Like addCommand(), but returns an subscribable observable
     */
    addTrigger(triggerNameArg: string): Subject<void>;
    /**
     * execute trigger by name
     * @param commandNameArg - the name of the command to trigger
     */
    trigger(triggerName: string): Subject<void>;
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
     * returns promise that is resolved when no commands are specified
     */
    standardTask(): q.Promise<any>;
    /**
     * start the process of evaluating commands
     */
    startParse(): void;
}
