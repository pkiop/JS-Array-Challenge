// write your codes

function solution(inputArray) {
    // filter는 배열에서 조건에 맞는 원소만 남겨두는 것
    return inputArray.filter((v) => v % 2 === 1);
}
  
exports.solution = solution;
