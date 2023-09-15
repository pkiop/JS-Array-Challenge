// write your codes
function solution(inputArray) {
    let result = 0;
    inputArray.forEach((el) => result += el);

    return result;
}

exports.solution = solution;
