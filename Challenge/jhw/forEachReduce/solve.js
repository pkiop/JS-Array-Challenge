// write your codes
function solution(inputArray) {
    const reducer = (prev, current) => prev + current;
    const answer = inputArray.reduce(reducer);
    return answer;
}

exports.solution = solution;
