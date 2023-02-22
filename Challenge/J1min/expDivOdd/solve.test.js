const { solution } = require("./solve");

const test1 = {
  input: [1, 7, 3, 4, 6],
  answer: 66,
};

const test2 = {
  input: [2, 3, 6, 8, 10],
  answer: 168,
};

describe("everyArray", () => {
  test("1, 7, 3, 4, 6", () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });

  test("2, 3, 6, 8, 10", () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });
});
