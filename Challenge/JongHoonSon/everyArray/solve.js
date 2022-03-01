function solution(inputArray) {
    const isEven = (el) => el % 2 === 0;

    return inputArray.every(isEven);
}

exports.solution = solution;
