const inputArray = ["홍길동", "둘리", "루피"];

// write your codes

const answer = inputArray.map((el, idx, str) => {
  return {
    name: el,
    order: idx + 1,
  };
});

console.log(answer);
