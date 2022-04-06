// write your codes
function solution(inputArray) {
  let answer;
  if (inputArray.find((el) => el === "용가리")) {
    answer = true;
  } else answer = false;
  return answer;
}

exports.solution = solution;
