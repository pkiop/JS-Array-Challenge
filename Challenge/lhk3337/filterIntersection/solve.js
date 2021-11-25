function solution(inputArray1, inputArray2) {
  return inputArray1.filter((arr) => inputArray2.includes(arr));
}

exports.solution = solution;
