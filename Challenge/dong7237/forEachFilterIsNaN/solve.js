// write your codes
function solution(inputArray) {
    const arr = []
    inputArray.forEach(element => {
        if (typeof (element) !== "string") {
            arr.push(element)
        }
    });
    return arr
}

const a = [1, 2, 3, '4', 5, '6']
console.log(solution(a))

exports.solution = solution;
