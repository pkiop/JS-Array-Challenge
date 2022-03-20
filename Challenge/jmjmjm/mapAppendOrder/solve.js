const inputArray = ["홍길동", "둘리", "루피"];

const answer = inputArray.map((el, idx) => {
  return {
    name: el,
    order: idx + 1,
  };
});
