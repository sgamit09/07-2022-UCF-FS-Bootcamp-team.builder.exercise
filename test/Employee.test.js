const Employee = require("../lib/Employee");
const employee = new Employee('tester', 1, 'email@email.com');


test("Can instantiate Employee instance", () => {
  expect(employee instanceof Employee).toBe(true);
});

test("Can set name via constructor arguments", () => {
  expect(employee.name).toBe('tester');
});

test("Can set id via constructor argument", () => {
  expect(employee.id).toBe(1);
});

test("Can set email via constructor argument", () => {
  expect(employee.email).toBe('email@email.com')
});

test("Can get name via getName()", () => {
  expect(employee.getName()).toBe('tester')
});

test("Can get id via getId()", () => {
  expect(employee.getId()).toBe(1)
});

test("Can get email via getEmail()", () => {
  expect(employee.getEmail()).toBe('email@email.com')
});

test("getRole() should return \"Employee\"", () => {
  expect(employee.getRole()).toBe('Employee');
});
