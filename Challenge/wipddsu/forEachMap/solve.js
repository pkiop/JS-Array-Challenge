// write your codes
function solution(inputArray) {
  const answer = [];
  inputArray.forEach((item) => answer.push(item + '%'));

  return answer;
}

exports.solution = solution;
