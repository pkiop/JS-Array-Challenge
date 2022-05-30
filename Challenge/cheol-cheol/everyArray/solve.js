function solution(inputArray) {
  const answer = inputArray.every((num) => num % 2 === 0);
  return answer;
}

exports.solution = solution;
