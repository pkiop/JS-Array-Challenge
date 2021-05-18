const { solution } = require('./solve');

const test1 = {
  input: ['잠', '자', '고', '싶', '다', '용가리'],
  answer: true,
};

describe('findWord', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
