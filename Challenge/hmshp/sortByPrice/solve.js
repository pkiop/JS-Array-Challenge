// write your codes
const fruits = [
  { name: "당근", price: 2000 },
  { name: "사과", price: 1000 },
  { name: "참외", price: 10000 },
  { name: "수박", price: 5000 },
];

const result = fruits.sort((a, b) => a.price - b.price);
console.log(result);
