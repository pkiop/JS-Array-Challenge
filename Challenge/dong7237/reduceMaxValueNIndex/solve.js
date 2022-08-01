// write your codes
function solution(inputArray) {
    const ans = inputArray.reduce((p, a, i) => {
        if (p.maxValue < a) {
            return {
                maxValue: a,
                idx: i
            }
        }
        return p
    }, { maxValue: -999999999999999999999, idx: -1 })
    return ans
}
const a = [2, -20, 21, -874, 99, -16, -29, 99]
console.log(solution(a))
exports.solution = solution;
