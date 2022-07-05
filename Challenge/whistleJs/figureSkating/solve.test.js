const { solution } = require('./solve');

const test1 = {
  input: [
    {
      name: '김연아',
      goe: {
        jump: [10, 9, 10],
        spin: [10, 10, 10],
        step: [9],
      },
      pcs: 30,
      penalty: 0,
    },
    {
      name: '피겨의 신',
      goe: {
        jump: [10000, 10000],
        spin: [10000, 10000, 10000],
        step: [10000],
      },
      pcs: 100000,
      penalty: 0,
    },
    {
      name: '아사다 마오',
      goe: {
        jump: [9, 6, 8, 9],
        spin: [9, 9, 9],
        step: [8],
      },
      pcs: 29,
      penalty: 10,
    },
  ],
  answer: [
    { name: '김연아', score: 1055 },
    { name: '아사다 마오', score: 939 },
  ],
};

describe('everyArray', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
