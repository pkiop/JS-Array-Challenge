const inputArray = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// write your codes

const solution = (inputArray) => {
  return inputArray.reduce((acc ,cur, index)=> {
    if(acc?.maxValue < cur){
      return {
        maxValue: cur,
        idx:index,
      }
    }
    return acc;
  },{maxValue:-Infinity, idx:-1});
}

console.log(solution(inputArray));