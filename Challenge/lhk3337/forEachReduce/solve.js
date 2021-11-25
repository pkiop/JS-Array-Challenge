// write your codes
function solution(inputArray) {
  let sum = 0;
  inputArray.forEach((arr) => {
    sum = sum + arr;
  });
  return sum;
}

exports.solution = solution;
