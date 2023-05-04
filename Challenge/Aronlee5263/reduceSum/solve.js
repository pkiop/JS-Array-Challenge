// write your codes

const inputArray = [10, 3, 20, 5, 8, 60];

function solution(inputArray) {
  inputArray.reduce((acc, cur) => {
    return acc + cur;
  });
}

exports.solution = solution;

// aronlee5263 코드
