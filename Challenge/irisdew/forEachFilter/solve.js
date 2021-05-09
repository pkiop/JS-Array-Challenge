const inputArray = [100, 10, 20, 40];

// write your codes

// filter
const a = inputArray.filter((num) => num >= 40);

console.log(a);

// forEach
const b = [];
inputArray.forEach((num) => {
  if (num >= 40) {
    b.push(num);
  }
});

console.log(b);
