// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.forEach((el) => {
    if (el >= 40) {
      answer.push(el);
    }
  });
  return answer;
}

exports.solution = solution;
