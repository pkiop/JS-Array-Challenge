// write your codes
function solution(inputArray) {  
  return inputArray.reduce((acc,cur)=>{        
    acc[cur.nickname] = cur.name;
    return acc;
  },{});  
}

exports.solution = solution;
