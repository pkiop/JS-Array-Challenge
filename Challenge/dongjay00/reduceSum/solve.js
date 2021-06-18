const inputArray = [10, 3, 20, 5, 8, 60];

// write your codes
const sum = inputArray.reduce((acc, cur) => {
  acc += cur;
  return acc;
}, 0);

console.log(sum);

