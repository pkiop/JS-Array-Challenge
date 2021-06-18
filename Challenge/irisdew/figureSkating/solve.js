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

function Assignment(player, baseAssignment) {
  if (player.jump.length >= baseAssignment.jump && player.spin.length >= baseAssignment.spin && player.step.length >= baseAssignment.step) {
    return true;
  } else {
    return false;
  }
}

function Sum(arr) {
  return arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
}

function Sort(arr, n) {
  if (arr.length >= n) {
    return arr.sort((a, b) => b - a).slice(0, n);
  }
  return arr.sort((a, b) => b - a);
}

function Score(player) {
  const jumpTES = baseScore.jump * Sum(Sort(player.goe.jump, baseAssignment.jump));
  const spinTES = baseScore.spin * Sum(Sort(player.goe.spin, baseAssignment.spin));
  const stepTES = baseScore.step * Sum(Sort(player.goe.step, baseAssignment.step));
  return jumpTES + spinTES + stepTES + player.pcs - player.penalty;
}

const answer = inputArray
  .filter((player) => Assignment(player.goe, baseAssignment))
  .map((player) => {
    const rObj = {};
    rObj["name"] = player.name;
    rObj["score"] = Score(player);
    return rObj;
  });

console.log(answer);

console.log(Sort([9, 6, 8, 9], 3));
