const inputArray = [
  {
    name: '사과',
    price: 1000,
  },
  {
    name: '수박',
    price: 5000,
  },
  {
    name: '당근',
    price: 2000,
  },
  {
    name: '참외',
    price: 10000,
  }
];

// write your codes

const result = inputArray.sort( function(a,b){
  // 오름차순
  // return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
  return a["price"] - b["price"];

  // 내림차순
  //return b["price"] - a["price"]
})
console.log(result);

