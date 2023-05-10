//  {
//       name: '김연아',
//       goe: {
//         jump: [10, 9, 10],
//         spin: [10, 10, 10],
//         step: [9],
//       },
//       pcs: 30,
//       penalty: 0,
//     },
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
  //필수 과제를 수행하지 못할 시 실격
  const isNotDisqualification = function(el){
    if(el.goe.jump.length < baseAssignment.jump) return false;
    if(el.goe.spin.length < baseAssignment.spin) return false;
    if(el.goe.step.length < baseAssignment.step) return false;
    return true;
  };
 ///goe점수 계산하기
 //1. goe 점수를 이중 배열로 만들기
 //2. goe 항목별 점수배열을 내림차순으로 정렬한 후 높은 점수 3개만 남기기
 //3. 기본점수와 곱한 값의 합을 구하기
 
const calculateScoreWithName = function(el){
  const goeEntries = Object.entries(el.goe);
  const tes= goeEntries.reduce((prev, goeItem)=>{
    return(
      prev+ //goeItem의 점수들 더하기
      goeItem[1].sort((a,b)=>b-a) 
                .slice(0, 3)
                .reduce((goeAcc, score)=> {
                  return goeAcc + baseScore[goeItem[0]] * score; 
                }, 0) //점프 점수들을 순회하면서 기본점수와 곱한 후 점프점수 총합 구하기.
    );
  }, 0);
  return {
    name: el.name,
    score: tes+ el.pcs -el.penalty,
  };
};

const result = inputArray.filter(isNotDisqualification)
                          .map(calculateScoreWithName)
                          .sort((a,b)=> b.score - a.score);
return result;


}

exports.solution = solution;
