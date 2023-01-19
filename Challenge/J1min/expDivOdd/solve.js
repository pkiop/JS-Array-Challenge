function solution(inputArray) {
  return inputArray
    .map((input) => input ** 2)
    .filter((input) => input % 3 === 1)
    .reduce((total, currnt) => total + currnt);
}

exports.solution = solution;
