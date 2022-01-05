function solution(inputArray) {
    let result = inputArray.every((cur) => cur % 2 === 0);
    return result;
}

exports.solution = solution;
