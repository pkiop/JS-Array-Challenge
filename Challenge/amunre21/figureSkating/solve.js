// 기본 점수
const baseScore = {
  jump: 10,
  spin: 20,
  step: 15,
}

const baseAssignment = {
  jump: 3,
  spin: 3,
  step: 1,
}

const inputArray = [
  {
    name: '김연아',
    goe: {
      jump: [10, 9, 10],
      spin: [10, 10, 10],
      step: [9],
    },
    pcs: 30,
    penalty: 0,
  },
  {
    name: '피겨의 신',
    goe: {
      jump: [10000, 10000],
      spin: [10000, 10000, 10000],
      step: [10000]
    },
    pcs: 100000,
    penalty: 0,
  },  
  {
    name: '아사다 마오',
    goe: {
      jump: [9, 6, 8, 9],
      spin: [9, 9, 9],
      step: [8],
    },
    pcs: 29,
    penalty: 10,
  },
]

// write your codes

const answer = inputArray.filter((el)=>{
  return el.goe.jump.length >= baseAssignment.jump &&
  el.goe.spin.length >= baseAssignment.spin &&
  el.goe.step.length >= baseAssignment.step;
}).map((v) => {
  let result = 0;
  // TES 계산
  result += v.goe.jump.sort((a,b) => b-a).slice(0,baseAssignment.jump).reduce((acc,cur)=>{return acc+cur*baseScore.jump;},0);
  result += v.goe.spin.sort((a,b) => b-a).slice(0,baseAssignment.spin).reduce((acc,cur)=>{return acc+cur*baseScore.spin;},0);
  result += v.goe.step.sort((a,b) => b-a).slice(0,baseAssignment.step).reduce((acc,cur)=>{return acc+cur*baseScore.step;},0);
  // PCS 계산
  result += v.pcs;
  // penalty 계산
  result -= v.penalty;

  return {
    name : v.name,
    score : result
  };
}).sort((a,b)=>{
  return b.score - a.score;
});

console.log(answer)