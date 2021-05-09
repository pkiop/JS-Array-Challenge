const inputArray = [1, 7, 3, 4, 6];

// write your codes
const result = inputArray
  .map(number => number * number)
  .filter(item => item % 3 !== 0)
  .reduce((acc, crr) => acc + crr, 0);

console.log(result);
