const isEven = item => item % 2 === 0;
function solution(inputArray) {
    return inputArray.every(isEven);
}

exports.solution = solution;