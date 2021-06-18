const inputArray = [1, 7, 3, 4, 6];

// write your codes

let result2 = 0;

const result = inputArray.filter((item) => {
  return ((item * item) % 3) % 2 !== 0;
});
console.log(result);

for (let i = 0; i < result.length; i++) {
  result2 = result2 + result[i];
}

console.log(result2);
