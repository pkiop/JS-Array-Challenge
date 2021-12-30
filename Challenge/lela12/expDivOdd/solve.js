function solution(inputArray) {
  const answer = inputArray
    .map((a) => a * a)
    .filter((a) => a % 3 === 1)
    .reduce((prev, a) => prev + a, 0);
  return answer;
}

exports.solution = solution;
