const Employee = require("../lib/Employee");

function Intern(userName, id, email) {
    this.Name = userName;
    this.Id = id;
    this.Email = email;
}

Intern.prototype = Object.create(Employee.prototype);


module.exports = Intern;