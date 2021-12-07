// write your codes
function solution(inputArray) {
  let sum = 0;
  inputArray.forEach((arr) => {
    sum += arr;
  });
  return sum;
}

exports.solution = solution;
