// reduce 메소드를 사용해서 배열의 모든 수의 합을 구하세요.
function solution(inputArray) {
  return inputArray.reduce((acc, cur) => acc + cur);
}

exports.solution = solution;
