function solution(inputArray) {
    const answer = inputArray.reduce((acc, cur) => {
        if ((cur ** 2) % 3 === 1) {
            return acc + cur ** 2;
        }
        return acc;
    }, 0)
    return answer;
}

exports.solution = solution;
