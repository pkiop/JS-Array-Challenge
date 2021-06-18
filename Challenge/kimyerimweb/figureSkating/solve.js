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

const inputArray =  [
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
      step: [10000],
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

//실격처리 거름
const nonDQ = inputArray.filter(x => {
  return x.goe.jump.length >= baseAssignment.jump && x.goe.spin.length >= baseAssignment.spin && x.goe.step.length >= baseAssignment.step
})

//실격 안된 선수들 점수 정렬/상위 3개만 선택/점수 계산
let result = []

const calculPoint = nonDQ.forEach(el => {
  let score = Object.entries(el.goe).reduce((acc,goeItem) => {
    return acc + goeItem[1]
            .sort((a,b)=>b - a)
            .slice(0,3)
            .reduce((goeItemAcc,x) => goeItemAcc + x * baseScore[goeItem[0]],0)
  },0)

  score = score + el.pcs - el.penalty

  result.push({
    name: el.name,
    score
  })
})

console.log(result.sort((a,b)=> b.score - a.score))
