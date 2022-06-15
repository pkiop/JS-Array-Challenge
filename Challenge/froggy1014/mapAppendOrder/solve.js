// write your codes
function solution(inputArray) {
  const answer = inputArray.map((el,idx)=> {
    return {
      name: el,
      order: idx+1, 
    }
  })
  return answer;
}


exports.solution = solution;
