// write your codes
function solution(inputArray) {
    const result = inputArray.filter(item => item%2==1);
    return result;
}

exports.solution = solution;
