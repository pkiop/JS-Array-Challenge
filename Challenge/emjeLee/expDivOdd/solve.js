function solution(inputArray) {
    return inputArray
        .map((num) => num ** 2)
        .filter((num) => num % 3 && num)
        .reduce((acc, cur) => acc + cur, 0);
}
exports.solution = solution;
