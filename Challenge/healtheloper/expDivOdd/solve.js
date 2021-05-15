const inputArray = [1, 7, 3, 4, 6];

// write your codes

const sum = inputArray
  .map((e) => e ** 2)
  .filter((e) => e % 3 === 1)
  .reduce((acc, el) => acc + el);

console.log(sum);
