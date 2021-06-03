function solution(inputArray) {
    return inputArray.every((test));
}

const test = (item) => item % 2 ==0;

exports.solution = solution;
