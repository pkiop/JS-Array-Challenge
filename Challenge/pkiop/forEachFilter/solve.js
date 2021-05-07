const inputArray = [100, 10, 20, 40];

// write your codes

let answer = [];
inputArray.forEach(el => {
  if(el >= 40) {
    answer.push(el);
  }
})
console.log(answer);

