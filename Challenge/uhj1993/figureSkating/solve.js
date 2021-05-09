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

// 실격자 구분
let dq = inputArray.filter((item) => {
  if (
    item.goe.jump.length >= baseAssignment.jump &&
    item.goe.spin.length >= baseAssignment.spin &&
    item.goe.step.length >= baseAssignment.step
  ) {
    return true;
  }
});

// 점수 계산
let calculScore = dq.map((item) => {
  const { name, goe, pcs, penalty } = item;
  const { jump, spin, step } = goe;

  let jumpCount = jump.reduce((a, b) => {
    return a + b * baseScore.jump;
  }, 0);

  let spinCount = spin.reduce((a, b) => {
    return a + b * baseScore.spin;
  }, 0);

  let stepCount = step.reduce((a, b) => {
    return a + b * baseScore.step;
  }, 0);

  let tes = jumpCount + spinCount + stepCount;

  return {
    name,
    score: tes + pcs - penalty,
  };
});

// 순위 계산
const result = calculScore.sort((a, b) => {
  b.sort - a.sorts;
});

console.log(result);
