const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes
const max = inputArray.reduce((acc, cur, idx) => {
  if (acc.maxValue < cur) {
    acc.maxValue = cur;
    acc.idx = idx;
  }
  return acc;
}, {maxValue: -9999999, idx: -1});

console.log(max);