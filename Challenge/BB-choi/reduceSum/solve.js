// write your codes
function solution(inputArray) {
    let result = inputArray.reduce((acc, cur) => acc + cur, 0);
    return result;
}

exports.solution = solution;
