const inputArray = [100, 10, 20, 40];

// write your codes

let sum = 0;

inputArray.forEach( item => sum += item);
console.log(sum);


// reduce() ver.
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// console.log(inputArray.reduce(reducer));