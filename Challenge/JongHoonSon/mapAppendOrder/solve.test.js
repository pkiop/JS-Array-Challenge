const { solution } = require('./solve');

const test1 = {
  input: ['홍길동', '둘리', '루피'],
  answer: [
    { name: '홍길동', order: 1 },
    { name: '둘리', order: 2 },
    { name: '루피', order: 3 },
  ],
};

describe('mapAppendOrder', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
