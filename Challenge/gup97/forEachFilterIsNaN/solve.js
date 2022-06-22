// write your codes
function solution(inputArray) {
  // 새로운 방법...!!
  //  return inputArray.filter(filter(Number.isFinite));
  return inputArray.filter((el) => typeof el === "number");
}

exports.solution = solution;
