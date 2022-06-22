// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.forEach((el) => {
    typeof(el) === typeof(0) ? answer.push(el) : null;
  })
  return answer;
}

exports.solution = solution;
