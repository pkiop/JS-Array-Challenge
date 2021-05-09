const inputArray = [100, 10, 20, 40];

// write your codes
let result = [];
inputArray.forEach((number) => {
  if (number >= 40) {
    result.push(number);
  }
});
console.log(result);
