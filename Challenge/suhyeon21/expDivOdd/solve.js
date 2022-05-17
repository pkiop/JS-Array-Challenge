function solution(inputArray) {
  const answer = inputArray
    .map((num) => num ** 2)
    .filter((num) => (num % 3) % 2 === 1)
    .reduce((prev, curr) => prev + curr);

  console.log(answer);

  return answer;
}
exports.solution = solution;
