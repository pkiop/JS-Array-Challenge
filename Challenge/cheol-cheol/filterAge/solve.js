// write your codes
function solution(inputArray) {
  const answer = inputArray.filter(({ age }) => age >= 30 && age < 50);
  return answer;
}

exports.solution = solution;
