function solution(inputArray) {
  const isEven = inputArray.every((item) => item % 2 === 0);
  return isEven;
}

exports.solution = solution;
