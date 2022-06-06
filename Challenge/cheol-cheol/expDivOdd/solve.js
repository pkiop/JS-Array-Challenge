function solution(inputArray) {
  const answer = inputArray
    .map((num) => num * num)
    .filter((num) => num % 3 === 1)
    .reduce((a, b) => a + b, 0);
  return answer;
}

exports.solution = solution;
