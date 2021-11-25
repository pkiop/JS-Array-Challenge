// write your codes
function solution(inputArray) {
  return inputArray.reduce((acc, cur) => {
    return { ...acc, [cur.nickname]: cur.name };
  }, {});
}

exports.solution = solution;
