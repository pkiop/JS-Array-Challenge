// write your codes
function solution(inputArray) {
  let newArr = [];
  inputArray.forEach((arr) => newArr.push(`${arr}%`));
  return newArr;
}

exports.solution = solution;
