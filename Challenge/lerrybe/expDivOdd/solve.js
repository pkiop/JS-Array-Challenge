function solution(inputArray) {
    return inputArray.map(elem => elem ** 2).filter(elem => (elem % 3) === 1).reduce((prev, curr) => prev + curr);
}

exports.solution = solution;
