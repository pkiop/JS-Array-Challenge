// forEach 메소드를 사용해서 배열의 총 합을 출력하는 코드를 작성하세요
function solution(inputArray) {
  return inputArray.reduce((acc, cur) => acc + cur);
}

exports.solution = solution;
