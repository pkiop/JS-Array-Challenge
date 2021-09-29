//every를 이용해서 모든 원소가 짝수인지 아닌지를 판별하세요
//## Expected Output: true

const numArray = [2, 12, 6, 8, 10];
function isEven(num) {
  return num % 2 === 0;
}

let result = numArray.every(isEven);
console.log(result);

//함수 쓰지 않고 해 보자 🔽
let result2 = numArray.every((num) => num % 2 === 0);
console.log(result2);
