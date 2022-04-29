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
}

module.exports = Manager;