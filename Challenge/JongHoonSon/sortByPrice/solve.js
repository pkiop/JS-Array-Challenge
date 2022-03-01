// write your codes
function solution(inputArray) {
    inputArray.sort((a, b) => a.price - b.price);

    return inputArray;
}


exports.solution = solution;
