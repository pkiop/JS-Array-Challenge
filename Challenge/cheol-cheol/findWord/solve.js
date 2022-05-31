// write your codes
function solution(inputArray) {
  let isTrue = false;
  if (inputArray.find((el) => el === "용가리")) isTrue = true;
  return isTrue;
}

exports.solution = solution;
