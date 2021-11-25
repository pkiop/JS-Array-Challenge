// write your codes
function solution(inputArray) {
  return inputArray.reduce((acc,cur)=>{
    return acc+cur;
  })
}

exports.solution = solution;
