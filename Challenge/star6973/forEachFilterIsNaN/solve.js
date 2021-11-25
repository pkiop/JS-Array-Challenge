// write your codes
function solution(inputArray) {
    return inputArray.filter(item => (!isNaN(item) && typeof(item) === "number"));
}

exports.solution = solution;