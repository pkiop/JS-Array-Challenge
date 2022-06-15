// write your codes
function solution(inputArray) {
  let answer = 0;
  answer = inputArray.reduce((a,b) => a+b,0);
  return answer;
}

exports.solution = solution;
