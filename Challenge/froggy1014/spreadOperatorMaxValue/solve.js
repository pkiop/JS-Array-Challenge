// write your codes
function solution(inputArray) {
  let answer, max, min;
  max = Math.max(...inputArray);
  min = Math.min(...inputArray);
  return answer = `max : ${max}, min : ${min}`;
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(solution(arr));
exports.solution = solution;
