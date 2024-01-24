// write your codes
function solution(inputArray) {
  const result = inputArray.filter((item) => item['age'] >= 30 && item['age'] < 50);

  return result;
}

exports.solution = solution;
