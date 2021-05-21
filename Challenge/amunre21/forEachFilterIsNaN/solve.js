// write your codes
// 유한수만 뽑는 isFinite 메서드를 사용.
function solution(inputArray) {
  return inputArray.filter(el => Number.isFinite(el))
}

exports.solution = solution;
