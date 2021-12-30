// write your codes
function solution(inputArray) {
  return inputArray.map((arr, index) => {
    const answer = {
      name: arr,
      order: index + 1,
    };
    return answer;
  });
}

exports.solution = solution;
// 배열의 값을 name 프로퍼티에 넣고 몇번째 원소인지를 order에 넣은 객체의 배열을 출력하세요
