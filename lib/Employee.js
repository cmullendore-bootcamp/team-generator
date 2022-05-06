class Employee {
    constructor(userName, userId, userEmail) {
        this.Name = userName;
        this.Id = userId;
        this.Email = userEmail;
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

    static GetQuestions = function() {
        return JSON.parse(
            `[{
                "type": "input",
                "name": "userName",
                "message": "Full name?"
            }, {
                "type": "input",
                "name": "userId",
                "message": "Employee ID?"
            }, {
                "type": "input",
                "name": "userEmail",
                "message": "Email address?"
            }]`
        );
    }
}

module.exports = Employee;