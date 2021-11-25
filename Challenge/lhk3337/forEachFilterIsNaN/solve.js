// write your codes
function solution(inputArray) {
  return inputArray.filter((arr) => Number.isFinite(arr));
}

exports.solution = solution;
