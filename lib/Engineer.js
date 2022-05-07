const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(empName, id, email, ghUser) {
        super(empName, id, email);
        this.Github = ghUser;;
    }

    GetGithub() {
        return this.Github;
    }

    GetRole() {
        return "Engineer";
    }

    GetHtml() {
        let html = super.GetHtml();

        html = html.replace(/{{Role}}/g, this.GetRole());
        html = html.replace(/{{RoleDetail}}/g, `<p>Github Repo: <a href="https://github.com/${this.GetGithub()}">${this.GetGithub()}</p>`);

        return html;
    }

    static GetQuestions() {
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