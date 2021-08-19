function solution(inputArray) {
    const answer = inputArray.filter(item => (Math.pow(item, 2) % 3) % 2 !== 0).map(item => Math.pow(item, 2));
    return answer.reduce((acc, curr) => { return acc + curr });
}

exports.solution = solution;