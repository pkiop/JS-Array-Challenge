const inputArray = [ 1, 40, "라매", "개발자", 51.5, 'a', 88 ];

// write your codes

const result = inputArray.filter(el => !isNaN(el));
console.log(result);

const newArr = [];
inputArray.forEach(el => {
  if(!isNaN(el)) newArr.push(el);
});
console.log(newArr);