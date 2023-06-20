// write your codes
function solution(inputArray) {
  let max = inputArray.reduce((acc, cur) => Math.max(acc, cur));
  let maxIdx = inputArray.indexOf(max);
  return { maxValue: max, idx: maxIdx };
}

exports.solution = solution;
