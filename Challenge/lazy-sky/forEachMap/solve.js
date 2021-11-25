// forEach 메소드를 사용해서 배열의 각 원소 끝에 '%'를 붙인 문자열 배열을 출력하세요
function solution(inputArray) {
  return inputArray.map((x) => `${x}%`);
}

exports.solution = solution;
