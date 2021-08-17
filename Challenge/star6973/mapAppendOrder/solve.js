// write your codes
function solution(inputArray) {
    return inputArray.map((item, idx) => {
        return {
            "name": item,
            "order": idx+1
        }
    })
}

exports.solution = solution;