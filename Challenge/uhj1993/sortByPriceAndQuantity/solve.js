// write your codes
function solution(inputArray) {
  return inputArray.sort((a, b) => {
    if (a.price != b.price) {
      return a.price - b.price;
    } else {
      return a.quantity - b.quantity;
    }
  });
}

exports.solution = solution;
