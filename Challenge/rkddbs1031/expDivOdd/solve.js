function solution(inputArray) {
  const nums = inputArray.filter((num) => num**2 % 3 === 1);
  const answer = nums.reduce((acc, cur) => acc + cur, 0)
  return answer;
}

exports.solution = solution;
