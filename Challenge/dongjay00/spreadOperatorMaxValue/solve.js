// write your codes
function solution(inputArray) {
  const max = Math.max(...inputArray);
  const min = Math.min(...inputArray);
  return "max : " + max + ", min : " + min;
}

exports.solution = solution;
