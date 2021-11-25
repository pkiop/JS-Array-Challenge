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
  // 필수 과제를 수행하지 못할 시 실격
  let figureScore = [];
  inputArray.forEach(person => {
    const { jump, spin, step } = person.goe;
    if (jump.length >= 3 && spin.length >= 3 && step.length >= 1) {
      figureScore.push(person);
    }
  })

  let answer = [];
  figureScore.forEach(person => {
    const { jump, spin, step } = person.goe;

    // 점프와 스핀이 4번 이상 수행되면 가장 잘한 3개만 선택
    const sortJump = jump.sort((a, b) => b - a).slice(0, 3);
    const sortSpin = spin.sort((a, b) => b - a).slice(0, 3);

    // 스텝이 2번 이상 수행되면 가장 잘한 1개만 선택
    const sortStep = step.sort((a, b) => b - a).slice(0, 1);

    const jumpScore = baseScore.jump * sortJump.reduce((acc, curr) => acc + curr);
    const spinScore = baseScore.spin * sortSpin.reduce((acc, curr) => acc + curr);
    const stepScore = baseScore.step * sortStep.reduce((acc, curr) => acc + curr);

    const result = (jumpScore + spinScore + stepScore) + person.pcs - person.penalty;

    answer.push({
      "name": person.name,
      "score": result
    })
  })

  // 점수가 높은 순서
  answer.sort((a, b) => b.score - a.score);

  return answer;
}

exports.solution = solution;
