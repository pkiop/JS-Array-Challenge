// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.forEach((arr) => answer.push(`${arr}%`));
  return answer;
}

exports.solution = solution;
