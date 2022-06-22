// write your codes
function solution(inputArray) {
  return inputArray.map((el, index) => {
    return { name: el, order: index + 1 };
  });
}

exports.solution = solution;
