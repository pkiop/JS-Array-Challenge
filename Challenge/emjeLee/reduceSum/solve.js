// write your codes
function solution(inputArray) {
    let answer = inputArray.reduce((acc, curr) => acc + curr, 0);
    return answer;
}

exports.solution = solution;
