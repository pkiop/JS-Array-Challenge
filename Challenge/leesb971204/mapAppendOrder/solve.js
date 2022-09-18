// write your codes
function solution(inputArray) {
  return inputArray.map((item, idx) => ({
    name: item,
    order: Number(idx + 1),
  }));
}

exports.solution = solution;
