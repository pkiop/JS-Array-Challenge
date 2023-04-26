// write your codes
function solution(inputArray) {
    return inputArray.reduce((prev, cur)=> prev+=cur, 0)
}

exports.solution = solution;
