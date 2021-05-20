const inputArray = [10, 3, 20, 5, 8, 60];

// write your codes

let sum = inputArray.reduce((acc, cur) => (acc += cur), 0);
console.log(sum);
