/// <reference types="q" />
import "typings-global";
import * as plugins from "./smartcli.plugins";
export declare class Smartcli {
    argv: any;
    questionsDone: any;
    parseStarted: any;
    commands: any;
    questions: any;
    version: string;
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
    getCommandPromise(commandNameArg: any): void;
    addQuestion(definitionArg: {
        questionString: string;
        questionType: string;
    }): void;
    addHelp(): void;
    addVersion(versionArg: string): void;
    standardTask(): plugins.q.Promise<{}>;
    startParse(): void;
}
