function solution(inputArray1, inputArray2) {
  return inputArray1.filter((el) => inputArray2.includes(el));
}

exports.solution = solution;
