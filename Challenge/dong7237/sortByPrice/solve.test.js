const { solution } = require('./solve');

const test1 = {
  input: [
    {
      name: '사과',
      price: 1000,
    },
    {
      name: '수박',
      price: 5000,
    },
    {
      name: '당근',
      price: 2000,
    },
    {
      name: '참외',
      price: 10000,
    },
  ],
  answer: [
    { name: '사과', price: 1000 },
    { name: '당근', price: 2000 },
    { name: '수박', price: 5000 },
    { name: '참외', price: 10000 },
  ],
};

describe('sortByPrice', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
