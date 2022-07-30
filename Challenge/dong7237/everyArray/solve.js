function solution(inputArray) {
    return inputArray.every(a => a % 2 === 0)
}

const a = [2, 3, 6, 8, 10]
const b = [2, 4, 6, 8, 10]
console.log(solution(a), solution(b))
exports.solution = solution;
