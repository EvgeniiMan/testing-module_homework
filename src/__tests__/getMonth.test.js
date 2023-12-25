import { getMonth } from "../getMonth";

describe("test for getMonth function", () => {
    it("should operate correctly with \"январь\"", ()=> expect(getMonth(1)).toBe("январь"));
    it("should operate correctly with \"июнь\"", ()=> expect(getMonth(6)).toBe("июнь"));
    it("should operate correctly with \"неизвестно\"", ()=> expect(getMonth(14)).toBe("неизвестно"));
});