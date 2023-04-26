// write your codes
function solution(inputArray) {
  return inputArray.reduce((max, el, idx)=>{
    if(max.maxValue<el){
      return {
        maxValue: el,
        idx: idx,
      };
    }
    return max;
  }, {maxValue:-1000, idx:-1,})
}

exports.solution = solution;
