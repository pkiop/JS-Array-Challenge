const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes

// 1번풀이
const result1 = inputArray.reduce((acc, cur, idx) => {
  if (acc.maxValue > cur) {
    return acc;
  }
  return { maxValue: cur, idx };
});

// 2번풀이
const result2 = inputArray.reduce((acc, cur, idx) => {
  return acc > cur ? { maxValue: acc, idx: idx - 1 } : cur;
});

console.log(result1);
console.log(result2);
