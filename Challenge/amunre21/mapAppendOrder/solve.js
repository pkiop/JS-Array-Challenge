// write your codes
function solution(inputArray) {
  return inputArray.map((el,idx)=>{return{name:el,order:idx+1}})
}

exports.solution = solution;
