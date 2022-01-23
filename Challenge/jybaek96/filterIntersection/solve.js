function solution(inputArray1, inputArray2) {
    return inputArray1.filter(item => inputArray2.includes(item));
}

exports.solution = solution;
