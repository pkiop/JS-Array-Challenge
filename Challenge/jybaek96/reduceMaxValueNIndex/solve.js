// write your codes
function solution(inputArray) {
    let obj = {};
    const max = inputArray.reduce((acc, cur) => acc > cur ? acc : cur);
    obj["maxValue"] = max;
    obj["idx"] = inputArray.indexOf(max);
    return obj;
}

exports.solution = solution;
