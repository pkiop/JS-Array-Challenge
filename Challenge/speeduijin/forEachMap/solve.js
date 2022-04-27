// write your codes
// function solution(inputArray) {
//   return inputArray.map((el) => `${el}%`);
// }

function solution(inputArray) {
  const result = [];
  inputArray.forEach((el) => result.push(`${el}%`));
  return result;
}

exports.solution = solution;
