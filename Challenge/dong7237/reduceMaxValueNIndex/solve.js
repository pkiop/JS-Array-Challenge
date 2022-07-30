// write your codes
function solution(inputArray) {
    const ans = inputArray.reduce((p, a, i) => {
        if (p.maxValue < a) {
            return {
                maxValue: a,
                idx: i,
            }
        }
        return p
    }, { maxValue: 0, idx: -1 })
    return ans
}
const a = [3, 29, 138, 12, 57, 74, 40, 85, 61]
console.log(solution(a))
exports.solution = solution;
