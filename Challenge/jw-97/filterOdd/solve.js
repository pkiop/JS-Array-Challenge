// write your codes
function solution(inputArray) {
    const result = inputArray.filter((el) => el %2 ===1);
    return result;
}

exports.solution = solution;
