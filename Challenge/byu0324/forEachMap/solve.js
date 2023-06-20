// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.forEach(a => {
    answer.push(a + '%');
  });
  return answer;
}

exports.solution = solution;
