const { solution } = require('./solve');

const test1 = {
  input: [1, 40, '라매', '개발자', 51.5, 'a', 88],
  answer: [1, 40, 51.5, 88],
};

const test2 = {
  input: [1, 2, 3, '4', 5, '6'],
  answer: [1, 2, 3, 5],
};

const test3 = {
  input: [-3, -2, -1, 0, 1, 2, 3],
  answer: [-3, -2, -1, 0, 1, 2, 3],
};

describe('forEachFilterIsNaN', () => {
  test('test1: 숫자,문자 판별', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
  test('test2: 문자로된 숫자 판별', () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });
  test('test3: 음수 양수 포함', () => {
    expect(solution(test3.input)).toEqual(test3.answer);
  });
});
