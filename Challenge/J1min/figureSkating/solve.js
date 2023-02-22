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
  return inputArray
    .filter((input) => isDisqualification(baseAssignment, input)) // 실격자 필터링
    .map((input) => ({
      name: input.name,
      score: calculateScore(baseScore, input),
    }));
}

exports.solution = solution;
