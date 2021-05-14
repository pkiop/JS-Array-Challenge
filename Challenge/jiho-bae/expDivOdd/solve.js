const inputArray = [1, 7, 3, 4, 6];

// write your codes

let answer = inputArray
  .filter((val) => (val * val) % 3)
  .reduce((sum, val) => sum + val, 0);
console.log(answer);
