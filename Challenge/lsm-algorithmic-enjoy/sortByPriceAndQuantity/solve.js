// write your codes
function solution(inputArray) {
  const result = inputArray.sort((a, b) => {
    return a.price - b.price || a.quantity - b.quantity;
  });
  return result;
}

exports.solution = solution;
