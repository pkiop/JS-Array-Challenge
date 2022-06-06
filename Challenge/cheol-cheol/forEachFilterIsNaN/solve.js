// write your codes
function solution(inputArray) {
  let newArr = [];
  inputArray
    .filter((el) => !isNaN(el) && typeof el === "number")
    .forEach((el) => newArr.push(el));
  return newArr;
}

exports.solution = solution;
