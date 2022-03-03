// 제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.

// const test1 = {
//   input: [1, 7, 3, 4, 6],
//   answer: 66,
// };

// const test2 = {
//   input: [2, 3, 6, 8, 10],
//   answer: 168,
// };

// const inputArray = [2, 3, 6, 8, 10];
function solution(inputArray) {
  const result = inputArray
    .map((el) => el * el)
    .filter((el) => el % 3 === 1)
    .reduce((acc, el) => acc + el, 0);
  return result;
}

exports.solution = solution;