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
  },
];

// write your codes

const result = [...inputArray];
result.sort((a, b) => {
  if (a.price > b.price) {
    return 1;
  } else if (a.price < b.price) {
    return -1;
  } else {
    return 0;
  }
});

console.log(result);
