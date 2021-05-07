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

const isNotDisqualification = (el) => {
  if(el.goe.jump.length < baseAssignment.jump) return false;
  if(el.goe.spin.length < baseAssignment.spin) return false;
  if(el.goe.step.length < baseAssignment.step) return false;
  return true; 
}

const calculateScoreWithName = (el) => {
  const tes = Object.entries(el.goe).reduce((acc, goeItem) => {
    return acc + goeItem[1].reduce((goeAcc, score) => {
      return goeAcc + baseScore[goeItem[0]] * score;
    }, 0);
  }, 0); 
  return {
    name: el.name,
    score: tes + el.pcs - el.penalty
  };
}

const compareByScore = (a, b) => (b.score - a.score);

const result = inputArray.filter(isNotDisqualification)
                            .map(calculateScoreWithName)
                            .sort(compareByScore)
console.log(result);
