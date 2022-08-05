// ## 설명

// 제곱한 후 3으로 나눈 나머지가 홀수인 것 을 뽑은 배열의 총 합을 구하세요.

function solution(inputArray) {
  return inputArray
    .map((i) => i * i)
    .filter((i) => i % 3 === 1)
    .reduce((acc, i) => acc + i);
}
exports.solution = solution;
