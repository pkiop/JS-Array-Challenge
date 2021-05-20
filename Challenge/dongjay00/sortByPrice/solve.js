// write your codes
function solution(inputArray) {
  inputArray.sort((a, b) => {
    return a.price < b.price ? -1 : a.price > b.price ? 1 : 0; 
  });
  return inputArray;
}

exports.solution = solution;
