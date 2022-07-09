// write your codes
const solution = (inputArray) => {
  return inputArray.sort((a, b) => {
    if (a.price > b.price) return 1
    else if (a.price < b.price) return -1
    else if (a.quantity > b.quantity) return 1
    return -1;
  });
}

exports.solution = solution;
