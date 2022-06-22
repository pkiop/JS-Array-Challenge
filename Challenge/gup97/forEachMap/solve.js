// write your codes
function solution(inputArray) {
  let result = [];
  inputArray.forEach((el) => result.push(`${el}%`));
  return result;
}

exports.solution = solution;
