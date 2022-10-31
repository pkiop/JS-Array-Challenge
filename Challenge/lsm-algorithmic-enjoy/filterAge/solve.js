// write your codes
function solution(inputArray) {
  return inputArray.filter(({ age }) => age >= 30 && age < 50);
}

exports.solution = solution;
