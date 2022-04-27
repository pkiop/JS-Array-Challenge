// write your codes
function solution(inputArray) {
  const result = [];
  inputArray.forEach((el) => {
    if (el >= 40) {
      result.push(el);
    }
  });
  return result;
}

exports.solution = solution;
