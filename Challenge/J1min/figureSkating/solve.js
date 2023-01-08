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

function isDisqualification(baseAssignment, player) {
  if (player.goe.jump.length < baseAssignment.jump) return false;
  if (player.goe.spin.length < baseAssignment.spin) return false;
  if (player.goe.step.length < baseAssignment.step) return false;
  return true;
}

function getBestScore(scoreArray) {
  // 실격이 아닌 경우 최고 3개 기록의 합만 가져옴
  scoreArray = scoreArray.sort((a, b) => a - b).slice(-3);
  console.log(scoreArray);
  return scoreArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

function calculateScore(baseScore, player) {
  const score =
    baseScore.jump * getBestScore(player.goe.jump) +
    baseScore.spin * getBestScore(player.goe.spin) +
    baseScore.step * getBestScore(player.goe.step) +
    player.pcs -
    player.penalty;
  return score;
}

function solution(inputArray) {
  let answer = [];
  for (const player of inputArray) {
    if (isDisqualification(baseAssignment, player)) {
      // 실격이 아닌 선수라면
      // 이름과 계산된 점수 push
      answer.push({
        name: player.name,
        score: calculateScore(baseScore, player),
      });
    }
  }
  return answer;
}

exports.solution = solution;
