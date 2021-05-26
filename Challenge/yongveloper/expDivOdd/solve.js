const inputArray = [1, 7, 3, 4, 6];

// write your codes

let result = 0;

inputArray.forEach((number) => {
  const powdNumber = number ** 2;
  if (powdNumber % 3 !== 0) {
    result += powdNumber;
  }
});

console.log(result);
