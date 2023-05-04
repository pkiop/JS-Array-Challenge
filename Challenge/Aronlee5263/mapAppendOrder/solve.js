// write your codes

inputArray = ["홍길동", "둘리", "루피"];

function solution(inputArray) {
  const answer = inputArray.map((element, idx) => {
    return {
      name: element,
      order: idx + 1,
    };
  });
}

exports.solution = solution;
