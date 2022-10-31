// write your codes
function solution(inputArray) {
  const result = inputArray.sort((a, b) => a.price - b.price);
  return result;
}

exports.solution = solution;
