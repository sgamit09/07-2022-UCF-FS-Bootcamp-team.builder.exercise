const Engineer = require("../lib/Engineer");
const engineer = new Engineer('tester', 4, 'email@email.com', 'usernamehere')

test("Can set GitHUb account via constructor", () => {
  expect(engineer.github).toBe('usernamehere');
});

test("getRole() should return \"Engineer\"", () => {
  expect(engineer.getRole()).toBe('Engineer');
});

test("Can get GitHub username via getGithub()", () => {
  expect(engineer.getGithub()).toBe('usernamehere')
});