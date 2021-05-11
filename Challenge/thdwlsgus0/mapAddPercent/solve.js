const inputArray = [100, 10, 20, 40];

// write your codes

const solution = (inputArray) => {
  return inputArray.map((v)=>{
    return v+'%';
  }) 
}
console.log(solution(inputArray));