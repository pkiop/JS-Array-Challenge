const { solution } = require('./solve');

const test1 = {
  input: [100, 10, 20, 40],
  answer: 170,
};

const test2 = {
  input: [120, -20, -30, 0, 15],
  answer: 85,
};

const test3 = {
  input: [-10, -20, -30],
  answer: -60,
};

describe('forEachReduce', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
  test('test2: 음수가 포함된 계산', () => {
    expect(solution(test2.input)).toEqual(test2.answer);
  });
  test('test3: 음수만 존재하는 계산', () => {
    expect(solution(test3.input)).toEqual(test3.answer);
  });
});
