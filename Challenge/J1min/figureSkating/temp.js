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

// 실격 여부 판별
function isDisqualification(baseAssignment, player) {
  if (player.goe.jump.length >= baseAssignment.jump) return false;
  if (player.goe.spin.length >= baseAssignment.spin) return false;
  if (player.goe.step.length >= baseAssignment.step) return false;
  return true;
}

// 실격이 아닌 경우 최고 3개 기록의 합만 가져옴
function getBestScore(scoreArray) {
  return scoreArray
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// 점수 계산
function calculateScore(baseScore, player) {
  return (
    baseScore.jump * getBestScore(player.goe.jump) +
    baseScore.spin * getBestScore(player.goe.spin) +
    baseScore.step * getBestScore(player.goe.step) +
    player.pcs -
    player.penalty
  );
}

function solution(inputArray) {
  let answer = [];
  for (const player of inputArray) {
    // 실격이 아닌 선수라면
    // 이름과 계산된 점수 push
    if (isDisqualification(baseAssignment, player)) {
      answer.push({
        name: player.name,
        score: calculateScore(baseScore, player),
      });
    }
  }
  return answer;
}

exports.solution = solution;
