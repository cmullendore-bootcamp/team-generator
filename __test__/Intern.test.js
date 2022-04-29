const Intern = require("../lib/Intern");

const intern = new Intern("Name", "Id", "Email", "School");

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

test("Checks to see if School property returns School", () => {
    expect(intern.School).toEqual("School");
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

test("Checks to see if GetSchool method returns School", () => {
    expect(intern.GetSchool()).toEqual("School");
});

test("Checks to see if GetRole method returns Intern", () => {
    expect(intern.GetRole()).toEqual("Intern");
});