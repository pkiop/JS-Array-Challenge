function solution(inputArray) {
    return inputArray = inputArray.map(element => element ** 2).filter(element => element % 3 == 1).reduce((p, c) => p + c)
}
exports.solution = solution;
