function solution(inputArray1, inputArray2) {
    const difference = [
        ...inputArray1.filter(item => !inputArray2.includes(item)),
        ...inputArray2.filter(item => !inputArray1.includes(item))
    ];
    return difference;
}

exports.solution = solution;