// write your codes
function solution(inputArray) {
    const answer = inputArray.filter((item) => item % 2 === 1)
    return answer;
}

exports.solution = solution;
