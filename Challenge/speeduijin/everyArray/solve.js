function solution(inputArray) {
  const answer = inputArray.every((inputArray) => inputArray % 2 === 0);
  return answer;
}

exports.solution = solution;
