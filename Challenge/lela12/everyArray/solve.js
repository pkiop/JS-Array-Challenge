function solution(inputArray) {
  const answer = inputArray.every((even) => even % 2 === 0);
  return answer;
}

exports.solution = solution;
