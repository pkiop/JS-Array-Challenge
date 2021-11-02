// write your codes
function solution(inputArray) {
  return inputArray.filter((arr) => (arr.age >= 30 && arr.age < 50 ? arr.name : null));
}

exports.solution = solution;
