import "typings-global";
/**
 * allows to specify an user interaction during runtime
 */
export declare type questionType = "input" | "confirm" | "list" | "rawlist" | "expand" | "checkbox" | "password" | "editor";
export interface choiceObject {
    name: string;
    value: any;
}
export interface validateFunction {
    (any: any): boolean;
}
export declare class Interaction {
    constructor();
    askQuestion(optionsArg: {
        type: questionType;
        message: string;
        default: any;
        choices: string[] | choiceObject[];
        validate: validateFunction;
    }): void;
    askQuestionArray: any;
}
export declare class QuestionTree {
    constructor(questionString: string, optionsArray: any);
}
export declare class QuestionTreeNode {
    constructor();
}
export declare class QuestionStorage {
    constructor();
}
