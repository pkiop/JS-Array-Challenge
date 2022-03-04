function solution(inputArray1, inputArray2) {

    const result = inputArray1.filter(el => inputArray2.indexOf(el) !== -1);

    return result;
}

exports.solution = solution;
