// write your codes
function solution(inputArray) {
  const answer = [];
  inputArray.forEach((item, index) => {
    answer.push(item + "%");
  });
  return answer;
}
const answ = solution([100, 10, 20, 40]);
console.log(answ);

exports.solution = solution;
