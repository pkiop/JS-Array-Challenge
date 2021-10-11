// write your codes
function solution(inputArray) {
    const maxValue = inputArray.reduce((prev, curr) => prev > curr ? prev : curr);
    const newObj = {};
    newObj["maxValue"] = maxValue;
    newObj["idx"] = inputArray.indexOf(maxValue);
    return newObj;
}

exports.solution = solution;
