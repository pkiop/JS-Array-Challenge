// write your codes
function solution(inputArray) {
  return inputArray.sort((a, b) => {
    return a.price - b.price;
    // if (a.price > b.price) {
    //   return 1;
    // } else if (a.price < b.price) {
    //   return -1;
    // }
    // return 0;
  });
}

exports.solution = solution;
