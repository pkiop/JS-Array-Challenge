const { solution } = require('./solve');

const test1 = {
  input: [3, 29, 38, 12, 57, 74, 40, 85, 61],
  answer: { maxValue: 85, idx: 7 },
};

describe('reduceMaxValueNIndex', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
