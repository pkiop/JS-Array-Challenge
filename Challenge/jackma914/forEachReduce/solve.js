const inputArray = [100, 10, 20, 40];

// write your codes

// const result = inputArray.reduce((acc, value) => acc + value, 0);
// console.log(result);

let sum = 0;
inputArray.forEach((el) => {
  sum = sum + el;
});

console.log(sum);
