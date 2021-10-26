// write your codes
function solution(inputArray) {
  return inputArray.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return a.quantity - b.quantity;
  });
}

exports.solution = solution;
