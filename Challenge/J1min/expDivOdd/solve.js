function solution(inputArray) {
  return inputArray
    .filter((input) => input ** 2 % 3 === 1) // 조건 필터링
    .map((input) => input ** 2) // 조건에 맞게 값 변경
    .reduce((total, currnt) => total + currnt); // 배열의 합
}

exports.solution = solution;
