function solution(inputArray) {
  let answer = 0;
  inputArray.map((val) => {
    if ((val*val)%3 !== 0)
      answer+= (val*val)
  })
  return answer;
}

exports.solution = solution;
