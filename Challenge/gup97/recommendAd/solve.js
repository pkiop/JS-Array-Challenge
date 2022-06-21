const userHistory = [
  { date: "2020-11-03", watched: ["KT", "BBQ"] },
  { date: "2020-11-04", watched: ["정관장", "KT", "딱좋은데이"] },
  { date: "2020-11-05", watched: ["그랑사가", "농심"] },
  { date: "2020-11-06", watched: ["BBQ"] },
  { date: "2020-11-07", watched: ["쌍용자동차", "BBQ", "KT"] },
  { date: "2020-11-08", watched: ["켈로그코리아", "빙그레"] },
  { date: "2020-11-09", watched: ["KT", "그랑사가", "빙그레"] },
];

// write your codes
function solution(inputArray) {
  //방법 1 새 배열없이 userHistory에서 하나씩 검사
  const filterWatched = (el) => {
    return !userHistory.some((cur) => cur.watched.includes(el));
  };
  return inputArray.filter(filterWatched);
  //방법2 새배열에 전부담고 출력
  // const setList = new Set();
  // userHistory.map(({ watched }) => watched.map((val) => setList.add(val)));
  // console.log(setList);
  // const list = Array.from(setList);
  // return inputArray.filter((val) => !list.includes(val));
}

exports.solution = solution;
