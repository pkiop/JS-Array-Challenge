// write your codes
function solution(inputArray) {
  return inputArray.filter((el) => el.age >= 30 && el.age < 50)
}

exports.solution = solution;
