// import { obj } from "./obj";
const obj = require("./obj");

describe("OBJECT TESTING", () => {
  test("Object not to be empty", () => {
    expect(obj).not.toEqual({});
  });
});
