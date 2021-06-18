// write your codes
function solution(inputArray) {
  return inputArray.sort((a,b)=>a.price-b.price||a.quantity-b.quantity);
}

exports.solution = solution;