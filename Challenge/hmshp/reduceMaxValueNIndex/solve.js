// write your codes
const numArray = [15, 2, 20, 5];
let maxValue = numArray.reduce((prev, curr) => {
  if (curr > prev) {
    return curr;
  } else {
    return prev;
  }
}, 0);

let idx = numArray.findIndex((num) => num === maxValue);

console.log(`최대값: ${maxValue}`);
console.log(`최대값의 인덱스: ${idx}`);
