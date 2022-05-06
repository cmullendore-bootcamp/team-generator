const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(userName, id, email, school) {
        super(userName, id, email);
        this.School = school;
    }

    GetSchool() {
        return this.School;
    }

    GetRole() {
        return "Intern";
    }

    GetHtml() {
        let html = super.GetHtml();

        html = html.replace(/{{Role}}/g, this.GetRole());
        html = html.replace(/{{RoleDetail}}/g, `<p>School: ${this.GetSchool()}</p>`);

        return html;
    }

    static GetQuestions() {
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