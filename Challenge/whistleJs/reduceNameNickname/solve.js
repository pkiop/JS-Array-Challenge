// write your codes
const solution = (inputArray) => {
  return inputArray.reduce((result, cur) => {
    return {
      ...result,
      [cur.nickname]: cur.name
    }
  }, {});
}

exports.solution = solution;
