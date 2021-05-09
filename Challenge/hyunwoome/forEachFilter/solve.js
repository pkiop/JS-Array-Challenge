const inputArray = [100, 10, 20, 40];

// write your codes

console.log(
  inputArray.filter((el) => {
    return el >= 40;
  }),
);

inputArray.forEach((el) => {
  if (el >= 40) return el;
});
