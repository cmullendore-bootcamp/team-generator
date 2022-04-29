const Employee = require("../lib/Employee");

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
}
module.exports = Engineer;