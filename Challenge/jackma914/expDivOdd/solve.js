const inputArray = [1, 7, 3, 4, 6];

// write your codes
// 제곱한 후 3으로 나눈 나머지가 홀수인 것의 총 합을 구하세요.

const result = inputArray
  .map((el) => el * el)
  .filter((el) => el % 3 === 1)
  .reduce((acc, el) => acc + el, 0);
console.log(result);
