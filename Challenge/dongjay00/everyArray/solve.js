function solution(inputArray) {
  const result = inputArray.every(element => 
    element % 2 === 0
  );
  return result;
}

exports.solution = solution;
