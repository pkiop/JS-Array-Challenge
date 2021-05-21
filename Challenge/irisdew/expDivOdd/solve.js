const inputArray = [1, 7, 3, 4, 6];

// write your codes
let answer = 0;
inputArray.forEach((x) => {
  if (x ** 2 % 3 === 1) {
    answer += x;
    console.log(x);
  }
});
console.log(answer);
