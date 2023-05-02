// write your codes
function solution(inputArray) {
    const answer = inputArray.reduce((acc, cur, idx) => {
        if (acc?.maxValue < cur) {
            return {
                maxValue: cur,
                idx,
            }
        }
        return acc;
    }, { maxValue: -1e9, idx: -1 })
    return answer;
}

exports.solution = solution;
