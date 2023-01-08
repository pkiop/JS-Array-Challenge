function solution(inputArray) {
  let answer = 0;
  for (let data of inputArray) {
    data = data ** 2;
    if (data % 3 === 1) answer += data;
  }
  return answer;
}

exports.solution = solution;
