import "typings-global";
export declare class Smartcli {
    argv: any;
    questionsDone: any;
    parseStarted: any;
    commands: any;
    questions: any;
    version: string;
    constructor();
    addAlias(keyArg: any, aliasArg: any): void;
    addCommand(definitionArg: {
        commandName: string;
    }): any;
    getCommandPromise(commandNameArg: any): void;
    addQuestion(definitionArg: {
        questionString: string;
        questionType: string;
    }): void;
    addHelp(): void;
    addVersion(versionArg: string): void;
    standardTask(): any;
    startParse(): void;
}
