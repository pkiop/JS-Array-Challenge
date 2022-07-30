// write your codes
function solution(inputArray) {
    let ans = inputArray.reduce((p, c) => p + c)
    return ans

}


const a = [10, 3, 20, 5, 8, 60]
console.log(solution(a))
exports.solution = solution;
