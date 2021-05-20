const inputArray = [1, 7, 3, 4, 6];

// write your codes

const answer = inputArray
  .filter((n) => ((n * n) % 3) % 2 == 1)
  .reduce((acc, n) => acc + n, 0);
console.log(answer);
