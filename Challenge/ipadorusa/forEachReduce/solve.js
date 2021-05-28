// write your codes
function solution(inputArray) {
  return inputArray.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
}

exports.solution = solution;
