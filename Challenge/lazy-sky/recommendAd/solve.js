const userHistory = [
  { date: '2020-11-03', watched: ['KT', 'BBQ'] },
  { date: '2020-11-04', watched: ['정관장', 'KT', '딱좋은데이'] },
  { date: '2020-11-05', watched: ['그랑사가', '농심'] },
  { date: '2020-11-06', watched: ['BBQ'] },
  { date: '2020-11-07', watched: ['쌍용자동차', 'BBQ', 'KT'] },
  { date: '2020-11-08', watched: ['켈로그코리아', '빙그레'] },
  { date: '2020-11-09', watched: ['KT', '그랑사가', '빙그레'] },
];

/*
유튜브는 사용자가 프리미엄 회원이 아닌 경우 영상 시작이나
중간에 광고가 나오도록 설정되어 있습니다.
[2020년 유튜브 인기 광고]는 총 열 편으로,
사용자의 일주일간 광고 시청 이력을 통해
해당 사용자가 일주일 동안 안 본 광고를 그 다음주에 노출함으로써
광고들이 사용자에게 골고루 노출되길 원합니다.
유저가 매일 유튜브에 접속하여 하루 한 편 이상의 광고를 보았다고 가정할 때,
이 유저가 안 본 광고는 무엇인지 출력해주세요.
*/

function solution(inputArray) {
  return inputArray
    .filter((ad) => !userHistory
      .map((x) => x.watched)
      .reduce((acc, cur) => acc + cur)
      .includes(ad));
}

exports.solution = solution;
