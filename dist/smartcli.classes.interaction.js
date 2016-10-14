"use strict";
const plugins = require("./smartcli.plugins");
class Interaction {
    constructor() {
    }
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
}
exports.Interaction = Interaction;
class QuestionTree {
    constructor(questionString, optionsArray) {
    }
}
exports.QuestionTree = QuestionTree;
class QuestionTreeNode {
    constructor() {
    }
}
exports.QuestionTreeNode = QuestionTreeNode;
class QuestionStorage {
    constructor() {
    }
}
exports.QuestionStorage = QuestionStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjbGkuY2xhc3Nlcy5pbnRlcmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Y2xpLmNsYXNzZXMuaW50ZXJhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE2QztBQWU3QztJQUNJO0lBQ0EsQ0FBQztJQUVELFdBQVcsQ0FBQyxVQU1YO1FBQ0csSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7Z0JBQ3JCLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTztnQkFDM0IsT0FBTyxFQUFFLFVBQVUsQ0FBQyxPQUFPO2dCQUMzQixPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU87Z0JBQzNCLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUTthQUNoQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBRUo7QUF2QkQsa0NBdUJDO0FBR0Q7SUFFSSxZQUFZLGNBQXNCLEVBQUUsWUFBWTtJQUVoRCxDQUFDO0NBQ0o7QUFMRCxvQ0FLQztBQUVEO0lBQ0k7SUFFQSxDQUFDO0NBQ0o7QUFKRCw0Q0FJQztBQUVEO0lBQ0k7SUFFQSxDQUFDO0NBQ0o7QUFKRCwwQ0FJQyJ9