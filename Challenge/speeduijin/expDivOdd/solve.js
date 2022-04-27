function solution(inputArray) {
  const result = inputArray
    .map((el) => el * el)
    .filter((el) => el % 3 === 1)
    .reduce((acc, cur) => acc + cur, 0);
  return result;
}

exports.solution = solution;
