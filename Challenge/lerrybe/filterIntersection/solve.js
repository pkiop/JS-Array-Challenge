function solution(inputArray1, inputArray2) {
  return inputArray1.filter((elem) => inputArray2.includes(elem));
}

exports.solution = solution;
