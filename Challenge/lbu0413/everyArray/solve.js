function solution(inputArray) {
  return inputArray.every((i) => i % 2 === 0);
}

const inputArray = [2, 4, 6, 8, 10];
console.log(solution(inputArray));

// const inputArray2 = [2, 3, 6, 8, 10];
// console.log(solution(inputArray2));
// exports.solution = solution;
