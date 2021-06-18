// write your codes
function solution(inputArray) {
  return inputArray.map((val, idx) => {
    return {
      name: val,
      order: idx + 1,
    };
  });
}

exports.solution = solution;
