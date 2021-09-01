// 입력받은 객채배열의 nickname을 key,
// name을 value로 하는 객체를 출력하세요

function solution(inputArray) {
  return inputArray.reduce((acc, cur) => {
    acc[cur.nickname] = cur.name;
    return acc;
  }, {});
}

exports.solution = solution;
