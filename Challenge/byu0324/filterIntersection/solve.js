function solution(inputArray1, inputArray2) {
  let A = inputArray1.filter(num => inputArray2.includes(num));

  return A;
}

exports.solution = solution;
