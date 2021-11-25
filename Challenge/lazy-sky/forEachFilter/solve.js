// 배열 원소중 40 이상인 수만 뽑아 배열을 만드세요.
function solution(inputArray) {
  return inputArray.filter((x) => x >= 40);
}

exports.solution = solution;
