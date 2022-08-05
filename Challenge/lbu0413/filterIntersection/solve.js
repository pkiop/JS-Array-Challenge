// const A = [1, 2, 3, 4, 5];
// const B = [3, 4, 5, 6, 7];

function solution(inputArray1, inputArray2) {
  return inputArray1.filter((i) => inputArray2.includes(i));
}

exports.solution = solution;
