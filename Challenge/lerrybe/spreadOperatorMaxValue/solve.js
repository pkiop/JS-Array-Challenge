// write your codes
function solution(inputArray) {
    const maxNum = Math.max(...inputArray);
    const minNum = Math.min(...inputArray);
    return `max : ${maxNum}, min : ${minNum}`;
}

exports.solution = solution;
