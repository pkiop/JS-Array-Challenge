// write your codes
function solution(inputArray) {
  let answer = inputArray.reduce((a,b) => a+b);
  return answer;
}
// let arr =[10, 3, 20, 5, 8, 60];
// console.log(solution(arr));


exports.solution = solution;
