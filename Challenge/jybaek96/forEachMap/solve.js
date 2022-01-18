// write your codes
function solution(inputArray) {
    inputArray.forEach((item, index, arr) => {
        arr[index] = `${item}%`;
    });
    return inputArray;
}

exports.solution = solution;
