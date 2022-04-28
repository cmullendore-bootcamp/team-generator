const Employee = require("../lib/Employee");

function Manager(userName, id, email) {
    this.Name = userName;
    this.Id = id;
    this.Email = email;
}

Manager.prototype = Object.create(Employee.prototype);


module.exports = Manager;