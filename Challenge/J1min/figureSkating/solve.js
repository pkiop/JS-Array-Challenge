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

// 실격여부 판별하는 함수
function isDisqualification(baseAssignment, player) {
  if (player.goe.jump.length < baseAssignment.jump) return false;
  if (player.goe.spin.length < baseAssignment.spin) return false;
  if (player.goe.step.length < baseAssignment.step) return false;
  return true;
}

// 최고 3개 점수만 가져오는 함수
function getBestScore(scoreArray) {
  scoreArray = scoreArray.sort((a, b) => a - b).slice(-3);
  console.log(scoreArray);
  return scoreArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// 점수 계산하는 함수
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
  let answer = []; // 정답 배열
  for (const player of inputArray) {
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
