class Employee {
    constructor(userName, userId, userEmail) {
        this.Name = userName;
        this.Id = userId;
        this.Email = userEmail;
    }

    GetName() {
        return this.Name;
    }

    GetId() {
        return this.Id;
    }

    GetEmail() {
        return this.Email;
    }

    GetRole() {
        // This INTENTIONALLY does not return a hard string
        // This method is used to demonstrate that inheritance
        // COULD be used to return the proper type name
        // without requiring overriding in subclasses.
        return this.constructor.name;
    }

    GetHtml() {
        let html = `<div class="col m-3 text-center">
            <div class="card">
                <div class="card-header">
                    <h2>{{Name}}</h2>
                    <h4>{{Role}}</h4>
                </div>
                <div class="card-body">
                    <p>Employee ID: {{Id}}</p>
                    <p>Email: <a href="mailto:{{Email}}">{{Email}}</a></p>
                    {{RoleDetail}}
                </div>
            </div>
        </div>`;

        html = html.replace(/{{Name}}/g, this.GetName());
        html = html.replace(/{{Id}}/g, this.GetId());
        html = html.replace(/{{Email}}/g, this.GetEmail());

        return html;
    }

    static GetQuestions() {
        return [{
            type: "input",
            name: "userName",
            message: "Full name?"
        }, {
            type: "input",
            name: "userId",
            message: "Employee ID?"
        }, {
            type: "input",
            name: "userEmail",
            message: "Email address?",
            validate(answer) {
                const emailRegex = /.+@.+\..+./gm;
                if (!emailRegex.test(answer)) {
                    return "That is not a valid email address";
                }
                return true;
            }
        }]
    }
}


module.exports = Employee;