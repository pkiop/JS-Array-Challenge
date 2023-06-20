// write your codes
function solution(inputArray) {
  let answer = 0;
  inputArray.forEach(a => answer += a);
  return answer;
}

exports.solution = solution;
