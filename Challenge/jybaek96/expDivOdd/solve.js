function solution(inputArray) {
    const answer = inputArray
    .map(item => item * item)
    .filter(item => item % 3 === 1)
    .reduce((acc, cur) => acc + cur, 0);
    return answer;   
}

exports.solution = solution;
