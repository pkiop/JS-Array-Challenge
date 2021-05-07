const inputArray = [ 1, 7, 3, 4, 6 ];

// write your codes

const solution = (inputArray) => {
  return inputArray.map((v)=> Math.pow(v,2))
                   .reduce((acc,cur)=>{
                     if(cur%3===1)return acc+cur;
                     else return acc;
                   },0);
}

console.log(solution(inputArray));