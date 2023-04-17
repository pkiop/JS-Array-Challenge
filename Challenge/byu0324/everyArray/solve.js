function solution(inputArray) {
  let result = inputArray.every(el => el % 2 === 0);
  return result;
}

exports.solution = solution;
