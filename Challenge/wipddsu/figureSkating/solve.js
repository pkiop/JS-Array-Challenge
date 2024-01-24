// 기본 점수
const baseScore = {
  jump: 10,
  spin: 20,
  step: 15,
};

const baseAssignment = {
  jump: 3,
  spin: 3,
  step: 1,
};

// write your codes

function solution(inputArray) {
  const newInput = inputArray.filter((item) => item['goe']['jump'].length > 2 && item['goe']['spin'].length > 2);
  const answer = [];

  for (const el of newInput) {
    const newObj = {};
    const name = el['name'];
    const goes = el['goe'];
    const scoreArr = [];

    for (const key in goes) {
      const sorting = goes[key].sort((a, b) => b - a);
      // 배열을 내림차순 정렬 후 앞에서 3개의 값의 합만 구하기
      const scoreSum = sorting.reduce((acc, cur, i) => (i < 3 ? acc + cur : acc), 0);
      scoreArr.push(scoreSum);
    }

    const [jumpScore, spinScore, stepScore] = [...scoreArr];

    newObj['name'] = name;
    newObj['score'] =
      jumpScore * baseScore['jump'] +
      spinScore * baseScore['spin'] +
      stepScore * baseScore['step'] +
      el['pcs'] -
      el['penalty'];

    answer.push(newObj);
  }

  return answer;
}

exports.solution = solution;
