const { solution } = require('./solve');

const test1 = {
  input: [
    {
      name: '사과',
      price: 1000,
      quantity: 2,
    },
    {
      name: '수박',
      price: 5000,
      quantity: 20,
    },
    {
      name: '당근',
      price: 2000,
      quantity: 50,
    },
    {
      name: '참외',
      price: 5000,
      quantity: 10,
    },
    {
      name: '오이',
      price: 2000,
      quantity: 49,
    },
  ],
  answer: [
    { name: '사과', price: 1000, quantity: 2 },
    { name: '오이', price: 2000, quantity: 49 },
    { name: '당근', price: 2000, quantity: 50 },
    { name: '참외', price: 5000, quantity: 10 },
    { name: '수박', price: 5000, quantity: 20 },
  ],
};

describe('sortByPriceAndQuantity', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
