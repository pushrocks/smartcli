import "typings-global";
import * as interfaces from "./smartcli.interfaces";
export declare class Smartcli {
    questionsDone: any;
    commands: interfaces.CliCommand[];
    questions: any;
    constructor();
    addCommand(definitionArg: {
        commandName: string;
    }): any;
    addQuestion(definitionArg: {
        questionString: string;
        questionType: string;
    }): void;
    addVersion(versionArg: string): void;
    startParse(): void;
}
