// write your codes
function solution(inputArray) {
    let obj = {};
    const maxNum = inputArray.reduce((acc, cur) => acc > cur ? acc : cur, inputArray[0]);
    obj["maxValue"] = maxNum
    obj["idx"] = inputArray.indexOf(maxNum);
    return obj;
}

exports.solution = solution;
