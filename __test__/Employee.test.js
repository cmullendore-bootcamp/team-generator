const Employee = require("../lib/Employee");

const employee = new Employee("Name", "Id", "Email");

test("Checks to see if employee object was created successfully", () => {
    expect(employee).not.toEqual(null);
});

test("Checks to see if Name property returns Name", () => {
    expect(employee.Name).toEqual("Name");
});

test("Checks to see if Id property returns Id", () => {
    expect(employee.Id).toEqual("Id");
});

test("Checks to see if Email property returns Email", () => {
    expect(employee.Email).toEqual("Email");
});

test("Checks to see if getName() returns Name", () => {
    expect(employee.getName()).toEqual("Name");
});

test("Checks to see if Id property returns Id", () => {
    expect(employee.getId()).toEqual("Id");
});

test("Checks to see if Email property returns Email", () => {
    expect(employee.getEmail()).toEqual("Email");
});