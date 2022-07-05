function solution(inputArray) {
  const answer = inputArray.every((e) => e % 2 === 0)
  return answer;
}

exports.solution = solution;