// 배열안의 객체를 price를 기준으로 오름차순 정렬한 배열을 출력하세요
function solution(inputArray) {
  return inputArray.sort((a, b) => a.price - b.price);
}

exports.solution = solution;
