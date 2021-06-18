const { solution } = require("./solve");

const test1 = {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  answer: "max : 10, min : 1",
};

describe("spreadOperatorMaxValue", () => {
  test("test1", () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
