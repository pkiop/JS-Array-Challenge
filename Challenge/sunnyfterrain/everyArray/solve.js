function solution(inputArray) {
  if (inputArray.every((e) => e % 2 === 0)) {
    return true;
  }
  return false;
}

exports.solution = solution;
