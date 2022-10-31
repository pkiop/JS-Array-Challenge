// write your codes
function solution(inputArray) {
  let answer = [];
  inputArray.forEach((el) => {
    answer.push(el + "%");
  });
  return answer;
}

exports.solution = solution;
