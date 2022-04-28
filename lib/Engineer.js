const Employee = require("../lib/Employee");

function Engineer(userName, id, email) {
    this.Name = userName;
    this.Id = id;
    this.Email = email;
}

Engineer.prototype = Object.create(Employee.prototype);

module.exports = Engineer;