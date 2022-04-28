 function Employee(userName, id, email) {
     this.Name = userName;
     this.Id = id;
     this.Email = email;
 }


 Employee.prototype.GetName = function() {
     return this.Name;
 }

 Employee.prototype.GetId = function() {
     return this.Id;
 }

 Employee.prototype.GetEmail = function() {
     return this.Email;
 }

 module.exports = Employee;