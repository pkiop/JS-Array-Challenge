const { solution } = require('./solve');

const test1 = {
  input: {
    A: [1, 2, 3, 4, 5],
    B: [3, 4, 5, 6, 7],
  },
  answer: [3, 4, 5],
};

describe('filterIntersection', () => {
  test('test1', () => {
    expect(solution(test1.input.A, test1.input.B)).toEqual(test1.answer);
  });
});
