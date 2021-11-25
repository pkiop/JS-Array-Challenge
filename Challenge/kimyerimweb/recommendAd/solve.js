const input = [
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
] // answer: ['동원F&B']

const userHistory = [
  { date: '2020-11-03', watched: ['KT', 'BBQ'] },
  { date: '2020-11-04', watched: ['정관장', 'KT', '딱좋은데이'] },
  { date: '2020-11-05', watched: ['그랑사가', '농심'] },
  { date: '2020-11-06', watched: ['BBQ'] },
  { date: '2020-11-07', watched: ['쌍용자동차', 'BBQ', 'KT'] },
  { date: '2020-11-08', watched: ['켈로그코리아', '빙그레'] },
  { date: '2020-11-09', watched: ['KT', '그랑사가', '빙그레'] },
];

function joinHistory(history) {
  const result = []
  history.forEach(el => {
    result.push(...el.watched)
  });

  return result
}

let joinHis = joinHistory(userHistory)
joinHis = new Set(joinHis)
joinHis = [...joinHis]

const result = input.filter(el => !joinHis.includes(el))

console.log(result)