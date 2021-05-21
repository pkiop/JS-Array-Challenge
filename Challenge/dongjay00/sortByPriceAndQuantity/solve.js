// write your codes
function solution(inputArray) {
  inputArray.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    } else {
      if (a.quantity < b.quantity) {
        return -1;
      } else if (a.quantity > b.quantity) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return inputArray;
}

exports.solution = solution;
