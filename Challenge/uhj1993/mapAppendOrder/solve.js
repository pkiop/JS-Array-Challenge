const inputArray = ["홍길동", "둘리", "루피"];

// write your codes

const result = inputArray.map((item, index) => {
  return {
    name: item,
    order: index + 1,
  };
});

console.log(result);
