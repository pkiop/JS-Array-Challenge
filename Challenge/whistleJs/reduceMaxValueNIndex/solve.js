// write your codes
const solution = (inputArray) => {
  return inputArray.reduce((result, maxValue, idx) => result.maxValue < maxValue ? { maxValue, idx } : result, { maxValue: Number.MIN_SAFE_INTEGER, idx: 0 });
}

exports.solution = solution;
