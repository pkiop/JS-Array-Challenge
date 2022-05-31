// write your codes
function solution(inputArray) {
  return inputArray.reduce((acc, el) => {
    return {
      ...acc,
      [el.nickname]: el.name,
    };
  }, {});
}

exports.solution = solution;
