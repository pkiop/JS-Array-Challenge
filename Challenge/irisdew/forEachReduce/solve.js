const inputArray = [100, 10, 20, 40];

// write your codes

// forEach
let a = 0;
inputArray.forEach((num) => (a = a + num));
console.log(a);

// reduce
const b = inputArray.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(b);
