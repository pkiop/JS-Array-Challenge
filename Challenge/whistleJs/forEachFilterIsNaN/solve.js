// write your codes
const solution = (inputArray) => {
  return inputArray.filter(item => typeof item === 'number' && !Number.isNaN(item));
}

exports.solution = solution;
