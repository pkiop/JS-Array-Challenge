// write your codes
function solution(inputArray) {
  let answer = {};
  let max = inputArray.reduce((acc, cur) =>acc> cur ? acc : cur );
  answer.maxValue = max;
  answer.idx = inputArray.findIndex(item => item === max)
  
  return answer;
}

exports.solution = solution;
