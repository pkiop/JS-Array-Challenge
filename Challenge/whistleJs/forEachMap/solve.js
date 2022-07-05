// write your codes
const solution = (inputArray) => {
  const result = [];
  inputArray.forEach(item => result.push(`${item}%`));

  return result;
}

exports.solution = solution;
