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
// 쇼트프로그램은 점프 3개, 스핀 3개, 스텝 1개의 수행과제가 반드시 포함돼야 한다.
let checkTasks = inputArray.filter(
  el => el.goe.jump.length >= baseAssignment.jump
     && el.goe.spin.length >= baseAssignment.spin 
     && el.goe.step.length >= baseAssignment.step
  )
// 점프와 스핀을 4번 이상 수행했을 시 가장 잘한 3개를 기준으로 한다. 
let bestPerformance = checkTasks.map(el => {
  return {
    name: el.name,
    goe: {
      jump: el.goe.jump.length > 3 
          ? el.goe.jump.sort((a,b) => b-a)
                       .slice(0,3)
                       .reduce((acc, cur) => acc+cur, 0)
          : el.goe.jump.reduce((acc, cur) => acc+cur, 0),
      spin: el.goe.spin.length > 3 
          ? el.goe.spin.sort((a,b) => b-a)
                       .slice(0,3)
                       .reduce((acc, cur) => acc+cur, 0)
          : el.goe.spin.reduce((acc, cur) => acc+cur, 0),
      step: el.goe.step.reduce((acc, cur) => acc+cur, 0)
    },
    pcs: el.pcs,
    penalty: el.penalty
  }
})

// 점수는 기술점수(TES) + 예술점수(PCS) - 감점 으로 구성된다.
let calculateScore = bestPerformance.map(el => {
  return {
    name : el.name,
    score: (el.goe.jump * baseScore.jump) 
         + (el.goe.spin * baseScore.spin)
         + (el.goe.step * baseScore.step) 
         + el.pcs 
         - el.penalty
  }
}).sort((a,b) => b.score - a.score)
