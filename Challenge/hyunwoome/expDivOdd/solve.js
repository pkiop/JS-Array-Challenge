const inputArray = [1, 7, 3, 4, 6];

// write your codes

console.log(
  inputArray
    .map((el) => el ** 2)
    .filter((el) => el % 3 === 1)
    .reduce((acc, cur) => {
      return acc + cur;
    }),
);
