const A = [1, 2, 3, 4, 5];
const B = [3, 4, 5, 6, 7];
// write your codes

const result = A.filter((item) => {
  return B.includes(item);
});

console.log(result);
