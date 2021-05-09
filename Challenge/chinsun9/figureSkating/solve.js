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
];

// write your codes

// 1 필수과제 수행 검사
// 2 점수 계산
// 2.1 jump, spin, setp 정렬
// 2.2 잘한 점수 합산
// 2.3 최종 점수 계산
// 3 score 기준 내림차순 정렬

const result = inputArray
  .filter((entry) => {
    const { jump, spin, step } = entry.goe;
    return (jump.length >= baseAssignment.jump
        && spin.length >= baseAssignment.spin
        && step.length >= baseAssignment.step);
  })
  .map((entry) => {
    const {
      name, pcs, penalty, goe,
    } = entry;
    const { jump, spin, step } = goe;

    let tes = 0;
    tes += jump.sort().slice(-baseAssignment.jump).reduce((p, c) => p + c * baseScore.jump, 0);
    tes += spin.sort().slice(-baseAssignment.spin).reduce((p, c) => p + c * baseScore.spin, 0);
    tes += step.sort().slice(-baseAssignment.step).reduce((p, c) => p + c * baseScore.step, 0);

    return {
      name,
      score: tes + pcs - penalty,
    };
  })
  .sort((a, b) => b.score - a.score);

console.log(result);
// [ { name: '김연아', score: 1055 }, { name: '아사다 마오', score: 939 } ]
