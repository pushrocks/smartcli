import "typings-global";
import * as plugins from "./smartcli.plugins";

/**
 * allows to specify an user interaction during runtime
 */

export type questionType = "input" | "confirm" | "list" | "rawlist" | "expand" | "checkbox" | "password" | "editor"
export interface choiceObject {
    name: string;
    value: any
}
export interface validateFunction {
    (any):boolean
}

export class Interaction {
    constructor() {
    };

    askQuestion(optionsArg: {
        type: questionType,
        message: string
        default: any
        choices: string[] | choiceObject[];
        validate: validateFunction
    }) {
        let done = plugins.q.defer();
        plugins.inquirer.prompt([{
            type: optionsArg.type,
            message: optionsArg.message,
            default: optionsArg.default,
            choices:optionsArg.choices,
            validate: optionsArg.validate
        }]).then(answers => {
            done.resolve(answers);
        });
    };
    askQuestionArray
}


export class QuestionTree {

    constructor(questionString: string, optionsArray) {

    };
};

export class QuestionTreeNode {
    constructor() {

    }
};

export class QuestionStorage {
    constructor() {

    }
}