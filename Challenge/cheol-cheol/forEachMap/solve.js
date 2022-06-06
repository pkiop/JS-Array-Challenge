// write your codes
function solution(inputArray) {
  let mapArr = [];
  inputArray.forEach((el) => mapArr.push(el + "%"));
  return mapArr;
}

exports.solution = solution;
