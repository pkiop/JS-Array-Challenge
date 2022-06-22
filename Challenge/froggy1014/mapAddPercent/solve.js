// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.map((el) => {
    answer.push(el+'%')
  })
  return answer;
}

exports.solution = solution;
