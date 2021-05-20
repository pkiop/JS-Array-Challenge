const solve = require('./solve');

const input1 = [4, 2, 5, 1, 3];
const result1 = [5, 1, 3];

const input2 = [1, 17, 5, 2, 3, 9];
const result2 = [1, 17, 5, 3, 9];

const input3 = [4, 2, 6, 8, 50, 16];
const result3 = [];

const input4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const result4 = [1, 3, 5, 7, 9, 11];

describe("simple test",() =>{
  test("test 1",() => {
    expect(solve.answer(input1)).toEqual(result1);
  });

  test("test 2",() => {
    expect(solve.answer(input2)).toEqual(result2);
  });

  test("test 3",() => {
    expect(solve.answer(input3)).toEqual(result3);
  });

  test("test 4",() => {
    expect(solve.answer(input4)).toEqual(result4);
  });
})