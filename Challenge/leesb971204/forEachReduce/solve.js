// write your codes
function solution(inputArray) {
  return inputArray.reduce((sum, item) => (sum += item), 0);
}

exports.solution = solution;
