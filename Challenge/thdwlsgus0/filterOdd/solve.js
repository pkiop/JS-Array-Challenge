const inputArray = [4, 2, 5, 1, 3];

// write your codes

const solution = (inputArray) => {
  return inputArray.filter(v=> v%2===1);
}

console.log(solution(inputArray));

