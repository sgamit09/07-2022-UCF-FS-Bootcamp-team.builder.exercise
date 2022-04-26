const Manager = require("../lib/Manager");
const manager = new Manager('tester', 8, 'email@email.com', 1);

test("Can set office number via constructor argument", () => {
  expect(manager.officeNumber).toBe(1);
});

test('getRole() should return "Manager"', () => {
  expect(manager.getRole()).toBe('Manager');
});

test("Can get office number via getOffice()", () => {
  expect(manager.getOffice()).toBe(1);
});