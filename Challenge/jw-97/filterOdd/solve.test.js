const { solution } = require('./solve');

const test1 = {
  input: [4, 2, 5, 1, 3],
  answer: [5, 1, 3],
};

const test2 = {
  input: [4, 2, 6, 8, 50, 16],
  answer: [],
};

const test3 = {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  answer: [1, 3, 5, 7, 9, 11],
};

describe('filterOdd', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
  test('test2', () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });
  test('test3', () => {
    expect(solution(test3.input)).toEqual(test3.answer);
  });
});
