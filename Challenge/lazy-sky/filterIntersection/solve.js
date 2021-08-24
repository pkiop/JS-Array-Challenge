// 두 배열의 교집합을 출력하세요!
function solution(inputArray1, inputArray2) {
  return inputArray1.filter((x) => inputArray2.includes(x));
}

exports.solution = solution;
