const inputArray = [100, 10, 20, 40];

// write your codes

const result = inputArray.filter((item) => {
  return item >= 40;
});

console.log(result);

const resultArray = [];
const result2 = inputArray.forEach((item) => {
  if (item >= 40) {
    resultArray.push(item);
  }
});
console.log(resultArray);
