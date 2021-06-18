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
  // write your codes

  const isNotDisqualification = (el) => {
    if (el.goe.jump.length < baseAssignment.jump) return false;
    if (el.goe.spin.length < baseAssignment.spin) return false;
    if (el.goe.step.length < baseAssignment.step) return false;
    return true;
  };

  const calculateScoreWithName = (el) => {
    const tes = Object.entries(el.goe).reduce((acc, goeItem) => {
      return (
        acc +
        goeItem[1]
          .sort((a, b) => b - a)
          .slice(0, 3)
          .reduce((goeAcc, score) => {
            return goeAcc + baseScore[goeItem[0]] * score;
          }, 0)
      );
    }, 0);
    return {
      name: el.name,
      score: tes + el.pcs - el.penalty,
    };
  };

  const compareByScore = (a, b) => b.score - a.score;

  const result = inputArray
    .filter(isNotDisqualification)
    .map(calculateScoreWithName)
    .sort(compareByScore);
  return result;
}

exports.solution = solution;
// write your codes
