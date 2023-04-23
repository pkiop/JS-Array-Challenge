// write your codes
function solution(inputArray) {
  let max = Math.max(...inputArray);
  let min = Math.min(...inputArray);
  return `max : ${max}, min : ${min}`;
}

exports.solution = solution;
