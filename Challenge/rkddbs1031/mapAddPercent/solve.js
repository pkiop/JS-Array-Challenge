// write your codes
function solution(inputArray) {
  let answer = []
    inputArray.map((item) => {
    answer.push(item +'%')
  })
  return answer
}

exports.solution = solution;
