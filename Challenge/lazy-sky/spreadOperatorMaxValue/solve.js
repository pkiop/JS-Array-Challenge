// Spread Operator를 이용해서 값의 최대, 최소값을 구하세요
function solution(inputArray) {
  return `max : ${Math.max(...inputArray)}, min : ${Math.min(...inputArray)}`;
}

exports.solution = solution;
