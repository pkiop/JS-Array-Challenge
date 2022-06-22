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

function solution(inputArray) {
  const filterBaseAssignment = (el) => {
    return Object.keys(el.goe).every((key) => el.goe[key].length >= baseAssignment[key]);
  };
  const pointToScore = (el) => {
    const tes = Object.entries(el.goe).reduce((acc, cur) => {
      return (
        acc +
        cur[1]
          .sort((a, b) => b - a)
          .slice(0, 3)
          .reduce((goeAcc, goeCur) => goeAcc + goeCur) *
          baseScore[cur[0]]
      );
    }, 0);
    return { name: el.name, score: tes + el.pcs - el.penalty };
  };
  const sortByScore = (a, b) => b.score - a.score;
  const result = inputArray
    .filter(filterBaseAssignment)
    .map(pointToScore)
    .sort(sortByScore);
  console.log(result);
  return result;
}

exports.solution = solution;
