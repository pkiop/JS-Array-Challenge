// write your codes
function solution(inputArray) {
  inputArray.sort((a, b) => a.price - b.price || a.quantity - b.quantity);
  return inputArray;
}

exports.solution = solution;
