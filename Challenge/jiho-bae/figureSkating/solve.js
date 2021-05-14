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

const players = inputArray.filter((player) => {
  const {
    goe: { jump, spin, step },
  } = player;
  return (
    jump.length >= baseAssignment.jump &&
    spin.length >= baseAssignment.spin &&
    step.length >= baseAssignment.step
  );
});

let answer = players.map((player) => {
  let score = 0;
  const {
    name,
    goe: { jump, spin, step: stepScore },
    pcs,
    penalty,
  } = player;

  let jumpScore =
    jump.length > 3
      ? jump
          .sort((a, b) => b - a)
          .slice(0, 3)
          .reduce((s, v) => s + v, 0)
      : jump.reduce((s, v) => s + v, 0);

  let spinScore =
    spin.length > 3
      ? spin
          .sort((a, b) => b - a)
          .slice(0, 3)
          .reduce((s, v) => s + v, 0)
      : spin.reduce((s, v) => s + v, 0);

  score =
    jumpScore * baseScore.jump +
    spinScore * baseScore.spin +
    stepScore * baseScore.step +
    pcs -
    penalty;

  return {
    name,
    score,
  };
});

console.log(answer.sort((a, b) => b - a));
