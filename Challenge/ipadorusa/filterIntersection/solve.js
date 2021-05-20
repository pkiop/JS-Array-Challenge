function solution(inputArray1, inputArray2) {
  let answer = [];
  for (let i = 0; i < inputArray1.length; i++) {
    for (let j = 0; j < inputArray2.length; j++) {
      if (inputArray1[i] === inputArray2[j]) {
        answer.push(inputArray1[i]);
      }
    }
  }
  return answer;
}
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];

solution(a, b);

exports.solution = solution;
