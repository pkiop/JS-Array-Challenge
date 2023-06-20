// write your codes
function solution(inputArray) {
  return inputArray.reduce((acc, cur) => { acc += cur; 
    return acc;
  })
}

exports.solution = solution;
