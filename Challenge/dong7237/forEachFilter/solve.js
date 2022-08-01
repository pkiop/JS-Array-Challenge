// write your codes
function solution(inputArray) {
    arr = []
    inputArray.forEach(element => {
        if (element >= 40) {
            arr.push(element)
        }
    })
    return arr
}

exports.solution = solution;
