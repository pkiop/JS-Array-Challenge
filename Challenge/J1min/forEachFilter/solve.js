function solution(inputArray) {
  let answer = [];
  inputArray.forEach((value) => (value >= 40 ? answer.push(value) : null));
  return answer;
}

exports.solution = solution;
