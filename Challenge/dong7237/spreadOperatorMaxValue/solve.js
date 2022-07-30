// write your codes
function solution(inputArray) {
    return `max : ${Math.max(...inputArray)} min :${Math.min(...inputArray)}`
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(solution(input))
exports.solution = solution;
