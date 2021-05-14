const inputArray = ["홍길동", "둘리", "루피"];

// write your codes

const result = inputArray.map((el, inx) => {
  return {
    name: el,
    order: inx + 1,
  };
});

console.log(result);
