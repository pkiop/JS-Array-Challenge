function solution(inputArray) {
  return inputArray
    .map((input) => input ** 2) // 조건에 맞게 값 변경
    .filter((input) => input % 3 === 1) // 조건 필터링
    .reduce((total, currnt) => total + currnt); // 배열의 합
}

exports.solution = solution;
