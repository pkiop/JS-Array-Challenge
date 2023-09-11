// write your codes
function solution(inputArray) {
    const sum = inputArray.reduce((a, b) => a + b);
    return sum;
}

exports.solution = solution;