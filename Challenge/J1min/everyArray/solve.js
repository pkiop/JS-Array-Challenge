function solution(inputArray) {
  return inputArray.every((input) => !(input % 2)); // 원본 배열, 필터한 배열 길이 비교
}

exports.solution = solution;
