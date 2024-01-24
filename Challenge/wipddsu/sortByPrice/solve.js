// write your codes
function solution(inputArray) {
  return inputArray.sort((a, b) => (a.price > b.price ? 1 : -1));
}

exports.solution = solution;
