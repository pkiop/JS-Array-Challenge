function solution(inputArray) {
  inputArray = inputArray.map((el) => el ** 2).filter((item) => (item % 3) % 2 !== 0);
  return inputArray.reduce((acc, cur) => acc + cur, 0);
}

exports.solution = solution;
