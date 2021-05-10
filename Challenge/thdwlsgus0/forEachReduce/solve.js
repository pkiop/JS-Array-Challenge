const inputArray = [100, 10, 20, 40];

// write your codes

const solution = (inputArray) => {
  return inputArray.reduce((acc, cur)=> {
    return acc+cur;
  })
}

console.log(solution(inputArray));