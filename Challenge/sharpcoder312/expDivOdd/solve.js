const inputArray = [ 1, 7, 3, 4, 6 ];

// write your codes

const nums = inputArray.filter(num => {return num**2 % 3 === 1});
const answer = nums.reduce((acc, cur) => {return acc + cur}, 0)
console.log(answer);