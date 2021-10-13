// write your codes
function solution(inputArray) {
    let newObj = {};
    inputArray.forEach((obj) => newObj[obj["nickname"]] = obj["name"]);
    return newObj;
}

exports.solution = solution;
