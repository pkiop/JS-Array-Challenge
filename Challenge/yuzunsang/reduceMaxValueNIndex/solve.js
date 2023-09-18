// write your codes
function solution(inputArray) {
    return result = inputArray.reduce((acc, cur, index) => {
        if (acc.maxValue < cur) {
            return { maxValue : cur, idx : index };
        }
        return acc;
    }
    , { maxValue: -Infinity, idx: -1 })};

exports.solution = solution;