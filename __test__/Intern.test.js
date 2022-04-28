const Intern = require("../lib/Intern");

const intern = new Intern("Name", "Id", "Email");

test("Checks to see if employee object was created successfully", () => {
    expect(intern).not.toEqual(null);
});

test("Checks to see if Name property returns Name", () => {
    expect(intern.Name).toEqual("Name");
});

test("Checks to see if Id property returns Id", () => {
    expect(intern.Id).toEqual("Id");
});

test("Checks to see if Email property returns Email", () => {
    expect(intern.Email).toEqual("Email");
});

test("Checks to see if getName() returns Name", () => {
    expect(intern.GetName()).toEqual("Name");
});

test("Checks to see if Id property returns Id", () => {
    expect(intern.GetId()).toEqual("Id");
});

test("Checks to see if Email property returns Email", () => {
    expect(intern.GetEmail()).toEqual("Email");
});