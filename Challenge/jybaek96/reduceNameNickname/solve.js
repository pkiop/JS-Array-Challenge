// write your codes
function solution(inputArray) {
    return inputArray.reduce((acc, cur) => {
        acc[cur.name] = cur.nickname;
        return acc;
    }, {});
}

exports.solution = solution;
