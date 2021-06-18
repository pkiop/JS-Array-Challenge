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

function solution(input) {
  const result = input
    .map((player) => {
      const goe = player.goe;
      const pass =
        goe.jump.length >= 3 && goe.spin.length >= 3 && goe.step.length >= 1;
      if (pass) {
        const jump = goe.jump.sort((a, b) => b - a).slice(0, 3);
        const spin = goe.spin.sort((a, b) => b - a).slice(0, 3);
        let score = 0;
        jump.forEach((point) => (score += point * baseScore.jump));
        spin.forEach((point) => (score += point * baseScore.spin));
        goe.step.forEach((point) => (score += point * baseScore.step));
        score = score + player.pcs - player.penalty;
        return { name: player.name, score };
      }
    })
    .filter((player) => player);
  return result;
}
console.log(solution(inputArray));
