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
}
module.exports = Intern;