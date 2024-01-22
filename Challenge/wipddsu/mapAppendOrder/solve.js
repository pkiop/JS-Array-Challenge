// write your codes
function solution(inputArray) {
  const result = inputArray.map((item, i) => {
    return { name: item, order: i + 1 };
  });

  return result;
}

exports.solution = solution;
