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

const solution = (inputArray) => {
  const result = [];

  // 실격자는 제외
  const clearPlayers = inputArray.filter(({ goe }) => goe.jump.length >= baseAssignment.jump && goe.spin.length >= baseAssignment.spin && goe.step.length >= baseAssignment.step);

  clearPlayers.forEach(({ name, pcs, penalty, goe }) => {
    let score = pcs - penalty;

    for (const key in goe) {
      // 정렬 후 최대 3개까지만 점수 더하기
      score += goe[key].sort((a, b) => a < b ? 1 : -1).slice(0, 3).reduce((total, item) => total + item * baseScore[key], 0);
    }

    result.push({ name, score });
  });

  return result.sort((a, b) => a.score < b.score ? 1 : -1);
}

exports.solution = solution;
