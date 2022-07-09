// write your codes
const solution = (inputArray) => {
  return inputArray.map((name, order) => {
    return {
      name,
      order: order + 1
    }
  });
}

exports.solution = solution;
