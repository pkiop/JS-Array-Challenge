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

exports.solution = solution;
