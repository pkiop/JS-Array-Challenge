// write your codes
function solution(inputArray) {
  const result = inputArray.reduce((acc, cur) => {
    return { ...acc, [cur.nickname]: cur.name };
  }, {});
  return result;
}

exports.solution = solution;
