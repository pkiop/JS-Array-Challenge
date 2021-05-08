const inputArray = [1, 7, 3, 4, 6];

// write your codes

const pow = inputArray.map((item) => {
  return item * item;
});

const filter = pow.filter((item) => {
  if (item % 3 === 1) {
    return item;
  }
});

const result = filter.reduce((a, b) => a + b);

console.log(result);
