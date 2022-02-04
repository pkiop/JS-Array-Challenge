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
  targetArray = [];
  
  inputArray.forEach((obj) => {
    const jumpCondition = (obj.goe.jump.length >= baseAssignment.jump);
    const spinCondition = (obj.goe.spin.length >= baseAssignment.spin);
    const stepCondition = (obj.goe.step.length >= baseAssignment.step);

    if (jumpCondition && spinCondition && stepCondition) {
      obj.goe.jump.sort((a, b) => b - a);
      obj.goe.spin.sort((a, b) => b - a);
      obj.goe.step.sort((a, b) => b - a);

      let jumpScore = 0;
      for (let i = 0; i < baseAssignment.jump; i++) {
        jumpScore += obj.goe.jump[i] * baseScore.jump;
      }
      let spinScore = 0;
      for (let i = 0; i < baseAssignment.spin; i++) {
        spinScore += obj.goe.spin[i] * baseScore.spin;
      }
      let stepScore = 0;
      for (let i = 0; i < baseAssignment.step; i++) {
        stepScore += obj.goe.step[i] * baseScore.step;
      }

      const totalScore = jumpScore + spinScore + stepScore + obj.pcs - obj.penalty;

      targetArray.push({ name: obj.name, score: totalScore });
    }
  });

  return targetArray;
}

exports.solution = solution;
