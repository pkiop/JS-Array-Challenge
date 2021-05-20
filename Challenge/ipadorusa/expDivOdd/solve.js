const inputArray = [1, 7, 3, 4, 6];

// write your codes

let result = inputArray
  .filter(x => {
    if (x ** 2 % 3 === 1) return x;
  })
  .map(x => x ** 2)
  .reduce((acc, cur) => (acc += cur), 0);
