const { solution } = require('./solve');

const test1 = {
  input: [4, 2, 5, 1, 3],
  answer: [5, 1, 3],
};

describe('filterOdd', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
