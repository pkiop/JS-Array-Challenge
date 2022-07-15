const { solution } = require('./solve');

const test1 = {
  input: [
    {
      name: '홍길동',
      nickname: 'hong',
    },
    {
      name: '둘리',
      nickname: '2li',
    },
    {
      name: '오스트랄로피테쿠스',
      nickname: '1Cin',
    },
  ],
  answer: { hong: '홍길동', '2li': '둘리', '1Cin': '오스트랄로피테쿠스' },
};

describe('reduceNameNickname', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
