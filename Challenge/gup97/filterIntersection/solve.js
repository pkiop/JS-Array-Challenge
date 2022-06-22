function solution(inputArray1, inputArray2) {
  const intersection = (el) => {
    if (inputArray2.includes(el)) return true;
    return false;
  };
  return inputArray1.filter(intersection);
}

exports.solution = solution;
