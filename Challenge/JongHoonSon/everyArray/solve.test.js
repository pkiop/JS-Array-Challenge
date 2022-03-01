const { solution } = require('./solve');

const test1 = {
  input: [2, 4, 6, 8, 10],
  answer: true,
};

const test2 = {
  input: [2, 3, 6, 8, 10],
  answer: false,
};

describe('everyArray', () => {
  test('모두 짝수면 true여야 한다.', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });

  test('홀수가 있으면 false여야 한다.', () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });
});
