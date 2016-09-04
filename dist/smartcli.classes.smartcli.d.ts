/// <reference types="q" />
import "typings-global";
import * as plugins from "./smartcli.plugins";
import { Objectmap } from "lik";
export interface commandPromiseObject {
    commandName: string;
    promise: plugins.q.Promise<any>;
}
export declare class Smartcli {
    argv: any;
    questionsDone: any;
    parseStarted: any;
    commands: any;
    questions: any;
    version: string;
    allCommandPromises: Objectmap<commandPromiseObject>;
    constructor();
    /**
     * adds an alias, meaning one equals the other in terms of triggering associated commands
     */
    addAlias(keyArg: any, aliasArg: any): void;
    /**
     * adds a Command by returning a Promise that reacts to the specific commandString given.
     *
     * Note: in e.g. "npm install something" the "install" is considered the command.
     */
    addCommand(definitionArg: {
        commandName: string;
    }): plugins.q.Promise<{}>;
    /**
     * gets a Promise for a command word
     */
    getCommandPromiseByName(commandNameArg: string): plugins.q.Promise<any>;
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
    standardTask(): plugins.q.Promise<{}>;
    /**
     * start the process of evaluating commands
     */
    startParse(): void;
}
