function solution(inputArray) {
  let answer = inputArray.every(value => value%2 === 0);
  return answer;
}

exports.solution = solution;
