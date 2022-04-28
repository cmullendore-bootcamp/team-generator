 class Employee {
     constructor(userName, id, email) {
         this.Name = userName;
         this.Id = id;
         this.Email = email;
     }

     GetName = function() {
         return this.Name;
     }

     GetId = function() {
         return this.Id;
     }

     GetEmail = function() {
         return this.Email;
     }
 }


 module.exports = Employee;