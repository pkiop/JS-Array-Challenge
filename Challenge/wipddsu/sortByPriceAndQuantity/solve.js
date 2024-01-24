// write your codes
function solution(inputArray) {
  return inputArray.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    } else if (a.price === b.price && a.quantity > b.quantity) {
      return 1;
    } else {
      return -1;
    }
  });
}

exports.solution = solution;
