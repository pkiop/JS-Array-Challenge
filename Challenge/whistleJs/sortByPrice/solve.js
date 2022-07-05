// write your codes
const solution = (inputArray) => {
  return inputArray.sort((a, b) => a.price > b.price ? 1 : -1);
}

exports.solution = solution;
