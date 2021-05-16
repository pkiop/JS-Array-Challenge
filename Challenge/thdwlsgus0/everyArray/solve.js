const inputArray = [2, 4, 6, 8, 10];

// write your codes

const solution = (inputArray) => {
  return inputArray.every(num=>num%2===0);
}

console.log(solution(inputArray));