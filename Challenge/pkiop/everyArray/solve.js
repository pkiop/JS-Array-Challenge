function solution(inputArray) {
  const answer = inputArray.every((el) => el % 2 === 0);
  return answer;
}

exports.solution = solution;
