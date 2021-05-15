const inputArray = [4, 2, 5, 1, 3];

// write your codes
let odd = inputArray.filter(val => {
  return val % 2 === 1;
});

console.log(odd);
