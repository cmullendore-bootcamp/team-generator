const Engineer = require("../lib/Engineer");

const engineer = new Engineer("Name", "Id", "Email", "Github");

test("Checks to see if employee object was created successfully", () => {
    expect(engineer).not.toEqual(null);
});

test("Checks to see if Name property returns Name", () => {
    expect(engineer.Name).toEqual("Name");
});

test("Checks to see if Id property returns Id", () => {
    expect(engineer.Id).toEqual("Id");
});

test("Checks to see if Email property returns Email", () => {
    expect(engineer.Email).toEqual("Email");
});

test("Checks to see if Github property returns Github", () => {
    expect(engineer.Github).toEqual("Github");
});

test("Checks to see if GetName() returns Name", () => {
    expect(engineer.GetName()).toEqual("Name");
});

test("Checks to see if GetId() property returns Id", () => {
    expect(engineer.GetId()).toEqual("Id");
});

test("Checks to see if GetEmail() property returns Email", () => {
    expect(engineer.GetEmail()).toEqual("Email");
});

test("Checks to see if GetGithub() property returns Github", () => {
    expect(engineer.GetGithub()).toEqual("Github");
});

test("Checks to see if GetRole() property returns Engineer", () => {
    expect(engineer.GetRole()).toEqual("Engineer");
});