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

const inputArray = [
  {
    name: "김연아",
    goe: {
      jump: [10, 9, 10],
      spin: [10, 10, 10],
      step: [9],
    },
    pcs: 30,
    penalty: 0,
  },
  {
    name: "피겨의 신",
    goe: {
      jump: [10000, 10000],
      spin: [10000, 10000, 10000],
      step: [10000],
    },
    pcs: 100000,
    penalty: 0,
  },
  {
    name: "아사다 마오",
    goe: {
      jump: [9, 6, 8, 9],
      spin: [9, 9, 9],
      step: [8],
    },
    pcs: 29,
    penalty: 10,
  },
];

// write your codes

const isQualifiedAct = (act) =>
  Object.entries(baseAssignment).every((entry) => {
    const [goeKey, goeRequiredCount] = entry;
    const goeTries = act.goe[goeKey];

    return goeTries.length >= goeRequiredCount;
  });

const leaveMaxThree = (act) => ({
  ...act,
  goe: {
    ...act.goe,
    jump: act.goe.jump.sort().slice(-3),
    spin: act.goe.spin.sort().slice(-3),
  },
});

const getActResult = (act) => {
  const tesScore = Object.entries(baseScore).reduce((acc, entry) => {
    const [goeKey, goeBaseScore] = entry;
    const goeTries = act.goe[goeKey];
    const goeScore = goeTries.reduce((acc, n) => acc + n, 0);

    return acc + goeBaseScore * goeScore;
  }, 0);

  return {
    name: act.name,
    score: tesScore + act.pcs - act.penalty,
  };
};

const descendingCompareByScore = (a, b) => b.score - a.score;

const answer = inputArray
  .filter(isQualifiedAct)
  .map(leaveMaxThree)
  .map(getActResult)
  .sort(descendingCompareByScore);

console.log(answer);
