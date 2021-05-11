const inputArray = [100, 10, 20, 40];

// write your codes

// forEach
const a = [];

inputArray.forEach((num) => {
  a.push(`${num}%`);
});

console.log(a);

// map
const b = inputArray.map((num) => `${num}%`);

console.log(b);
