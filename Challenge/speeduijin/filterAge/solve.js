// write your codes
function solution(inputArray) {
  const result = inputArray.filter(({ age }) => age >= 30 && age < 50);
  return result;
}

exports.solution = solution;
