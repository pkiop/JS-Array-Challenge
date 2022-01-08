// write your codes
function solution(inputArray) {
  const resultArray = [];
  inputArray.forEach(elem => resultArray.push(`${elem}%`));
  return resultArray;
}

exports.solution = solution;
