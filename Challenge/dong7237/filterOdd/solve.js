// write your codes
function solution(inputArray) {
    return inputArray.filter((element) => {element % 2 !== 0})
}
console.log(solution([4, 2, 5, 1, 3]))
exports.solution = solution;