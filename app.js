const Inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let manager = [];
let employees = [];

Inquirer.prompt(Manager.GetQuestions())
    .then(responses => {
        manager.push(responses);
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
                            employees.push(responses);
                            nextAction();
                        })

                    break;
                case "Add an intern":
                    Inquirer.prompt(Intern.GetQuestions())
                        .then(responses => {
                            employees.push(responses);
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
}




/*
Inquirer.prompt(questions)
            .then(responses => {
                return responses;
            })
*/