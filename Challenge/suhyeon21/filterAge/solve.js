// write your codes

function solution(inputArray) {
  return inputArray.filter((person) => person.age >= 30 && person.age < 50);
}

exports.solution = solution;
