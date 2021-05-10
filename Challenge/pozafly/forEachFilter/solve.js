const inputArray = [100, 10, 20, 40];

// write your codes

const result = inputArray.filter(el => el >= 40);
console.log(result);

const newArr = [];
inputArray.forEach(el => {
  if(el >= 40) newArr.push(el);
});
console.log(newArr);