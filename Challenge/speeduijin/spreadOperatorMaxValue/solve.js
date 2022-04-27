// write your codes
function solution(inputArray) {
  const maxValue = Math.max(...inputArray);
  const minValue = Math.min(...inputArray);
  return `max : ${maxValue}, min : ${minValue}`;
}

exports.solution = solution;
