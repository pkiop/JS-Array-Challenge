const inputArray = [100, 10, 20, 40];

// write your codes

const solution = (inputArray) => {
  const output = [];
  inputArray.forEach((v)=>{
    output.push(v+'%');
  });
  return output;
}

console.log(solution(inputArray));