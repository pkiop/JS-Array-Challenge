// 배열안의 객체를 price를 기준으로 오름차순 정렬한 배열을 출력하세요
// 만약 price가 같다면 quantity기준으로 오름차순 정렬하세요

function solution(inputArray) {
  return inputArray.sort((a, b) => {
    if (a.price === b.price) {
      return a.quantity - b.quantity;
    }
    return a.price - b.price;
  });
}

exports.solution = solution;
