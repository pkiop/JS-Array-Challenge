// write your codes
function solution(inputArray) {
  const sortPriceAndQuan = (a, b) => {
    if (a.price < b.price) return -1;
    else if (a.price > b.price) return 1;
    return a.quantity < b.quantity ? -1 : 1;
  };
  return inputArray.sort(sortPriceAndQuan);
}

exports.solution = solution;
