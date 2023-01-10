function isNumber(value) {
  return typeof value === "number";
}

function solution(inputArray) {
  return inputArray.filter((input) => isNumber(input));
}

exports.solution = solution;
