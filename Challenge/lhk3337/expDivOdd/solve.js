function solution(inputArray) {
  return inputArray
    .map((arr) => arr ** 2)
    .filter((a) => a % 3 !== 0)
    .reduce((prev, curr) => prev + curr);
}

exports.solution = solution;
