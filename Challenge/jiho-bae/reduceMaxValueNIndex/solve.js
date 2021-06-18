const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes
const answer = inputArray.reduce(
  (acc, val, i) => {
    return {
      maxValue: Math.max(acc.maxValue, val),
      idx: val > acc.maxValue ? i : acc.idx,
    };
  },
  { maxValue: 0, idx: 0 }
);
console.log(answer);
