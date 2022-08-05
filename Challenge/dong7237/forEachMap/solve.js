// write your codes
function solution(inputArray) {
  let arr = [];
  inputArray.forEach(element => {
    arr.push(element + '%')
  }
  );
  return arr
}
/*  let answer = [];
  inputArray.forEach((el) => {
    answer.push(el + '%');
  })
  return answer;
*/

exports.solution = solution;
