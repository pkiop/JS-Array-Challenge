// write your codes
function solution(inputArray) {
  const answer = inputArray.reduce((acc, el) => {
    return acc + el;
  }, 0);
  return answer;
}

exports.solution = solution;
