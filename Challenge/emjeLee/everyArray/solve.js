function solution(inputArray) {
    const answer = inputArray.every(item => item % 2 === 0);
    return answer;
}

exports.solution = solution;
