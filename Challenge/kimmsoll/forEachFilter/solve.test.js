const { solution } = require('./solve');

const test1 = {
  input: [100, 10, 20, 40],
  answer: [100, 40],
};

describe('forEachFilter', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
