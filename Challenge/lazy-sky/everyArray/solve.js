// every를 이용해서 모든 원소가 짝수인지 아닌지를 판별하세요

function solution(inputArray) {
  return inputArray.every((x) => x % 2 === 0);
}

exports.solution = solution;
