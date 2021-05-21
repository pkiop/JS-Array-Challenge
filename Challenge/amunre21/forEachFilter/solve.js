// write your codes

// use filter
function solution(inputArray) {
  return inputArray.filter(el => el>=40);
}

// use forEach
function solution2(inputArray) {
  let result = [];
  inputArray.forEach(el => {
    if(el>=40){
      result.push(el);
    }
  })
  return result;
}

exports.solution = solution;
