const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(empName, id, email, ghUser) {
        super(empName, id, email);
        this.Github = ghUser;;
    }

    GetGithub = function() {
        return this.Github;
    }

    GetRole = function() {
        return "Engineer";
    }

    static GetQuestions = function() {
        let questions = Employee.GetQuestions();

        questions.push(...JSON.parse(`[{
            "type": "input",
            "name": "ghRepo",
            "message": "Engineer's github username?"
        }]`));

        return questions;
    }
}
module.exports = Engineer;