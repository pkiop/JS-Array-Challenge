const { solution } = require('./solve');

const test1 = {
  input: [10, 3, 20, 5, 8, 60],
  answer: 106,
};

describe('reduceSum', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
