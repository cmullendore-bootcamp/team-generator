const FS = require("fs");
const Inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let manager = [];
let employees = [];

Inquirer.prompt(Manager.GetQuestions())
    .then(responses => {
        let mgr = new Manager(responses.userName, responses.userId, responses.userEmail, responses.officeNumber);
        manager.push(mgr);
    })
    .then(() => nextAction());

function nextAction() {
    Inquirer.prompt([{
            type: "list",
            name: "nextAction",
            message: "What would you like to do next?",
            choices: [
                "Add an engineer",
                "Add an intern",
                new Inquirer.Separator(),
                "Exit"
            ]
        }])
        .then(answers => {
            switch (answers.nextAction) {
                case "Add an engineer":
                    Inquirer.prompt(Engineer.GetQuestions())
                        .then(responses => {
                            employees.push(new Engineer(responses.userName, responses.userId, responses.userEmail, responses.ghRepo));
                            nextAction();
                        })

                    break;
                case "Add an intern":
                    Inquirer.prompt(Intern.GetQuestions())
                        .then(responses => {
                            employees.push(new Intern(responses.userName, responses.userId, responses.userEmail, responses.school));
                            nextAction();
                        })
                    break;
                case "Exit":
                    buildPage(manager, employees)
                    break;
            }
        });
}

function buildPage(manager, employees) {
    console.log(manager);
    console.log(employees);

    let html = FS.readFileSync("./src/index.html", "utf-8");

    html = html.replace("{{ManagerCard}}", manager[0].GetHtml());

    employeeHtml = "";

    for (i = 0; i < employees.length; i++) {
        employeeHtml = employeeHtml + employees[i].GetHtml();
    }

    html = html.replace("{{EmployeeCards}}", employeeHtml);

    FS.writeFileSync("./dist/index.html", html);

}




/*
Inquirer.prompt(questions)
            .then(responses => {
                return responses;
            })
*/