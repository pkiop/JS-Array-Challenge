// write your codes
function solution(inputArray) {
    const array = [];
    inputArray.forEach(el => {
        if (typeof el === 'number') {
            array.push(el);
        }
    })
    return array;
}

exports.solution = solution;
