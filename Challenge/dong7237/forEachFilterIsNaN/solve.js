// write your codes
function solution(inputArray) {
    const arr = []
    inputArray.forEach(element => {
        if (typeof (element) !== 'string') {
            return arr.push(element)
        }
    });
    return arr
}

exports.solution = solution;
