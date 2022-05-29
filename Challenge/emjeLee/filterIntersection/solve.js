function solution(inputArray1, inputArray2) {
    const answer = inputArray1.filter(item => inputArray2.includes(item));
    return answer
}

exports.solution = solution;
