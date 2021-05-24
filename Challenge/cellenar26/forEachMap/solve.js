const inputArray = [100, 10, 20, 40];

// write your codes

function solution(inputArray) {
    return inputArray = inputArray.map(item => item.toString()+'%');
    // console.log(inputArray);
}

exports.solution = solution;