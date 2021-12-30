// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.map((arr) => answer.push(`${arr}%`));
  return answer;
}

exports.solution = solution;
