// write your codes
function solution(inputArray) {
  const result = inputArray.sort((a, b) => {
    if (a.price !== b.price) {
      return a.price - b.price;
    }
    return a.quantity - b.quantity
  });

  return result;
}

exports.solution = solution;
