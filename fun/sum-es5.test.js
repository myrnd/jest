const sum = require("./sum-es5");

describe("FUNCTION TESTING", () => {
  test("sum testing", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
