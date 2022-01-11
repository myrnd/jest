const sum = require("./sum");
const { describe, test } = require("jest");

// describe('FUNCTION TESTING',() => {
test("sum testing", () => {
  expect(sum(2, 3)).toBe(5);
});
// });
