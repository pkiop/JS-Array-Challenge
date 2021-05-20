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
let arr=[];

const filterFailer = inputArray.filter((player) => player.goe.jump.length >= 3 && player.goe.spin.length >= 3 && player.goe.step.length >= 1);

filterFailer.forEach((el)=> {
  el.goe.jump.sort((a,b)=>b-a).splice(baseAssignment.jump);
  el.goe.spin.sort((a,b)=>b-a).splice(baseAssignment.spin);
  }
);

arr = filterFailer.map((curr) => { 
    return {
      [`name`] : curr.name,
      [`score`] : (curr.goe.jump.reduce((prev2,curr2) => prev2+curr2,0) * baseScore.jump) + 
                  (curr.goe.spin.reduce((prev3,curr3) => prev3+curr3,0) * baseScore.spin) + 
                  (curr.goe.step[0] * baseScore.step) + 
                  curr.pcs - curr.penalty,
    }
  }
);

console.log(arr);
