const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes

const result = inputArray.reduce((acc, cur, index) => {
  //   console.log(acc.maxValue);
  //   console.log(`현재값: ${cur}`);
  //   console.log(`인덱스: ${index}`);
  if (acc.maxValue > cur) {
    return acc;
  }
  return { maxValue: cur, index };
});

console.log(result);
