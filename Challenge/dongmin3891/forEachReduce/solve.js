const inputArray = [100, 10, 20, 40];

// write your codes

let result = 0;

const result2 = inputArray.forEach((item) => (result = item + result));

console.log(result);
