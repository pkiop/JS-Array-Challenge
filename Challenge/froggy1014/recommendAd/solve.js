const userHistory = [
  { date: '2020-11-03', watched: ['KT', 'BBQ'] },
  { date: '2020-11-04', watched: ['정관장', 'KT', '딱좋은데이'] },
  { date: '2020-11-05', watched: ['그랑사가', '농심'] },
  { date: '2020-11-06', watched: ['BBQ'] },
  { date: '2020-11-07', watched: ['쌍용자동차', 'BBQ', 'KT'] },
  { date: '2020-11-08', watched: ['켈로그코리아', '빙그레'] },
  { date: '2020-11-09', watched: ['KT', '그랑사가', '빙그레'] },
];

// write your codes
function solution(inputArray) {

  // answer 배열 선언, 기존 inputArray를 map메소드를 사용하여
  // 딕셔너리 형태로 배열을 재 구성

  let answer = [];
  let newInput = inputArray.map((el) => {
    return {name : el, cnt : 0}
  })

  // 이중 삼중 for문으로 userHistory의 watched값을
  // 가져온 다음, 아까 새로만든 newInput 배열에 같은
  // 이름을 가진 인덱스에 cnt값을 +1 해준다.

  for (let x of userHistory)
  {
    for (let n of x.watched){
      for(let i = 0; i < newInput.length ; i++){
        if (newInput[i].name === n){
          newInput[i].cnt += 1; 
        }
      }
    }
  }

  // filter 메소드를 사용해, cnt가 0인 name만 answer에
  // push하고 출력하였다. 

  newInput.filter((el) => {
    el.cnt === 0 ? answer.push(el.name) : null;
  })
  return answer;
}
// let inputArray = [
// '동원F&B',
// '정관장',
// 'KT',
// 'BBQ',
// '그랑사가',
// '농심',
// '딱좋은데이',
// '빙그레',
// '쌍용자동차',
// '켈로그코리아',
// ]
// console.log(solution(inputArray));

exports.solution = solution;
