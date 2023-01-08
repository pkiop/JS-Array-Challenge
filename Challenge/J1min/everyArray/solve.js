function solution(inputArray) {
  for (const data of inputArray) {
    if (data % 2) return false
  }
  return true
}

exports.solution = solution;
