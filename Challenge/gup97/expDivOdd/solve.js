function solution(inputArray) {
  return inputArray
    .map((el) => el * el)
    .filter((el) => el % 3 === 1)
    .reduce((a, b) => a + b, 0);
}

exports.solution = solution;
