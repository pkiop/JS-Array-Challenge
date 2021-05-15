const inputArray = ["홍길동", "둘리", "루피"];

// write your codes

const answer = inputArray.map((name, idx) => {
  return { name, order: idx + 1 };
});
console.log(answer);
