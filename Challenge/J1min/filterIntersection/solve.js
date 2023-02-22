function solution(inputArray1, inputArray2) {
  return inputArray1.filter((input1) => inputArray2.includes(input1));
}

exports.solution = solution;
