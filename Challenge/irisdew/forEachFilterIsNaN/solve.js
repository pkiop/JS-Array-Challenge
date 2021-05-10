const inputArray = [1, 40, "라매", "개발자", 51.5, "a", 88];

// write your codes

// first solve
const answer = [];
inputArray.forEach((el) => {
  if (typeof el === "number") {
    answer.push(el);
  }
});
console.log(answer);

// second solve
console.log(isNaN(null)); // NaN (Not-A-Number) 숫자가 아님
console.log(NaN === NaN); // NaN은 다른 NaN과도 같지 않음

const b = [];
inputArray.forEach((el) => {
  if (isNaN(el) === false) {
    b.push(el);
  }
});
console.log(b);

// filter
const c = inputArray.filter((el) => !isNaN(el));
console.log(c);
