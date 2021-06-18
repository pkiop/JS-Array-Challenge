const A = [1, 2, 3, 4, 5];
const B = [3, 4, 5, 6, 7];
// write your codes

const solution = (A,B)=>{
  return A.filter((v)=>B.includes(v));
}

console.log(solution(A,B));