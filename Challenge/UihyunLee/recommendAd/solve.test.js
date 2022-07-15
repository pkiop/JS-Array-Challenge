const { solution } = require('./solve');

const test1 = {
  input: [
    '동원F&B',
    '정관장',
    'KT',
    'BBQ',
    '그랑사가',
    '농심',
    '딱좋은데이',
    '빙그레',
    '쌍용자동차',
    '켈로그코리아',
  ],
  answer: ['동원F&B'],
};

describe('recommendAd', () => {
  test('test1', () => {
    expect(solution(test1.input)).toEqual(test1.answer);
  });
});
