const { solution } = require('./solve');

const test1 = {
  input: [3, 29, 38, 12, 57, 74, 40, 85, 61],
  answer: { maxValue: 85, idx: 7 },
};

const test2 = {
  input: [-24, -2, -13, -49, -999999, -17],
  answer: { maxValue: -2, idx: 1 },
};
//최댓값이 중복일 때에는 먼저 나온 최댓값의 인덱스를 유지하도록 설정하였습니다.
const test3 = {
  input: [2, -20, 21, -874, 99, -16, -29, 99],
  answer: { maxValue: 99, idx: 4 },
};

describe('reduceMaxValueNIndex', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
  test('test2 : 음수 테스트', () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });
  test('test3 : 중복된 최대값 테스트', () => {
    expect(solution(test3.input)).toEqual(test3.answer);
  });
});
