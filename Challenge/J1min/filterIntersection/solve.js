function solution(inputArray1, inputArray2) {
  return inputArray1.filter((value) => inputArray2.includes(value));
}

exports.solution = solution;
