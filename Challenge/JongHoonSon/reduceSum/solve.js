// write your codes
function solution(inputArray) {
    let sum = inputArray.reduce((acc, el) => {
        return acc + el;
    }, 0);

    return sum;
}

exports.solution = solution;
