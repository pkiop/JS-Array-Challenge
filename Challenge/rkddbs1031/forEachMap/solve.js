// write your codes
function solution(inputArray) {
  let answer = []
  inputArray.forEach((item) => {
    answer.push(item + '%')
  })
  return answer
}

exports.solution = solution;
