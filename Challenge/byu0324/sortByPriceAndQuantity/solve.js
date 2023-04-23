// write your codes
function solution(inputArray) {
  inputArray.sort((a, b) => {
    if(a.price === b.price) {
      return a.quantity - b.quantity;
    } else {
      return a.price - b.price;
    }
  });

  return inputArray;
}

exports.solution = solution;
