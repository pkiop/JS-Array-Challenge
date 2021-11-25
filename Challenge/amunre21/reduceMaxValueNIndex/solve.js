// write your codes
function solution(inputArray) {
  return inputArray.reduce((acc,cur,idx)=>{
    return (acc.maxValue >= cur) ? acc : {maxValue:cur, idx:idx};
  },{maxValue:Number.NEGATIVE_INFINITY,idx:-1})
}

exports.solution = solution;
