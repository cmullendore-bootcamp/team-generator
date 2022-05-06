const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(userName, id, email, officeNumber) {
        super(userName, id, email);
        this.OfficeNumber = officeNumber;
    }

    GetOfficeNumber() {
        return this.OfficeNumber;
    }

    GetRole() {
        return "Manager";
    }

    GetHtml() {
        let html = super.GetHtml();

        html = html.replace(/{{Role}}/g, this.GetRole());
        html = html.replace(/{{RoleDetail}}/g, `<p>Office: ${this.GetOfficeNumber()}</p>`);

        return html;
    }


    static GetQuestions() {
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