const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(userName, id, email, school) {
        super(userName, id, email);
        this.School = school;
    }

    GetSchool = function() {
        return this.School;
    }

    GetRole = function() {
        return "Intern";
    }

    static GetQuestions = function() {
        let questions = Employee.GetQuestions();

        questions.push(...JSON.parse(`[{
            "type": "input",
            "name": "school",
            "message": "Intern's school?"
        }]`));

        return questions;
    }
}
module.exports = Intern;