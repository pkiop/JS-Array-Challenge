// write your codes
function solution(inputArray) {
    return ans = inputArray.reduce((p, c) => {

        return { ...p, [c.nickname]: c.name }
    }, {})

}

exports.solution = solution;
