// write your codes
function solution(inputArray) {
    return inputArray.reduce((acc, cur) => {
        acc[cur.anme] = cur.nickname;
        return acc;
    }, {});
}

exports.solution = solution;
