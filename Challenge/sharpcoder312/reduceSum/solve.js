const inputArray = [10, 3, 20, 5, 8, 60];

// write your codes

const answer = inputArray.reduce((acc, cur)=> {
  return acc + cur;
},0)
console.log(answer);