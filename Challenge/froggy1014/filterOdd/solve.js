// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.filter((el) => {
    el%2 !== 0 ? answer.push(el) : null;
  })
  return answer;
}

exports.solution = solution;
