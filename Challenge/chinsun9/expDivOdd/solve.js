const inputArray = [1, 7, 3, 4, 6];

// write your codes

// 모든 원소 제곱
// 3으로 나눈 값만 추출
// 더하기

const result = inputArray
  .map((value) => value * value)
  .filter((value) => value % 3 === 1)
  .reduce((prev, cur) => prev + cur, 0);

console.log(result);
