function solution(inputArray) {
   return inputArray
   .map(item => item*item)
   .filter(item => item % 3 === 1)
   .reduce((prev, curr) => prev + curr);
}

exports.solution = solution;
