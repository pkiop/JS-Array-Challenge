// write your codes
function solution(inputArray) {
    return inputArray.sort((a, b) => {
        return a.price - b.price
    })

}
exports.solution = solution;
