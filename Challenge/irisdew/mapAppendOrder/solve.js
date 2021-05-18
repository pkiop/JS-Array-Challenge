const inputArray = [];

// write your codes

const names = ["홍길동", "둘리", "루피"];

let count = 1;
const answer = names.map((name, index) => {
  return { name, order: index + 1 };
});
console.log(answer);

// arr.map(callback(currentValue[, index[, array]])[, thisArg])
// map의 callback함수가 세가지 인자를 가진다는 것을 알게되었다! currentValue(처리할 현재 요소), index, array(배열 전체)
