// write your codes
function solution(inputArray) {
  let reduce = 0;
  inputArray.forEach((el) => (reduce += Number(el)));
  return reduce;
}

exports.solution = solution;
