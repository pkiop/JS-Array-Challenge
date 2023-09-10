// write your codes
const fruits = [
  { name: "오이", price: 2000, quantity: 49 },
  { name: "사과", price: 1000, quantity: 2 },
  { name: "참외", price: 5000, quantity: 10 },
  { name: "당근", price: 2000, quantity: 50 },
  { name: "수박", price: 5000, quantity: 20 },
];

//다른 분 코드 참고했다.
const result = fruits.sort(
  (a, b) => a.price - b.price || a.quantity - b.quantity
);
console.log(result);
  