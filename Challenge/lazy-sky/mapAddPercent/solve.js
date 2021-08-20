// map 메소드를 사용해 배열 각각 숫자 뒤에 %를 붙인 문자열을 만드세요
function solution(inputArray) {
  return inputArray.map((x) => `${x}%`);
}

exports.solution = solution;
