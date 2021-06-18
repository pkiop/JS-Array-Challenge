// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.forEach(str => {
    answer.push(str + '%');
  });
  return answer;
}

exports.solution = solution;
