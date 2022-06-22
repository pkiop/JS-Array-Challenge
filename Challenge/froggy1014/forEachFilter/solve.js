// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.forEach((el) => {
    el >= 40 ? answer.push(el): null;
  })
  return answer;
}


exports.solution = solution;
