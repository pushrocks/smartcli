import "typings-global";
import "./smartcli.interfaces";
/**
 * executes callback with answer to question as argument
 * @param questionString the question you want to ask the user
 * @param cb the function to execute with answer as param
 * @returns {null}
 */
export declare let getAnswer: (questionString: string, cb: any) => any;
/**
 *
 * @param questionString
 * @param choiceOptions
 * @param cb
 * @returns {null}
 */
export declare let getChoice: (questionString: string, choiceOptions: string[], cb: any) => any;
