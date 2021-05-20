const inputArray = [1, 7, 3, 4, 6];

// write your codes

const result = inputArray
  .map((item) => {
    return item * item;
  })
  .filter((item) => {
    if (item % 3 === 1) {
      return true;
    }
  })
  .reduce((a, b) => a + b);

console.log(result);

// 1. filter메소드의 return값은 boolean값이어야 한다.
// 2. 메소드체이닝 사용하기
