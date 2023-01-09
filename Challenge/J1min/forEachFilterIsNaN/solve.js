function isNumber(value) {
  return typeof value === "number";
}

function solution(inputArray) {
  let answer = [];
  inputArray.forEach((value) => (isNumber(value) ? answer.push(value) : null));
  return answer;
}

exports.solution = solution;
