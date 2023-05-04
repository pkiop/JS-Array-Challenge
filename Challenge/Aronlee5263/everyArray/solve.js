function solution(inputArray) {
  const answer = inputArray.every((item) => {
    return item % 2 === 0;
  });
}

exports.solution = solution;
