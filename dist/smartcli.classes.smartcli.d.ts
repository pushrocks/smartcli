/// <reference types="q" />
import * as q from 'q';
import { Objectmap } from 'lik';
export interface ICommandDeferredObject {
    commandName: string;
    deferred: q.Deferred<any>;
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
    allCommandDeferredsMap: Objectmap<ICommandDeferredObject>;
    constructor();
    /**
     * adds an alias, meaning one equals the other in terms of triggering associated commands
     */
    addAlias(keyArg: any, aliasArg: any): void;
    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(definitionArg: {
        commandName: string;
    }): q.Promise<any>;
    /**
     * gets a Promise for a command word
     */
    getCommandPromiseByName(commandNameArg: string): q.Promise<void>;
    /**
     * triggers a command by name
     * @param commandNameArg - the name of the command to trigger
     */
    triggerCommandByName(commandNameArg: string): q.Promise<any>;
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
