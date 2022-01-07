// write your codes
function solution(inputArray) {
    let sum = 0;

    inputArray.forEach((cur) => {
        sum += cur;
    });

    return sum;
}

exports.solution = solution;
