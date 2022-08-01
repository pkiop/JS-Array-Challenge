const { solution } = require('./solve');

const test1 = {
  input: ['잠', '자', '고', '싶', '다', '용가리'],
  answer: true,
};
const test2 = {
  input: ['맛있는', '용가리치킨'],
  answer: false,
};
const test3 = {
  input: ['고질라', '용가리 ', '울트라맨'],
  answer: false,
};

describe('findWord', () => {
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