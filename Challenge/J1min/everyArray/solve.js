function solution(inputArray) {
  return (
    inputArray.length ===
    inputArray.filter((input) => (input % 2 ? null : input)).length // 원본 배열, 필터한 배열 길이 비교
  );
}

exports.solution = solution;
