const Manager = require("../lib/Manager");

const manager = new Manager("Name", "Id", "Email");

test("Checks to see if employee object was created successfully", () => {
    expect(manager).not.toEqual(null);
});

test("Checks to see if Name property returns Name", () => {
    expect(manager.Name).toEqual("Name");
});

test("Checks to see if Id property returns Id", () => {
    expect(manager.Id).toEqual("Id");
});

test("Checks to see if Email property returns Email", () => {
    expect(manager.Email).toEqual("Email");
});

test("Checks to see if getName() returns Name", () => {
    expect(manager.GetName()).toEqual("Name");
});

test("Checks to see if Id property returns Id", () => {
    expect(manager.GetId()).toEqual("Id");
});

test("Checks to see if Email property returns Email", () => {
    expect(manager.GetEmail()).toEqual("Email");
});