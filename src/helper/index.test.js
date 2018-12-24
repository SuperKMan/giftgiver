import { max_number } from "./index";

describe("max_number", () => {
  describe("given an empty array", () => {
    it("should retutn 0", () => {
      expect(max_number([])).toEqual(0);
    });
  });

  describe("given an aray of numbers", () => {
    it("should returns the max number", () => {
      expect(max_number([1, 2, 3])).toEqual(3);
    });
  });
});
