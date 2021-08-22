// 홀수만 뽑아 배열로 만드세요

function solution(inputArray) {
  return inputArray.filter((x) => x % 2 === 1);
}

exports.solution = solution;
