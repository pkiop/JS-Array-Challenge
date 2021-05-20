const inputArray = [10, 3, 20, 5, 8, 60];

// write your codes


const solution = (inputArray) => {
  return inputArray.reduce((acc, cur, index) => {
    return acc+cur;
  }); 
}

console.log(solution(inputArray));