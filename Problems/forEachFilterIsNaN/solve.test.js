const { solution } = require('./solve');

const test1 = {
  input: [1, 40, '라매', '개발자', 51.5, 'a', 88],
  answer: [1, 40, 51.5, 88],
};

describe('forEachFilterIsNaN', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
