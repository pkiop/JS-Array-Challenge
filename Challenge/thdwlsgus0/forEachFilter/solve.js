const inputArray = [100, 10, 20, 40];

// write your codes

const solution = (inputArray) => {
  return inputArray.filter(v => v>=40);
}

console.log(solution(inputArray));