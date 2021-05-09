const inputArray = ['홍길동', '둘리', '루피'];

// write your codes

console.log(
  inputArray.map((el, index) => {
    return { name: el, order: index + 1 };
  }),
);
