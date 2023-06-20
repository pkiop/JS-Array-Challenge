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
  let players = inputArray.filter(player => player.goe.jump.length >= baseAssignment.jump &&
      player.goe.spin.length >= baseAssignment.spin &&
      player.goe.step.length >= baseAssignment.step);

  players.map(player => {
    player.goe.jump.sort((a, b) => b - a).splice(baseAssignment.jump);
    player.goe.spin.sort((a, b) => b - a).splice(baseAssignment.spin);
    player.goe.step.sort((a, b) => b - a).splice(baseAssignment.step);

    let jumpScore = player.goe.jump.reduce((a, b) => (a + b)) * baseScore.jump;
    let spinScore = player.goe.spin.reduce((a, b) => (a + b)) * baseScore.spin;
    let stepScore = player.goe.step.reduce((a, b) => (a + b)) * baseScore.step;

    player.score = jumpScore + spinScore + stepScore + player.pcs - player.penalty;
  });

  players.sort((a, b) => b.score - a.score);

  return players.map(player => ({'name': player.name, 'score': player.score}));
}

exports.solution = solution;
