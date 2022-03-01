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

  resultArray = [];

  inputArray.forEach((obj) => {

    // 수행과제 수행 여부 판단
    const jumpCondition = (obj.goe.jump.length >= baseAssignment.jump);
    const spinCondition = (obj.goe.spin.length >= baseAssignment.spin);
    const stepCondition = (obj.goe.step.length >= baseAssignment.step);
    
    if (jumpCondition && spinCondition && stepCondition) {
      // 점수 정렬
      obj.goe.jump.sort((a,b) => b-a);
      obj.goe.spin.sort((a,b) => b-a);
      obj.goe.step.sort((a,b) => b-a);
    
      // 기술점수(TES)는 기본점수 \* 수행점수(GOE)를 합산 출력
      let tes = 0;
      for(let i=0; i<baseAssignment.jump; i++) {
        tes = tes + obj.goe.jump[i] * baseScore.jump;
      }
      
      for(let i=0; i<baseAssignment.spin; i++) {
        tes = tes + obj.goe.spin[i] * baseScore.spin;
      }
      
      for(let i=0; i<baseAssignment.step; i++) {
        tes = tes + obj.goe.step[i] * baseScore.step;
      }
      
      let total = 0;
      
      // 점수 계산 (기술점수(TES) + 예술점수(PCS) - 감점)
      total = tes + obj.pcs - obj.penalty;
      resultArray.push({name:obj.name, score:total});
    }
  });

  return resultArray;
}

exports.solution = solution;
