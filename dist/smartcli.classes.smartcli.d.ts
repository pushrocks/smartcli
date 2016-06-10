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
    addQuestion(definitionArg: {
        questionString: string;
        questionType: string;
    }): void;
    addVersion(versionArg: string): void;
    standardTask(): any;
    startParse(): void;
}