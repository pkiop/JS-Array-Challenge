// write your codes
function solution(inputArray) {
    const answer = inputArray.reduce((prev, current) => {
        return {
            ...prev,
            [current.nickname]: current.name,
        }
    }, {});
    return answer;
}

exports.solution = solution;
