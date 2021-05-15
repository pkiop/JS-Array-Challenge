const inputArray = ['홍길동', '둘리', '루피'];

// write your codes
const newArray = inputArray.map((val, idx) => ({
  name: val,
  order: idx + 1,
}));

console.log(newArray);