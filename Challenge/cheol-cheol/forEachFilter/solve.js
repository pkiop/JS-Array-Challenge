// write your codes
function solution(inputArray) {
  let newArr = [];
  inputArray.filter((el) => el >= 40).forEach((el) => newArr.push(el));
  return newArr;
}

exports.solution = solution;
