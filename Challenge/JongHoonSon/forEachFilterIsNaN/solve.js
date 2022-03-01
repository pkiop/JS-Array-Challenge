// write your codes
function solution(inputArray) {
    const result = [];

    inputArray.forEach(el => {
        if(typeof(el) === 'number') {
            result.push(el);
        }
    })

    return result;
}

exports.solution = solution;
