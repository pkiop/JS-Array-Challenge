// write your codes
function solution(inputArray) {
    let count = 1;
    const newArray = [];

    inputArray.forEach(element => {
        newArray.push({name: element, order: count++})
    });

    return newArray;
}

exports.solution = solution;
