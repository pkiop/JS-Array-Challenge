// 배열 원소의 age가 30이상 50미만인 사람만 있는 객체의 배열을 만드세요

function solution(inputArray) {
  return inputArray.filter((x) => (x.age >= 30 && x.age < 50));
}

exports.solution = solution;
