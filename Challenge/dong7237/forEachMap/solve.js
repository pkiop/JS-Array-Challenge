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
const input = [100, 10, 20, 40]
console.log(solution(input))
exports.solution = solution;
