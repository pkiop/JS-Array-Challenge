const inputArray = [ 1, 7, 3, 4, 6 ];

// write your codes
const divOddArray = inputArray.map(num => num ** 2).filter(num => (num % 3) % 2);
const sum = divOddArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);