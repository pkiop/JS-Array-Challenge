const inputArray = [100, 10, 20, 40];

// write your codes

let nums = [];
inputArray.forEach(num => {
  if(num >= 40) {
    nums.push(num);
  }
})
console.log(nums);