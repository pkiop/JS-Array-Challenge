const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes

const answer = inputArray.reduce(
  (acc, n, idx) => {
    if (n < acc.maxValue) {
      return acc;
    }

    return { maxValue: n, idx };
  },
  { maxValue: -1, idx: -1 }
);

console.log(answer);
