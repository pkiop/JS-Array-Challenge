// write your codes
function solution(inputArray) {
  const result = inputArray.reduce((acc, el) => {
    return {
      ...acc,
      [el.nickname]: el.name,
    };
  }, {});
  return result;
}

exports.solution = solution;
