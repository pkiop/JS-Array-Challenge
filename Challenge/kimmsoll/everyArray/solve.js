function solution(inputArray) {
    const isEven = (cur) => (cur)%2 === 0;
    return inputArray.every(isEven);
}

exports.solution = solution;
