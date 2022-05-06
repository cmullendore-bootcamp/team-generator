const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(userName, id, email, officeNumber) {
        super(userName, id, email);
        this.OfficeNumber = officeNumber;
    }

    GetOfficeNumber = function() {
        return this.OfficeNumber;
    }

    GetRole = function() {
        return "Manager";
    }


    static GetQuestions = function() {
        let questions = Employee.GetQuestions();

        questions.push(...JSON.parse(`[{
            "type": "input",
            "name": "officeNumber",
            "message": "Office number?"
        }]`));

        return questions;
    }
}

module.exports = Manager;