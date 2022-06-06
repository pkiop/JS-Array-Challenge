// write your codes
function solution(inputArray) {
  let result = inputArray.map((el, index) => ({
    name: el,
    order: index + 1,
  }));
  return result;
}

exports.solution = solution;
