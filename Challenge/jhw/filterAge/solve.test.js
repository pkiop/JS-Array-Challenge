const { solution } = require('./solve');

const test1 = {
  input: [
    {
      name: '영미',
      age: 25,
    },
    {
      name: '일미',
      age: 35,
    },
    {
      name: '이미',
      age: 45,
    },
    {
      name: '삼미',
      age: 55,
    },
  ],
  answer: [
    { name: '일미', age: 35 },
    { name: '이미', age: 45 },
  ],
};

describe('filterAge', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
