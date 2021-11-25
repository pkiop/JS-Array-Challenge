// write your codes
function solution(inputArray) {
    let sum = 0;
    inputArray.forEach((item) => {
        sum += (item)*1;
    })
    return sum;
}

exports.solution = solution;
