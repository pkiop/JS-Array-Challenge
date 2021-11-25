const { solution } = require('./solve');

const test1 = {
  input: [10, 3, 20, 5, 8, 60],
  answer: 106,
};
const test2 = {
  input: [10, -50, 20, 30, -10],
  answer: 0,
};

describe('reduceSum', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
  test('test2', () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });
});
