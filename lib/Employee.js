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

     GetRole = function() {
         // This INTENTIONALLY does not return a hard string
         // This method is used to demonstrate that inheritance
         // COULD be used to return the proper type name
         // without requiring overriding in subclasses.
         return this.constructor.name;
     }
 }


 module.exports = Employee;