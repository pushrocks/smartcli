"use strict";
require("typings-global");
const plugins = require("./smartcli.plugins");
class Interaction {
    constructor() {
    }
    ;
    askQuestion(optionsArg) {
        let done = plugins.q.defer();
        plugins.inquirer.prompt([{
                type: optionsArg.type,
                message: optionsArg.message,
                default: optionsArg.default,
                choices: optionsArg.choices,
                validate: optionsArg.validate
            }]).then(answers => {
            done.resolve(answers);
        });
    }
    ;
}
exports.Interaction = Interaction;
class QuestionTree {
    constructor(questionString, optionsArray) {
    }
    ;
}
exports.QuestionTree = QuestionTree;
;
class QuestionTreeNode {
    constructor() {
    }
}
exports.QuestionTreeNode = QuestionTreeNode;
;
class QuestionStorage {
    constructor() {
    }
}
exports.QuestionStorage = QuestionStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5pbnRlcmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuaW50ZXJhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUN4QixNQUFZLE9BQU8sV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBZTlDO0lBQ0k7SUFDQSxDQUFDOztJQUVELFdBQVcsQ0FBQyxVQU1YO1FBQ0csSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7Z0JBQ3JCLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTztnQkFDM0IsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPO2dCQUMzQixPQUFPLEVBQUMsVUFBVSxDQUFDLE9BQU87Z0JBQzFCLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUTthQUNoQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztBQUVMLENBQUM7QUF2QlksbUJBQVcsY0F1QnZCLENBQUE7QUFHRDtJQUVJLFlBQVksY0FBc0IsRUFBRSxZQUFZO0lBRWhELENBQUM7O0FBQ0wsQ0FBQztBQUxZLG9CQUFZLGVBS3hCLENBQUE7QUFBQSxDQUFDO0FBRUY7SUFDSTtJQUVBLENBQUM7QUFDTCxDQUFDO0FBSlksd0JBQWdCLG1CQUk1QixDQUFBO0FBQUEsQ0FBQztBQUVGO0lBQ0k7SUFFQSxDQUFDO0FBQ0wsQ0FBQztBQUpZLHVCQUFlLGtCQUkzQixDQUFBIn0=