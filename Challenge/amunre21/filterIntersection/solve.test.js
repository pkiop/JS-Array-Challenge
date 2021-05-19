const solve = require('./solve');

const A1 = [1, 2, 3, 4, 5];
const B1 = [3, 4, 5, 6, 7];
const result1 = [3, 4, 5];

const A2 = [1, 2, 3, 4, 5];
const B2 = [5, 6, 7, 8, 9];
const result2 = [5];

const A3 = [2, 4, 6, 8, 10, 12];
const B3 = [3, 6, 9, 12];
const result3 = [6, 12];

const A4 = [1, 3, 5, 7, 12, 21, 16, 24, 17, 93, 26];
const B4 = [3, 7, 133, 134, 25, 17, 21, 22];
const result4 = [3, 7, 21, 17];

describe("simple test",() =>{
  test("test 1",() => {
    expect(solve.answer(A1,B1)).toEqual(result1);
  });

  test("test 2",() => {
    expect(solve.answer(A2,B2)).toEqual(result2);
  });

  test("test 3",() => {
    expect(solve.answer(A3,B3)).toEqual(result3);
  });

  test("test 4",() => {
    expect(solve.answer(A4,B4)).toEqual(result4);
  });
})