function solution(inputArray) {
  return inputArray
    .filter((item) => item ** 2 % 3 == 1)
    .reduce((sum, item) => (sum += item ** 2), 0);
}

exports.solution = solution;
