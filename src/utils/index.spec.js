import { selectEndLine } from "./SelectEndLine";

describe("selectEndLine util", () => {
  test("exp = 5", () => {
    expect(selectEndLine(5)).toBe("лет");
  });

  test("exp = 12", () => {
    expect(selectEndLine(12)).toBe("лет");
  });

  test("exp = 21", () => {
    expect(selectEndLine(21)).toBe("год");
  });

  test("exp = 4", () => {
    expect(selectEndLine(4)).toBe("года");
  });

  test("exp = 34", () => {
    expect(selectEndLine(34)).toBe("года");
  });

  test("exp = 54", () => {
    expect(selectEndLine(54)).toBe("- ОШИБКА ВВОДА!");
  });
});
